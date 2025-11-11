import type { Metadata } from "next";

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

const DEFAULT_OG_IMAGE_URL = "/images/og-image.png";

const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: "Legion Remix Guide - Complete Hub",
};

export const buildOpenGraphMetadata = (
  path: string,
  title: string,
  description: string,
  type: "article" | "website" = "website",
) => ({
  type,
  url: buildCanonicalUrl(path),
  title,
  description,
  siteName: "Legion Remix Hub",
  images: [DEFAULT_OG_IMAGE],
});

export const buildTwitterMetadata = (
  title: string,
  description: string,
): {
  card: "summary_large_image";
  title: string;
  description: string;
  images: string[];
} => ({
  card: "summary_large_image",
  title,
  description,
  images: [DEFAULT_OG_IMAGE_URL],
});

type PageMetadataConfig = {
  path: string;
  title: string;
  description: string;
  type?: "article" | "website";
};

export const buildPageMetadata = ({
  path,
  title,
  description,
  type = "article",
}: PageMetadataConfig): Metadata => ({
  title,
  description,
  alternates: {
    canonical: buildCanonicalUrl(path),
  },
  openGraph: buildOpenGraphMetadata(path, title, description, type),
  twitter: buildTwitterMetadata(title, description),
});

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

export const formatMetaTitle = (
  input: string,
  min: number = 40,
  max: number = 60,
  fallback: string = "Legion Remix Hub 2025 Timerunner Strategy",
): string => {
  const normalize = (value: string) => value.replace(/\s+/g, " ").trim();
  let candidate = normalize(input);

  if (!candidate) {
    candidate = fallback;
  }

  if (candidate.length > max) {
    const words = candidate.split(" ");
    while (candidate.length > max && words.length > 1) {
      words.pop();
      candidate = words.join(" ");
    }

    if (candidate.length > max) {
      candidate = candidate.slice(0, max).trimEnd();
    }
  }

  if (candidate.length < min) {
    const additions = [
      "Legion Remix Hub",
      "Timerunner Strategy",
      "2025 Event Plan",
    ];

    for (const addition of additions) {
      const test = candidate.length > 0
        ? `${candidate} | ${addition}`
        : addition;

      if (test.length <= max) {
        candidate = test;
      }

      if (candidate.length >= min) {
        break;
      }
    }

    if (candidate.length < min) {
      candidate = fallback;
    }

    if (candidate.length > max) {
      candidate = candidate.slice(0, max).trimEnd();
    }
  }

  if (candidate.length < min) {
    const extended = `${candidate} | Legion Remix Hub`;
    candidate = extended.length <= max ? extended : candidate;
    if (candidate.length < min) {
      candidate = fallback.length <= max ? fallback : fallback.slice(0, max);
    }
  }

  return normalize(candidate);
};
