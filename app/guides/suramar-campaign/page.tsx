import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-29';

const canonicalPath = '/guides/suramar-campaign';
const pageTitle = formatMetaTitle('Suramar Quest Campaign Guide – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Complete the Suramar storyline in Legion Remix with chapter summaries, Ancient Mana checkpoints, Insurrection unlock requirements, and teleporter routing tips.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Campaign overview', href: '#overview' },
  { label: 'Good Suramaritan chapters', href: '#good-suramaritan' },
  { label: 'Insurrection roadmap', href: '#insurrection' },
  { label: 'Teleporter network', href: '#teleporters' },
  { label: 'Rewards & achievements', href: '#rewards' },
];

type Chapter = { title: string; summary: string; manaTip?: string };

const goodSuramaritanChapters: Chapter[] = [
  {
    title: 'Chapter 1 – Nightfall',
    summary:
      'Rescue First Arcanist Thalyssra, stabilize Shal’Aran, and unlock Ancient Mana tracking. Expect to farm 400 Ancient Mana for early feedings.',
    manaTip: 'Collect Mana nodes around the Waning Crescent to keep Thalyssra, Oculeth, and Valtrois sated.',
  },
  {
    title: 'Chapter 2 – Arcanist Kel’danath',
    summary:
      'Recover Kel’danath’s journal and followers to restore teleportation research. Introduces the Arcane Anomaly encounters scattered across Suramar.',
  },
  {
    title: 'Chapter 3 – Chief Telemancer Oculeth',
    summary:
      'Locate Oculeth in Felsoul Hold, free him from legion experiments, and reopen the first Shal’Aran teleporter pads.',
    manaTip: 'Invest 50 Ancient Mana per telemancy beacon to unlock Shal’Aran ⇄ Falanaar travel.',
  },
  {
    title: 'Chapter 4 – Masquerade',
    summary:
      'Earn the permanent Nightfallen disguise, allowing you to explore Suramar City without constant combat. Opens city-based Ancient Mana nodes.',
  },
  {
    title: 'Chapter 5 – Feeding Shal’Aran',
    summary:
      'Tour Suramar’s refugee camps, gather food, and expand the Ancient Mana cap via “Feeding Shal’Aran” and “The Valewalker’s Burden”.',
    manaTip: 'Cap rises to 800 by the end of this chapter—loot Tel’anor for hidden caches.',
  },
  {
    title: 'Chapter 6 – The Light Below & An Ancient Gift',
    summary:
      'Restore elven relics and defend the Arcan’dor sprout. These quests complete the Arcan’dor storyline and set up Withered Army Training.',
  },
  {
    title: 'Chapter 7 – The Waning Crescent',
    summary:
      'Infiltrate the Waning Crescent district, sabotage Legion supply lines, and earn the “Masquerade” achievement if you kept citizens fed.',
  },
  {
    title: 'Chapter 8 – Blood and Wine',
    summary:
      'Assist Silgryn and Ly’leth Lunastre with vineyard politics. Completing “How It’s Made: Arcwine” adds another 200 Ancient Mana capacity.',
  },
  {
    title: 'Chapter 9 – Statecraft',
    summary:
      'Broker alliances with influential Nightborne houses. The “Make Your Mark” quest pushes the Ancient Mana cap to the 1,800 range.',
  },
  {
    title: 'Chapter 10 – A Growing Crisis',
    summary:
      'Protect Suramar citizens from Legion shock troops, culminating in a large-scale fight outside the Nighthold gates.',
  },
  {
    title: 'Chapter 11 – A Change of Seasons',
    summary:
      'Wrap up seasonal festivities across Meredil. Completing this arc grants the Good Suramaritan meta achievement.',
  },
  {
    title: 'Chapter 12 – Breaking The Lightbreaker',
    summary:
      'Disable the Legion’s lightbreaker weaponry inside Felsoul Hold. Serves as the bridge to Moon Guard Stronghold quests.',
  },
  {
    title: 'Chapter 13 – Moon Guard Stronghold',
    summary:
      'Recruit the stranded Moonguard battlemages. Unlocks the Highmist Terrace teleporter and additional Ancient Mana treasures.',
    manaTip: 'Loot the Arcane Power Unit for the Infinite Stone capacity item (35.6, 12.1).',
  },
  {
    title: 'Chapter 14 – Tidying Tel’anor',
    summary:
      'Purge the Withered from Tel’anor sanctuaries. Most Ancient Mana treasures sit here—complete it before your first Withered Army Training run.',
  },
  {
    title: 'Chapter 15 – Eminent Grow-main',
    summary:
      'Help the Lunastre household recover from sabotage and reopen the promenade markets. Sets up Statecraft options during Insurrection.',
  },
  {
    title: 'Chapter 16 – Jandvik’s Jarl',
    summary:
      'Free the vrykul allies of Suramar, tying the storyline into Stormheim world quests and unlocking additional Champion followers.',
  },
];

const insurrectionArcs = [
  {
    title: 'Lockdown',
    summary:
      'Phase 2 opener (October 21, 2025). Free imprisoned citizens and rally guards in the Waning Crescent. Grants immediate Infinite Knowledge rank credit.',
  },
  {
    title: 'Missing Persons',
    summary:
      'Track down dissidents hidden across Suramar City. Completing this arc awards large Nightfallen reputation bumps.',
  },
  {
    title: 'Statecraft',
    summary:
      'Reinforce alliances with noble houses and finalise Ly’leth Lunastre’s infiltration plan. Several quests reward Ancient Mana caches.',
  },
  {
    title: 'A Growing Crisis',
    summary:
      'Defend Shal’Aran from Legion counterattacks, then escort civilians to safe houses. Unlocks additional telemancy beacons.',
  },
  {
    title: 'A Change of Seasons',
    summary:
      'Step through seasonal festivals to secure civilian morale. Pairs with Kaldorei Queen achievement progress.',
  },
  {
    title: 'Breaking the Nighthold',
    summary:
      'Launch the Nightfallen assault on the Nighthold and queue Return to Karazhan/Twisting Nether dungeons for the related achievements.',
  },
  {
    title: 'March on Suramar',
    summary:
      'Advance alongside Tyrande Whisperwind. Expect multi-stage outdoor fights culminating outside the palace bridge.',
  },
  {
    title: 'Elisande’s Retort',
    summary:
      'Face off against Advisor Melandrus and the Council of Captains while surging through the Nighthold staging grounds.',
  },
  {
    title: 'As Strong As Our Will',
    summary:
      'Finale that opens the Nighthold raid for story completion. Awards the “Insurrection” achievement and unlocks the Kaldorei Queen’s Royal Vestments ensemble vendor.',
  },
];

const teleporterNotes = [
  {
    name: 'Shal’Aran → Falanaar',
    tip: 'Costs 50 Ancient Mana. Crucial for Withered Army Training—grants direct access to the training scenario and Shattered Locus.',
  },
  {
    name: 'Shal’Aran → Tel’anor',
    tip: 'Unlocks after “Tidying Tel’anor”. Enables rapid treasure loops to refill Ancient Mana reserves.',
  },
  {
    name: 'Shal’Aran → Moon Guard Stronghold',
    tip: 'Complete the “Moon Guard Stronghold” arc and feed Thalyssra to keep the portal open.',
  },
  {
    name: 'Shal’Aran → Lunastre Estate',
    tip: 'Rewarded near the end of Statecraft. Essential for Insurrection chapters that revisit the promenade.',
  },
  {
    name: 'Sanctum of Order Pads',
    tip: 'Interact with the network hub after reconnecting all beacons to fast-travel across Suramar City rooftops.',
  },
];

const rewardsHighlights = [
  'Achievement: Good Suramaritan – granted after completing Chapter 11, required for Kaldorei Queen’s Royal Vestments.',
  'Achievement: Insurrection – unlocks during Phase 2 finale and is mandatory for Nightborne Allied Race lore (historical) and remix ensemble access.',
  'Nightfallen Reputation – each chapter feeds 1,500–2,000 rep, pushing you toward Exalted for vendor unlocks at the Infinite Bazaar.',
  'Infinite Knowledge Ranks – Phase 2 chapters award multiple ranks; plan turn-ins during Turbo Boost weekends to monetize overflow as Bronze.',
  'Withered Army Training – complete “Building an Army” to start the repeatable scenario that refunds Bronze, Artifactum Sand, and Knowledge.',
];

const faqEntries = [
  {
    question: 'When does Insurrection unlock in Legion Remix?',
    answer:
      'Phase 2 – Rise of the Nightfallen begins on October 21, 2025. You must finish Chapter 11 – A Change of Seasons and reach 2,000 Ancient Mana cap (or close) to avoid stalls once Insurrection quests appear.',
  },
  {
    question: 'Do I need to feed the Nightfallen NPCs every day during the campaign?',
    answer:
      'Yes. Thalyssra, Oculeth, and Valtrois lock their quests and teleporter services if they are starving. Feed each for 50 Ancient Mana at the daily reset.',
  },
  {
    question: 'Does the Suramar campaign require group content?',
    answer:
      'Story chapters are solo-friendly. Later Insurrection steps ask you to queue for Return to Karazhan and The Nighthold at least once—Story Mode difficulty counts in Legion Remix.',
  },
];

export default function SuramarCampaignGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Suramar Quest Campaign Guide – Legion Remix 2025',
    description:
      'Complete every Suramar chapter, unlock Insurrection, and manage Ancient Mana while progressing Legion Remix 2025.',
    url: 'https://legionremixhub.com/guides/suramar-campaign',
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Suramar Campaign', path: '/guides/suramar-campaign' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto text-gray-300">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Suramar Quest Campaign Guide</h1>
            <p className="text-sm text-gray-400">
              Published October 29, 2025 • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 10 min read
            </p>
            <p>
              Suramar anchors Phase 2 of Legion Remix. It fuels Infinite Knowledge ranks, unlocks the Nighthold raid, and
              awards the Kaldorei Queen’s Royal Vestments ensemble. Use this reference to schedule chapters around Ancient
              Mana farming, teleporter unlocks, and Bronze spending from October 21, 2025 through the event finale on January
              19, 2026.
            </p>
          </header>

          <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg border border-gray-800 bg-gray-900/70 px-4 py-3 text-sm hover:border-green-500 hover:text-green-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <section id="overview" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden mb-6">
              <Image
                src={legionImages.suramarAchievements ?? legionImages.phaseTimeline}
                alt="Suramar achievement tracker board"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Campaign Overview</h2>
            <p>
              The Suramar storyline splits into two major blocks: <strong>Good Suramaritan</strong> (16 chapters) and{' '}
              <strong>Insurrection</strong> (9 arcs). Good Suramaritan unlocks Ancient Mana capacity and telemancy pads,
              while Insurrection opens the Nighthold and Kaldorei Queen rewards during Phase 2 – Rise of the Nightfallen
              (October 21 – November 3, 2025). Finish both to maximize Nightfallen reputation and Bronze refunds from Infinite
              Knowledge overflow.
            </p>
          </section>

          <section id="good-suramaritan" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Good Suramaritan Chapters</h2>
            <p>
              These chapters become available immediately on October 21, 2025 if you finished the prerequisite Broken Isles
              world quest unlock (Friendly with all five factions). Plan for 3,650 Ancient Mana to cover feedings, telemancy
              fees, and Withered Army Training buy-ins.
            </p>
            <div className="space-y-5">
              {goodSuramaritanChapters.map((chapter) => (
                <div key={chapter.title} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{chapter.title}</h3>
                  <p className="text-sm">{chapter.summary}</p>
                  {chapter.manaTip ? <p className="text-xs text-emerald-300 mt-2">{chapter.manaTip}</p> : null}
                </div>
              ))}
            </div>
          </section>

          <section id="insurrection" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Insurrection Roadmap</h2>
            <p>
              Insurrection unlocks immediately after Good Suramaritan and fuels the Phase 2 content wave. Expect a blend of
              solo story quests and required dungeon/raid clears (Return to Karazhan Story Mode, The Nighthold Story Mode).
            </p>
            <div className="space-y-5">
              {insurrectionArcs.map((arc) => (
                <div key={arc.title} className="rounded-xl border border-emerald-800/40 bg-emerald-900/20 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{arc.title}</h3>
                  <p className="text-sm">{arc.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="teleporters" className="mb-12">
            <div className="rounded-xl border border-gray-800 bg-gray-900/60 overflow-hidden mb-6">
              <Image
                src={legionImages.suramarTeleporterNetwork ?? legionImages.heroicWorldTier}
                alt="Teleporter hub in Shal’Aran showing connected beacons"
                width={1024}
                height={576}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Shal’Aran Teleporter Network</h2>
            <p>
              Activating telemancy beacons costs 50–150 Ancient Mana each, but they save hours across the 15-week event.
              Unlock them as soon as the related questlines finish.
            </p>
            <ul className="space-y-3 text-sm">
              {teleporterNotes.map((teleporter) => (
                <li key={teleporter.name} className="rounded-xl border border-gray-800 bg-gray-900/60 p-5">
                  <p className="font-semibold text-gray-100">{teleporter.name}</p>
                  <p>{teleporter.tip}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="rewards" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Rewards &amp; Achievements</h2>
            <p>
              Suramar completion feeds directly into Legion Remix endgame goals—Bronze, cosmetics, and Infinite Knowledge.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {rewardsHighlights.map((reward) => (
                <li key={reward}>{reward}</li>
              ))}
            </ul>

            <div className="rounded-xl border border-gray-800 bg-gray-900/60 p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-2">Recommended Toolchain</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  Track Ancient Mana spending with the{' '}
                  <Link href="/guides/ancient-mana" className="text-green-400 hover:text-green-300">
                    Ancient Mana Guide
                  </Link>{' '}
                  while you progress campaign chapters.
                </li>
                <li>
                  Reserve Bronze for ensemble purchases at the{' '}
                  <Link href="/guides/bronze-vendors" className="text-green-400 hover:text-green-300">
                    Infinite Bazaar
                  </Link>{' '}
                  once Insurrection unlocks Kaldorei Queen’s Royal Vestments.
                </li>
                <li>
                  Add Withered Army Training targets to the{' '}
                  <Link href="/calculator" className="text-green-400 hover:text-green-300">
                    Bronze Calculator
                  </Link>{' '}
                  so Bronze refunds from Infinite Knowledge overflow are earmarked.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">FAQ</h2>
            <div className="space-y-6">
              {faqEntries.map((entry) => (
                <div key={entry.question} className="rounded-xl border border-gray-800 bg-gray-900/60 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{entry.question}</h3>
                  <p className="text-sm">{entry.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
