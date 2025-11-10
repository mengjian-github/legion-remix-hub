import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/news';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const newsTitle = formatMetaTitle('Legion Remix News & Hotfix Tracker 2025');
const newsDescription = formatMetaDescription(
  'Stay current on Legion Remix 2025 with curated hotfix highlights, blue post breakdowns, and weekly roadmap checkpoints sourced from Warcraft Tavern.'
);

export const metadata: Metadata = {
  title: newsTitle,
  description: newsDescription,
  alternates: {
    canonical: buildCanonicalUrl('/news'),
  },
  openGraph: buildOpenGraphMetadata('/news', newsTitle, newsDescription),
  twitter: buildTwitterMetadata(newsTitle, newsDescription),
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default function NewsPage() {
  const sortedArticles = [...newsArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const [featured, ...others] = sortedArticles;

  return (
    <div className="min-h-screen bg-gray-950 pb-16">
      {featured && (
        <section className="relative isolate overflow-hidden border-b border-green-500/10 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950">
          <div className="absolute inset-0">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-green-300/80">Latest Hotfix Spotlight</p>
              <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">{featured.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 text-sm text-gray-300">
                <span>{dateFormatter.format(new Date(featured.publishedAt))}</span>
                <span className="text-gray-500">•</span>
                <span>{featured.author}</span>
              </div>
              <p className="mt-6 text-lg text-gray-200">{featured.excerpt}</p>
              <p className="mt-4 text-sm text-gray-300">
                Check back daily for Legion Remix news, hotfix summaries, and Heroic World Tier adjustments—this tracker
                surfaces every Legion Remix hotfix before it hits the launcher notes.
              </p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-gray-900/70 p-6 shadow-lg backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">Key Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-100">
                {featured.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-green-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={featured.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-300 hover:text-green-200"
              >
                Read Source
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414L9.414 17l-4.707 1.414A1 1 0 013.879 17.293L5.293 12l9.414-9.414a1 1 0 011.414 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-green-600/40 bg-gray-900/70 p-8 shadow-2xl shadow-green-900/40 lg:flex lg:items-center lg:gap-10">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-300/80">Phase 3 Briefing</p>
            <h2 className="text-3xl font-bold text-white">Phase 3 – Legionfall is Live</h2>
            <p className="text-sm text-gray-300">
              Broken Shore construction timers, Legion Assault rotations, Tomb of Sargeras goals, and Bronze shopping priorities are consolidated in our internal launch report so raid leads and collectors can plan the final two-week sprint.
            </p>
            <p className="text-xs text-gray-400">
              Share it with your team before November 17, 2025 so everyone finishes Breaching the Tomb, Infinite Knowledge ranks, and class mount finales before Argus prep begins.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 lg:mt-0">
            <Link
              href="/news/phase-3-legion-remix-now-live"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
            >
              Read the Phase 3 launch report
            </Link>
            <p className="text-xs text-gray-500">
              Includes Infinite Knowledge checklist, Legionfall timeline, and Bronze vendor highlights.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] bg-gray-900/50 border border-gray-800 rounded-3xl p-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">How to Use the Legion Remix News Tracker</h2>
            <p className="text-sm text-gray-300 mb-3">
              Hotfixes drop without warning, but your Bronze plan doesn’t need to wobble. Treat this page like a newsroom: check the headline banner first, skim the highlight bullets, then update your Legion Remix bronze calculator or class builds accordingly.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li><strong>Bookmark cadence:</strong> Refresh after Tuesday reset and before weekend Turbo Boost windows so nerfs or buffs don’t ambush your Legion Remix site prep.</li>
              <li><strong>Class adjustments:</strong> If a blue post tweaks a spec, flip to the matching class playbook—whether it’s a Legion Remix arms warrior build or destro warlock Legion Remix burst, we update the guides in tandem.</li>
              <li><strong>Quest alignment:</strong> Micro-holiday notes (Lock, Stock, and Two Smoking Goblins or A Noble Event) appear in the feed 48 hours early, giving you time to stock Bronze.</li>
              <li><strong>Guild sync:</strong> Drop a quick summary in Discord so everyone knows whether WoW Legion Remix warrior build nerfs or ret paladin Legion Remix changes landed midweek.</li>
            </ol>
            <p className="text-xs text-gray-500">
              Cross-reference any callout with the <Link href="/guides" className="text-green-400 hover:text-green-300">strategy vault</Link> and the <Link href="/rewards" className="text-green-400 hover:text-green-300">reward tracker</Link> to keep your Legion Remix roadmap on schedule.
            </p>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">24-Hour Hotfix Workflow</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Update the Bronze calculator with any vendor price changes.</li>
              <li>Ping your raid or dungeon lead about tuning shifts.</li>
              <li>Adjust talent loadouts (e.g., Legion Remix ret paladin build swaps) before logging off.</li>
              <li>Screenshot noteworthy lines so guildmates catch up quickly.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {others.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/60 shadow-xl shadow-gray-950/40 transition hover:border-green-500/40 hover:shadow-green-900/30"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-8">
                <div className="flex flex-wrap items-center gap-x-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-300/80">
                  <span>{dateFormatter.format(new Date(article.publishedAt))}</span>
                  <span className="text-gray-600">•</span>
                  <span>{article.author}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white">{article.title}</h2>
                <p className="text-sm leading-relaxed text-gray-300">{article.excerpt}</p>
                <ul className="space-y-3 text-sm leading-relaxed text-gray-100">
                  {article.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-green-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Link
                    href={article.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-300 hover:text-green-200"
                  >
                    {article.source.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-.293 1.707l-1 1a1 1 0 01-1.414-1.414l.293-.293H9a1 1 0 110-2h6.586l-.293-.293a1 1 0 010-1.414l1-1zM4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h8v-3a1 1 0 112 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
