import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const canonicalPath = '/guides/lock-stock-two-smoking-goblins';
const pageTitle = formatMetaTitle('Lock, Stock, and Two Smoking Goblins Legion Remix Guide');
const pageDescription = formatMetaDescription(
  'Earn the Gullible title from Lock, Stock, and Two Smoking Goblins in Legion Remix with Gazrix Gearlock prerequisites, fight strategy for Rax and Snaggle, Bronze planning, and troubleshooting tips.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
  other: {
    'article:published_time': '2025-10-18',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Quest Guide',
  },
};

const quickLinks = [
  { label: 'Quest prerequisites', href: '#prerequisites' },
  { label: 'Step-by-step route', href: '#walkthrough' },
  { label: 'Bronze & rewards', href: '#rewards' },
  { label: 'Micro-holiday calendar', href: '#calendar' },
  { label: 'Reset & troubleshooting', href: '#troubleshooting' },
  { label: 'Pair with A Noble Event', href: '#a-noble-event' },
];

const checklist = [
  'Unlock every Broken Isles flight path so your Lock, Stock, and Two Smoking Goblins Legion Remix sprint starts fast.',
  'Finish “Vols qualifiés” on the character you plan to run before the Lock, Stock, and Two Smoking Goblins Legion Remix weekend begins.',
  'Group with at least one DPS partner so Lock, Stock, and Two Smoking Goblins Legion Remix kills land within the 60-second window.',
  'Pet classes: dismiss companions before boarding or the Lock, Stock, and Two Smoking Goblins Legion Remix deck will desync.',
  'Reserve 10,000 Bronze (plus 2,500 for fireworks) if you’re grabbing the Lock, Stock, and Two Smoking Goblins Legion Remix Llothien Prowler reward.',
];

const keyFacts = [
  {
    label: 'Title reward',
    value: '“the Gullible” (EN) • « le Crédule » (FR) from Lock, Stock, and Two Smoking Goblins Legion Remix completion.',
  },
  {
    label: 'Achievement',
    value: 'Arnaques, crimes et gros tas de fric / Lock, Stock, and Two Smoking Goblins Legion Remix storyline capstone.',
  },
  {
    label: 'Quest giver',
    value: 'Gazrix Gearlock – Dalaran (50.4, 23.1) during every Lock, Stock, and Two Smoking Goblins Legion Remix weekend.',
  },
  {
    label: 'Encounter tip',
    value: 'Defeat Rax & Snaggle Sixtrigger within 60 seconds of each other during Lock, Stock, and Two Smoking Goblins Legion Remix pulls.',
  },
  {
    label: 'Event cadence',
    value: 'Shows up during the A “Noble” Event micro-holiday; Lock, Stock, and Two Smoking Goblins Legion Remix repeats every other weekend.',
  },
];

const retailPrerequisites = [
  'Reach max level (Timerunner 70 / retail 70) so the Lock, Stock, and Two Smoking Goblins Legion Remix phase appears in Dalaran.',
  'Complete “Vols qualifiés” (Qualified Ride) from Gazrix Gearlock to unlock the Lock, Stock, and Two Smoking Goblins Legion Remix revenge questline.',
  'Pick up “L’heure des comptes” / “Lock, Stock, and Two Smoking Goblins” the moment the zeppelin lands in Dalaran.',
];

const legionRemixExtras = [
  'Buy at least one Torn Invitation from Horos so Hemet Nesingwary XVII spawns with the Lock, Stock, and Two Smoking Goblins Legion Remix fox mount vendor.',
  'Stock 10,000 Bronze if you plan to purchase the Lock, Stock, and Two Smoking Goblins Legion Remix Llothien Prowler recolor after the fight.',
  'Toggle Heroic World Tier for extra Bronze and Infinite Knowledge from surrounding rares during Lock, Stock, and Two Smoking Goblins Legion Remix windows.',
  'Bind the Infinite Bazaar portal to Dalaran for fast shard swapping if the Lock, Stock, and Two Smoking Goblins Legion Remix goblins bug out.',
];

const fightAbilities = [
  {
    name: 'Haywire!',
    detail:
      'Rax overloads his pack, stunning himself while launching lightning arcs; hug cover to survive the Lock, Stock, and Two Smoking Goblins Legion Remix storm.',
  },
  {
    name: 'Pistol Barrage',
    detail:
      'Snaggle peppers the deck with cone blasts every few seconds—strafe or blink so the Lock, Stock, and Two Smoking Goblins Legion Remix deck stays clear.',
  },
  {
    name: 'Goblin Rocket Jump',
    detail:
      'At 50% health each goblin leaps apart; keep damage rolling so the Lock, Stock, and Two Smoking Goblins Legion Remix kill window stays under 60 seconds.',
  },
  {
    name: 'Emergency Repairs',
    detail:
      'If a goblin is left alone too long he repairs to 100%; split damage so the Lock, Stock, and Two Smoking Goblins Legion Remix execute doesn’t reset.',
  },
  {
    name: 'Fel Bouncer Adds',
    detail:
      'Legion Remix shards sometimes spawn empowered Bouncers; interrupt Fel Burst so the Lock, Stock, and Two Smoking Goblins Legion Remix Bronze reward stays intact.',
  },
];

const faqs = [
  {
    question: 'How often does Lock, Stock, and Two Smoking Goblins Legion Remix rotate?',
    answer:
      'Lock, Stock, and Two Smoking Goblins Legion Remix appears every other Friday during A “Noble” Event and lasts 72 hours, syncing with Torn Invitation shopping sprees.',
  },
  {
    question: 'What item level should I have for Lock, Stock, and Two Smoking Goblins Legion Remix?',
    answer:
      'Any Timerunner at 346+ scaling can finish Lock, Stock, and Two Smoking Goblins Legion Remix easily, but 370 makes the synchronized kill window far safer.',
  },
  {
    question: 'Can I solo Lock, Stock, and Two Smoking Goblins Legion Remix?',
    answer:
      'You can solo Lock, Stock, and Two Smoking Goblins Legion Remix by alternating burst on Rax and Snaggle, but bringing a partner guarantees the 60-second kill requirement.',
  },
  {
    question: 'Does Lock, Stock, and Two Smoking Goblins Legion Remix grant extra Bronze?',
    answer:
      'Each Lock, Stock, and Two Smoking Goblins Legion Remix turn-in awards 500 Bronze baseline, scaling to 650 during Turbo Boost and more if Heroic World Tier is active.',
  },
  {
    question: 'Why didn’t the chest spawn after Lock, Stock, and Two Smoking Goblins Legion Remix?',
    answer:
      'If the chest fails to spawn after Lock, Stock, and Two Smoking Goblins Legion Remix, the goblins likely died more than 60 seconds apart—reset and keep dots rolling on both targets.',
  },
];

const keywordVariants = [
  'Lock, Stock, and Two Smoking Goblins Legion Remix route - Lock, Stock, and Two Smoking Goblins Legion Remix spawn timers',
  'Lock, Stock, and Two Smoking Goblins Legion Remix prerequisites - Lock, Stock, and Two Smoking Goblins Legion Remix quest unlock',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Bronze budget - Lock, Stock, and Two Smoking Goblins Legion Remix fox mount',
  'Lock, Stock, and Two Smoking Goblins Legion Remix deck mechanics - Lock, Stock, and Two Smoking Goblins Legion Remix Rax strategy',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Snaggle tips - Lock, Stock, and Two Smoking Goblins Legion Remix synchronized kill',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Torn Invitation - Lock, Stock, and Two Smoking Goblins Legion Remix Horos vendor',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Heroic tier - Lock, Stock, and Two Smoking Goblins Legion Remix Bronze cache',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Turbo Boost - Lock, Stock, and Two Smoking Goblins Legion Remix weekly rotation',
  'Lock, Stock, and Two Smoking Goblins Legion Remix shard hopping - Lock, Stock, and Two Smoking Goblins Legion Remix bug fix',
  'Lock, Stock, and Two Smoking Goblins Legion Remix pet class guide - Lock, Stock, and Two Smoking Goblins Legion Remix hunter tips',
  'Lock, Stock, and Two Smoking Goblins Legion Remix timer - Lock, Stock, and Two Smoking Goblins Legion Remix announcement time',
  'Lock, Stock, and Two Smoking Goblins Legion Remix watchman camp - Lock, Stock, and Two Smoking Goblins Legion Remix zeppelin ride',
  'Lock, Stock, and Two Smoking Goblins Legion Remix fox mount cost - Lock, Stock, and Two Smoking Goblins Legion Remix Bronze farm',
  'Lock, Stock, and Two Smoking Goblins Legion Remix achievement - Lock, Stock, and Two Smoking Goblins Legion Remix title unlock',
  'Lock, Stock, and Two Smoking Goblins Legion Remix solo guide - Lock, Stock, and Two Smoking Goblins Legion Remix duo strategy',
  'Lock, Stock, and Two Smoking Goblins Legion Remix FAQ - Lock, Stock, and Two Smoking Goblins Legion Remix troubleshooting',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Dalaran start - Lock, Stock, and Two Smoking Goblins Legion Remix landing spot',
  'Lock, Stock, and Two Smoking Goblins Legion Remix Bronze per hour - Lock, Stock, and Two Smoking Goblins Legion Remix planner',
  'Lock, Stock, and Two Smoking Goblins Legion Remix quest chain - Lock, Stock, and Two Smoking Goblins Legion Remix campaign link',
  'Lock, Stock, and Two Smoking Goblins Legion Remix calendar - Lock, Stock, and Two Smoking Goblins Legion Remix weekly dates',
  'Lock, Stock, and Two Smoking Goblins Legion Remix guides hub - Lock, Stock, and Two Smoking Goblins Legion Remix related content',
  'Lock, Stock, and Two Smoking Goblins Legion Remix fox vendor - Lock, Stock, and Two Smoking Goblins Legion Remix Hemet location',
  'Lock, Stock, and Two Smoking Goblins Legion Remix speedrun - Lock, Stock, and Two Smoking Goblins Legion Remix optimization',
  'Lock, Stock, and Two Smoking Goblins Legion Remix boost groups - Lock, Stock, and Two Smoking Goblins Legion Remix LFG tips',
  'Lock, Stock, and Two Smoking Goblins Legion Remix healer plan - Lock, Stock, and Two Smoking Goblins Legion Remix support cooldowns',
  'Lock, Stock, and Two Smoking Goblins Legion Remix loot chest - Lock, Stock, and Two Smoking Goblins Legion Remix reward cache fix',
  'Lock, Stock, and Two Smoking Goblins Legion Remix cinematic - Lock, Stock, and Two Smoking Goblins Legion Remix story recap',
  'Lock, Stock, and Two Smoking Goblins Legion Remix PTR changes - Lock, Stock, and Two Smoking Goblins Legion Remix hotfix notes',
  'Lock, Stock, and Two Smoking Goblins Legion Remix shard list - Lock, Stock, and Two Smoking Goblins Legion Remix cross-realm',
  'Lock, Stock, and Two Smoking Goblins Legion Remix leveling alt - Lock, Stock, and Two Smoking Goblins Legion Remix alt prep',
];

export default function LockStockGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'Lock, Stock, and Two Smoking Goblins Legion Remix Guide',
    description:
      'Walkthrough for completing the Lock, Stock, and Two Smoking Goblins quest during Legion Remix, including Torn Invitation synergy, Bronze budgeting, and troubleshooting tips.',
    url: 'https://legionremixhub.com/guides/lock-stock-two-smoking-goblins',
    datePublished: '2025-10-18',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Lock, Stock, and Two Smoking Goblins', path: '/guides/lock-stock-two-smoking-goblins' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto text-gray-200">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white">Lock, Stock, and Two Smoking Goblins Legion Remix Guide</h1>
          <p className="text-sm text-gray-400 mt-2">
            Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 10 min
            read
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The <strong>Lock, Stock, and Two Smoking Goblins Legion Remix</strong> quest is the capstone of Gazrix Gearlock’s
            revenge arc and the only way to earn the <strong>the Gullible</strong> title during the event. Nail the encounter
            and you walk away with the achievement, a Bronze cache, Infinite Knowledge, and access to the Llothien Prowler fox
            mount vendor—all inside one micro-holiday weekend.
          </p>
          <p className="text-sm text-gray-300 mt-3">
            Searching for <strong>legion remix lock stock and two smoking goblins</strong>, trying to remember where Gazrix
            stands, or confirming whether the <strong>lock stock and two smoking goblins remix</strong> fight still demands
            simultaneous kills? Everything you need—prerequisites, deck mechanics, Bronze budgets, and troubleshooting—lives
            below so your Lock, Stock, and Two Smoking Goblins Legion Remix run stays flawless every rotation.
          </p>
          <div className="mt-6 grid md:grid-cols-[2fr_3fr] gap-6 items-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-gray-700">
              <Image
                src={legionImages.rewardVendorHemet}
                alt="Hemet Nesingwary XVII selling Torn Invitation rewards during Legion Remix"
                width={1200}
                height={675}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs text-gray-200 uppercase tracking-[0.3em]">
                Torn Invitation Vendor • Infinite Bazaar
              </p>
            </div>
          </div>
        </header>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{fact.label}</p>
              <p className="mt-2 text-sm text-gray-200 leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4" id="prerequisites">
            Legion Remix Requirements &amp; Prerequisites
          </h2>
          <p className="mb-3">
            “Lock, Stock, and Two Smoking Goblins” only shows up once you finish Gazrix Gearlock’s revenge arc in Dalaran.
            Timerunners and retail characters share the same unlock path: complete the <em>Vols qualifiés</em> job, wait for
            his zeppelin to park in Krasus’ Landing, then accept the micro-holiday quest as the goblins make their getaway.
            Legion Remix layers add Bronze-friendly extras, but the base unlock still flows through Gazrix, making the Lock,
            Stock, and Two Smoking Goblins Legion Remix opener identical on every shard.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Core unlocks (retail &amp; Remix)</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                {retailPrerequisites.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Legion Remix prep checklist</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                {legionRemixExtras.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            If Gazrix still refuses to offer the quest, log out and back in after the hourly micro-holiday announcement, or
            hop shards via the Group Finder. The Legion Remix layer sometimes hides him until the zeppelin actually docks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4" id="walkthrough">
            Step-by-Step Walkthrough
          </h2>
          <p className="mb-4">
            Gazrix’s revenge takes place across three beats: accept the contract as the zeppelin docks, chase the Sixtrigger
            brothers back to Stormheim, then end the standoff on their deck before they can reset. Follow the flow below
            during each Legion Remix micro-holiday window to keep Lock, Stock, and Two Smoking Goblins Legion Remix clears on
            schedule.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">1. Pick up the quest in Dalaran</h3>
              <p className="text-sm text-gray-300">
                Speak with <strong>Hemet Nesingwary XVII</strong> at Krasus’ Landing (58.4, 41.2) once the hourly shout
                announces the A “Noble” Event. Gazrix Gearlock parks his zeppelin for roughly five minutes; hand in
                <em> Vols qualifiés</em> if it’s still in your log, then accept “Lock, Stock, and Two Smoking Goblins” before
                the ship departs so the Lock, Stock, and Two Smoking Goblins Legion Remix timer keeps rolling. Grab the <Link href="/guides/a-noble-event#shopping-list" className="text-green-400 hover:text-green-300">shopping list</Link> objectives if you plan to multitask Torn Invitation steps.
              </p>
            </div>
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">2. Trace the Sixtrigger escape route</h3>
              <p className="text-sm text-gray-300">
                Fly to <strong>Watchman’s Rock</strong> in Stormheim (54.8, 41.1) where Hemet sets up a forward camp. A
                goblin glider will carry you to the zeppelin once it returns. Use the downtime to clear surrounding mobs and
                drop a summon stone for friends—Legion Remix shards reward extra Bronze for the escort trash, and every minute
                saved keeps Lock, Stock, and Two Smoking Goblins Legion Remix rotations tight.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                <li>Use <code className="text-xs">/tar Sixtrigger</code> to target the brothers the moment the Lock, Stock, and Two Smoking Goblins Legion Remix zeppelin arrives.</li>
                <li>Timerunners can tag empowered rares along the ridge for bonus Bronze while waiting for Lock, Stock, and Two Smoking Goblins Legion Remix timers.</li>
                <li>Need to switch shards? Form a custom group so everyone boards the same Lock, Stock, and Two Smoking Goblins Legion Remix zeppelin instance.</li>
              </ul>
            </div>
            <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-white mb-2">3. Win the deck duel</h3>
              <p className="text-sm text-gray-300">
                Once the zeppelin arrives interact with Hemet’s harpoon to catapult aboard. Keep both goblins health pools
                within 10% of each other; if more than 60 seconds pass between kills the reward crate can despawn. Drop DoTs on
                the first target, swap often, and save executes for the final 15% so Lock, Stock, and Two Smoking Goblins Legion Remix finishes award the chest every time.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10" id="combat">
          <h2 className="text-2xl font-bold text-white mb-4">Deck Mechanics &amp; Strategy</h2>
          <p className="mb-4">
            Rax and Snaggle each boast roughly 10 million health on Legion Remix shards, mirroring the Brawler’s Guild
            <em> GG Engineering</em> duo. Keep their HP synchronized, rotate defensives during <em>Haywire!</em>, and call
            your execute order before anyone leaps aboard.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {fightAbilities.map((ability) => (
              <div key={ability.name} className="bg-gray-900/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{ability.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{ability.detail}</p>
              </div>
            ))}
          </div>
          <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Pet classes:</strong> pets cannot board the zeppelin during Lock, Stock, and Two Smoking Goblins Legion Remix runs; dismiss companions, open with burst cooldowns, then resummon after the fight.
            </li>
            <li>
              <strong>Group coordination:</strong> assign one DPS per goblin plus a flex player to swap so the Lock, Stock, and Two Smoking Goblins Legion Remix execute stays synced; tanks can kite adds while healers cleanse <em>Pistol Barrage</em> bleed stacks.
            </li>
            <li>
              <strong>Timerunner perks:</strong> Chrono Leap, Blink, or Heroic Leap negate knockbacks, keeping both targets in
              cleave range throughout the Lock, Stock, and Two Smoking Goblins Legion Remix burn.
            </li>
          </ul>
        </section>

        <section className="mb-10" id="rewards">
          <h2 className="text-2xl font-bold text-white mb-4">Rewards &amp; Bronze Budget</h2>
          <p className="mb-4">
            Completing the encounter grants the <strong>“Arnaques, crimes et gros tas de fric”</strong> achievement, the
            <strong> the Gullible</strong> title, a <strong>Lesser Bronze Cache</strong>, and the standard Legion Remix Infinite
            Knowledge packet. Sync the turn-in with Turbo Boost or Heroic World Tier to squeeze out more Bronze for the
            <em> Llothien Prowler</em> weekend—every Lock, Stock, and Two Smoking Goblins Legion Remix clear fuels that mount plan.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-gray-900/40 border border-green-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Bronze snapshot</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>Quest completion: 500 Bronze (650 during Turbo Boost)</li>
                <li>Infinite Knowledge packet: converts to 1,000 Bronze after rank 36</li>
                <li>Vendor shopping: 10,000 Bronze for the Lock, Stock, and Two Smoking Goblins Legion Remix fox mount, 2,500 Bronze for toys</li>
                <li>Optional: 500 Bronze for Legion Remix reward tracker fireworks bundles that match Lock, Stock, and Two Smoking Goblins Legion Remix weekends</li>
              </ul>
            </div>
            <div className="bg-gray-900/40 border border-blue-700/40 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Planner tips</h3>
              <p className="text-sm text-gray-300">
                Add the fox mount, fireworks, and Torn Invitation upgrades to the <Link href="/calculator" className="text-green-400 hover:text-green-300">Legion Remix bronze spreadsheet</Link> so you know how many Bronze runs you need before the next Lock, Stock, and Two Smoking Goblins Legion Remix rotation. Sync with your guild&apos;s Legion Remix reward tracker channel to avoid duplicate purchases.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10" id="calendar">
          <h2 className="text-2xl font-bold text-white mb-4">Micro-holiday Calendar &amp; Spawn Timers</h2>
          <p className="mb-3">
            A “Noble” Event fires every other Friday starting October 10, 2025. Each window lasts 72 hours. The goblins spawn
            in 5-minute intervals; if they despawn unexpectedly, wait for the shard to soft reset or swap to a different
            realm so the Lock, Stock, and Two Smoking Goblins Legion Remix rotation stays intact.
          </p>
          <table className="w-full text-left text-sm text-gray-300 border border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-900/80 text-gray-100 uppercase text-xs tracking-widest">
              <tr>
                <th className="px-4 py-3">Week</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Launch</td>
                <td className="px-4 py-3">October 10 - October 13</td>
                <td className="px-4 py-3">Quest unlocks; fox mount vendor appears for the first time.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 3</td>
                <td className="px-4 py-3">October 24 - October 27</td>
                <td className="px-4 py-3">Pair with Turbo Boost dungeon farming for excess Bronze.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 5</td>
                <td className="px-4 py-3">November 7 - November 10</td>
                <td className="px-4 py-3">Good window for alts once Infinite Knowledge ranks snowball.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 7</td>
                <td className="px-4 py-3">November 21 - November 24</td>
                <td className="px-4 py-3">Argus Eternal rares overlap; run Strange Humming Crystal loops.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 9</td>
                <td className="px-4 py-3">December 5 - December 8</td>
                <td className="px-4 py-3">Final pre-Infinite Echoes rotation—empty Bronze before housing decor arrives.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 11</td>
                <td className="px-4 py-3">December 19 - December 22</td>
                <td className="px-4 py-3">Holiday overlap with Fel Skies catch-up; expect crowded shards.</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="px-4 py-3">Week 13</td>
                <td className="px-4 py-3">January 2 - January 5</td>
                <td className="px-4 py-3">Ideal time to finish leftover Legion Remix guide achievements.</td>
              </tr>
              <tr className="border-t border-gray-800 bg-gray-900/40">
                <td className="px-4 py-3">Week 15</td>
                <td className="px-4 py-3">January 16 - January 19</td>
                <td className="px-4 py-3">Last call—event ends January 19 alongside the Legion Remix roadmap finale.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-10" id="troubleshooting">
          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting &amp; Shard Hopping</h2>
          <p className="mb-3">
            Still seeing the <strong>Lock, Stock, and Two Smoking Goblins not spawning</strong> bug? Follow these fixes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>Swap to <code className="text-xs">/1 Custom</code> group finder shards; the quest objects reappear instantly on fresh shards.</li>
            <li>Abandon and reaccept the quest after speaking with Hemet to refresh the objective tracker.</li>
            <li>Disable phasing addons like Cross RP that can desync you from the Remix layer.</li>
            <li>Log completely out if the objective counter is stuck at 0/1 after jumping off the zeppelin; a clean reload repositions Hemet.</li>
            <li>If the reward cache fails to spawn, double-check both goblins died within 60 seconds—reset and execute together.</li>
            <li>Pet classes should dismiss companions before boarding; lingering pets can keep you in combat and block the completion check.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-300">
            When all else fails, hearth to the Infinite Bazaar and use the Legion Remix website portal network to re-enter Stormheim.
            Blizzard hotfixes usually reset the Lock, Stock, and Two Smoking Goblins Legion Remix goblin routes every 30 minutes.
          </p>
        </section>

        <section className="mb-10" id="faq">
          <h2 className="text-2xl font-bold text-white mb-4">Lock, Stock, and Two Smoking Goblins Legion Remix FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="bg-gray-900/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10" id="a-noble-event">
          <h2 className="text-2xl font-bold text-white mb-4">Pairing with A Noble Event &amp; Other Activities</h2>
          <p className="mb-3">
            “Lock, Stock, and Two Smoking Goblins” lines up perfectly with <Link href="/guides/a-noble-event" className="text-green-400 hover:text-green-300">A Noble Event Legion Remix</Link>,
            Strange Humming Crystal farms, and the Legion Remix bronze calculator route, letting the Lock, Stock, and Two Smoking Goblins Legion Remix weekend bankroll multiple goals.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            <li>
              Pick up Torn Invitation quests from Horos, then head to Suramar for <Link href="/guides/challiane-vineyards" className="text-green-400 hover:text-green-300">Challiane Vineyards</Link> while waiting on Lock, Stock, and Two Smoking Goblins Legion Remix timers.
            </li>
            <li>
              Run Maw of Souls keystones immediately afterward—Heroic World Tier boosts Bronze, Infinite Power, and class threads earned during Lock, Stock, and Two Smoking Goblins Legion Remix weekends.
            </li>
            <li>
              Update your guild&apos;s Legion Remix reward tracker spreadsheet with Lock, Stock, and Two Smoking Goblins Legion Remix fox mount purchases to avoid duplicate spending.
            </li>
            <li>
              Spend leftover Bronze on housing decor vendors unlocked in Infinite Echoes; the Lock, Stock, and Two Smoking Goblins Legion Remix micro-holiday ends before they rotate again.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Checklist</h2>
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <p className="text-sm text-gray-300 mb-3">
              Run through these Lock, Stock, and Two Smoking Goblins Legion Remix reminders before every micro-holiday weekend
              so nothing slips.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Lock, Stock, and Two Smoking Goblins Legion Remix tips keep the Lock, Stock, and Two Smoking Goblins Legion Remix chest alive, so share this
              Lock, Stock, and Two Smoking Goblins Legion Remix cheat sheet with your guild.
            </p>
          </div>
        </section>

        <footer className="text-sm text-gray-400">
          Need more Legion Remix site tools? Jump back to the{' '}
          <Link href="/" className="text-green-400 hover:text-green-300">
            homepage roadmap
          </Link>
          , refresh the{' '}
          <Link href="/calculator" className="text-green-400 hover:text-green-300">
            Bronze calculator
          </Link>
          , and keep the{' '}
          <Link href="/rewards" className="text-green-400 hover:text-green-300">
            rewards list
          </Link>{' '}
          nearby for every Lock, Stock, and Two Smoking Goblins Legion Remix weekend.
        </footer>
      </div>
    </div>
  );
}
