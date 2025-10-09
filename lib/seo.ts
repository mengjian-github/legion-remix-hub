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
