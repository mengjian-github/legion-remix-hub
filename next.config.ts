import type { NextConfig } from "next";

// Enable static export for Cloudflare Pages direct uploads.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
