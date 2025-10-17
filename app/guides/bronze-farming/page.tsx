import type { Metadata } from 'next';
import Link from 'next/link';
import { farmingMethods, getBestBronzeDungeons } from '@/data/dungeons';
import { totalBronzeCost, rewardSpotlights } from '@/data/rewards';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Bronze Farming Blueprint 2025',
  description: 'Farm Legion Remix Bronze efficiently with dungeon rotations, open-world loops, Turbo Boost scheduling, and reward priorities tailored to Timerunner cosmetics.',
  alternates: {
    canonical: buildCanonicalUrl('/guides/bronze-farming'),
  },
};

export default function BronzeFarmingPage() {
  const bestDungeons = getBestBronzeDungeons();
  const quickLinks = [
    { label: 'Bronze from Infinite Knowledge turn-ins', href: '#infinite-knowledge-legion-remix' },
    { label: 'Strange Humming Crystal routes', href: '#strange-humming-crystal' },
    { label: 'Rare elite loop checklist', href: '#rare-elites-legion-remix' },
    { label: 'Turbo Boost dungeon schedule', href: '#bronze-collection-in-action' },
    { label: 'Achievement targets worth budgeting', href: '#achievement-targets-legion-remix' },
    { label: 'Time investment calculator', href: '#time-investment-calculator' },
    { label: 'Bronze weekly checklist', href: '#weekly-checklist' },
    { label: 'Farming recommendations by playstyle', href: '#farming-strategy-legion-remix' },
    { label: 'Calculator for reward planning', href: '/calculator' },
    { label: 'Full rewards browser', href: '/rewards' }
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
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Bronze Farming Guide</h1>
          <p className="text-gray-300 mb-4">
            Legion Remix Bronze farming keeps your Timerunner on track for the event&apos;s biggest cosmetics. The 2025 season runs from October 7 through January 19, giving you fifteen weeks to gather Bronze from the Broken Isles, Argus, and the Infinite Bazaar. This playbook combines dungeon pacing from the Legion Remix overview, phase unlock notes from the content schedule, and World Quest advice from the Broken Isles zone guides so every hour you spend contributes directly to the rewards board.
          </p>
          <p className="text-gray-300 mb-4">
            Efficient Legion Remix Bronze farming leans on a mix of activities. Dungeons grant 1,200 to 2,200 Bronze per clear, rare elites reward 400 to 600 Bronze apiece, and Infinite Research dailies stack another 1,000 Bronze every time you ship a packet back to the Bazaar. World Quests jump to 200 Bronze each as soon as you finish &ldquo;Uniting the Isles,&rdquo; so rotating through Stormheim, Val&apos;sharah, Highmountain, Azsuna, and Suramar keeps your coffers full while progress continues on class campaigns and reputations.
          </p>
          <p className="text-gray-300 mb-4">
            Legion Remix Bronze farming also thrives on account-wide unlocks. The Infinite Knowledge guide confirms that your first 36 ranks accelerate Infinite Power gains, and every rank beyond that flips into an instant 1,000 Bronze payout. Combine those payouts with Artifactum Sand drops to advance the shared Infinite Artifact tree, then funnel the extra Bronze into the Infinite Bazaar&apos;s rotating stock of mounts, toys, and ensembles.
          </p>
          <p className="text-gray-300 mb-6">
            As phases roll out—Rise of the Nightfallen, Legionfall, Argus Eternal, and Infinite Echoes—you&apos;ll weave fresh Bronze sources into your route, from Violet Spellwing raid wings to player housing decor. Use the quick links below whenever you need a refresher on Legion Remix Bronze farming topics during a busy Turbo Boost window.
          </p>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-8 text-sm text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg px-4 py-3 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

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

          <h2 id="weekly-checklist" className="text-2xl font-bold text-white mt-8 mb-4">Weekly Checklist</h2>
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
            <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
            <p className="text-gray-300 mb-4">
              Cross-check your Legion Remix Bronze farming plans with the primary reference articles so nothing slips through a reset. Each bullet below calls out a proven tactic from the overview, rewards, or research guides that pairs well with the playstyle sections above.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <strong>Overview &amp; Phases:</strong> The Legion Remix overview confirms Heroic World Tier as a repeatable 75% Bronze accelerator, while the phase schedule explains when Argus and Infinite Echoes unlock new rares and housing vendors. Slot those windows into your Legion Remix Bronze farming calendar.
              </li>
              <li>
                <strong>Infinite Knowledge &amp; Research:</strong> Both guides spell out the 36-rank cap, the achievement sources, and the daily research packets. Record every hand-in; once capped, the same route pays 1,000 Bronze per token on top of Artifactum Sand and Infinite Power gains.
              </li>
              <li>
                <strong>World Quests &amp; Class Campaigns:</strong> The Broken Isles zone walkthroughs and world quest unlock article highlight which reputations matter for Suramar, Nightfallen, and Order Hall upgrades. Prioritize those story beats so your Legion Remix Bronze farming loops layer class hall missions with outdoor bonuses.
              </li>
              <li>
                <strong>Rewards Planning:</strong> The rewards compendium lists Bronze prices for ensembles, toys, and legacy items like Corrupted Shalamayne. Compare your wishlist against the calculator each Sunday so your Legion Remix Bronze farming sessions stay focused on the cosmetics you truly want.
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Maintain a simple spreadsheet or use the built-in calculator to track how much Legion Remix Bronze farming you still owe before the event ends on January 19, 2026. A steady mix of dungeons, World Quests, research, and Argus rares will hit every target comfortably.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
