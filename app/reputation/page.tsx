import type { Metadata } from 'next';
import Link from 'next/link';
import { reputationFactions } from '@/data/reputations';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Reputation Hub - Broken Isles Faction Planner',
  description:
    "Overview of Legion Remix reputation routes for the Broken Isles. Compare emissary locations, Champion's Insignia sources, vendor highlights, and paragon rewards across Court of Farondis, Dreamweavers, Highmountain Tribe, Nightfallen, Wardens, Valarjar, and the Kirin Tor.",
  alternates: {
    canonical: buildCanonicalUrl('/reputation')
  }
};

export default function ReputationOverviewPage() {
  const factionsWithVendors = reputationFactions.filter(faction => faction.hasVendor).length;
  const paragonRewardCount = reputationFactions.reduce(
    (total, faction) => total + (faction.paragonRewards?.length ?? 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto text-gray-100">
        <header className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Broken Isles Reputation
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Legion Remix Reputation Planner (October 7, 2025 - January 19, 2026)
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Unlock world quests, vendor stock, and paragon caches quickly during Legion Remix. Browse every Broken Isles
            faction below, then dive into dedicated pages for exact emissary positions, Champion&apos;s Insignia routing,
            vendor checklists, and paragon rewards.
          </p>
        </header>

        <section className="mb-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <p className="text-xs uppercase tracking-wide text-emerald-200">Friendly Requirement</p>
            <p className="mt-2 text-2xl font-semibold text-white">5 Core Factions</p>
            <p className="mt-2 text-sm text-gray-300">
              Court of Farondis, Dreamweavers, Highmountain Tribe, Nightfallen, and Wardens unlock 200 Bronze world quests
              once you reach Friendly for “Uniting the Isles”.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <p className="text-xs uppercase tracking-wide text-emerald-200">Vendors Stocked</p>
            <p className="mt-2 text-2xl font-semibold text-white">{factionsWithVendors} Factions</p>
            <p className="mt-2 text-sm text-gray-300">
              Bronze, toys, pets, and tabards line nine emissary shops. Each quick reference card links to its dedicated
              vendor page.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <p className="text-xs uppercase tracking-wide text-emerald-200">Paragon Rewards</p>
            <p className="mt-2 text-2xl font-semibold text-white">{paragonRewardCount} Collectibles</p>
            <p className="mt-2 text-sm text-gray-300">
              Mounts, toys, and cosmetics sourced from paragon caches are listed for every faction. Plan which bars to fill
              first before Infinite Echoes ends.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">Quick Shortcuts</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {reputationFactions.map(faction => (
              <Link
                key={faction.slug}
                href={`/reputation/${faction.slug}`}
                className="rounded-lg border border-gray-800 bg-gray-900/40 px-4 py-2 text-gray-200 transition-colors hover:border-emerald-500 hover:text-emerald-200"
              >
                {faction.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          {reputationFactions.map(faction => (
            <article
              key={faction.slug}
              className="grid gap-6 rounded-3xl border border-gray-800 bg-gray-900/50 p-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-emerald-300">
                  <span>{faction.zone}</span>
                </div>
                <h3 className="text-3xl font-bold text-white">{faction.name}</h3>
                <p className="text-sm text-gray-300">{faction.summary}</p>

                <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">Emissary</p>
                  <p className="mt-2 text-lg font-semibold text-white">{faction.emissary.name}</p>
                  <p className="text-sm text-gray-300">
                    {faction.emissary.location}
                    {faction.emissary.coordinates ? (
                      <span className="text-gray-500"> ({faction.emissary.coordinates})</span>
                    ) : null}
                  </p>
                  {faction.emissary.tip && <p className="mt-2 text-xs text-gray-400">{faction.emissary.tip}</p>}
                </div>

                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {faction.howToEarn.slice(0, 2).map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/reputation/${faction.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/20"
                  >
                    View detailed plan
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href={`/rewards#category-reputation`}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900/60 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-emerald-500 hover:text-emerald-200"
                  >
                    Check vendor tables
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-gray-800">
                  <img
                    src={faction.image}
                    alt={`${faction.name} emissary`}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                  <p className="text-xs uppercase tracking-wide text-emerald-200">
                    {faction.insignia.name}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-gray-300">
                    {faction.insignia.sources.slice(0, 3).map(source => (
                      <li key={source}>{source}</li>
                    ))}
                    {faction.insignia.sources.length > 3 && <li>…and more sources in the detailed page.</li>}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

