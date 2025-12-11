import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/fragmented-mementos-new-sources';
const rawTitle = 'More Ways to Get Fragmented Mementos Coming to Legion Remix';
const rawDescription =
  'Patch 11.2.7 adds Fragmented Mementos to Doomguard Challengers from Timewarped Obelisks, allows scrapping Motes of a Broken Time into Mementos, and teases cross-timeline world bosses.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} Here’s how to prep your alt gearing loop before Phase 5 hits.`);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-12-02',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Hotfix Explainer',
  },
};

const newSources = [
  'Heroic World Tier Doomguard Challengers (from Timewarped Obelisks) now drop Fragmented Mementos of Epoch Challenges.',
  'Erus can scrap Motes of a Broken Time into Fragmented Mementos — up to 50 per day, in stacks of 25.',
  'Broken Isles world bosses may “spawn from other timelines,” previewing the chaos leading into Phase 5.',
];

const loopSteps = [
  'With Heroic World Tier on, activate Timewarped Obelisks first, clear Doomguard Challengers, and grab your first Mementos.',
  'Hand every Mote of a Broken Time to Erus; convert up to 50 Mementos per day so you never waste the cap.',
  'Kill world bosses on the same loop (including cross-timeline spawns) for Bronze, Infinite Power, and extra Mementos.',
];

const prepNotes = [
  'Phase 5 raises the item level ceiling to 779; stockpiling Mementos now lets fresh alts skip the 700 bracket grind.',
  'Gift of Eternus buffs in Heroic World Tier boost health and damage reduction so DPS/healers can solo challengers.',
  'The 50-per-day Memento cap means two or three days of conversions can push a new character into Mythic keystone range.',
];

const faqItems = [
  {
    question: 'Does the daily scrap cap reset?',
    answer: 'Yes. The 50-per-day limit resets with the daily server reset—bank extra Motes and convert them each day.',
  },
  {
    question: 'Do cross-timeline world bosses drop anything special?',
    answer: 'They share the usual Bronze and fragment rewards but spawn more frequently—perfect to bundle with your Obelisk loop.',
  },
  {
    question: 'Is Heroic World Tier too punishing?',
    answer: 'Gift of Eternus grants +100% health and -33% damage taken, so DPS/healers can handle it; bringing a tank feels even safer.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.fragmentedMementoReward,
  datePublished: '2025-12-02',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Fragmented Mementos', path: canonicalPath },
]);

export default function FragmentedMementoPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.fragmentedMementoReward}
            alt="Fragmented Memento of Epoch Challenges cache"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Patch 11.2.7</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published December 2, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">New Memento Sources</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {newSources.map((src) => (
                <li key={src} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
            <Image
              src={legionImages.timeWarpedObelisk}
              alt="Timewarped Obelisk in Heroic World Tier"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="mt-3 text-xs text-gray-400">Doomguard Challengers spawn only in Heroic World Tier—flip the difficulty before you tap the Obelisk.</p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Loop Route</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-200">
              {loopSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-4 rounded-3xl border border-emerald-500/30 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Why Farm Now</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {prepNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
              <p className="text-xs text-gray-400">
                For upgrade math, see the <Link href="/guides/fragmented-memento" className="text-emerald-300 hover:text-emerald-200">Fragmented Memento guide</Link>.
              </p>
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
