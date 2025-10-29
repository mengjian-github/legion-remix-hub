'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  rewardCategories,
  rewardEntries,
  bronzeEntries,
  totalBronzeCost,
  rewardSpotlights,
  rewardTypes
} from '@/data/rewards';
import type { RewardCategoryKey } from '@/data/rewards';
import { legionImages } from '@/data/images';

const bronzeItemCount = bronzeEntries.length;
const catalogItemCount = rewardEntries.length;
const averageBronze = Math.round(totalBronzeCost / Math.max(1, bronzeItemCount));

const quickLinks = [
  { label: 'Overview', href: '#overview', icon: '🧭' },
  { label: 'Search', href: '#search', icon: '🔍' },
  { label: 'Highlights', href: '#spotlights', icon: '✨' },
  { label: 'Kaldorei Vestments', href: '/guides/kaldorei-royal-vestments#requirements', icon: '👑' },
  ...rewardCategories.map(section => ({
    label: section.title,
    href: `/rewards/${section.key}`,
    icon: '📚'
  }))
];

interface CategoryStats {
  allCount: number;
  bronzeCount: number;
  bronzeTotal: number;
}

const categoryStats: Record<RewardCategoryKey, CategoryStats> = rewardCategories.reduce((acc, section) => {
  const all = rewardEntries.filter(entry => entry.category === section.key);
  const bronze = bronzeEntries.filter(entry => entry.category === section.key);
  const bronzeTotal = bronze.reduce((sum, entry) => sum + (entry.cost?.amount ?? 0), 0);
  acc[section.key] = {
    allCount: all.length,
    bronzeCount: bronze.length,
    bronzeTotal
  };
  return acc;
}, {} as Record<RewardCategoryKey, CategoryStats>);

function formatNumber(value: number) {
  return value.toLocaleString('en-US');
}

export default function RewardsPage() {
  // CSR-only search + catalog to keep SSR HTML lean; improves SEO control
  const RewardTrackerCatalog = useMemo(() => dynamic(() => import('@/components/rewards/RewardTrackerCatalog'), { ssr: false }), []);

  return (
    <div className="min-h-screen bg-gray-950 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <header id="overview" className="sticky top-0 z-20 mb-10 bg-gray-950/90 backdrop-blur border-b border-gray-800 -mx-4 px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-emerald-300 uppercase tracking-widest">Legion Remix • October 7, 2025 → January 19, 2026</p>
              <h1 className="text-3xl font-bold text-white mt-2">Legion Remix Reward Tracker</h1>
              <p className="text-sm text-gray-300 mt-2 max-w-2xl">
                Use this page as your Legion Remix reward tracker and Legion Remix bronze tracker in one place. Pair the reward tracker
                with the Legion Remix bronze calculator to forecast every mount, toy, pet, and housing purchase before you farm.
              </p>
              <p className="text-sm text-gray-300 mt-2 max-w-2xl">
                Need a concise Legion Remix reward tracker or a printable Legion Remix rewards list? Toggle the filters below, export your matched results, and share them with guildmates before the next housing decor rotation hits Infinite Echoes.
              </p>
            </div>
            <Link
              href="#search"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-500/20"
            >
              🔍 Quick search
            </Link>
          </div>
        </header>

        <section className="mb-10 grid gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Total Bronze budget</p>
            <p className="text-4xl font-semibold text-emerald-300 mt-2">{formatNumber(totalBronzeCost)}</p>
            <p className="text-sm text-gray-400 mt-2">Covers mounts, transmogs, toys, housing, and reputation rewards.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Bronze items count</p>
            <p className="text-3xl font-semibold text-white mt-2">{formatNumber(bronzeItemCount)}</p>
            <p className="text-sm text-gray-400 mt-2">Number of items directly purchasable with Bronze.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Average Bronze cost</p>
            <p className="text-3xl font-semibold text-white mt-2">{formatNumber(averageBronze)}</p>
            <p className="text-sm text-gray-400 mt-2">Average Bronze cost per item.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Total entries</p>
            <p className="text-3xl font-semibold text-white mt-2">{formatNumber(catalogItemCount)}</p>
            <p className="text-sm text-gray-400 mt-2">Includes achievements, reputation unlocks, and account-wide rewards.</p>
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-purple-600/30 bg-purple-600/10 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Phase 2 Bronze Additions (October 21, 2025)</h2>
          <p className="text-sm text-gray-200 mb-3">
            Rise of the Nightfallen unlocked new Suramar rewards. Budget Bronze now so you can scoop them up without delaying Violet Spellwing or Argus cosmetics later in the season.
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-gray-200">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Mounts – 10,000 Bronze each</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Arcberry Manasaber</li>
                <li>Bonesteed of Oblivion / Plague / Bloodshed / Triumph</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Toys & Trinkets</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Big Red Raygun — 35,000 Bronze</li>
                <li>Crate of Bobbers (Can of Worms, Cat Head, Tugboat, Wooden Pepe) — 10,000 Bronze each</li>
                <li>Golden Hearthstone Card: Lord Jaraxxus — 100,000 Bronze</li>
                <li>Skull of Corruption — 100,000 Bronze</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Heads-up: each purchase counts toward Infinite Knowledge overflow once you finish the Suramar achievement roadmap in the{' '}
            <Link href="/guides/kaldorei-royal-vestments#requirements" className="text-green-300 hover:text-green-200">
              Kaldorei Queen’s Vestments guide
            </Link>
            .
          </p>
        </section>

        <section className="mb-12 rounded-3xl border border-emerald-600/30 bg-emerald-600/10 p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">How to Use This Legion Remix Rewards Tracker</h2>
          <p className="text-sm text-gray-200 mb-3">
            This grid doubles as a Legion Remix rewards tracker and Legion Remix bronze tracker. Start each reset by
            filtering to Bronze-only entries, then mark everything you have already purchased. The totals above show you
            how far your Legion Remix bronze calculator plans need to stretch—update them every time a new Infinite Echoes
            vendor rotates pools into the Bazaar.
          </p>
          <p className="text-sm text-gray-200 mb-3">
            Work category by category. Mount hunters should drill into the mount tables, swap over to toys, then finish
            with ensembles to avoid missing time-limited cosmetics. Housing enthusiasts can narrow to decor and screenshot
            the results as a shared Legion Remix rewards tracker for their guild. When you are chasing achievements like
            Violet Spellwing or the Sargerei ensemble, tag them inside your Legion Remix bronze tracker notes so they stay
            front-of-mind during Turbo Boost windows.
          </p>
          <p className="text-sm text-gray-200">
            Finally, align this dashboard with the Legion Remix bronze calculator. Paste the Bronze totals from your current
            filter set into the calculator, add the estimated hours from your best farming method, and publish the results
            to your raid or community Discord. Consistency keeps everyone on the same rewards cadence through January 19.
          </p>
        </section>

        {/* Legion Remix Reward Tracker FAQ: each Q uses the exact phrase once for clarity without stuffing */}
        <section className="mb-12 rounded-3xl border border-emerald-700/40 bg-emerald-700/10 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Reward Tracker FAQ</h2>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <h3 className="text-lg font-semibold text-white">What is the Legion Remix reward tracker?</h3>
              <p>A compact dashboard that lists rewards, prices, and totals so you can plan purchases at a glance.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">How do I use the rewards tracker each reset?</h3>
              <p>Filter to Bronze items, mark owned rewards, and copy the remaining total into the calculator.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Can the Legion Remix reward tracker handle multiple characters?</h3>
              <p>Yes—duplicate presets per character to track class mounts and ensembles independently.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Where does the rewards tracker get data?</h3>
              <p>From the same reference tables that power category pages and the Bronze calculator.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Does the Legion Remix reward tracker estimate time?</h3>
              <p>It pairs totals with Bronze-per-hour methods listed in the calculator sidebar.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Is the rewards tracker better than a sheet?</h3>
              <p>It removes manual math and stays synced with vendor hotfixes.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Can I share my Legion Remix reward tracker with friends?</h3>
              <p>Yes—screenshot your filters and matched list or export notes to your guild doc.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Will the rewards tracker include housing decor?</h3>
              <p>All categories are supported—use filters or jump to a specific category index below.</p>
            </li>
          </ul>
        </section>

        {/* Short starter templates that naturally reference the key phrase */}
        <section className="mb-12 rounded-3xl border border-emerald-700/20 bg-gray-900/60 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Starter Templates</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Build a week-one plan in the Legion Remix reward tracker that budgets for Violet Spellwing.</li>
            <li>Clone an alt-only list in the Legion Remix reward tracker for class mounts and pets.</li>
            <li>Track Suramar unlocks with a separate rewards tracker to avoid double spending.</li>
            <li>Compare a cosmetics-first versus upgrades-first path using two tabs of the rewards tracker.</li>
            <li>Archive each reset’s screenshot from the rewards tracker to measure progress.</li>
          </ul>
        </section>

        <nav className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map(link => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/40 px-4 py-3 text-gray-200 transition hover:border-emerald-500 hover:text-emerald-200"
            >
              <span className="text-xl" aria-hidden>{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>

        <RewardTrackerCatalog />

        {/* Original category index follows */}

        <section id="categories" className="mb-16 rounded-3xl border border-gray-800 bg-gray-900/40 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Search the reward catalog</h2>
              <p className="text-sm text-gray-300 mt-1">Filter by type and Bronze availability to narrow your wishlist.</p>
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={bronzeOnly}
                onChange={event => setBronzeOnly(event.target.checked)}
                className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-emerald-500 focus:ring-emerald-400"
              />
              Show Bronze-purchasable items only
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <input
              type="search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Search reward name, source, achievement, or faction..."
              className="flex-1 rounded-xl border border-gray-800 bg-gray-950/70 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500/40"
            />
            <div className="flex flex-wrap gap-2">
              {typeFilterOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTypeFilter(option)}
                  className={[
                    'rounded-lg border px-4 py-2 text-sm transition-colors',
                    typeFilter === option
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                      : 'border-gray-700 bg-gray-900/60 text-gray-300 hover:border-emerald-400'
                  ].join(' ')}
                >
                  {option === 'all' ? 'All types' : option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-800 bg-gray-950/70">
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-900 px-5 py-4">
              <div>
                <p className="text-sm text-gray-300">
                  Showing <strong className="text-emerald-300">{displayedEntries.length}</strong> of{' '}
                  <strong className="text-emerald-300">{filteredEntries.length}</strong> matches
                  {bronzeOnly && ' (Bronze items)'}
                </p>
                {matchedBronzeTotal > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    Bronze required for listed results: {formatNumber(matchedBronzeTotal)}
                  </p>
                )}
              </div>
              {truncated && (
                <span className="text-xs text-amber-300">
                  Showing first {maxResults} results. Refine filters for more exact matches.
                </span>
              )}
            </header>
            <div className="divide-y divide-gray-900">
              {displayedEntries.map(entry => (
                <div key={entry.id} className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2">
                      {entry.sectionTitle}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                    <EntryMeta entry={entry} />
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1 text-gray-300">
                        {entry.type}
                      </span>
                      <span className="rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1 text-gray-300">
                        {entry.tableLabel}
                      </span>
                      {entry.phase && (
                        <span className="rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1 text-gray-300">
                          Phase {entry.phase}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 min-w-[200px]">
                    <div className="text-right">
                      {entry.cost ? (
                        <>
                          <p className="text-2xl font-semibold text-emerald-300">
                            {entry.cost.currency.toLowerCase().startsWith('bronze')
                              ? `${formatNumber(entry.cost.amount ?? 0)} Bronze`
                              : entry.cost.display}
                          </p>
                          {!entry.cost.currency.toLowerCase().startsWith('bronze') && (
                            <p className="text-xs text-gray-400 mt-1">Currency: {entry.cost.currency}</p>
                          )}
                        </>
                      ) : (
                        <p className="text-sm text-gray-400 italic">Achievement / unlock reward</p>
                      )}
                    </div>
                    <Link
                      href={`/rewards/${entry.category}#${entry.tableKey}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 px-4 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/10"
                    >
                      View category ↗
                    </Link>
                  </div>
                </div>
              ))}
              {displayedEntries.length === 0 && (
                <div className="px-5 py-6 text-center text-gray-400">
                  No rewards match the current filters. Adjust the search or disable the Bronze-only filter.
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="categories" className="mb-16">
          <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Reward category index</h2>
              <p className="text-sm text-gray-300 mt-2">Each category page includes full tables, top Bronze sinks, and curated tips.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {rewardCategories.map(section => (
              <Link
                key={section.key}
                href={`/rewards/${section.key}`}
                className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/40 transition hover:border-emerald-500"
              >
                <img
                  src={section.image ?? legionImages.referenceSplash}
                  alt={`${section.title} preview`}
                  className="h-48 w-full object-cover opacity-80 transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">{section.subtitle}</p>
                  <h3 className="text-2xl font-semibold text-white mt-2">{section.title}</h3>
                  <div className="mt-3 flex gap-4 text-xs text-gray-300">
                    <span>{formatNumber(categoryStats[section.key].allCount)} records</span>
                    <span>{formatNumber(categoryStats[section.key].bronzeCount)}  Bronze items</span>
                    <span>{formatNumber(categoryStats[section.key].bronzeTotal)}  Bronze total</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="spotlights" className="mb-12">
          <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured spotlights</h2>
              <p className="text-sm text-gray-300 mt-2">Prioritize major achievements, account unlocks, and high-impact cosmetics.</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {rewardSpotlights.map(spotlight => (
              <div
                key={spotlight.id}
                className="bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden"
              >
                <div className="relative h-52">
                  <img src={spotlight.image} alt={spotlight.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs uppercase tracking-widest text-emerald-300">Spotlight</p>
                    <h3 className="text-2xl font-semibold text-white">{spotlight.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{spotlight.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {spotlight.highlights.map(highlight => (
                    <div key={highlight.name} className="bg-gray-900/60 border border-gray-800 rounded-lg p-4">
                      <p className="text-emerald-300 font-medium">{highlight.name}</p>
                      <p className="text-sm text-gray-300 mt-1">{highlight.requirement}</p>
                      {highlight.note && <p className="text-xs text-amber-300 mt-2">{highlight.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
