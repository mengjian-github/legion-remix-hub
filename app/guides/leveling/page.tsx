import type { Metadata } from 'next';
import Link from 'next/link';
import { dungeons, farmingMethods, getBestXPDungeons } from '@/data/dungeons';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Leveling Guide',
  description: 'Power level to 80 with optimized dungeon routes, Heroic World Tier tips, and weekly Legion Remix planning.',
  alternates: {
    canonical: buildCanonicalUrl('/guides/leveling'),
  },
};

export default function LevelingGuidePage() {
  const bestDungeons = getBestXPDungeons();
  const levelingDirectory = [
    { label: 'Legion Remix Leveling Guide for fastest leveling path', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Leveling Guide for Havoc Demon Hunter builds', href: '/classes/demon-hunter/havoc' },
    { label: 'Legion Remix Leveling Guide for Brewmaster Monk tank leveling', href: '/classes/monk/brewmaster' },
    { label: 'Legion Remix Leveling Guide for Heroic World Tier solo play', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Leveling Guide for Zygor addon alternatives', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Leveling Guide for world quest unlock route', href: '/guides/leveling#world-quest-route' },
    { label: 'Legion Remix Leveling Guide for Infinite Knowledge integration', href: '/guides/bronze-farming#infinite-knowledge-legion-remix' },
    { label: 'Legion Remix Leveling Guide for Legion Remix rare elite XP', href: '/guides/bronze-farming#rare-elites-legion-remix' },
    { label: 'Legion Remix Leveling Guide for Legion Remix Turbo Boost planning', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Leveling Guide for Legion Remix group dungeon compositions', href: '/guides/leveling#fastest-way-to-level-legion-remix' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/guides"
          className="text-green-400 hover:text-green-300 mb-4 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Leveling Guide</h1>
          <p className="text-gray-300 mb-4">
            This Legion Remix Leveling Guide compiles every proven Legion Remix leveling route, from 10-80 solo farm paths to group dungeon chains, so your Legion Remix leveling plans stay ahead of Turbo Boost weeks and Infinite Knowledge bonus windows.
          </p>

          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 mb-8">
            <p className="text-gray-200 text-lg mb-0">
              <strong>Goal:</strong> Reach level 80 as fast as possible to unlock your Felscorched mount and maximize Bronze farming time.
            </p>
          </div>

          <p className="text-gray-300 mb-4">
            Treat this Legion Remix Leveling Guide as a living document—update the Legion Remix Leveling Guide after each session and re-read the Legion Remix Leveling Guide before pushing into new phases.
          </p>


          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Leveling Overview</h2>
          <p className="text-gray-300 mb-4">
            Legion Remix offers multiple leveling strategies. The optimal path depends on your class role and playstyle:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Levels 10-25:</strong> Questing + Bonus Objectives</li>
            <li><strong>Levels 25-80:</strong> Dungeon spam (Tanks/Healers) or Dungeon/Quest hybrid (DPS)</li>
            <li><strong>Solo Players:</strong> Enable Heroic World Tier for +500% XP bonus</li>
            <li><strong>Group Players:</strong> Chain dungeons with premade groups</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">XP Multipliers & Bonuses</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Warband XP Bonuses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>+10% XP for completing the intro quest</li>
                <li>+10% XP when first character reaches level 40</li>
                <li>+10% XP when first character reaches level 80</li>
                <li>+1-2% XP per Infinite Research daily quest (stacks, completes account-wide)</li>
                <li>Significant character XP bonus upon reaching level 70</li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Heroic World Tier</h3>
              <p className="text-gray-300 mb-3">
                Activate at the Infinite Bazaar for <strong className="text-green-400">+500% kill XP</strong> but:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li className="text-red-400">Mobs hit much harder</li>
                <li className="text-green-400">Best for geared characters or duo/trio groups</li>
                <li className="text-yellow-400">Consider toggling off in challenging areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-green-700/50 rounded-lg p-6 mb-8" id="fastest-way-to-level-legion-remix">
            <h2 className="text-2xl font-bold text-white mb-3">Fastest Way to Level in Legion Remix</h2>
            <p className="text-gray-300 mb-4">
              Looking for the fastest way to level in Legion Remix? Follow this sprint plan:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Levels 10-25:</strong> Chain Intro scenario, Val'Sharah bonus objectives, and Treasure Caches using a <Link href="/guides/getting-started#infinite-knowledge-legion-remix" className="text-green-400 hover:text-green-300">Strange Humming Crystal</Link> buff.</li>
              <li><strong>Levels 25-60:</strong> Queue Maw of Souls, Darkheart Thicket, and Eye of Azshara with Heroic World Tier enabled—Havoc Demon Hunter Legion Remix builds shine here.</li>
              <li><strong>Levels 60-80:</strong> Rotate Mythic+ keystones during Turbo Boost weeks (October 7-13 and November 4-10) for 500% XP plus Infinite Power.</li>
            </ol>
            <p className="text-gray-400 text-sm mt-3">
              Prefer addons? Compare <strong>Zygor Legion Remix</strong> routes with our planner—we link the most time-saving quest chains and skip steps.
            </p>
          </div>

          <div className="bg-gray-900/40 border border-blue-700/50 rounded-lg p-6 mb-8" id="world-quest-route">
            <h2 className="text-2xl font-bold text-white mb-3">Legion Remix World Quest Route</h2>
            <p className="text-gray-300 mb-3">
              Once world quests unlock, prioritize this circuit for steady XP, Bronze, and Infinite Knowledge packets:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Azsuna → Val'Sharah:</strong> Stack Arcane and Dreamweaver emissaries, hit Strange Humming Crystal events, then port to Dalaran.</li>
              <li><strong>Highmountain → Stormheim:</strong> Use <em>Flight Master's Whistle</em> and Heroic World Tier toggles to farm rare elites and Time Crisis objectives.</li>
              <li><strong>Suramar Nights:</strong> Complete Nightfallen Withered Army Training for Infinite Knowledge caches.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3">
              Need Bronze tips? Jump to the <Link href="/guides/bronze-farming#rare-elites-legion-remix" className="text-green-400 hover:text-green-300">Rare Elite farming loop</Link> for optimized kill routes.
            </p>
          </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Turbo Boost Windows</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 border border-purple-700/40 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">October 7–13 &amp; November 4–10, 2025</h3>
            <p className="text-sm text-gray-300 mb-3">
              Turbo Boost overlaps with Skies of Fire and Legionfall, adding double loot tokens, higher upgrade ceilings, and crest cap removals.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Spend the free <strong>Puzzling Cartel Chips</strong> on keystone trinkets and raid weapons.</li>
              <li>Chain Mythic dungeons during these weeks to funnel gear into your main before Phase 2 and Phase 4 unlocks.</li>
              <li>Use the crest cap removal to over-farm keystones—perfect for stocking up before Argus Eternal.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <img
              src={legionImages.turboBoostSpells}
              alt="Turbo Boost spell customization"
              className="w-full h-auto rounded-lg border border-purple-700/40"
            />
            <img
              src={legionImages.turboBoostBuffs}
              alt="Turbo Boost buff configuration"
              className="w-full h-auto rounded-lg border border-purple-700/40"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Dungeons for XP</h2>
          <p className="text-gray-300 mb-4">
            From level 25 onward, dungeons become the most efficient leveling method. Here are the top 5 dungeons ranked by XP per minute:
          </p>
          <div className="space-y-3 mb-8">
            {bestDungeons.map((dungeon, idx) => (
              <div key={dungeon.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{dungeon.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{dungeon.location} • {dungeon.bosses} Bosses</p>
                      <p className="text-sm text-gray-300">{dungeon.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">
                      ~{dungeon.estimatedTime}min
                    </div>
                    <div className="text-xs text-gray-400">
                      {dungeon.estimatedXP.toLocaleString()} XP
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Timeworn Keystone Primer</h2>
        <div className="bg-gray-800 border border-blue-700/40 rounded-lg p-6 mb-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm text-gray-300 mb-4">
              Treat +10 as your stepping stone, +20 as the Bronze farming sweet spot, and +30 as the breakpoint for achievement cosmetics.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Keys never deplete—failed timers simply drop one level so you can immediately start another run.</li>
              <li>Toggle Empowered affixes at the Infinite Bazaar console to tailor difficulty to your group.</li>
              <li>Plan November 18 onward for Mythic Antorus practice; +30 clears unlock the Hellforged Sargerei ensemble.</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 border border-blue-700/40 rounded-lg overflow-hidden">
            <img
              src={legionImages.timewornKeystone}
              alt="Timeworn Keystone schedule"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Leveling Strategy by Role</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-800 border border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">🛡️ Tanks</h3>
              <p className="text-gray-300 mb-3">
                <strong>Best Strategy:</strong> Pure dungeon spam from 10-80
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Instant queue times</li>
                <li>Chain Eye of Azshara, Maw of Souls, and Darkheart Thicket</li>
                <li>Skip trash when possible, focus on bosses</li>
                <li>Average time to 80: <strong>8-12 hours</strong></li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-3">💚 Healers</h3>
              <p className="text-gray-300 mb-3">
                <strong>Best Strategy:</strong> Dungeon spam with occasional questing
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Near-instant queue times</li>
                <li>Queue while doing bonus objectives for extra efficiency</li>
                <li>Can solo quest with Heroic World Tier at higher levels</li>
                <li>Average time to 80: <strong>10-14 hours</strong></li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">⚔️ DPS</h3>
              <p className="text-gray-300 mb-3">
                <strong>Best Strategy:</strong> Hybrid approach (questing + dungeons)
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Queue for dungeons while questing</li>
                <li>Enable Heroic World Tier for solo questing</li>
                <li>Focus on bonus objectives and rare elites</li>
                <li>Join premade dungeon groups for faster clears</li>
                <li>Average time to 80: <strong>12-18 hours</strong></li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Optimal Quest Zones (Pre-25)</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Azsuna:</strong> Quick bonus objectives, good quest density
              </li>
              <li>
                <strong className="text-white">Val'sharah:</strong> Compact zone, excellent for druids
              </li>
              <li>
                <strong className="text-white">Highmountain:</strong> Great for flying-enabled characters
              </li>
              <li className="text-red-400">
                <strong>Avoid Suramar initially</strong> - Save for later phases
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Infinite Research Quests</h2>
          <p className="text-gray-300 mb-4">
            Complete these <strong>daily</strong> on any character to boost all Timerunners:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>Choose objectives that align with your leveling activities</li>
            <li>Each quest grants +1-2% Warband XP (permanent, stacks)</li>
            <li>Now awards +1,000 Bronze bonus</li>
            <li>Completing 50 quests = +50-100% permanent XP boost!</li>
          </ul>

          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Pro Tip: Multi-Character Strategy</h3>
            <p className="text-gray-300">
              Level your first character to 70-80 to unlock Warband bonuses, then create new Timerunners for even faster leveling. Your 2nd+ characters will benefit from all accumulated XP bonuses and complete 30-50% faster!
            </p>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Leveling Guide Directory</h2>
            <p className="text-sm text-gray-300 mb-4">
              Keep these Legion Remix Leveling Guide quick links handy for the most searched routes and builds.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              {levelingDirectory.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Every Legion Remix Leveling Guide tile above reinforces the full Legion Remix Leveling Guide so teammates can locate the exact Legion Remix leveling topic they need.
            </p>
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Repeat this Legion Remix Leveling Guide mantra: review the Legion Remix Leveling Guide before each session, share the Legion Remix Leveling Guide with your group, log your gains against the Legion Remix Leveling Guide checklist, and celebrate every new achievement by updating the Legion Remix Leveling Guide leaderboard.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 mb-6">
            <li>The Legion Remix Leveling Guide details every Turbo Boost window.</li>
            <li>Pin this Legion Remix Leveling Guide to your raid Discord.</li>
            <li>Use the Legion Remix Leveling Guide to brief Havoc Demon Hunters.</li>
            <li>Cross-reference dungeon notes with the Legion Remix Leveling Guide.</li>
            <li>Celebrate milestones by updating the Legion Remix Leveling Guide progress bar.</li>
            <li>Archive the Legion Remix Leveling Guide after the season to prep for future remixes.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/guides/bronze-farming"
              className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6 hover:border-yellow-500 transition-all"
            >
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">Bronze Farming Guide</h3>
              <p className="text-gray-300 text-sm">
                Maximize Bronze per hour at level 80
              </p>
            </Link>
            <Link
              href="/calculator"
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 hover:border-green-500 transition-all"
            >
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2">Bronze Calculator</h3>
              <p className="text-gray-300 text-sm">
                Plan your reward farming goals
              </p>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
