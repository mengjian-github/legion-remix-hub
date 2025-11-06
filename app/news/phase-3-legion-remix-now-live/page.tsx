import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/phase-3-legion-remix-now-live';
const rawTitle = 'Phase 3 of Legion Remix Is Live: Broken Shore, Legion Assaults, and Tomb of Sargeras';
const rawDescription =
  'Phase 3 – Legionfall unlocks the Broken Shore campaign, Legion Assaults, the Cathedral of Eternal Night dungeon, Tomb of Sargeras raid, class mount finales, and a fresh wave of Bronze vendor rewards.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} Track every unlock, new reward, and Infinite Knowledge source before Argus goes live.`);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl(canonicalPath),
  },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-11-04',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Patch Breakdown',
  },
};

const unlockHighlights = [
  {
    title: 'Broken Shore & Legionfall Campaign',
    details: [
      'Pick up “Armies of Legionfall” from Khadgar in Deliverance Point to unlock world quests, construction projects, and the Sentinax beacons.',
      'Complete the weekly building cycle (Mage Tower, Command Center, Nether Disruptor) to unlock Legionfall buffs and teleporters.',
      'Finishing the Breaching the Tomb chapters awards one Infinite Knowledge rank and grants access to class mount quests.',
    ],
  },
  {
    title: 'Legion Assaults Return',
    details: [
      'Assaults rotate through Azsuna, Val’sharah, Highmountain, and Stormheim every 18 hours—complete all four stages for Defending the Broken Isles I & II achievements.',
      'World quests spawned by an active assault award 1,500 reputation with the assaulted zone’s faction plus bonus Bronze.',
      'Queue for the scenario finale from the final quest NPC; Normal difficulty is enough for the Infinite Knowledge credit.',
    ],
  },
  {
    title: 'Dungeon & Raid Tier',
    details: [
      'Cathedral of Eternal Night is available on Heroic and Mythic; Heroic completion grants the “Heroic: Cathedral of Eternal Night” Infinite Knowledge point.',
      'Tomb of Sargeras launches with all wings open. LFR wings award 610+ item level gear while Normal+ drops upgrade to Infinite item level 880+. ',
      'Broken Shore world bosses (e.g., Brutallus, Occularus) rotate weekly and now drop Infinite Knowledge credit for your first kill.',
    ],
  },
];

const rewardBullets = [
  'Class Mounts: finishing the class campaign + Champions of Legionfall now grants the original Legion mount plus a Felscorned remix variant.',
  'Bronze Vendors: Pilfered Sweeper (toy), Sira’s Extra Cloak (toy), Ageless Bronze Drake & Bronze Proto-Whelp & Orphaned Felbat & Scraps (pets) are active.',
  'Weapons: Felscorned Ellemayne, Fallen King’s Corrupted Blades, Felscorned Shalla’tor, Felscorned Shalamayne, and Hammer of Vigilance can be purchased for Bronze.',
];

const infiniteKnowledgeSources = [
  { title: 'Breaching the Tomb', description: 'Complete the full Legionfall campaign chapters (takes ~11 days of weekly resets).' },
  { title: 'Defending the Broken Isles I & II', description: 'Finish Legion Assaults in each of the four zones twice; track via the world map icons.' },
  { title: 'Heroic: Cathedral of Eternal Night', description: 'One-time achievement for clearing Cathedral on Heroic difficulty.' },
  { title: 'Tomb of Sargeras', description: 'Defeat Kil’jaeden on any difficulty (LFR counts) to earn the achievement.' },
  { title: 'Broken Shore World Bosses', description: 'Kill any of the weekly Broken Shore world bosses (Brutallus, Malificus, etc.).' },
];

const timeline = [
  { date: 'November 4, 2025', event: 'Phase 3 – Legionfall launches worldwide with Broken Shore, Legion Assaults, Cathedral of Eternal Night, and Tomb of Sargeras.' },
  { date: 'November 5–10, 2025', event: 'Weekly building rotations begin; Mage Tower is first up, unlocking Command Center on Nov 7 and Nether Disruptor on Nov 9.' },
  { date: 'November 11, 2025', event: 'Second Legion Assault rotation completes Defending the Broken Isles I for most players; schedule additional alts to wrap the meta.' },
  { date: 'November 17, 2025', event: 'Phase 3 concludes; expect a 24-hour buffer before Argus (Phase 4) activates on November 18.' },
];

const faqItems = [
  {
    question: 'Do I need to finish Breaching the Tomb on every character?',
    answer:
      'No. Completing the entire Legionfall campaign once grants Breaching the Tomb account-wide; alts only need the intro quests to unlock class mount storylines.',
  },
  {
    question: 'Does LFR Tomb of Sargeras count for Infinite Knowledge?',
    answer: 'Yes. Any difficulty works—LFR is the fastest method if your Bronze plan is focused elsewhere.',
  },
  {
    question: 'Can I buy the new Bronze vendor rewards without finishing class quests?',
    answer:
      'Yes. Toys, pets, and weapon transmogs are available for straight Bronze costs. Only the class mounts and Felscorned ensemble recolors require the questlines.',
  },
];

const faqSchema = createFAQSchema(
  faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })),
);

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.phaseTimeline ?? '/images/news/2025-11-04-legionfall-phase-3.jpg',
  datePublished: '2025-11-04',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Phase 3 Legion Remix', path: canonicalPath },
]);

export default function Phase3LegionRemixPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0">
          <Image
            src="/images/news/2025-11-04-legionfall-phase-3.jpg"
            alt="Timerunners preparing to enter the Cathedral of Eternal Night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to Legion Remix News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Phase Update</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published November 4, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">Phase 3 Overview</h2>
            <p className="text-sm text-gray-300">
              Legionfall is the penultimate chapter before Argus. Expect 11 days of Broken Shore chapters, a heavy focus on class mount finales, and repeatable Legion Assaults that grant Bronze, reputation, and Infinite Knowledge.
            </p>
            <ul className="space-y-4 text-sm text-gray-200">
              {unlockHighlights.map((section) => (
                <li key={section.title} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
                  <p className="text-base font-semibold text-emerald-300">{section.title}</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-gray-800 bg-gray-950/60 p-5">
            <h3 className="text-lg font-semibold text-white">New Rewards</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {rewardBullets.map((reward) => (
                <li key={reward} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                  <span>{reward}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">All items require Bronze; toys/pets cost 5,000 each while weapon transmogs are 35,000 Bronze.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Infinite Knowledge Checklist</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {infiniteKnowledgeSources.map((source) => (
              <div key={source.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 space-y-2">
                <h3 className="text-lg font-semibold text-emerald-300">{source.title}</h3>
                <p className="text-sm text-gray-300">{source.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Legionfall Timeline</h2>
          <div className="space-y-4">
            {timeline.map((entry) => (
              <div key={entry.date} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4 flex flex-col gap-1">
                <p className="text-sm uppercase tracking-widest text-emerald-300">{entry.date}</p>
                <p className="text-base text-gray-200">{entry.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-4">Class Mount & Campaign Prep</h2>
          <p className="text-sm text-gray-300 mb-6">
            Each class mount requires your original Order Hall campaign, the Champions of Legionfall quest, and the Broken Shore intro completed on that character. Use the class-specific guides to track the remaining chapters and mission table requirements.
          </p>
          <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative h-48 w-full md:w-1/2">
              <Image
                src={legionImages.felClassMounts}
                alt="Fel-tinted class mounts in Legion Remix"
                fill
                className="object-cover rounded-2xl border border-gray-800"
              />
            </div>
            <div className="md:w-1/2 space-y-3 text-sm text-gray-300">
              <p>
                If you skipped Phase 2, start with Suramar Insurrection chapters to unlock the Legionfall campaign prompt. Then swap to your class Order Hall for the unique finale scenario.
              </p>
              <Link href="/guides/class-mounts" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 text-sm font-semibold">
                Class Mount Guide
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414L9.414 17l-4.707 1.414A1 1 0 013.879 17.293L5.293 12l9.414-9.414a1 1 0 011.414 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-base font-semibold text-emerald-300">{faq.question}</p>
                <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-800 bg-gray-950/60 p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Next Steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            <li>Complete the first two Legionfall quests on every alt you plan to finish before Garrisons open on November 18.</li>
            <li>Schedule Legion Assaults: track spawn windows via the in-game calendar or our Discord reminders.</li>
            <li>Save at least 150,000 Bronze for weapon transmogs and vendor refreshes before Phase 4 shakes up the catalog.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
