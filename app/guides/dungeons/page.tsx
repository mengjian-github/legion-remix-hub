import type { Metadata } from 'next';
import Link from 'next/link';
import { dungeons, farmingMethods } from '@/data/dungeons';
import { remixPhases } from '@/data/timeline';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const pageTitle = formatMetaTitle('Legion Remix Dungeon Roadmap & Keystone Planner');
const pageDescription = formatMetaDescription(
  'Track Legion Remix Timeworn Keystone tiers, affixes, dungeon farms, Turbo Boost scheduling, and keystone prep with our planner crafted for Timerunner teams.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/dungeons'),
  },
  openGraph: buildOpenGraphMetadata('/guides/dungeons', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
};

const phaseRecommendations: Record<string, string[]> = {
  'Phase 1: Skies of Fire': ['maw-of-souls', 'eye-of-azshara', 'darkheart-thicket'],
  'Phase 2: Rise of the Nightfallen': ['black-rook-hold', 'vault-of-the-wardens', 'court-of-stars'],
  'Phase 3: Legionfall': ['cathedral-of-eternal-night', 'neltharions-lair', 'halls-of-valor'],
  'Phase 4: Argus Eternal': ['seat-of-the-triumvirate', 'arcway', 'court-of-stars'],
  'Phase 5: Infinite Echoes': ['maw-of-souls', 'court-of-stars', 'seat-of-the-triumvirate'],
};

const keystoneTips = [
  {
    title: 'Gift of Eternus Role Buffs',
    details:
      'As of October 22, Eternus grants DPS and healers +10% damage, +100% health, and -33% damage taken in Timeworn Keystones (tanks gain +10% healing received). Use this to push beyond the tank-heavy meta.',
  },
  {
    title: 'Level 10 — Empowered Start',
    details: 'Timeworn Keystone level 10 unlocks the first Empowered affix. Expect Imperious or Beacon of Chaos during Skies of Fire.'
  },
  {
    title: 'Level 20 — Heroic Scaling',
    details: 'At level 20 the second Empowered affix appears. Coordinate defensive cooldowns for Fel Raiser or Engorged combos.'
  },
  {
    title: 'Level 30 — Sargerei Ensemble',
    details: 'Clearing a +30 awards Timeworn Keystone Hero and unlocks the Sargerei Commander Hellforged ensemble.'
  },
  {
    title: 'Level 40 — Infernal Title',
    details: 'Push +40 dungeons for Timeworn Keystone Enthusiast and the “%s the Infernal” title during Phase 4.'
  }
];

const affixCallouts = [
  {
    name: 'Imperious',
    tip: 'Interrupt or dispel the aura immediately—bolstered casters can one-shot non-tanks.'
  },
  {
    name: 'Beacon of Chaos',
    tip: 'Assign players to soak the beams so they do not chain to healers during AoE heals.'
  },
  {
    name: 'Fel Raiser',
    tip: 'Kite empowered mobs across defiled ground to avoid stacking Bleeding Fel.'
  },
  {
    name: 'Engorged',
    tip: 'Stagger kills so Engorged enemies do not reach high stacks simultaneously.'
  }
];

const dungeonById = Object.fromEntries(dungeons.map((dungeon) => [dungeon.id, dungeon]));

export default function DungeonsGuidePage() {
const quickLinks = [
  { label: 'Phase spotlight', href: '#phase-recommendations' },
  { label: 'Karazhan access', href: '#karazhan-access' },
  { label: 'Cathedral access', href: '#cathedral-access' },
  { label: 'Seat access', href: '#seat-access' },
  { label: 'Keystone breakpoints', href: '#keystone-breakpoints' },
  { label: 'Affix tips', href: '#empowered-affixes' },
  { label: 'Bronze synergy', href: '#bronze-synergy' },
  { label: 'Turbo Boost timing', href: '/guides/bronze-farming#time-investment-calculator' }
];

  const referenceHighlights = [
    {
      title: 'Dungeon Locations, Difficulties & Achievements',
      summary: 'Lists every Legion dungeon, boss count, and Bronze reward—use it to double-check the stats summarized in each card here.'
    },
    {
      title: 'Timeworn Keystone Guide',
      summary: 'Explains how Empowered affixes rotate at +10, +20, and +30, along with the cosmetic rewards for pushing higher tiers.'
    },
    {
      title: 'Content Phases & Schedule',
      summary: 'Confirms which dungeon wings unlock during Skies of Fire through Infinite Echoes so you can schedule premade nights.'
    },
    {
      title: 'Leveling & Gearing Guide',
      summary: 'Highlights Maw of Souls, Eye of Azshara, and Court of Stars as the fastest XP farms—the same runs feed Bronze while leveling alts.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Dungeon Roadmap</h1>
          <p className="text-gray-300 mb-6">
            Track the Timeworn Keystone cadence, spotlight the strongest Bronze and XP routes each phase, and prepare for Empowered affix combos before they go live.
          </p>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 hover:border-green-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden mb-10">
            <img
              src={legionImages.timewornKeystone}
              alt="Timeworn Keystone schedule"
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Phase Release Cadence (October 7, 2025 – January 19, 2026)</h2>
              <p className="text-sm text-gray-400 mb-0">
                Every two weeks new dungeons and raids rotate in: Skies of Fire on October 7, Rise of the Nightfallen on October 21, Legionfall on November 4, Argus Eternal on November 18, and Infinite Echoes on December 9.
              </p>
            </div>
          </div>

          <h2 id="phase-recommendations" className="text-3xl font-bold text-white mb-4">Recommended Dungeons by Phase</h2>
          <div className="space-y-4 mb-10">
            {remixPhases.map((phase) => {
              const featured = phaseRecommendations[phase.name] || [];
              return (
                <div key={phase.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{phase.name}</h3>
                      <p className="text-sm text-gray-400">
                        {phase.startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} – {phase.endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                    <span className="text-sm text-green-400">{phase.focus}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {featured.map((id) => {
                      const dungeon = dungeonById[id];
                      if (!dungeon) return null;
                      return (
                        <div key={id} className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-white mb-1">{dungeon.name}</h4>
                          <p className="text-xs text-gray-400 mb-2">{dungeon.location} • {dungeon.bosses} bosses</p>
                          <p className="text-xs text-gray-300">{dungeon.description}</p>
                          <div className="flex justify-between text-xs text-gray-500 mt-3">
                            <span>~{dungeon.estimatedTime} min</span>
                            <span>{dungeon.bronzeReward.toLocaleString()} Bronze</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <section id="karazhan-access" className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden mb-10 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Return to Karazhan Access Tips</h3>
              <p className="text-sm text-gray-300">
                Phase 2 opened the Return to Karazhan mega-dungeon with 10 boss encounters. Getting there inside Legion Remix is easier than it sounds:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
                <li>From Dalaran, step onto the teleport pad in the city center to enter the <strong>Chamber of the Guardian</strong>.</li>
                <li>The <strong>Portal to Karazhan</strong> is the first doorway on the right. Take it to reach the original raid courtyard.</li>
                <li>Mount up, fly up the east side of the tower, and slip through the <strong>Karazhan Side Entrance</strong> gate to zone into the dungeon.</li>
              </ol>
              <p className="text-xs text-gray-400">
                Clearing Karazhan once unlocks your weekly cache, contributes to the <em>Looking for Group: Suramar</em> achievement, and now drops Fragmented Mementos—especially when you toggle Heroic World Tier.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/guides/return-to-karazhan-portal.jpg"
                alt="Portal to Karazhan inside the Chamber of the Guardian"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
          </section>

          <section id="cathedral-access" className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden mb-10 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Cathedral of Eternal Night Entrance</h3>
              <p className="text-sm text-gray-300">
                Phase 3 adds the Cathedral of Eternal Night to the Timeworn Keystone rotation. The portal hides beside the Tomb of Sargeras staircase on the Broken Shore.
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
                <li>Fly to <strong>Deliverance Point</strong> and take the path north-east toward the Tomb of Sargeras cliffs.</li>
                <li>At <code>/way 64.1 16.6</code> turn left into the fel courtyard—ignore the raid portal and continue down the stairs.</li>
                <li>The Cathedral portal sits behind the raid meeting stone. Set your hearth or use the Legion Pocket Portal to reset runs quickly.</li>
              </ol>
              <p className="text-xs text-gray-400">
                Heroic World Tier boosts Fragmented Memento drops here after the October 21 hotfix, so chain Cathedral with Tomb raid nights for Bronze and Knowledge gains.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-l" />
              <div className="grid h-full w-full gap-4 p-4">
                <div className="relative overflow-hidden rounded-lg border border-gray-800">
                  <img
                    src={legionImages.cathedralEntranceMap}
                    alt="Map showing Cathedral of Eternal Night entrance on the Broken Shore"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg border border-gray-800">
                  <img
                    src={legionImages.cathedralPortal}
                    alt="Cathedral of Eternal Night dungeon portal beside Tomb of Sargeras"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="seat-access" className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden mb-10 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Seat of the Triumvirate Entrance</h3>
              <p className="text-sm text-gray-300">
                Phase 4 adds Seat of the Triumvirate to the Argus dungeon roster. Use the Vindicaar to bypass the Mac'Aree cliffs.
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
                <li>From Dalaran, click the Lightforged Beacon at Krasus' Landing to board the Vindicaar.</li>
                <li>Set the navigation console to <strong>Shadowguard Incursion</strong> (Mac'Aree) and beam down.</li>
                <li>Ride east toward the river and the Conservatory; the dungeon portal sits on the platform facing the water.</li>
                <li>Meeting stone is beside the portal—perfect for summoning Mythic+ groups without pathing the whole zone.</li>
              </ol>
              <p className="text-xs text-gray-400">
                Need more Argus context? The <Link href="/guides/argus-campaign" className="text-green-300 underline">Argus Campaign guide</Link> covers beacon routing and Invasion Points while you queue.
              </p>
            </div>
            <div className="relative">
              <img
                src={legionImages.argusSeatEntrance}
                alt="Seat of the Triumvirate dungeon portal in Mac'Aree"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-l" />
            </div>
          </section>

          <h2 id="keystone-breakpoints" className="text-3xl font-bold text-white mb-4">Timeworn Keystone Breakpoints</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {keystoneTips.map((tip) => (
              <div key={tip.title} className="bg-gray-800 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-green-400 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-300">{tip.details}</p>
              </div>
            ))}
          </div>

          <h2 id="empowered-affixes" className="text-3xl font-bold text-white mb-4">Empowered Affix Cheat Sheet</h2>
          <div className="bg-gray-900/40 border border-purple-700/40 rounded-lg p-6 mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              {affixCallouts.map((affix) => (
                <div key={affix.name} className="bg-gray-800/70 border border-gray-700/60 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">{affix.name}</h3>
                  <p className="text-sm text-gray-300">{affix.tip}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id="bronze-synergy" className="text-3xl font-bold text-white mb-4">Bronze & Infinite Power Synergy</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-12">
            <p className="text-sm text-gray-300 mb-4">
              Pair your dungeon runs with weekly goals to stay ahead of the Infinite Power curve:
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Complete the first three Infinite Research quests before pushing keys—the account-wide stat boosts speed up every run.</li>
              <li>Bank caches from World Quests and open them after enabling Heroic World Tier for bonus Bronze.</li>
              <li>Chain with Bronze-friendly methods such as Scenario Spam ({farmingMethods[0].bronzePerHour.toLocaleString()} Bronze/hour baseline) when you need a break from keystones.</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
            <p className="text-sm text-gray-300 mb-4">
              For full dungeon maps, boss abilities, and achievement lists, lean on these original Legion Remix resources.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              {referenceHighlights.map((item) => (
                <li key={item.title} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p>{item.summary}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Keep them open on a second screen while you route Mythic+ nights—most pulls trace back to these notes.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-green-700/40 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Daily Dungeon Planner</h2>
            <p className="text-sm text-gray-300 mb-3">
              Trying to balance Legion Remix XP farm loops with keystone push groups? Slot your runs into this lightweight planner so Bronze, Infinite Knowledge, and loot all land in the same session.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 mb-3">
              <li><strong>Morning reset:</strong> Clear two +10 keys for the weekly cache, then knock out the Random Dungeon bonus for extra XP on your alt army.</li>
              <li><strong>Midday break:</strong> Run the <Link href="/guides/lock-stock-two-smoking-goblins" className="text-green-400 hover:text-green-300">Lock, Stock, and Two Smoking Goblins</Link> micro-holiday if it&apos;s active, or pivot to Suramar world quests for Strange Humming Crystals.</li>
              <li><strong>Prime-time push:</strong> Chain +17 to +22 keys during Turbo Boost, pairing a Legion Remix arms warrior build with a Ret Paladin Legion Remix build for spell reflect and Blessings.</li>
              <li><strong>Cooldown burn:</strong> Spend the final hour on Scenario Spam or Argus rares to refill Bronze before logging off.</li>
            </ol>
            <p className="text-xs text-gray-400">
              Staple this loop to your guild Discord; consistent cadence beats brute-force grind every time.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-purple-700/40 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Spec Synergy Cheat Sheet</h2>
            <p className="text-sm text-gray-300 mb-3">
              Not sure which classes to slot into tonight’s keystone? Use these pairings as a starting point—each lines up with our class playbooks and keeps the Bronze calculator happy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Legion Remix arms warrior build + Sub rogue legion remix:</strong> Arms handles banners and Piercing Howl while Subtlety deletes priority targets with Shadow Dance.</li>
              <li><strong>Ret paladin Legion Remix build + Restoration shaman:</strong> Blessings, Cleansing Flame, and Spirit Link Totem smooth empowered packs in Heroic World Tier.</li>
              <li><strong>Destro warlock Legion Remix + Balance druid legion remix:</strong> Chaos Bolt nukes elites while Starfall controls adds—great for Seat of the Triumvirate.</li>
              <li><strong>WoW Legion Remix warrior build + Mistweaver monk:</strong> Brewmaster or Protection tanks plus Mistweaver’s Revival keep the group stable during Engorged weeks.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              Cross-reference any comp with the <Link href="/classes" className="text-green-400 hover:text-green-300">Class Playbooks</Link> to double-check stat priorities before you dive in.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
