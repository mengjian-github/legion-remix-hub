import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/phase-4-legion-remix-now-live';
const rawTitle = 'Phase 4 Is Live: Argus Eternal Content & Rewards for Legion Remix';
const rawDescription =
  'Argus Eternal opens all three Argus zones, the Seat of the Triumvirate dungeon, and Antorus, the Burning Throne with fresh titles, mounts, toys, pets, and weapon appearances for Legion Remix.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} Use this guide to plan your first 48 hours and your Bronze shopping list.`);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-11-18',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Phase Update',
  },
};

const quickHits = [
  { title: 'Zones', value: 'Krokuun, Mac’Aree, Antoran Wastes + Invasion Points & new Argus world quests' },
  { title: 'Dungeon', value: 'Seat of the Triumvirate (Heroic & Mythic) with Infinite Knowledge credit' },
  { title: 'Raid', value: 'Antorus, the Burning Throne — Violet Spellwing now farmable' },
  { title: 'Reputations', value: 'Army of the Light & Argussian Reach unlock new mounts, toys, and tabards' },
];

const contentBeats = [
  {
    heading: 'Argus unlock order',
    bullets: [
      'Start the Argus intro from Khadgar in Dalaran to unlock the Vindicaar hub and lightforged beacons.',
      'Complete the first Mac’Aree chapter to open Invasion Points for easy Bronze and reputation.',
      'Set your Vindicaar teleport beacons in each zone to shorten Antorus and Seat of the Triumvirate travel time.',
    ],
  },
  {
    heading: 'Endgame instances',
    bullets: [
      'Seat of the Triumvirate is available on Heroic and Mythic; clear once for the Infinite Knowledge point.',
      'Antorus is fully open — run LFR for fast Violet Spellwing attempts, then move to Normal+ for Felscorned weapon appearances.',
      'World bosses rotate across Argus; they count toward Argussian achievements and drop Bronze caches.',
    ],
  },
  {
    heading: 'Rewards to target first',
    bullets: [
      '[Name] of the Infinite Chaos title from Heroic Legion Remix Raids, and Felscorned Scythe of the Unmaker from Mythic.',
      'Violet Spellwing mount inside Antorus; bring a group even on LFR week one for deterministic drops.',
      'Bronze vendor haul: mana ray and talbuk mount set, Argus toys like Micro-Artillery Controller, and pets such as Fel-Afflicted Skyfin.',
    ],
  },
];

const shoppingList = [
  { name: 'Reins of the Fel-Scarred Mana Ray', note: 'Army of the Light / Bronze vendor' },
  { name: 'Reins of the Luminous Mana Ray', note: 'Argussian Reach / Bronze vendor' },
  { name: 'Longhorned Argussian Talbuk', note: 'Argussian Reach mount stable' },
  { name: 'Micro-Artillery Controller', note: 'Bronze toy — fun for Invasion Points' },
  { name: 'All-Seer’s Eye / Legion Communication Orb', note: 'Bronze toys themed for Argus' },
  { name: 'Fel-Afflicted Skyfin & Uuna’s Doll', note: 'Pet collectors — Argus dailies/Bronze' },
  { name: 'Bulwark of Mannoroth', note: 'Argus meta achievements; also purchasable for Bronze' },
  { name: 'Ensemble: Sargerei Commander’s Lightbound Regalia', note: 'Mythic Legion Remix Raids reward' },
];

const faqItems = [
  {
    question: 'Do I need to finish the Argus campaign on every character?',
    answer:
      'No. Complete it once to unlock beacons and skip steps on alts. Moratari in the Infinite Bazaar fast-forwards most of the campaign if you talk to him after phase launch.',
  },
  {
    question: 'Is LFR Antorus enough for Violet Spellwing?',
    answer:
      'Yes. LFR drops the Violet Spellwing in Remix. Normal+ runs still matter for higher ilvl loot and Mythic-exclusive appearances like the Felscorned Scythe.',
  },
  {
    question: 'Which reputation should I cap first?',
    answer:
      'Finish Argussian Reach first for the mana ray mounts, then Army of the Light for toys and tabards. World quests plus Invasion Points cover both while you queue for Antorus.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.phase4ArgusHero,
  datePublished: '2025-11-18',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Phase 4 Argus Eternal', path: canonicalPath },
]);

export default function Phase4LegionRemixPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.phase4ArgusHero}
            alt="Argus sky above Antorus in Legion Remix"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Phase 4 · Argus Eternal</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published November 18, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-4">
          {quickHits.map((hit) => (
            <div key={hit.title} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{hit.title}</p>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">{hit.value}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-black">Ⅰ</span>
            <div>
              <h2 className="text-3xl font-semibold text-white">Unlock Order</h2>
              <p className="text-sm text-gray-300">Secure beacons, travel routes, and one-time achievements first so dungeon/raid time is pure throughput.</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {contentBeats.map((beat) => (
              <div key={beat.heading} className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  <h3 className="text-lg font-semibold text-white">{beat.heading}</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-200">
                  {beat.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <div className="flex items-center gap-2 text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <p className="text-xs uppercase tracking-[0.2em]">Bronze Shopping</p>
            </div>
            <h2 className="text-2xl font-semibold text-white">Argus Reward Priorities</h2>
            <p className="text-sm text-gray-300">
              Focus Bronze on the highest-impact mounts, toys, and appearances first; chase collection fillers later.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {shoppingList.map((item) => (
                <div key={item.name} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-200">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-gray-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-6">
            <Image
              src={legionImages.sargereiCommander}
              alt="Sargerei Commander’s Lightbound Regalia ensemble"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <Image
              src={legionImages.scytheOfUnmaker}
              alt="Felscorned Scythe of the Unmaker appearance"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="text-xs text-gray-400">
              Finish LFR early for Violet Spellwing, then schedule Mythic pushes for ensemble and scythe unlocks before late-season rosters thin out.
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
