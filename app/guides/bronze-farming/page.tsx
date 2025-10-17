import type { Metadata } from 'next';
import Link from 'next/link';
import { farmingMethods, getBestBronzeDungeons } from '@/data/dungeons';
import { totalBronzeCost, rewardSpotlights } from '@/data/rewards';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';
import { buildKeywordRichParagraphs } from '@/lib/seo-content';

export const metadata: Metadata = {
  title: 'Legion Remix Bronze Farming Blueprint 2025',
  description: 'Farm Legion Remix Bronze efficiently with dungeon rotations, open-world loops, Turbo Boost scheduling, and reward priorities tailored to Timerunner cosmetics.',
  alternates: {
    canonical: buildCanonicalUrl('/guides/bronze-farming'),
  },
};

export default function BronzeFarmingPage() {
  const bestDungeons = getBestBronzeDungeons();
  const bronzeDirectory = [
    { label: 'Legion Remix Bronze guide for Infinite Knowledge conversions', href: '/guides/bronze-farming#infinite-knowledge-legion-remix' },
    { label: 'Legion Remix Bronze guide for Strange Humming Crystal farming', href: '/guides/bronze-farming#strange-humming-crystal' },
    { label: 'Legion Remix Bronze guide for rare elite loops', href: '/guides/bronze-farming#rare-elites-legion-remix' },
    { label: 'Legion Remix Bronze guide for Turbo Boost weeks', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Bronze guide for Violet Spellwing budgeting', href: '/guides/bronze-farming#achievement-targets-legion-remix' },
    { label: 'Legion Remix Bronze guide for Legion Remix calculator planning', href: '/calculator' },
    { label: 'Legion Remix Bronze guide for To Fel and Back prep', href: '/guides/getting-started#legion-remix-hard-mode' },
    { label: 'Legion Remix Bronze guide for Legion Remix housing decor unlocks', href: '/rewards' },
    { label: 'Legion Remix Bronze guide for Legion Remix lag-safe farming', href: '/#legion-remix-lag' },
    { label: 'Legion Remix Bronze guide for Legion Remix Mythic+ rotations', href: '/guides/leveling#fastest-way-to-level-legion-remix' }
  ];

  const seoKeyword = 'Legion Remix Bronze guide';
  const seoTopics = [
    'Infinite Knowledge conversions',
    'Strange Humming Crystal loops',
    'rare elite routing',
    'Turbo Boost dungeon rotations',
    'Bronze vendor priorities',
    'Heroic World Tier Bronze farming',
    'warband Bronze sharing',
    'daily quest Bronze bursts',
    'Bronze budgeting for rewards',
  ];
  const seoSupport = [
    'mythic plus keystones',
    'open-world objectives',
    'raid lockout planning',
    'artifact path spending',
    'timerunner alt preparation',
  ];
  const seoParagraphs = buildKeywordRichParagraphs(seoKeyword, seoTopics, seoSupport, {
    targetDensity: 0.048,
  });

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
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Bronze Farming Guide</h1>
          <p className="text-gray-300 mb-4">
            This Legion Remix Bronze guide aggregates the most efficient Legion Remix Bronze routes—Infinite Knowledge turn-ins, Strange Humming Crystal loops, rare elite trains, and Turbo Boost dungeon sprees—so your Legion Remix Bronze planning hits every wishlist milestone before January 19, 2026. Whenever possible, tether these loops to a Legion Remix infinite power farm so Artifactum Sand, Infinite Research, and Bronze gains spike together.
          </p>

          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6 mb-8">
            <div className="text-center">
              <p className="text-gray-200 text-sm mb-2">Total Bronze for All Rewards</p>
              <p className="text-5xl font-bold text-yellow-500 mb-2">
                {totalBronzeCost.toLocaleString()}
              </p>
              <p className="text-gray-300 text-sm mb-0">
                Use the <Link href="/calculator" className="text-green-400 hover:text-green-300">Legion Remix Bronze Calculator</Link> to plan your specific goals and track Infinite Knowledge conversions
              </p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">
            Keep this Legion Remix Bronze guide bookmarked; the Legion Remix Bronze guide updates weekly so your Legion Remix Bronze plan always reflects the latest hotfixes.
          </p>

          {/* Bronze Collection Methods Showcase */}
          <div className="my-8" id="bronze-collection-in-action">
            <h2 className="text-2xl font-bold text-white mb-4">Bronze Collection in Action</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 border border-green-700/30 rounded-lg overflow-hidden">
                <img
                  src={legionImages.wyrmtongue}
                  alt="Wyrmtongue Bronze Collection on Argus"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Wyrmtongue Device (Argus)</h3>
                  <p className="text-gray-300 text-sm">
                    On Argus where flying is forbidden, collect special pickups that transform you into a Wyrmtongue.
                    Run around collecting Bronze Orbs, getting faster with each pickup!
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 border border-blue-700/30 rounded-lg overflow-hidden">
                <img
                  src={legionImages.artifactumSand}
                  alt="Artifactum Sand and Bronze"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Artifactum Sand Mounds</h3>
                  <p className="text-gray-300 text-sm">
                    These collectibles drop from all content and can be converted to Bronze.
                    Also used to upgrade your Infinite Artifact Weapon power.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 border border-green-700/50 rounded-lg p-6 mb-8" id="infinite-knowledge-legion-remix">
            <h2 className="text-2xl font-bold text-white mb-3">Turn Infinite Knowledge into Bronze</h2>
            <p className="text-gray-300 mb-3">
              Infinite Knowledge Legion Remix packets award 1,000 Bronze on completion and fuel your Infinite Research unlocks. Optimize the loop:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li>Stack six saved dailies, then chain-run them during Turbo Boost windows for maximum Bronze and Infinite Power.</li>
              <li>Prioritize quests that overlap with <Link href="#rare-elites-legion-remix" className="text-green-400 hover:text-green-300">rare elite circuits</Link> and Strange Humming Crystal events.</li>
              <li>Use Bronze windfalls to cap your Infinite Artifact traits before swapping to Fel or Storm paths.</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-blue-700/50 rounded-lg p-6 mb-8" id="strange-humming-crystal">
            <h2 className="text-2xl font-bold text-white mb-3">Strange Humming Crystal Routes</h2>
            <p className="text-gray-300 mb-3">
              Strange Humming Crystals spawn across Suramar and Argus during Legion Remix. Each crystal grants a stacking haste buff and rains Bronze orbs when smashed within the timer.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Grab the <em>Wyrmtongue Quarry</em> portal in the Infinite Bazaar to access the densest crystal clusters.</li>
              <li>Rotate Krokuun → Mac'Aree → Antoran Wastes, combining crystals with Infinite Knowledge dailies.</li>
              <li>Team with a Havoc Demon Hunter or Windwalker Monk for speed boosts that prevent timer failures.</li>
            </ol>
            <p className="text-gray-400 text-sm">Share buffs with groupmates—everyone within range receives Bronze, Infinite Power, and movement speed boosts.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Bronze Farming Methods (Ranked by Efficiency)</h2>
          <div className="space-y-4 mb-8">
            {farmingMethods.map((method, idx) => (
              <div key={method.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                      idx === 0 ? 'bg-yellow-600 text-white' :
                      idx === 1 ? 'bg-gray-400 text-white' :
                      idx === 2 ? 'bg-amber-700 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{method.name}</h3>
                      <div className="flex gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          method.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                          method.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-red-900 text-red-300'
                        }`}>
                          {method.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{method.description}</p>
                      {method.requirements && (
                        <p className="text-sm text-yellow-400 mb-2">
                          ⚠️ {method.requirements}
                        </p>
                      )}
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-400 mb-2">Tips:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {method.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="text-sm text-gray-300">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-3xl font-bold text-yellow-500">
                      {method.bronzePerHour.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">Bronze/Hour</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Dungeons for Bronze</h2>
          <p className="text-gray-300 mb-4">
            These dungeons offer the best Bronze rewards relative to completion time:
          </p>
          <div className="space-y-3 mb-8">
            {bestDungeons.map((dungeon) => (
              <div key={dungeon.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{dungeon.name}</h3>
                    <p className="text-sm text-gray-400">
                      {dungeon.estimatedTime} min • {dungeon.bosses} Bosses
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-500">
                      {dungeon.bronzeReward.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      ~{Math.round(dungeon.bronzeReward / dungeon.estimatedTime)}/min
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/40 border border-red-700/40 rounded-lg p-6 mb-8" id="rare-elites-legion-remix">
            <h2 className="text-2xl font-bold text-white mb-3">Legion Remix Rare Elite Circuit</h2>
            <p className="text-gray-300 mb-3">
              Rare elites are surging in search trends. Combine these loops with your Bronze grind to capitalize on guaranteed drops and Strange Humming Crystal spawns—each Legion Remix rare elite drops at least 400 Bronze plus a shot at Infinite Knowledge packets.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Broken Shore sweep:</strong> Start at Deliverance Point, rotate clockwise, use <em>Legionfall Commander</em> mission table boosts.</li>
              <li><strong>Argus tri-zone chain:</strong> Queue for Invasion Points while tagging Krokuun, Mac'Aree, and Antoran Wastes rares for 400–600 Bronze each.</li>
              <li><strong>Suramar night patrol:</strong> Farm Withered Army elites for Infinite Knowledge caches and Violet Spellwing progress.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3">
              Tip: Running with a Brewmaster Monk Legion Remix build or Vengeance Demon Hunter tank ensures tags stick even during lag spikes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recent Bronze Buffs</h2>
          <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6 mb-8">
            <p className="text-gray-300 mb-3">
              <strong className="text-green-400">Good news!</strong> Blizzard significantly increased Bronze rewards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Bronze Caches substantially increased</strong> - Treasures now much more rewarding</li>
              <li><strong>All Infinite Research quests +1,000 Bronze</strong> - Daily bonus on top of XP</li>
              <li><strong>World Quests now 200 Bronze</strong> - Up from previous values</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4" id="achievement-targets-legion-remix">Achievement Targets Worth Budgeting</h2>
          <p className="text-gray-300 mb-4">
            Mix Bronze purchases with achievement hunts to collect Remix-only cosmetics. Start with these high-impact milestones:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {rewardSpotlights
              .filter((spotlight) => spotlight.id !== 'housing-decor')
              .map((spotlight) => (
                <div key={spotlight.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                  <img src={spotlight.image} alt={spotlight.title} className="w-full h-44 object-cover" />
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{spotlight.title}</h3>
                      <p className="text-sm text-gray-400">{spotlight.subtitle}</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {spotlight.highlights.slice(0, 3).map((item) => (
                        <li key={item.name}>
                          <strong className="text-green-400">{item.name}:</strong> {item.requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4" id="farming-strategy-legion-remix">Farming Strategy by Playstyle</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                🏃 Solo Player (Casual)
              </h3>
              <p className="text-gray-300 mb-3">
                <strong>Recommended:</strong> World Quest Circuit + Treasure Hunting
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Complete daily World Quests (200 Bronze each)</li>
                <li>Collect Bronze Caches from treasures</li>
                <li>Kill rare elites along the way</li>
                <li>Complete Infinite Research dailies</li>
                <li><strong>Expected:</strong> 4,000-6,000 Bronze/hour</li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                🛡️ Tank/Healer (Efficient)
              </h3>
              <p className="text-gray-300 mb-3">
                <strong>Recommended:</strong> Dungeon Spam
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Chain fast dungeons (Eye of Azshara, Maw of Souls)</li>
                <li>Instant queues = maximum efficiency</li>
                <li>Skip unnecessary trash pulls</li>
                <li>Average 12-15 minutes per run</li>
                <li><strong>Expected:</strong> 7,000-9,000 Bronze/hour</li>
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                👥 Group Player (Hardcore)
              </h3>
              <p className="text-gray-300 mb-3">
                <strong>Recommended:</strong> Scenario Spam or Organized Rare Farming
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Form premade groups for scenarios</li>
                <li>Optimize routes and skip mechanics when possible</li>
                <li>Coordinate cooldowns for fast boss kills</li>
                <li>Alternative: Join rare farming groups on Argus</li>
                <li><strong>Expected:</strong> 9,000-12,000 Bronze/hour</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Weekly Checklist</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <ul className="space-y-3">
              {[
                { task: 'Complete all Infinite Research daily quests', bronze: '+7,000', per: 'per week' },
                { task: 'Clear Emerald Nightmare (weekly lockout)', bronze: '+5,000', per: 'one-time' },
                { task: 'Complete 35 World Quests', bronze: '+7,000', per: 'per week' },
                { task: 'Kill all rare elites in active zones', bronze: '+3,000', per: 'per week' },
                { task: 'Open all accessible Bronze Caches', bronze: '+4,000', per: 'per week' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                  <span className="text-gray-300">{item.task}</span>
                  <div className="text-right">
                    <span className="text-yellow-500 font-semibold">{item.bronze}</span>
                    <span className="text-gray-500 text-xs ml-2">{item.per}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
              <span className="text-white font-semibold">Total Weekly Minimum:</span>
              <span className="text-2xl font-bold text-yellow-500">~26,000 Bronze</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4" id="time-investment-calculator">Time Investment Calculator</h2>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <p className="text-gray-300 mb-4">
              Based on different farming methods, here's how long it takes to earn common amounts:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Bronze Needed</th>
                    <th className="text-right py-2 text-gray-400">Casual (5k/hr)</th>
                    <th className="text-right py-2 text-gray-400">Efficient (8k/hr)</th>
                    <th className="text-right py-2 text-gray-400">Hardcore (10k/hr)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { bronze: 20000, name: 'Class Mount' },
                    { bronze: 100000, name: 'Mid-tier Mount' },
                    { bronze: 200000, name: 'Rare Mount' },
                    { bronze: 500000, name: 'Multiple Mounts' },
                  ].map((row) => (
                    <tr key={row.bronze} className="border-b border-gray-700/50">
                      <td className="py-2">
                        <span className="text-yellow-500 font-semibold">{row.bronze.toLocaleString()}</span>
                        <span className="text-gray-500 text-xs ml-2">({row.name})</span>
                      </td>
                      <td className="text-right py-2">{(row.bronze / 5000).toFixed(1)}h</td>
                      <td className="text-right py-2">{(row.bronze / 8000).toFixed(1)}h</td>
                      <td className="text-right py-2">{(row.bronze / 10000).toFixed(1)}h</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-400 mb-3">💡 Pro Tips for Maximum Efficiency</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Stack Bronze farming with leveling alts for double value</li>
              <li>Use flying mounts to speed up World Quest routes</li>
              <li>Join community groups for organized rare farming</li>
              <li>Prioritize high-value rewards first in case you run out of time</li>
              <li>Don't forget to claim your level 80 class mount for free!</li>
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Bronze Guide Directory</h2>
            <p className="text-sm text-gray-300 mb-4">
              Keep these Legion Remix Bronze guide topics on hand for quick reference.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              {bronzeDirectory.map((item) => (
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
              Save this Legion Remix Bronze guide directory to keep every Legion Remix Bronze strategy within a couple of clicks.
            </p>
          </div>

          <p className="text-sm text-gray-400 mb-6">
            Before each farming session, scan this Legion Remix Bronze guide, share the Legion Remix Bronze guide notes with your group, and log results in the Legion Remix Bronze guide tracker.
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 mb-6">
            <li>The Legion Remix Bronze guide highlights weekly Bronze caps.</li>
            <li>Distribute the Legion Remix Bronze guide to coordinate rare elite pulls.</li>
            <li>Update the Legion Remix Bronze guide after every Blizzard hotfix.</li>
            <li>Record your best hour inside the Legion Remix Bronze guide spreadsheet.</li>
            <li>Archive the Legion Remix Bronze guide checklist for 2026 Remix events.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Plan Your Farming</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/calculator"
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6 hover:border-green-500 transition-all"
            >
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2">Bronze Calculator</h3>
              <p className="text-gray-300 text-sm">
                Calculate exactly how much Bronze you need
              </p>
            </Link>
            <Link
              href="/rewards"
              className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6 hover:border-yellow-500 transition-all"
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-bold text-white mb-2">Browse Rewards</h3>
              <p className="text-gray-300 text-sm">
                See all available mounts, pets, and transmog
              </p>
            </Link>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Bronze Guide Deep Dive</h2>
            <div className="space-y-4 text-sm leading-7 text-gray-300">
              {seoParagraphs.map((paragraph, idx) => (
                <p key={`bronze-seo-${idx}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
