import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema } from '@/lib/schema';

const publishedDate = '2025-11-04';

const pageTitle = formatMetaTitle('Broken Shore Legionfall Campaign Guide – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Complete the Legionfall campaign quickly in Legion Remix: weekly building rotations, quest order, Sentinax farm tips, and rewards including Infinite Knowledge and class mounts.',
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/broken-shore-legionfall'),
  },
  openGraph: buildOpenGraphMetadata('/guides/broken-shore-legionfall', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Weekly cadence', href: '#weekly' },
  { label: 'Campaign chapters', href: '#chapters' },
  { label: 'Buildings', href: '#buildings' },
  { label: 'Sentinax farming', href: '#sentinax' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'FAQ', href: '#faq' },
];

const weeklyCadence = [
  { day: 'Day 1 – Tuesday', tasks: ['Complete “Armies of Legionfall” + “Assault on Broken Shore” intro.', 'Pick up “Defending Broken Isles” and start the first Legion Assault.', 'Donate War Supplies to begin building the Mage Tower.'] },
  { day: 'Day 3 – Thursday', tasks: ['Finish “Aalgen Point” and “Vengeance Point” chapters.', 'Complete mission table quests for “Strike Them Down”.', 'Break Sentinax beacons to progress “Mark of the Sentinax”.'] },
  { day: 'Day 5 – Saturday', tasks: ['Run Cathedral of Eternal Night for “Cathedral of Eternal Night: Altar of the Aegis”.', 'Complete Command Center world quests when active.', 'Follow the Treasure Hunt side chain (“Spiders, Huh?”, “Grave Robbin”, etc.).'] },
  { day: 'Day 7 – Monday', tasks: ['Finish “Self-Fulfilling Prophecy”, “Intolerable Infestation”, and “Champions of Legionfall”.', 'Turn in “Strike Them Down” after completing the Armies of Legionfall scenario.', 'Queue for Tomb of Sargeras to prep the achievement.'] },
];

const campaignChapters = [
  { title: 'Armies of Legionfall', description: 'Speak with Khadgar in Krasus’ Landing, then travel to Deliverance Point to unlock the Broken Shore hub.' },
  { title: 'Assault on Broken Shore', description: 'Optional scenario; you can skip after the cutscene. Grants 1,500 reputation and Bronze.' },
  { title: 'Defending Broken Isles', description: 'Complete Legion Assaults in each zone—see the Legion Assaults guide for timers.' },
  { title: 'Champions of Legionfall', description: 'Pick up from Maiev after recruiting your class hall champions.' },
  { title: 'Mark of the Sentinax', description: 'Farm Sentinax beacons and tokens near Felfire Pass; bring friends for faster tag rates.' },
  { title: 'Intolerable Infestation', description: 'Kill 100 demons and destroy Fel Spreaders—use Nether Disruptor buffs when active.' },
  { title: 'Cathedral of Eternal Night: Altar of the Aegis', description: 'Complete the dungeon on any difficulty to loot the Aegis keystone fragment.' },
  { title: 'Treasure Hunt Side Campaign', description: 'Six mini quests (Spiders, Huh? → The Motherlode) reward 750 Bronze and Treasure Maps.' },
  { title: 'Strike Them Down', description: 'Finish the Legionfall mission table chain culminating in a three-boss scenario.' },
];

const buildingTable = [
  {
    name: 'Mage Tower',
    bonuses: [
      'Access to Challenge quests and the Command Center teleport network.',
      '+10% reputation gain with Armies of Legionfall while active.',
      'Enables class mount scenario pickups once Breaching the Tomb is done.',
    ],
  },
  {
    name: 'Command Center',
    bonuses: [
      'Unlocks new invasions and Withered Army Training-style mini events.',
      'Grants a zone-wide buff such as Fel Treasure Scent (extra chest spawns).',
      'Offers elite missions with bonus Bronze and Infinite Artifact power.',
    ],
  },
  {
    name: 'Nether Disruptor',
    bonuses: [
      'Provides the Ward of the Infinite buff (immunity to certain lethal mechanics).',
      'Activates world boss Sentinax portals with better beacon drop rates.',
      'Adds an extra Seal of Broken Fate to the weekly cache, costing 500 War Supplies.',
    ],
  },
];

const sentinaxTips = [
  'Farm at Felfire Pass (55, 51). Chain open green and blue beacons for constant portal spawns.',
  'Use the Command Center’s “Command Center Reinforcements” buff to double token drops.',
  'Group finder listings such as “Sentinax farm” help stack 40+ players and finish in under five minutes.',
];

const rewardList = [
  'Breaching the Tomb achievement (1 Infinite Knowledge rank, 5,000 Bronze).',
  'Armies of Legionfall reputation for Netherlight Crucible transmog unlocks.',
  'Class mount questlines for all classes once “Champions of Legionfall” is complete.',
  'Access to the Sentinax legendary caches and Broken Shore world boss rotation.',
];

const faqItems = [
  {
    question: 'How long does Breaching the Tomb take in Legion Remix?',
    answer: 'Expect 11 days from start to finish because new quest chapters unlock each daily reset. Legion Remix maintains the original cadence.',
  },
  {
    question: 'Do I need War Supplies from live servers?',
    answer: 'No. Legion Remix uses bronze-purchased War Supply crates (1,000 Bronze) and world quest drops. You can also salvage tokens from Sentinax portals.',
  },
  {
    question: 'What if I skipped the Assault on Broken Shore scenario?',
    answer:
      'Skipping is fine. The quest auto-completes after the short cutscene and still grants the reputation and Bronze rewards. You can rerun it later from Khadgar if you want the cinematic.',
  },
];

export default function BrokenShoreLegionfallGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Broken Shore Legionfall Campaign Guide – Legion Remix 2025',
    description: pageDescription,
    url: buildCanonicalUrl('/guides/broken-shore-legionfall'),
    imageUrl: legionImages.legionfallCampaignKhadgar,
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Broken Shore Legionfall', path: '/guides/broken-shore-legionfall' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="space-y-6">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
            ← Back to guides hub
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Phase 3 – Legionfall
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white">Broken Shore Legionfall Campaign Guide</h1>
            <p className="mt-3 text-gray-300">
              Knock out Breaching the Tomb in Legion Remix with a daily checklist, building priority tips, and Sentinax farming shortcuts. This guide trims the timeline so every alt unlocks class mounts before Argus.
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

        <section id="weekly" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Weekly Cadence</h2>
          <p className="text-sm text-gray-300">Follow this cadence to finish Breaching the Tomb without waiting on random events.</p>
          <div className="space-y-4">
            {weeklyCadence.map((entry) => (
              <div key={entry.day} className="rounded-3xl border border-gray-800 bg-gray-900/60 p-5 space-y-2">
                <p className="text-base font-semibold text-emerald-300">{entry.day}</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  {entry.tasks.map((task) => (
                    <li key={task} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="chapters" className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-white">Campaign Chapters</h2>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-gray-800">
            <Image
              src={legionImages.legionfallCampaignKhadgar}
              alt="Khadgar briefing the Armies of Legionfall on the Broken Shore"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3">
            {campaignChapters.map((chapter) => (
              <div key={chapter.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4">
                <p className="text-sm font-semibold text-white">{chapter.title}</p>
                <p className="text-sm text-gray-300 mt-1">{chapter.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="buildings" className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-white">Legionfall Buildings</h2>
          <p className="text-sm text-gray-300">Donate 100 War Supplies per building. The rotation lasts 3 days per structure.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {buildingTable.map((building) => (
              <div key={building.name} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4 space-y-2">
                <p className="text-base font-semibold text-emerald-300">{building.name}</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  {building.bonuses.map((bonus) => (
                    <li key={bonus} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="sentinax" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Sentinax Farming Tips</h2>
          <p className="text-sm text-gray-300">“Mark of the Sentinax” is the only time-gated quest. Use these tricks to finish in under 10 minutes.</p>
          <ul className="space-y-3 text-sm text-gray-300">
            {sentinaxTips.map((tip) => (
              <li key={tip} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="rewards" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Rewards</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {rewardList.map((reward) => (
              <li key={reward} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>{reward}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mt-12 space-y-3">
          <h2 className="text-3xl font-semibold text-white">FAQ</h2>
          {faqItems.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
              <p className="text-base font-semibold text-emerald-300">{faq.question}</p>
              <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
