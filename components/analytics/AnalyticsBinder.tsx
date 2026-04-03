"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsBinder() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-track-event]");
      if (!el) return;

      const eventName = el.dataset.trackEvent;
      if (!eventName) return;

      const props: Record<string, string | number> = {};
      for (const [key, value] of Object.entries(el.dataset)) {
        if (!key.startsWith("trackProp") || value == null) continue;
        const propKey = key.replace(/^trackProp/, "");
        const normalizedKey = propKey.charAt(0).toLowerCase() + propKey.slice(1);
        props[normalizedKey] = /^\d+$/.test(value) ? Number(value) : value;
      }

      trackEvent(eventName, props);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
