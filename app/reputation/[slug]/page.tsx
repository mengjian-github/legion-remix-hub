import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reputationFactions } from '@/data/reputations';
import { buildCanonicalUrl } from '@/lib/seo';

type PageProps = {
  params: {
    slug: string;
  };
};

function getFaction(slug: string) {
  return reputationFactions.find(faction => faction.slug === slug);
}

export function generateStaticParams() {
  return reputationFactions.map(faction => ({ slug: faction.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const faction = getFaction(params.slug);
  if (!faction) {
    return {};
  }

  return {
    title: `${faction.name} Reputation Guide - Legion Remix Broken Isles`,
    description: `${faction.name} reputation route for Legion Remix. Emissary location, Champion's Insignia sources, vendor highlights, paragon rewards, and emissary quest loot.`,
    alternates: {
      canonical: buildCanonicalUrl(`/reputation/${faction.slug}`)
    }
  };
}

export default function ReputationFactionPage({ params }: PageProps) {
  const faction = getFaction(params.slug);
  if (!faction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 text-gray-100">
        <header className="space-y-4">
          <Link
            href="/reputation"
            className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
          >
            ← Back to reputation hub
          </Link>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-300">{faction.zone}</p>
              <h1 className="mt-1 text-4xl font-bold text-white">{faction.name} Reputation Guide</h1>
              <p className="mt-3 max-w-2xl text-sm text-gray-300">{faction.summary}</p>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 text-sm text-gray-300">
              <p className="text-xs uppercase tracking-wide text-emerald-200">Event Window</p>
              <p className="mt-2 font-semibold text-white">October 7, 2025 - January 19, 2026</p>
              <p className="mt-2">
                Finish your paragon runs before the Infinite Echoes finale in week 15 to redeem every cache.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <div className={`rounded-2xl border border-gray-800 bg-gradient-to-br ${faction.color} p-6`}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">Emissary Location</h2>
                  <p className="text-sm text-gray-300 mt-2">
                    <span className="font-medium text-gray-100">{faction.emissary.name}</span> — {faction.emissary.location}
                    {faction.emissary.coordinates ? (
                      <span className="text-gray-400"> ({faction.emissary.coordinates})</span>
                    ) : null}
                  </p>
                  {faction.emissary.tip ? <p className="mt-3 text-xs text-gray-200">{faction.emissary.tip}</p> : null}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">How to Earn Reputation</h2>
              <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                {faction.howToEarn.map(step => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                {faction.insignia.name}
              </h2>
              <p className="mt-2 text-sm text-gray-300">{faction.insignia.note}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                {faction.insignia.sources.map(source => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            </div>

            {faction.vendorHighlights.length > 0 ? (
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Vendor Highlights</h2>
                <ul className="space-y-4">
                  {faction.vendorHighlights.map(highlight => (
                    <li key={highlight.name} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                      <p className="text-sm font-semibold text-white">{highlight.name}</p>
                      <p className="mt-1 text-sm text-gray-300">{highlight.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {faction.paragonRewards?.length ? (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Paragon Rewards</h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {faction.paragonRewards.map(reward => (
                    <li key={reward.name}>
                      <span className="font-medium text-gray-100">{reward.name}</span> - {reward.description}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">Emissary Quest Rewards</h2>
              <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                {faction.questRewards.map(reward => (
                  <li key={reward}>{reward}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800">
              <img src={faction.image} alt={`${faction.name} emissary`} className="h-60 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Checklist</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Complete the daily emissary for a Lesser Bronze Cache and Insignia.</li>
                <li>✅ Spend Champion&apos;s Insignias immediately to avoid losing capped reputation.</li>
                <li>✅ Track paragon bars in your Bronze calculator before cache turn-ins.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5 space-y-3">
              <p className="text-xs uppercase tracking-wide text-gray-400">More Tools</p>
              <Link
                href="/rewards#category-reputation"
                className="block rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-300 hover:border-emerald-500 hover:text-emerald-200 transition-colors"
              >
                View full reward tables
              </Link>
              <Link
                href="/calculator"
                className="block rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-300 hover:border-emerald-500 hover:text-emerald-200 transition-colors"
              >
                Add to Bronze calculator
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
