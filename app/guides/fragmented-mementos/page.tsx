import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-31';

const pageTitle = formatMetaTitle('Fragmented Memento Farming Guide – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Chart every reliable Fragmented Memento source in Legion Remix: daily raids, rares, emissaries, Heroic World Tier farming, and Lindormi keystone loops.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/fragmented-mementos'),
  },
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Currency Guide',
  },
};

const quickLinks = [
  { label: 'What they are', href: '#what-are-fragmented-mementos' },
  { label: 'Core sources', href: '#core-sources' },
  { label: 'Heroic World Tier', href: '#heroic-world-tier' },
  { label: 'Keystone loop', href: '#keystone-loop' },
  { label: 'Daily checklist', href: '#daily-checklist' },
  { label: 'FAQ', href: '#faq' },
];

const sourceBuckets = [
  {
    title: 'Raids & Mega-Dungeons',
    description:
      'Every raid boss (LFR, Normal, Heroic) and both halves of Return to Karazhan award a Fragmented Memento per clear each day in Remix.',
    image: legionImages.fragmentedMementoRaid,
    alt: 'Loot window showing Fragmented Memento from raids',
    tips: [
      'Run Emerald Nightmare, Trial of Valor, and The Nighthold daily until Legionfall unlocks Tomb of Sargeras.',
      'Set stone statues at raid entrances so alts can tag a single boss for the daily Memento.',
      'Use Violet Spellwing pug nights to double dip Bronze and Mementos with one run.',
    ],
  },
  {
    title: 'Broken Shore & World Rares',
    description:
      'Legion rares and world bosses drop Mementos once per day and pay out larger bundles while Heroic World Tier is active.',
    image: legionImages.fragmentedMementoRare,
    alt: 'Broken Shore rare dropping Fragmented Memento',
    tips: [
      'Rotate the Sentinax events and Legion assaults during Phase 3 – Legionfall to keep rares on respawn.',
      'Add Suramar and Argus rare trains when Phase 4 launches; the weekly Argus raid quest guarantees a bundle.',
      'Use group finder shards that list “Memento farm” to chain rares without waiting for respawns.',
    ],
  },
  {
    title: 'Emissaries & Infinite Research',
    description:
      'Champion’s Insignia caches now have a chance to include Fragmented Mementos, letting casual players farm them while filling reputation bars.',
    image: legionImages.fragmentedMementoReward,
    alt: 'Fragmented Memento reward tooltip',
    tips: [
      'Turn in every emissary before Tuesday reset; the Nightfallen and Legionfall caches have the highest odds.',
      'Complete the Infinite Research daily for Cache of Infinite Power—Blizzard boosted the drop rate on October 21.',
      'Special assignments from the Infinite’s Armory guarantee one Memento packet per completion.',
    ],
  },
];

const keystoneTips = [
  {
    title: 'Grab a key from Lindormi',
    description:
      'Speak with Lindormi at the Infinite Bazaar for a free Timeworn Keystone. After finishing any dungeon, she hands you the next level—no Mythic+ stone trading required.',
  },
  {
    title: 'Farm low tiers solo',
    description:
      'If you only need Mementos, downgrade the key with Lindormi and blitz Tier 2–4 runs. Each completion awards a bundle on top of your Bronze cache.',
  },
  {
    title: 'Push higher tiers for bonuses',
    description:
      'Tier 10, 20, and 30 completions award larger Memento piles alongside Empowered affix cosmetics. Chain boosts during Turbo Boost weekends.',
  },
];

const heroWorldTierCallouts = [
  'Toggle Heroic World Tier before tagging rares—Memento drops scale with world tier after the October 21 hotfix.',
  'Pair the Sentinax farming buff with Heroic World Tier for rapid token gains while you rebuild Legionfall defenses.',
  'Keep Strange Humming Crystals handy; the speed boost lets you hit more spawn points during the daily lockout window.',
];

const faq = [
  {
    question: 'How many Fragmented Mementos do I need?',
    answer:
      'Expect to spend 600 per week on Infinite Artifact catch-up and cosmetic caches once Phase 4 begins. Stockpile at least 3,000 before December to buy the remaining achievement cosmetics.',
  },
  {
    question: 'Do higher difficulty raids drop more Mementos?',
    answer:
      'No—each boss awards one Fragmented Memento per day regardless of difficulty. Focus on the fastest clears unless you need gear.',
  },
  {
    question: 'Will Mementos carry to retail servers?',
    answer:
      'Fragmented Mementos convert into Bronze when the event ends. Spend them on Remix-exclusive rewards before January 19, 2026.',
  },
];

export default function FragmentedMementosGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Fragmented Memento Farming Guide – Legion Remix 2025',
    description: pageDescription,
    url: buildCanonicalUrl('/guides/fragmented-mementos'),
    imageUrl: legionImages.fragmentedMementoRaid,
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Fragmented Mementos', path: '/guides/fragmented-mementos' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-6">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
            ← Back to guides hub
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Currency & Utilities
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white">Fragmented Memento Farming Guide</h1>
            <p className="mt-3 text-gray-300">
              Farm the Fragmented Mementos of Epoch Challenges that fuel Infinite Knowledge catch-up, Bronze refunds, and late-season cosmetics. This checklist merges the October 21 hotfix changes with Legionfall’s keystone loop.
            </p>
            <p className="text-xs text-gray-500 mt-2">Updated {publishedDate}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-gray-700 bg-gray-900/60 px-4 py-2 uppercase tracking-wide text-gray-300 hover:border-emerald-500 hover:text-emerald-200 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="what-are-fragmented-mementos" className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">What are Fragmented Mementos?</h2>
          <p className="text-sm text-gray-300">
            Fragmented Mementos of Epoch Challenges replace the old Mage Tower currency. In Legion Remix they convert directly into Bronze, Artifactum Sand, and Infinite Knowledge once you unlock late-phase research. Because most sinks arrive during Phases 3 and 4, the smartest players start banking them the moment Phase 2 launches.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="md:w-2/3 space-y-3 text-sm text-gray-300">
                <p>Expect to earn:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>6–8 per day from raids and Return to Karazhan clears.</li>
                  <li>4–6 per day from rares and emissary caches once Heroic World Tier is active.</li>
                  <li>10–20 per hour by looping downgraded Timeworn Keystones with Lindormi.</li>
                </ul>
              </div>
              <div className="relative md:w-1/3 h-32">
                <Image
                  src={legionImages.fragmentedMementoReward}
                  alt="Fragmented Memento tooltip"
                  fill
                  className="object-cover rounded-xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="core-sources" className="space-y-8">
          <h2 className="text-3xl font-semibold text-white">Primary Sources</h2>
          <p className="text-sm text-gray-300">
            Tackle these three buckets first. Between them you can generate enough Mementos for research upgrades without grinding repeat dungeons for hours.
          </p>
          <div className="space-y-6">
            {sourceBuckets.map((bucket) => (
              <article key={bucket.title} className="grid gap-6 rounded-2xl border border-gray-800 bg-gray-900/60 p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{bucket.title}</h3>
                  <p className="text-sm text-gray-300">{bucket.description}</p>
                  <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                    {bucket.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-gray-800">
                  <Image
                    src={bucket.image}
                    alt={bucket.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="heroic-world-tier" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Heroic World Tier Boosts</h2>
          <div className="bg-gray-900/60 border border-purple-700/40 rounded-2xl p-6 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
              {heroWorldTierCallouts.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
            <div className="relative overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={legionImages.fragmentedMementoHeroicBuff}
                alt="Heroic World Tier loot screen showing extra Fragmented Memento"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="keystone-loop" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Timeworn Keystone Loop</h2>
          <p className="text-sm text-gray-300">
            After the October 21 hotfix, Lindormi’s keystone service became the fastest repeatable farm. Downgrade your key for solo speed runs or climb to Tier 30 for the weekly achievements.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {keystoneTips.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative h-48 overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={legionImages.lindormiInfiniteBazaar}
                alt="Lindormi handing out Timeworn Keystones at the Infinite Bazaar"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-xl border border-gray-800">
              <Image
                src={legionImages.fragmentedMementoKeystoneTier2}
                alt="Scoreboard showing Fragmented Memento rewards from low-tier keystones"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        <section id="daily-checklist" className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Daily Checklist</h2>
          <p className="text-sm text-gray-300">
            Slot these tasks around your Bronze farming loop to cap Memento income with minimal extra time.
          </p>
          <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
            <li>Clear Emerald Nightmare (quickest route) and Trial of Valor every day while Phase 1 & 2 are active.</li>
            <li>Tag four Legionfall or Suramar rares on Heroic World Tier after the daily reset.</li>
            <li>Complete the current emissary, spend the Insignia, and open the cache before swapping characters.</li>
            <li>Run at least one downgraded Timeworn Keystone to keep Lindormi handing out replacement stones.</li>
            <li>Visit Deliverance Point construction tables; each mission can hide a Memento bundle among the war supplies.</li>
          </ul>
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
                <h3 className="text-lg font-semibold text-emerald-200">{item.question}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
