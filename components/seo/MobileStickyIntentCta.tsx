"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const hiddenPaths = new Set(["/privacy", "/terms"]);

function getIntent(pathname: string) {
  if (pathname === "/calculator") {
    return {
      page: "calculator_mobile_sticky",
      label: "Keep planning",
      primary: {
        label: "Reward priorities",
        href: "/rewards?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro#bronze-budgeting",
        action: "rewards_priorities",
      },
      secondary: {
        label: "Class mounts",
        href: "/guides/class-mounts?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro#answer-table",
        action: "class_mounts",
      },
    };
  }

  if (pathname === "/rewards" || pathname.startsWith("/rewards/")) {
    return {
      page: "rewards_mobile_sticky",
      label: "Turn browsing into a budget",
      primary: {
        label: "Open calculator",
        href: "/calculator?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro&preset=mounts-first-10",
        action: "calculator_preset",
      },
      secondary: {
        label: "Class mounts",
        href: "/guides/class-mounts?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro#answer-table",
        action: "class_mounts",
      },
    };
  }

  if (pathname === "/guides/class-mounts") {
    return {
      page: "class_mounts_mobile_sticky",
      label: "Budget the 20,000 Bronze sprint",
      primary: {
        label: "Use preset",
        href: "/calculator?utm_source=class_mounts&utm_medium=mobile_sticky&utm_campaign=legionremixhub_cro&preset=class-mount-sprint",
        action: "calculator_class_mount_preset",
      },
      secondary: {
        label: "Rewards",
        href: "/rewards?utm_source=class_mounts&utm_medium=mobile_sticky&utm_campaign=legionremixhub_cro#bronze-budgeting",
        action: "rewards_budgeting",
      },
    };
  }

  if (pathname === "/guides/ancient-mana") {
    return {
      page: "ancient_mana_mobile_sticky",
      label: "Continue the Suramar plan",
      primary: {
        label: "Estimate farm",
        href: "/calculator?utm_source=ancient_mana&utm_medium=mobile_sticky&utm_campaign=legionremixhub_cro",
        action: "calculator_farm_time",
      },
      secondary: {
        label: "Suramar route",
        href: "/guides/suramar-campaign?utm_source=ancient_mana&utm_medium=mobile_sticky&utm_campaign=legionremixhub_cro",
        action: "suramar_campaign",
      },
    };
  }

  return {
    page: "global_mobile_sticky",
    label: "Plan your next Legion Remix step",
    primary: {
      label: "Bronze calculator",
      href: "/calculator?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro",
      action: "bronze_calculator",
    },
    secondary: {
      label: "Rewards tracker",
      href: "/rewards?utm_source=mobile_sticky&utm_medium=internal_cta&utm_campaign=legionremixhub_cro",
      action: "rewards_tracker",
    },
  };
}

export default function MobileStickyIntentCta() {
  const pathname = usePathname() || "/";
  const intent = useMemo(() => getIntent(pathname), [pathname]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hiddenPaths.has(pathname)) return;

    let unlockedByTimer = false;
    const timer = window.setTimeout(() => {
      unlockedByTimer = true;
      setVisible(true);
    }, 8000);

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = window.scrollY / scrollable;
      if (depth >= 0.18 || unlockedByTimer) setVisible(true);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (hiddenPaths.has(pathname) || !visible) return null;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-emerald-400/40 bg-gray-950/95 p-3 shadow-2xl shadow-black/60 backdrop-blur md:hidden" aria-label="Recommended next step">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">{intent.label}</p>
      <div className="grid grid-cols-2 gap-2">
        {[intent.primary, intent.secondary].map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            data-track-event="mobile_sticky_cta_click"
            data-track-prop-page={intent.page}
            data-track-prop-action={link.action}
            data-track-prop-destination={link.href}
            data-track-prop-position={index + 1}
            className={index === 0
              ? "min-h-11 rounded-xl bg-emerald-400 px-3 py-2 text-center text-sm font-black text-gray-950"
              : "min-h-11 rounded-xl border border-gray-700 px-3 py-2 text-center text-sm font-bold text-gray-100"}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
