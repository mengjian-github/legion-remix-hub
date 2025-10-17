const SITE_URL = "https://legionremixhub.com";

const sanitizedSiteUrl = SITE_URL.replace(/\/+$/, "");

const isAbsoluteUrl = (path: string) => /^https?:\/\//i.test(path);

export const buildCanonicalUrl = (path: string = "/"): string => {
  if (isAbsoluteUrl(path)) {
    return path;
  }

  if (!path || path === "/") {
    return `${sanitizedSiteUrl}/`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${sanitizedSiteUrl}${normalizedPath}`;
};

export const siteUrl = `${sanitizedSiteUrl}/`;

export const formatMetaDescription = (
  input: string,
  min: number = 140,
  max: number = 160,
): string => {
  const normalized = input.replace(/\s+/g, " ").trim();
  if (!normalized) {
    return normalized;
  }

  const clampWithTrailingPeriod = (text: string) => {
    let trimmed = text.replace(/\s+/g, " ").trim();
    if (!/[.!?]$/.test(trimmed)) {
      trimmed = `${trimmed}.`;
    }
    return trimmed;
  };

  let candidate = normalized;

  if (candidate.length > max) {
    candidate = candidate.slice(0, max);
    const lastSpace = candidate.lastIndexOf(" ");
    if (lastSpace >= min - 1) {
      candidate = candidate.slice(0, lastSpace);
    }
    candidate = clampWithTrailingPeriod(candidate);
    if (candidate.length > max) {
      candidate = candidate.slice(0, max).trimEnd();
      candidate = clampWithTrailingPeriod(candidate);
      if (candidate.length > max) {
        candidate = candidate.slice(0, max - 1).trimEnd();
        candidate = clampWithTrailingPeriod(candidate);
      }
    }
  }

  if (candidate.length < min) {
    const paddingPhrases = [
      " Learn more inside the Legion Remix 2025 guide.",
      " Discover weekly prep tips for Timerunners.",
      " Keep your Timerunner on pace throughout the event.",
    ];

    for (const phrase of paddingPhrases) {
      if (candidate.length >= min) {
        break;
      }
      if (candidate.length + phrase.length <= max) {
        candidate += phrase;
      }
    }

    if (candidate.length < min) {
      candidate = clampWithTrailingPeriod(candidate);
      while (candidate.length < min) {
        const remaining = Math.min(min - candidate.length, 3);
        candidate += ".".repeat(remaining);
      }
      if (candidate.length > max) {
        candidate = candidate.slice(0, max);
      }
    }
  }

  if (candidate.length > max) {
    candidate = candidate.slice(0, max).trimEnd();
    candidate = clampWithTrailingPeriod(candidate);
    if (candidate.length > max) {
      candidate = candidate.slice(0, max);
    }
  }

  return candidate;
};
