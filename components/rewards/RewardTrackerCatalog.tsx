'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  rewardEntries,
  bronzeEntries,
  rewardTypes
} from '@/data/rewards';
import type { RewardEntry } from '@/data/rewards';

const typeFilterOptions = ['all', ...rewardTypes] as const;
type TypeFilterOption = typeof typeFilterOptions[number];

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

  if (fields.length === 0) return null;

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

export default function RewardTrackerCatalog() {
  const [typeFilter, setTypeFilter] = useState<TypeFilterOption>('all');
  const [bronzeOnly, setBronzeOnly] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEntries = useMemo(() => {
    const base = bronzeOnly ? bronzeEntries : rewardEntries;
    const term = searchTerm.trim().toLowerCase();

    return base.filter(entry => {
      if (typeFilter !== 'all' && entry.type !== typeFilter) return false;
      if (!term) return true;
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
                'rounded-full px-3 py-1.5 text-sm border transition',
                option === typeFilter
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200'
                  : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600'
              ].join(' ')}
            >
              {option === 'all' ? 'All types' : option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 text-sm text-gray-300">
        <p>
          Showing <span className="text-white font-semibold">{displayedEntries.length}</span> of{' '}
          <span className="text-white font-semibold">{filteredEntries.length}</span> matches — Bronze total:{' '}
          <span className="text-yellow-400 font-semibold">{matchedBronzeTotal.toLocaleString()}</span>
        </p>
        {truncated && (
          <p className="text-xs text-gray-400">Results truncated to {maxResults}. Refine your filters to see more.</p>
        )}
      </div>

      <div className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedEntries.map(entry => (
            <div key={entry.id} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-300">{entry.sectionTitle}</p>
                  <h3 className="text-lg font-semibold text-white">{entry.name}</h3>
                  <EntryMeta entry={entry} />
                </div>
                <div className="text-right">
                  {entry.cost ? (
                    <>
                      <p className="text-2xl font-bold text-yellow-400">{entry.cost.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-400 mt-1">Bronze</p>
                      {entry.cost.currency && (
                        <p className="text-sm text-gray-400 mt-1">Currency: {entry.cost.currency}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-gray-400 italic">Achievement / unlock reward</p>
                  )}
                </div>
              </div>
              <Link
                href={`/rewards/${entry.category}#${entry.tableKey}`}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 px-4 py-1.5 text-sm text-emerald-200 hover:bg-emerald-500/10 mt-3"
              >
                View category ↗
              </Link>
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
  );
}
