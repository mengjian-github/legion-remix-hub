import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/phase-5-infinite-echoes-live';
const rawTitle = 'Phase 5 Is Now Live: Infinite Echoes Catch-Up Guide for Legion Remix';
const rawDescription =
  'Infinite Echoes introduces Flawless Threads of Time, Moratari catch-up quests, roaming Lost Legion Infernals, world-boss swarms, and a stacking Timerunner’s Mayhem XP buff to close the Legion Remix season.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} Use this checklist to push item level to 779 and finish rewards before January 19, 2026.`);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-12-09',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Phase Update',
  },
};

const quickFacts = [
  { label: 'Item level ceiling', value: '779 with Flawless Threads of Time traded to Erus for Fragmented Mementos' },
  { label: 'XP catch-up', value: 'Timerunner’s Mayhem buff stacks from Infinite Research assignments for rapid alts' },
  { label: 'World rotation', value: '6 world bosses up at once on an 18-hour timer; Lost Legion Infernals always active per zone' },
  { label: 'Season end', value: 'Legion Remix ends January 19, 2026 — roughly six weeks from the Dec 9 Phase 5 launch' },
];

const featureBlocks = [
  {
    title: 'Two fresh quests from Moratari',
    points: [
      'Grab “Infinite Echoes” and the follow-up quest in the Infinite Bazaar to unlock the new currency loop.',
      'Completing them introduces the Flawless Thread of Time upgrade path and queues the Mayhem XP buff flow.',
    ],
  },
  {
    title: 'Flawless Threads of Time → Fragmented Mementos',
    points: [
      'Flawless Threads drop from raid and dungeon bosses and when scrapping old Remix gear.',
      'Trade Threads to Erus for Fragmented Mementos of Epoch Challenges, then upgrade gear past the previous 740 cap.',
      'Each upgrade step is cheaper than farming fresh Motes, making alt gearing dramatically faster.',
    ],
  },
  {
    title: 'Roaming threats & boss surge',
    points: [
      'Lost Legion Infernals patrol the Broken Isles and Argus—one elite per zone—dropping Threads, Bronze, and cosmetics.',
      'World bosses now spawn six at a time on an 18-hour rotation. Tagging all six every window is the fastest way to restock caches.',
      'Timerunner’s Mayhem XP buff stacks as you complete Infinite Research assignments, accelerating 10–60 leveling even without heirlooms.',
    ],
  },
];

const actionPlan = [
  {
    title: 'Day 1 priorities',
    steps: [
      'Pick up both Moratari quests before doing anything else; they unlock the new upgrade economy.',
      'Scrap old 720–740 gear to generate Flawless Threads immediately, then push weapons/trinkets first to 779.',
      'Route a boss circuit: six world bosses, then sweep each zone’s Lost Legion Infernal while queues pop.',
    ],
  },
  {
    title: 'Upgrade funnel',
    steps: [
      'Convert Threads at Erus until you cap Mementos; spend on your biggest stat sticks before filling minor slots.',
      'Keep one stack of Threads in reserve for freshly dinged alts so you can leapfrog to keystone-ready ilvl.',
      'If you still have Motes of a Broken Time, scrap them first—Phase 5 focuses entirely on Threads and Mementos.',
    ],
  },
  {
    title: 'XP and Bronze efficiency',
    steps: [
      'Complete three Infinite Research assignments to stack Timerunner’s Mayhem before any dungeon spam.',
      'Pair world-boss rotations with Bronze shopping runs in Dalaran and the Infinite Bazaar to minimize travel time.',
      'Bank surplus Bronze for Housing decor and Argus vendor pieces you skipped during Phase 4.',
    ],
  },
];

const faqItems = [
  {
    question: 'Do Flawless Threads of Time replace Motes of a Broken Time?',
    answer:
      'Yes. Threads are the new endgame upgrade currency for Phase 5. Scrapping older gear or killing bosses converts effort into Threads, which you trade to Erus for Fragmented Mementos to boost items to 779.',
  },
  {
    question: 'How many world bosses should I plan to kill each rotation?',
    answer:
      'Six. Phase 5 spawns six bosses every 18 hours. A full loop takes ~25 minutes with flight paths unlocked and is the highest-value Bronze + cache combo right now.',
  },
  {
    question: 'Is the Timerunner’s Mayhem buff permanent once I stack it?',
    answer:
      'It persists like other Remix buffs until you log out for an extended period. Re-run a couple of Infinite Research assignments at the start of each session to refresh it before leveling alts.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.phase5InfiniteEchoes,
  datePublished: '2025-12-09',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Phase 5 Infinite Echoes', path: canonicalPath },
]);

export default function Phase5InfiniteEchoesPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.phase5InfiniteEchoes}
            alt="Infinite Echoes Phase 5 banner with Fel-touched hourglass"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Phase 5 · Infinite Echoes</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published December 9, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{fact.label}</p>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-black">★</span>
            <div>
              <h2 className="text-3xl font-semibold text-white">Key Updates</h2>
              <p className="text-sm text-gray-300">Unlock the Phase 5 currencies and buffs first so every dungeon run feeds upgrades.</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featureBlocks.map((block) => (
              <div key={block.title} className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-200">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <p className="text-xs uppercase tracking-[0.2em]">Upgrade & XP Path</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">48-Hour Sprint Route</h2>
            <ul className="space-y-4 text-sm text-gray-200">
              {actionPlan.map((segment) => (
                <li key={segment.title} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-5">
                  <p className="text-base font-semibold text-emerald-300">{segment.title}</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    {segment.steps.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-6 shadow-2xl shadow-emerald-900/40">
            <Image
              src={legionImages.phaseTimeline}
              alt="Legion Remix timeline overview"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="mt-4 text-xs text-gray-400">
              From now until January 19, 2026 there is one loop left—cycle Threads, world bosses, and Infinite Research to backfill every missed reward fast.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-200">
              <p>• <Link href="/guides/fragmented-memento" className="text-emerald-300 hover:text-emerald-200">Fragmented Memento guide</Link>: prioritize weapons/trinkets, then rings/cloak, then everything else.</p>
              <p>• <Link href="/guides/infinite-research" className="text-emerald-300 hover:text-emerald-200">Infinite Research guide</Link>: fastest way to stack the Mayhem XP buff each session.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-sm font-semibold text-white">{faq.question}</p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
