declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, properties?: Record<string, string | number>) {
  const enrichedProperties = {
    ...getStoredAttribution(),
    ...properties,
  };

  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props: enrichedProperties });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, enrichedProperties);
  }

  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("event", eventName);
    Object.entries(enrichedProperties).forEach(([key, value]) => {
      window.clarity?.("set", key, String(value));
    });
  }
}

function getStoredAttribution(): Record<string, string | number> {
  if (typeof window === "undefined") return {};

  const storageKey = "lrh_first_touch_v1";
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;

  try {
    const existing = window.localStorage.getItem(storageKey);
    if (existing) {
      const parsed = JSON.parse(existing) as Record<string, string | number>;
      return {
        ...parsed,
        current_path: currentUrl.pathname,
      };
    }

    const referrer = document.referrer || "direct";
    const sourceType = params.get("utm_source")
      ? "utm"
      : referrer === "direct"
        ? "direct"
        : referrer.includes(window.location.hostname)
          ? "internal"
          : "referral";
    const attribution = {
      anonymous_id: createAnonymousId(),
      first_path: currentUrl.pathname,
      first_referrer: referrer.slice(0, 180),
      source_type: sourceType,
      utm_source: params.get("utm_source")?.slice(0, 80) ?? "",
      utm_medium: params.get("utm_medium")?.slice(0, 80) ?? "",
      utm_campaign: params.get("utm_campaign")?.slice(0, 80) ?? "",
      current_path: currentUrl.pathname,
    };
    window.localStorage.setItem(storageKey, JSON.stringify(attribution));
    return attribution;
  } catch {
    return {
      current_path: currentUrl.pathname,
    };
  }
}

function createAnonymousId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `lrh_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}
