'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  rewardCategories,
  rewardEntries,
  bronzeEntries,
  totalBronzeCost,
  rewardSpotlights,
  rewardTypes
} from '@/data/rewards';
import type { RewardCategoryKey, RewardEntry, RewardType } from '@/data/rewards';
import { legionImages } from '@/data/images';

const typeFilterOptions = ['all', ...rewardTypes] as const;
type TypeFilterOption = typeof typeFilterOptions[number];

const bronzeItemCount = bronzeEntries.length;
const catalogItemCount = rewardEntries.length;
const averageBronze = Math.round(totalBronzeCost / Math.max(1, bronzeItemCount));

const quickLinks = [
  { label: 'Overview', href: '#overview', icon: '🧭' },
  { label: 'Search', href: '#search', icon: '🔍' },
  { label: 'Highlights', href: '#spotlights', icon: '✨' },
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

function EntryMeta({ entry }: { entry: RewardEntry }) {
  const excludedKeys = new Set([
    entry.nameField,
    entry.costField ?? '',
    entry.phaseField ?? '',
    entry.sourceField ?? '',
    entry.requirementField ?? '',
    entry.achievementField ?? '',
    'Bronze',
    'Bronze*',
    'Cost',
    'Value'
  ]);

  const metadataPairs = Object.entries(entry.metadata).filter(([key, value]) => {
    if (!value || value === entry.name) return false;
    if (excludedKeys.has(key)) return false;
    return value.trim().length > 0;
  });

  const fields: { label: string; value: string }[] = [];
  if (entry.achievement) fields.push({ label: 'Achievement', value: entry.achievement });
  if (entry.requirement) fields.push({ label: 'Requirement', value: entry.requirement });
  if (entry.source) fields.push({ label: 'Source', value: entry.source });
  if (entry.phase) fields.push({ label: 'Phase', value: entry.phase });

  metadataPairs.slice(0, 2).forEach(([label, value]) => {
    fields.push({ label, value });
  });

  if (fields.length === 0) {
    return null;
  }

  return (
    <dl className="mt-2 grid gap-2 text-xs text-gray-300">
      {fields.map(({ label, value }) => (
        <div key={`${entry.id}-${label}`} className="flex flex-col">
          <dt className="uppercase tracking-wide text-gray-500">{label}</dt>
          <dd className="text-gray-200">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function RewardsPage() {
  const [typeFilter, setTypeFilter] = useState<TypeFilterOption>('all');
  const [bronzeOnly, setBronzeOnly] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = useMemo(() => {
    const base = bronzeOnly ? bronzeEntries : rewardEntries;
    const term = searchTerm.trim().toLowerCase();

    return base.filter(entry => {
      if (typeFilter !== 'all' && entry.type !== typeFilter) {
        return false;
      }
      if (!term) {
        return true;
      }
      const haystack = [
        entry.name,
        entry.source,
        entry.requirement,
        entry.achievement,
        entry.tableLabel,
        entry.tableHeading ?? '',
        entry.sectionTitle,
        ...Object.values(entry.metadata)
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [bronzeOnly, searchTerm, typeFilter]);

  const maxResults = 60;
  const displayedEntries = filteredEntries.slice(0, maxResults);
  const truncated = filteredEntries.length > maxResults;
  const matchedBronzeTotal = displayedEntries.reduce((sum, entry) => sum + (entry.cost?.amount ?? 0), 0);

  return (
    <div className="min-h-screen bg-gray-950 pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <header id="overview" className="sticky top-0 z-20 mb-10 bg-gray-950/90 backdrop-blur border-b border-gray-800 -mx-4 px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-emerald-300 uppercase tracking-widest">Legion Remix • October 7, 2025 → January 19, 2026</p>
              <h1 className="text-3xl font-bold text-white mt-2">Legion Remix Rewards Hub</h1>
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

        <section id="search" className="mb-16 rounded-3xl border border-gray-800 bg-gray-900/40 p-6">
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
