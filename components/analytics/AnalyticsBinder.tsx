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
      Object.assign(props, readCampaignProps(destination));
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

  useEffect(() => {
    const milestones = [15, 45, 90];
    const timers = milestones.map((seconds) => window.setTimeout(() => {
      trackEvent("time_on_page", {
        page: window.location.pathname,
        seconds,
      });
    }, seconds * 1000));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return null;
}

function readCampaignProps(destination: string) {
  const campaignProps: Record<string, string> = {};
  if (!destination.includes("?")) return campaignProps;

  try {
    const url = new URL(destination, window.location.origin);
    ["utm_source", "utm_medium", "utm_campaign", "preset"].forEach((key) => {
      const value = url.searchParams.get(key);
      if (value) campaignProps[key] = value;
    });
  } catch {
    // Ignore malformed internal fragments; click tracking should never block navigation.
  }

  return campaignProps;
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
