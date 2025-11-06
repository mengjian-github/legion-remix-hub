import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema } from '@/lib/schema';

const publishedDate = '2025-11-04';

const pageTitle = formatMetaTitle('Legion Assaults Guide – Phase 3 Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Track Legion Assault spawn windows, quest stages, and rewards for Azsuna, Val’sharah, Highmountain, and Stormheim during Phase 3 Legion Remix.',
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/legion-assaults'),
  },
  openGraph: buildOpenGraphMetadata('/guides/legion-assaults', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Spawn tracker', href: '#schedule' },
  { label: 'Assault stages', href: '#stages' },
  { label: 'Zone walkthroughs', href: '#zones' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'FAQ', href: '#faq' },
];

const assaultSchedule = [
  { zone: 'Azsuna', reset: 'Nov 4, 08:00 PST (16:00 UTC)', note: 'Opens the first Legion Assault after Phase 3 launch.' },
  { zone: 'Val’sharah', reset: 'Nov 5, 02:00 PST (10:00 UTC)', note: 'Pairs with a Withered Army Training turbo boost.' },
  { zone: 'Highmountain', reset: 'Nov 5, 20:00 PST (Nov 6 04:00 UTC)', note: 'Recommended for Sentinax token farming.' },
  { zone: 'Stormheim', reset: 'Nov 6, 14:00 PST (22:00 UTC)', note: 'Completes Defending the Broken Isles I for most players.' },
];

const assaultStages = [
  { title: 'Stage 1 – World Quests', description: 'Complete four assault-tagged world quests in the target zone. Use the map filter to see the green Legion icon.' },
  { title: 'Stage 2 – Mini Scenario', description: 'Follow the quest marker to a named NPC (Prince Farondis, Tyrande, Lasan, or Thorim) for an instanced encounter.' },
  { title: 'Stage 3 – Final Scenario', description: 'Queue for the “Battle for …” scenario via the quest NPC. Normal difficulty is sufficient for achievements and Bronze.' },
  { title: 'Stage 4 – Turn-in', description: 'Head back to the local faction leader for 1,500 reputation, 1,000 Bronze, and Defending the Broken Isles credit.' },
];

const zoneGuides = [
  {
    name: 'Azsuna',
    quests: [
      { title: 'Assault on Azsuna', tip: 'Complete four assault world quests between Felblaze Ingress and Illidari Stand.' },
      { title: 'Presence of Power', tip: 'Rescue imprisoned Nightfallen, destroy wyrmtongue caches, and clear Felguard around Nar’thalas.' },
      { title: 'A Conduit No More', tip: 'Kill the named Pit Lord inside Ley-Ruins of Zarkhenar; watch for the channel interrupt mechanic.' },
      { title: 'Battle for Azsuna', tip: 'Drake-riding shooter stage followed by a ground assault; interrupt Dread Vizier Gra’battre’s DoT.' },
    ],
  },
  {
    name: 'Val’sharah',
    quests: [
      { title: 'Assault on Val’sharah', tip: 'Focus on world quests near Temple of Elune; Sentinax portals spawn along the river.' },
      { title: 'Countering the Legion Assault', tip: 'Hunt Illidari caches and dismantle fel artillery before they shell Lorlathil.' },
      { title: 'Life Finds a Way...To Die!', tip: 'Use the zone buffs from Ysera’s Tears to break demon shields quickly.' },
      { title: 'Battle for Val’sharah', tip: 'Protect Malfurion during the treant escort; save burst for the final Fel Lord pair.' },
    ],
  },
  {
    name: 'Highmountain',
    quests: [
      { title: 'Assault on Highmountain', tip: 'Ride the grappling hooks near Thunder Totem to save time moving between WQs.' },
      { title: 'Holding Our Ground', tip: 'Rally injured protectors and destroy crystals—use the Skyhorn totem buff for cleave.' },
      { title: 'Battle for Highmountain', tip: 'Skyhorn ballista stage into a ground push. Use the harpoon ability to interrupt Helya’s minions.' },
    ],
  },
  {
    name: 'Stormheim',
    quests: [
      { title: 'Assault on Stormheim', tip: 'World quests center around Shield’s Rest and Haustvald; gliders cut 3–4 minutes per lap.' },
      { title: 'The Storm’s Fury', tip: 'Ride the lightning buff to kite Felstorms while freeing captive vrykul.' },
      { title: 'Battle for Stormheim', tip: 'Ends with a proto-drake flight—spam the breath ability to break fel bombardments.' },
    ],
  },
];

const rewardList = [
  '1,000 Bronze + bonus Bronze from world quests tagged by the assault.',
  '1,500 reputation split between the zone’s faction and Armies of Legionfall.',
  'Defending the Broken Isles I & II achievement progress (Infinite Knowledge source).',
  'Cache of Legion Treasures (scales to item level 880+ gear for Timerunners).',
];

const faqItems = [
  {
    question: 'How often do Legion Assaults spawn?',
    answer:
      'They rotate every 18 hours in Legion Remix. Expect four assaults per reset week, giving two shots at Defending the Broken Isles credit before maintenance.',
  },
  {
    question: 'Do alts need to finish the full scenario?',
    answer:
      'Yes—each character must complete the three stages to earn the reputation, Bronze, and achievement credit. You can, however, skip the intro cinematic.',
  },
  {
    question: 'Can I queue the final scenario later?',
    answer:
      'No. You must complete all stages while the assault is active. If you disconnect, talk to the original quest giver to re-queue before the timer expires.',
  },
];

export default function LegionAssaultsGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Legion Assaults Guide – Phase 3 Legion Remix 2025',
    description: pageDescription,
    url: buildCanonicalUrl('/guides/legion-assaults'),
    imageUrl: legionImages.legionAssaultsBrokenIslesMap,
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Legion Assaults', path: '/guides/legion-assaults' },
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
            <h1 className="mt-4 text-4xl font-bold text-white">Legion Assaults Guide</h1>
            <p className="mt-3 text-gray-300">
              Keep Legionfall’s frontline secure by rotating Legion Assaults across the Broken Isles. These events deliver Bronze, reputation, and Infinite Knowledge in one pass.
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

        <section id="schedule" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Spawn Tracker</h2>
          <p className="text-sm text-gray-300">Plan around the 18-hour cycle so you can finish Defending the Broken Isles I & II within a week.</p>
          <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {assaultSchedule.map((item) => (
                <div key={item.zone} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
                  <p className="text-lg font-semibold text-emerald-300">{item.zone}</p>
                  <p className="text-sm text-gray-200">{item.reset}</p>
                  <p className="mt-2 text-xs text-gray-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stages" className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-white">Assault Stages</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {assaultStages.map((stage) => (
              <div key={stage.title} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-base font-semibold text-emerald-300">{stage.title}</p>
                <p className="mt-2 text-sm text-gray-300">{stage.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="zones" className="mt-12 space-y-8">
          <h2 className="text-3xl font-semibold text-white">Zone Walkthroughs</h2>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-gray-800">
            <Image
              src={legionImages.legionAssaultsBrokenIslesMap}
              alt="Broken Isles map highlighting Legion Assault locations"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {zoneGuides.map((zone) => (
              <div key={zone.name} className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-emerald-300">{zone.name}</h3>
                </div>
                <div className="space-y-3">
                  {zone.quests.map((quest) => (
                    <div key={quest.title} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
                      <p className="text-sm font-semibold text-white">{quest.title}</p>
                      <p className="text-sm text-gray-300 mt-1">{quest.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="rewards" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Rewards & Progress</h2>
          <p className="text-sm text-gray-300">Each completed assault hands out the following loot bundle:</p>
          <ul className="space-y-3 text-sm text-gray-300">
            {rewardList.map((reward) => (
              <li key={reward} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>{reward}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-base font-semibold text-emerald-300">{faq.question}</p>
                <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
