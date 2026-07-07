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

      const task = typeof props.task === "string" ? props.task : "";
      const href = el instanceof HTMLAnchorElement ? el.getAttribute("href") ?? "" : "";
      const destination = typeof props.destination === "string" && props.destination.length > 0 ? props.destination : href;
      const inferredTool = inferToolFromClick(eventName, task, destination);
      if (inferredTool) {
        trackEvent("tool_start", {
          ...props,
          tool: inferredTool,
          action: "entry_click",
          source_event: eventName,
        });
      }

      trackEvent(eventName, props);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const fired = new Set<number>();
    const milestones = [25, 50, 75, 90];

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.round((window.scrollY / scrollable) * 100);
      const nextMilestone = milestones.find((milestone) => depth >= milestone && !fired.has(milestone));
      if (!nextMilestone) return;

      fired.add(nextMilestone);
      trackEvent("page_scroll_depth", {
        depth_percent: nextMilestone,
        page: window.location.pathname,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

function inferToolFromClick(eventName: string, task: string, destination: string) {
  const normalizedDestination = destination.split("?")[0].split("#")[0];
  if (eventName === "calculator_cta_click" || task === "bronze_calculator" || normalizedDestination === "/calculator") {
    return "bronze_calculator";
  }

  if (task === "rewards_tracker" || normalizedDestination === "/rewards" || normalizedDestination.startsWith("/rewards/")) {
    return "reward_tracker";
  }

  return null;
}
