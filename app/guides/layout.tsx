"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const guide = pathname === "/guides"
      ? "guides_index"
      : pathname.replace(/^\/guides\//, "").replace(/\/$/, "") || "guides_index";

    trackEvent("guide_view", { guide });
  }, [pathname]);

  return children;
}
