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
import type { RewardCategoryKey, RewardEntry, RewardTableConfig, RewardType } from '@/data/rewards';
import { legionImages } from '@/data/images';

const typeFilterOptions = ['all', ...rewardTypes] as const;
type TypeFilterOption = typeof typeFilterOptions[number];

const categoryFilterOptions = ['all', ...rewardCategories.map(section => section.key)] as const;
type CategoryFilterOption = typeof categoryFilterOptions[number];

const quickLinks = [
  { label: 'Overview & Stats', href: '#overview' },
  { label: 'Search Catalog', href: '#search' },
  { label: 'Featured Highlights', href: '#spotlights' },
  ...rewardCategories.map(section => ({ label: section.title, href: `#category-${section.key}` }))
];

const bronzeItemCount = bronzeEntries.length;
const catalogItemCount = rewardEntries.length;
const averageBronze = Math.round(totalBronzeCost / Math.max(1, bronzeItemCount));

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

function RewardTable({ config }: { config: RewardTableConfig }) {
  const headers = config.reference.headers;
  const rows = config.reference.rows;
  return (
    <div id={config.key} className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
        <div>
          <h4 className="text-xl font-semibold text-white">{config.label}</h4>
          {config.description && <p className="text-sm text-gray-300 mt-1">{config.description}</p>}
        </div>
        {config.note && (
          <span className="text-xs uppercase tracking-wide text-amber-300 bg-amber-900/20 border border-amber-700/50 px-3 py-1 rounded-full">
            {config.note}
          </span>
        )}
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-950/60">
        <table className="min-w-full divide-y divide-gray-900 text-sm">
          <thead className="bg-gray-900/70">
            <tr>
              {headers.map(header => (
                <th
                  key={header}
                  className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900/60">
            {rows.map((row, rowIndex) => (
              <tr key={`${config.key}-${rowIndex}`} className="hover:bg-gray-900/40 transition-colors">
                {headers.map(header => {
                  const value = row[header];
                  const isCostColumn = header.toLowerCase().includes('bronze') || header.toLowerCase() === 'cost';
                  const isPhaseColumn = header.toLowerCase().includes('phase');
                  return (
                    <td
                      key={`${config.key}-${rowIndex}-${header}`}
                      className="px-4 py-3 align-top"
                    >
                      <span
                        className={[
                          'block break-words',
                          isCostColumn ? 'text-emerald-300 font-semibold' : 'text-gray-200',
                          isPhaseColumn ? 'text-sky-300 font-medium' : ''
                        ].join(' ')}
                      >
                        {value && value.trim().length > 0 ? value : '—'}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SpotlightCard({ spotlight }: { spotlight: (typeof rewardSpotlights)[number] }) {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
      <div className="relative h-52">
        <img
          src={spotlight.image}
          alt={spotlight.title}
          className="w-full h-full object-cover"
        />
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
  );
}

function EntryMeta({ entry }: { entry: RewardEntry }) {
  const excludedKeys = new Set([
    entry.nameField,
    entry.costField ?? '',
    'Bronze',
    'Bronze*',
    'Cost',
    'Value'
  ]);
  const metadataPairs = Object.entries(entry.metadata).filter(([key, value]) => {
    if (!value || value === entry.name) return false;
    if (excludedKeys.has(key)) return false;
    return true;
  });

  if (metadataPairs.length === 0 && !entry.source && !entry.requirement && !entry.achievement && !entry.phase) {
    return null;
  }

  const fields: { label: string; value: string | undefined }[] = [
    entry.achievement ? { label: 'Achievement', value: entry.achievement } : null,
    entry.requirement ? { label: 'Requirement', value: entry.requirement } : null,
    entry.source ? { label: 'Source', value: entry.source } : null,
    entry.phase ? { label: 'Phase', value: entry.phase } : null
  ].filter(Boolean) as { label: string; value: string }[];

  metadataPairs.slice(0, 3).forEach(([key, value]) => {
    fields.push({ label: key, value });
  });

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
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterOption>('all');
  const [bronzeOnly, setBronzeOnly] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = useMemo(() => {
    const base = bronzeOnly ? bronzeEntries : rewardEntries;
    const term = searchTerm.trim().toLowerCase();

    return base.filter(entry => {
      if (typeFilter !== 'all' && entry.type !== typeFilter) {
        return false;
      }
      if (categoryFilter !== 'all' && entry.category !== categoryFilter) {
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
  }, [bronzeOnly, categoryFilter, searchTerm, typeFilter]);

  const maxResults = 80;
  const displayedEntries = filteredEntries.slice(0, maxResults);
  const truncated = filteredEntries.length > maxResults;
  const matchedBronzeTotal = displayedEntries.reduce((sum, entry) => sum + (entry.cost?.amount ?? 0), 0);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto text-white">
        <header id="overview" className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold">Legion Remix Rewards Compendium</h1>
              <p className="text-lg text-gray-300 mt-2 max-w-3xl">
                Legion Remix runs from <strong className="text-emerald-300">October 7, 2025</strong> through
                <strong className="text-emerald-300"> January 19, 2026</strong>. Use this catalog to plan every Bronze
                purchase, achievement unlock, and reputation vendor stop before the event closes on week 15.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/60 to-slate-900/80 border border-emerald-700/60 rounded-2xl px-6 py-4 shadow-lg shadow-emerald-950/40">
              <p className="text-xs uppercase tracking-widest text-emerald-200">Bronze Needed for Full Collection</p>
              <p className="text-4xl font-bold text-emerald-300 mt-2">{formatNumber(totalBronzeCost)}</p>
              <p className="text-sm text-gray-300 mt-1">Includes mounts, pets, toys, ensembles, housing, and more.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Bronze-priced items</p>
              <p className="text-2xl font-semibold text-white mt-1">{formatNumber(bronzeItemCount)}</p>
              <p className="text-sm text-gray-400 mt-2">Eligible for Bronze farming strategies.</p>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">All catalog entries</p>
              <p className="text-2xl font-semibold text-white mt-1">{formatNumber(catalogItemCount)}</p>
              <p className="text-sm text-gray-400 mt-2">Includes achievements, paragon rewards, and vendor unlocks.</p>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Average Bronze per item</p>
              <p className="text-2xl font-semibold text-white mt-1">{formatNumber(averageBronze)}</p>
              <p className="text-sm text-gray-400 mt-2">Benchmark how much Bronze to reserve per purchase.</p>
            </div>
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Phase milestones tracked</p>
              <p className="text-2xl font-semibold text-white mt-1">{rewardCategories.length}</p>
              <p className="text-sm text-gray-400 mt-2">Mounts, pets, toys, transmog, housing, and reputations.</p>
            </div>
          </div>
        </header>

        <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-gray-950/60 border border-gray-800 hover:border-emerald-500 transition-colors rounded-xl px-4 py-3 text-gray-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="search" className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white">Search & Filter the Catalog</h2>
              <p className="text-sm text-gray-300 mt-1">
                Filter by reward type, category, and Bronze availability. The list updates instantly as you type.
              </p>
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={bronzeOnly}
                onChange={event => setBronzeOnly(event.target.checked)}
                className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-emerald-500 focus:ring-emerald-400"
              />
              Show Bronze-priced results only
            </label>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <input
              type="search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Search rewards, achievements, vendors, or phases..."
              className="flex-1 bg-gray-950/70 border border-gray-800 focus:border-emerald-500 focus:ring-emerald-500/40 rounded-xl px-4 py-3 text-gray-100"
            />
            <div className="flex gap-2 flex-wrap">
              {typeFilterOptions.map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTypeFilter(option)}
                  className={[
                    'px-4 py-2 rounded-lg border text-sm transition-colors',
                    typeFilter === option
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                      : 'border-gray-700 bg-gray-900/60 text-gray-300 hover:border-emerald-400'
                  ].join(' ')}
                >
                  {option === 'all' ? 'All Types' : option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-6">
            {categoryFilterOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setCategoryFilter(option)}
                className={[
                  'px-4 py-2 rounded-lg border text-sm transition-colors',
                  categoryFilter === option
                    ? 'border-sky-500 bg-sky-500/20 text-sky-200'
                    : 'border-gray-700 bg-gray-900/60 text-gray-300 hover:border-sky-400'
                ].join(' ')}
              >
                {option === 'all'
                  ? 'All Categories'
                  : rewardCategories.find(section => section.key === option)?.title ?? option}
              </button>
            ))}
          </div>

          <div className="bg-gray-950/70 border border-gray-800 rounded-2xl">
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
                  Displaying first {maxResults} results. Refine filters for more precise matches.
                </span>
              )}
            </header>
            <div className="divide-y divide-gray-900">
              {displayedEntries.map(entry => (
                <div key={entry.id} className="px-5 py-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                      {entry.sectionTitle} • {entry.tableLabel}
                    </p>
                    <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                    <EntryMeta entry={entry} />
                  </div>
                  <div className="text-right min-w-[160px]">
                    {entry.cost ? (
                      <div>
                        <p className="text-xl font-semibold text-emerald-300">
                          {entry.cost.currency.toLowerCase().startsWith('bronze')
                            ? `${formatNumber(entry.cost.amount ?? 0)} Bronze`
                            : entry.cost.display}
                        </p>
                        {entry.cost.currency && !entry.cost.currency.toLowerCase().startsWith('bronze') && (
                          <p className="text-xs text-gray-400 mt-1">Currency: {entry.cost.currency}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 italic">Achievement / unlock reward</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2 capitalize">{entry.type}</p>
                  </div>
                </div>
              ))}
              {displayedEntries.length === 0 && (
                <div className="px-5 py-6 text-center text-gray-400">
                  No rewards match the current filters. Try broadening your search or disabling Bronze-only mode.
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="spotlights" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Highlights</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {rewardSpotlights.map(spotlight => (
              <SpotlightCard key={spotlight.id} spotlight={spotlight} />
            ))}
          </div>
        </section>

        {rewardCategories.map(section => {
          const categoryEntriesList = rewardEntries.filter(entry => entry.category === section.key);
          const bronzeCategoryEntries = bronzeEntries
            .filter(entry => entry.category === section.key)
            .sort((a, b) => (b.cost?.amount ?? 0) - (a.cost?.amount ?? 0));
          const topBronze = bronzeCategoryEntries.slice(0, 3);
          const phases = Array.from(new Set(bronzeCategoryEntries.map(entry => entry.phase).filter(Boolean)));

          return (
            <section key={section.key} id={`category-${section.key}`} className="mb-20">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <div>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                      <p className="text-sm text-gray-300 mt-2 max-w-3xl">{section.subtitle}</p>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Catalog</p>
                        <p className="text-lg font-semibold text-white">{formatNumber(categoryStats[section.key].allCount)}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Bronze items</p>
                        <p className="text-lg font-semibold text-white">{formatNumber(categoryStats[section.key].bronzeCount)}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">Bronze total</p>
                        <p className="text-lg font-semibold text-emerald-300">
                          {formatNumber(categoryStats[section.key].bronzeTotal)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {section.tables.map(config => (
                    <RewardTable key={config.key} config={config} />
                  ))}
                </div>

                <aside className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
                    <img
                      src={section.image ?? legionImages.referenceSplash}
                      alt={`${section.title} reference`}
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs uppercase tracking-widest text-emerald-300">Category Overview</p>
                      <p className="text-sm text-gray-100 mt-2">
                        {phases.length > 0
                          ? `Phase ${phases.join(', ')} releases contain ${section.title.toLowerCase()}.`
                          : `Refer to tables for unlock requirements across the Remix timeline.`}
                      </p>
                    </div>
                  </div>

                  {topBronze.length > 0 && (
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-5">
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Top Bronze sinks</p>
                      <ol className="space-y-3 text-sm text-gray-200 list-decimal list-inside">
                        {topBronze.map(entry => (
                          <li key={entry.id}>
                            <span className="font-semibold text-white">{entry.name}</span>
                            <span className="text-emerald-300"> — {formatNumber(entry.cost?.amount ?? 0)} Bronze</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Helpful Tips</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>Bookmark this section to check vendor rotations during weekly resets.</li>
                      <li>
                        Combine the search filters above with category = {section.title.split(' ')[0]} to isolate these
                        entries.
                      </li>
                      <li>
                        Add Bronze totals into your wishlist calculator to avoid overspending mid-phase.
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
