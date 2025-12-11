import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/housing-decor-legion-remix';
const rawTitle = 'Housing Decor Arrives in Legion Remix: Achievements, Costs, and Bronze Plan';
const rawDescription =
  'Player Housing decor is live in Legion Remix. Unlock Legion-themed furniture via achievements, buy extra copies with Bronze, and grab Illusion: Nightmare and Chronos from Horos.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} This guide lists the cheapest unlocks, the best-looking pieces, and a Bronze budget for decorators.`);

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
    'article:section': 'Rewards',
  },
};

const decorItems = [
  { name: 'Altar of the Corrupted Flames', achievement: 'Broken Isles World Quests V', bronze: '30,000' },
  { name: 'Corruption Pit', achievement: 'Legion Remix Raids', bronze: '30,000' },
  { name: 'Demonic Storage Chest', achievement: 'The Armies of Legionfall', bronze: '5,000' },
  { name: 'Fel Fountain', achievement: 'Timeworn Keystone Master', bronze: '30,000' },
  { name: 'Hanging Felsteel Cage', achievement: 'Highmountain Tribe', bronze: '20,000' },
  { name: 'Legion’s Holo-Communicator', achievement: 'Broken Isles Dungeoneer', bronze: '30,000' },
  { name: 'Legion Torture Rack', achievement: 'Heroic Broken Isles World Quests III', bronze: '10,000' },
  { name: 'Vertical Felsteel Chain', achievement: 'Defending the Broken Isles III', bronze: '5,000' },
  { name: 'Vrykul Lord’s Throne', achievement: 'Valarjar', bronze: '20,000' },
  { name: 'Sentinel’s Moonwing Gaze', achievement: 'The Wardens', bronze: '30,000' },
];

const tips = [
  'The first copy is free when you earn the achievement; buy extra copies with Bronze only after you place the first one.',
  'Prioritize “Broken Isles World Quests V” and “Timeworn Keystone Master” to unlock several premium pieces in one go.',
  'Horos now sells Illusion: Nightmare (100,000 Bronze) and Illusion: Chronos (80,000 Bronze); pick them up after Argus or keystone runs.',
  'Domelius in Dalaran sells duplicates—treat the Infinite Bazaar as a daily quartermaster stop to restock decor.',
];

const faqItems = [
  {
    question: 'How many copies can I buy after the first one?',
    answer: 'Unlimited. The achievement grants one free copy; every extra piece just costs Bronze—perfect for themed rooms with multiple braziers or chains.',
  },
  {
    question: 'What if I have no Timeworn Keystone experience?',
    answer: 'Phase 5’s Gift of Eternus buffs make low keys trivial. Push to Keystone Master to unlock Fel Fountain and grab your free decor copies.',
  },
  {
    question: 'Are decor pieces account-wide?',
    answer: 'Yes. Housing decor is warband-shared—one character unlocks the achievement and every character can place and purchase the items.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.housingDecorBanner,
  datePublished: '2025-12-02',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Housing Decor', path: canonicalPath },
]);

export default function HousingDecorPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.housingDecorBanner}
            alt="Legion Remix housing decor showcase"
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
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Housing Decor</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published December 2, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Fastest Unlock Path</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400">
              Bronze budget: hold 200k for the two illusions, spend the rest on big set pieces first, then finish with chains and torches.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
            <Image
              src={legionImages.housingDecorItems}
              alt="Legion-themed housing decor set"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="mt-3 text-xs text-gray-400">Achievement sample layout: stack fel braziers, cages, and the Legion communicator to create a “Legion laboratory” vibe.</p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-black">List</span>
            <div>
              <h2 className="text-3xl font-semibold text-white">Decor Unlocks & Bronze Costs</h2>
              <p className="text-sm text-gray-300">Achievements grant the first copy free; decide on Bronze duplicates after you place it.</p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {decorItems.map((item) => (
              <div key={item.name} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4">
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="text-sm text-gray-300 mt-1">Achievement: {item.achievement}</p>
                <p className="text-sm text-emerald-300 mt-1">Bronze: {item.bronze}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Two items are achievement-gated but not granted free: Small Legion Candle (2,500 Bronze, Nightfallen) and Vertical Felsteel Chain (5,000 Bronze, Defending the Broken Isles III).
          </p>
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
