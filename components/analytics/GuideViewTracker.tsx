"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function GuideViewTracker({ guide }: { guide: string }) {
  useEffect(() => {
    trackEvent("guide_view", { guide });
  }, [guide]);

  return null;
}
