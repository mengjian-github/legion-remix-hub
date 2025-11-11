import Link from 'next/link';
import type { Metadata } from 'next';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { notFound } from 'next/navigation';
import {
  getRewardCategory,
  rewardCategoryKeys,
  rewardEntries,
  bronzeEntries,
  rewardSpotlights
} from '@/data/rewards';
import type { RewardCategoryKey, RewardEntry, RewardTableConfig } from '@/data/rewards';
import { legionImages } from '@/data/images';

function formatNumber(value: number) {
  return value.toLocaleString('en-US');
}

function RewardTable({ config }: { config: RewardTableConfig }) {
  const headers = config.reference.headers;
  const rows = config.reference.rows;

  return (
    <div id={config.key} className="mb-10 scroll-mt-28">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{config.label}</h3>
          {config.description && <p className="text-sm text-gray-300 mt-1 max-w-2xl">{config.description}</p>}
        </div>
        {config.note && (
          <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-wide text-amber-300">
            {config.note}
          </span>
        )}
      </div>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-800 bg-gray-950/60 shadow-lg shadow-black/20">
        <table className="min-w-full divide-y divide-gray-900 text-sm">
          <thead className="bg-gray-900/80">
            <tr>
              {headers.map(header => (
                <th key={header} className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-gray-300">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900">
            {rows.map((row, index) => (
              <tr key={`${config.key}-${index}`} className="hover:bg-gray-900/40 transition-colors">
                {headers.map(header => (
                  <td key={`${config.key}-${index}-${header}`} className="px-4 py-3 align-top text-gray-200">
                    {row[header] && row[header].trim().length > 0 ? row[header] : '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function findTopBronze(entries: RewardEntry[], limit = 5) {
  return entries
    .filter(entry => entry.cost?.amount)
    .sort((a, b) => (b.cost?.amount ?? 0) - (a.cost?.amount ?? 0))
    .slice(0, limit);
}

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return rewardCategoryKeys.map(category => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const categoryKey = params.category as RewardCategoryKey;
  const section = getRewardCategory(categoryKey);
  if (!section) {
    return {};
  }

  const title = formatMetaTitle(`${section.title} – Legion Remix Rewards & Bronze Tracker 2025`);
  const description = formatMetaDescription(section.subtitle || 'Browse Legion Remix rewards by category with Bronze costs and unlock notes.');
  const canonicalPath = `/rewards/${section.key}`;

  return {
    ...buildPageMetadata({ path: canonicalPath, title, description, type: 'website' }),
  };
}

export default function RewardCategoryPage({ params }: CategoryPageProps) {
  const categoryKey = params.category as RewardCategoryKey;
  if (!rewardCategoryKeys.includes(categoryKey)) {
    notFound();
  }

  const section = getRewardCategory(categoryKey);
  if (!section) {
    notFound();
  }

  const categoryEntries = rewardEntries.filter(entry => entry.category === section.key);
  const bronzeCategoryEntries = bronzeEntries.filter(entry => entry.category === section.key);
  const bronzeTotal = bronzeCategoryEntries.reduce((sum, entry) => sum + (entry.cost?.amount ?? 0), 0);
  const phases = Array.from(new Set(bronzeCategoryEntries.map(entry => entry.phase).filter(Boolean)));
  const topBronze = findTopBronze(bronzeCategoryEntries);

  return (
    <div className="min-h-screen bg-gray-950 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="sticky top-0 z-20 mb-10 bg-gray-950/90 backdrop-blur border-b border-gray-800 -mx-4 px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-300">Legion Remix Rewards</p>
              <h1 className="text-3xl font-bold text-white mt-1">{section.title}</h1>
              <p className="text-sm text-gray-300 mt-1 max-w-3xl">{section.subtitle}</p>
            </div>
            <Link
              href="/rewards"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-emerald-500 hover:text-emerald-200"
            >
              ← Back to rewards overview
            </Link>
          </div>
        </header>

        <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Total records</p>
            <p className="text-3xl font-semibold text-white mt-2">{formatNumber(categoryEntries.length)}</p>
            <p className="text-sm text-gray-400 mt-2">Includes achievements, account-wide rewards, and more.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Bronze purchasable</p>
            <p className="text-3xl font-semibold text-emerald-300 mt-2">{formatNumber(bronzeCategoryEntries.length)}</p>
            <p className="text-sm text-gray-400 mt-2">Number of entries purchasable with Bronze.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Total Bronze cost</p>
            <p className="text-3xl font-semibold text-emerald-300 mt-2">{formatNumber(bronzeTotal)}</p>
            <p className="text-sm text-gray-400 mt-2">Use this target when budgeting your Bronze.</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">Phases covered</p>
            <p className="text-3xl font-semibold text-white mt-2">{phases.length > 0 ? phases.join(', ') : 'Multiple phases'}</p>
            <p className="text-sm text-gray-400 mt-2">See the tables below for phase details.</p>
          </div>
        </section>

        <section className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            {section.tables.map(config => (
              <RewardTable key={config.key} config={config} />
            ))}
          </div>

          <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60">
              <img
                src={section.image ?? legionImages.referenceSplash}
                alt={`${section.title} visual`}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs uppercase tracking-widest text-emerald-300">Category snapshot</p>
                <p className="text-sm text-gray-100 mt-2">
                  {phases.length > 0
                    ? `Primary phases: ${phases.join(', ')}.`
                    : 'See the Phase/Source columns in each table.'}
                </p>
              </div>
            </div>

            {topBronze.length > 0 && (
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                  Top Bronze costs ({topBronze.length})
                </p>
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

            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Helpful tips</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Use the overview search to compare across categories.</li>
                <li>Feed the Bronze total into the calculator to confirm weekly goals.</li>
                <li>Bookmark this page to quickly verify stock after weekly resets.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Related spotlights</p>
              <ul className="space-y-3 text-sm text-gray-300">
                {rewardSpotlights
                  .filter(spotlight =>
                    spotlight.highlights.some(highlight =>
                      highlight.name.toLowerCase().includes(section.key.slice(0, 3))
                    )
                  )
                  .slice(0, 3)
                  .map(spotlight => (
                    <li key={spotlight.id}>
                      <span className="font-semibold text-emerald-200">{spotlight.title}</span>
                      <span className="block text-gray-400">{spotlight.subtitle}</span>
                    </li>
                  ))}
                {rewardSpotlights.length === 0 && <li>Check the featured spotlights above.</li>}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
