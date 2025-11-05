import type { NextConfig } from "next";

// Enable modern image formats so Next.js serves smaller AVIF/WebP when supported.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
