"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showStickyActions = pathname !== "/guides";

  useEffect(() => {
    const guide = pathname === "/guides"
      ? "guides_index"
      : pathname.replace(/^\/guides\//, "").replace(/\/$/, "") || "guides_index";

    trackEvent("guide_view", { guide });
  }, [pathname]);

  return (
    <>
      {children}
      {showStickyActions && (
        <aside className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl rounded-2xl border border-emerald-500/50 bg-gray-950/95 p-3 shadow-2xl shadow-emerald-950/40 backdrop-blur md:bottom-5 md:p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Plan the next step</p>
              <p className="mt-1 text-sm text-gray-200">
                Turn this guide into a Bronze budget or reward checklist before you leave the page.
              </p>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-2">
              <Link
                href="/calculator"
                data-track-event="guide_sticky_cta_click"
                data-track-prop-destination="/calculator"
                data-track-prop-source-guide={pathname}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-black text-gray-950 transition hover:bg-amber-400"
              >
                Bronze Calculator
              </Link>
              <Link
                href="/rewards"
                data-track-event="guide_sticky_cta_click"
                data-track-prop-destination="/rewards"
                data-track-prop-source-guide={pathname}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-emerald-500/70 px-4 py-2 text-sm font-black text-emerald-100 transition hover:bg-emerald-500/10"
              >
                Rewards Tracker
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
