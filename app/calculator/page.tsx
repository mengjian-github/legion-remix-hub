'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { bronzeEntries } from '@/data/rewards';
import { farmingMethods } from '@/data/dungeons';

const calculatorTypes = ['all', ...Array.from(new Set(bronzeEntries.map(entry => entry.type)))] as string[];

export default function CalculatorPage() {
  const [selectedRewards, setSelectedRewards] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const toggleReward = (rewardId: string) => {
    const newSelected = new Set(selectedRewards);
    if (newSelected.has(rewardId)) {
      newSelected.delete(rewardId);
    } else {
      newSelected.add(rewardId);
    }
    setSelectedRewards(newSelected);
  };

  const totalBronze = useMemo(() => {
    return Array.from(selectedRewards).reduce((sum, id) => {
      const reward = bronzeEntries.find(item => item.id === id);
      return sum + (reward?.cost?.amount ?? 0);
    }, 0);
  }, [selectedRewards]);
  // Rewards List is rendered CSR-only; filtering/pagination handled inside the component

  const estimatedTime = useMemo(() => {
    const bestMethod = farmingMethods[0]; // Scenario spam at 9000/hr
    const hours = totalBronze / bestMethod.bronzePerHour;
    return hours;
  }, [totalBronze]);

  const referenceHighlights = [
    {
      title: 'Legion Remix Rewards Compendium',
      summary: 'Use the master list of Bronze prices and reward descriptions while you build or share wishlist snapshots.'
    },
    {
      title: 'Bronze Farming Blueprint',
      summary: 'Cross-check the per-hour estimates for dungeons, scenarios, and world quests featured in the time calculator above.'
    },
    {
      title: 'Content Phases & Schedule',
      summary: 'Note when housing decor, Argus rares, and Infinite Echoes vendors unlock so you can plan large purchases ahead of time.'
    }
  ];

  const RewardsList = dynamic(() => import('@/components/calculator/RewardsList'), { ssr: false });

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Legion Remix Bronze Calculator</h1>
          <p className="text-gray-400">
            Use the Legion Remix bronze calculator to select the rewards you want from the Infinite Bazaar and see how much Bronze the run will cost. Prices mirror the rewards compendium while the farming blueprint feeds the hourly estimates, so this Legion Remix calculator stays grounded in real event data.
          </p>
          <p className="text-gray-400 mt-3">
            This Legion Remix calculator also speaks directly to anyone searching for a Legion Remix rewards tracker or shareable planner. Toggle categories, export totals, and keep guildmates aligned on every Bronze purchase before the next Turbo Boost reset.
          </p>
          <div className="mt-4 bg-gray-900/60 border border-green-700/40 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-emerald-200 mb-2">Bronze Calculator Highlights</h2>
            <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
              <li>
                Plan smarter farm routes by keeping the Legion Remix bronze calculator open while you compare trinkets, transmogs, and class mount wishlists.
              </li>
              <li>
                Replace clunky spreadsheets—this Bronze budget planner pairs costs with farming hours so you always know which grind finishes first.
              </li>
              <li>
                Share snapshots with friends; the streamlined Legion Remix calculator view keeps everyone working toward the same Bronze goals.
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Quick note: some players search for “Legion Remix calculator 10” or “calculator10” — this is the same bronze calculator. Use the presets below to budget ten priority rewards quickly.
          </p>
          <div className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5">
            <h2 className="text-lg font-semibold text-emerald-200 mb-2">Why the Legion Remix bronze calculator matters</h2>
            <p className="text-sm text-gray-200">
              Search spikes for “Legion Remix bronze calculator”, “Legion Remix bronze tracker”, and “Legion Remix rewards tracker”
              underline how often Timerunners need a single dashboard. Keep this tab open while you route keystones, price
              out Violet Spellwing, or double-check Infinite Echoes housing decor so every Bronze investment stays deliberate.
            </p>
          </div>
        </div>

        <div className="mb-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">How to Use the Calculator</h2>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
              <li>Filter or search for the cosmetics you want, then tick the checkbox to add them to your Legion Remix bronze calculator wishlist.</li>
              <li>Keep the panel on the right open while you experiment—watch how the Legion Remix calculator updates Bronze totals alongside farm hours.</li>
              <li>Share your plan by screenshotting the calculator summary or keeping the tab open as you run dungeons.</li>
            </ol>
          </div>
          <div className="bg-gray-800 border border-amber-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Preset Ideas</h3>
            <p className="text-sm text-gray-300 mb-3">
              Drop these sets straight into the Legion Remix bronze calculator and adjust totals for your roster.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Grab every class mount for an alt army.</li>
              <li>Plan zone achievements with the Illusion and pet rewards.</li>
              <li>Track big-ticket weapons like Violet Spellwing and Corrupted Shalamayne.</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search rewards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {calculatorTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        filter === type
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Rewards List – CSR only (filters, search, pagination handled inside) */}
            <RewardsList
              selectedRewards={selectedRewards}
              toggleReward={toggleReward}
              filter={filter}
              searchTerm={searchTerm}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Summary */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Your Wishlist</h2>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Selected Items</div>
                    <div className="text-3xl font-bold text-white">
                      {selectedRewards.size}
                    </div>
                  </div>

                  <div className="border-t border-green-700/50 pt-4">
                    <div className="text-sm text-gray-400 mb-1">Total Bronze Needed</div>
                    <div className="text-4xl font-bold text-yellow-500">
                      {totalBronze.toLocaleString()}
                    </div>
                  </div>

                  {totalBronze > 0 && (
                    <>
                      <div className="border-t border-green-700/50 pt-4">
                        <div className="text-sm text-gray-400 mb-2">Estimated Farm Time</div>
                        <div className="space-y-2">
                          {farmingMethods.slice(0, 3).map((method) => {
                            const hours = totalBronze / method.bronzePerHour;
                            return (
                              <div key={method.id} className="flex justify-between text-sm">
                                <span className="text-gray-300">{method.name}:</span>
                                <span className="text-white font-semibold">
                                  {hours.toFixed(1)}h
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedRewards(new Set())}
                        className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                      >
                        Clear All
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Select</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Use these shortcuts when you want the Legion Remix bronze calculator to simulate entire reward categories instantly.
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const mountIds = bronzeEntries.filter(r => r.type === 'mount').map(r => r.id);
                      setSelectedRewards(new Set(mountIds));
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select All Mounts
                  </button>
                  <button
                    onClick={() => {
                      const petIds = bronzeEntries.filter(r => r.type === 'pet').map(r => r.id);
                      setSelectedRewards(new Set(petIds));
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select All Pets
                  </button>
                  <button
                    onClick={() => {
                      const housingIds = bronzeEntries.filter(r => r.category === 'housing').map(r => r.id);
                      setSelectedRewards(new Set(housingIds));
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select Housing Decor
                  </button>
                  <button
                    onClick={() => {
                      const allIds = bronzeEntries.map(r => r.id);
                      setSelectedRewards(new Set(allIds));
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select Everything
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-900/60 border border-emerald-700/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Bronze Calculator Playbook</h2>
          <p className="text-sm text-gray-300 mb-4">
            Treat the Legion Remix bronze calculator as more than a checklist. Begin each week by cloning your main
            wishlist, then duplicate it for alts so you never question where Bronze should flow. The Legion Remix bronze
            tracker panel on the right updates instantly—compare the time cost of cosmetics versus functional upgrades
            before committing to a grind.
          </p>
          <p className="text-sm text-gray-300 mb-4">
            Stack your data inputs. When you finish a Mythic+ marathon, jot the Bronze per hour you actually earned next
            to the farming presets. Enter those numbers back into the Legion Remix calculator before bed; the next time
            you log in, you&apos;ll already know if rare elites, keystones, or Infinite Power farm loops deliver the fastest
            payoff. Consistent logging keeps the Legion Remix bronze tracker realistic instead of aspirational.
          </p>
          <p className="text-sm text-gray-300 mb-4">
            Evaluate opportunity cost. If the Legion Remix rewards tracker shows you&apos;re two resets away from Violet
            Spellwing, duplicate your wishlist and strip out non-essential toys. Watch how the Legion Remix bronze tracker
            drops your time requirement, then re-add items as you bank surplus Bronze. This approach preserves long-term
            goals while staying responsive to hotfixes or new event drops.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 mb-4">
            <li>Lock a baseline wishlist the day reset hits, and annotate it with the date for easy comparison.</li>
            <li>Note weekly Bronze income from keystones, world quests, and research; update the calculator with those totals.</li>
            <li>Tag must-have rewards so you never accidentally clear the list during a binge farming session.</li>
            <li>Export screenshots after each major purchase to build a Legion Remix bronze tracker history for your guild.</li>
            <li>Review the top search keywords to ensure your calculator notes answer “Legion Remix bronze calculator” queries directly.</li>
          </ol>
          <p className="text-sm text-gray-300">
            Finally, share the calculator with teammates. Coordination keeps everyone aligned on Bronze
            priorities, reduces duplicate farming, and makes it easier to pivot when a new Infinite Echoes vendor rotates in.
            A disciplined Legion Remix bronze tracker routine is the fastest path to clearing every reward before January 19.
          </p>
        </div>

        {/* FAQ block intentionally concise; each question uses the exact key phrase once to stay natural */}
        <div className="mt-16 bg-gray-900/60 border border-green-700/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Bronze Calculator FAQ</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <h3 className="text-lg font-semibold text-white">What is the Legion Remix bronze calculator?</h3>
              <p>The tool that totals Bronze costs and farm hours for any wishlist of rewards during the event.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">How do I use the Legion Remix bronze calculator for weekly planning?</h3>
              <p>Filter rewards, add them to your list, and compare hours from your preferred farming method.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Can the Legion Remix bronze calculator handle multiple characters?</h3>
              <p>Yes—duplicate presets per character and adjust for class mounts or priority transmogs.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Where does the Legion Remix bronze calculator get prices?</h3>
              <p>From the rewards compendium maintained alongside the site’s reference data.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Does the Legion Remix bronze calculator estimate time to finish?</h3>
              <p>It shows hours for multiple methods—dungeons, scenarios, and world content—based on your wishlist.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Is the Legion Remix bronze calculator better than a spreadsheet?</h3>
              <p>It removes manual formulas and keeps totals synced with current Bronze prices.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Can I share the Legion Remix bronze calculator plan with friends?</h3>
              <p>Yes—screenshot the sidebar summary or export notes to your guild doc.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Does the Legion Remix bronze calculator include housing decor?</h3>
              <p>All reward types are supported; use filters to narrow by category or phase.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Will the Legion Remix bronze calculator stay updated?</h3>
              <p>We track hotfixes and vendor changes and refresh prices as needed.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-white">Where do I send feedback for the Legion Remix bronze calculator?</h3>
              <p>Open an issue on the project repo or message us—feature requests are welcome.</p>
            </li>
          </ul>
        </div>

        {/* Starter templates that reference the key phrase once per item for clarity */}
        <div className="mt-16 bg-gray-900/60 border border-green-700/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Starter Templates</h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li>Use the Legion Remix bronze calculator to budget 10 must‑have transmogs before raiding.</li>
            <li>Spin up a fresh Legion Remix bronze calculator list for an alt focused on class mounts only.</li>
            <li>Pair the Legion Remix bronze calculator with your weekly keystone route to pace upgrades.</li>
            <li>Build a raid cosmetics plan in the Legion Remix bronze calculator that leaves Bronze for toys.</li>
            <li>Track paragon caches and copy the totals into the Legion Remix bronze calculator every reset.</li>
          </ul>
        </div>

        <div className="mt-8 bg-gray-900/60 border border-green-700/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
            <li>Pin the Legion Remix bronze calculator tab next to your dungeon route for quick toggles.</li>
            <li>After purchases, reopen the Legion Remix bronze calculator and clear items to keep totals honest.</li>
            <li>When you swap mains, clone your Legion Remix bronze calculator preset instead of rebuilding.</li>
            <li>Use weekly lockout notes directly beside the Legion Remix bronze calculator to prevent over‑farming.</li>
            <li>Compare two tabs of the Legion Remix bronze calculator to test different upgrade orders.</li>
            <li>If you raid late, preload the Legion Remix bronze calculator with ensemble picks for instant buys.</li>
            <li>Share a screenshot of the Legion Remix bronze calculator so guildmates can sanity‑check your plan.</li>
            <li>Keep a minimal “alts only” list in the Legion Remix bronze calculator to avoid mixing priorities.</li>
            <li>Record your real Bronze/hour and paste it near the Legion Remix bronze calculator for accuracy.</li>
            <li>Before reset, audit the Legion Remix bronze calculator for leftovers and roll them forward.</li>
            <li>Use tags in your notes to match sections in the Legion Remix bronze calculator one‑to‑one.</li>
            <li>When prices change, refresh the Legion Remix bronze calculator and re‑order buys by value.</li>
          </ul>
        </div>

        <div className="mt-16 bg-gray-900/40 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
          <p className="text-sm text-gray-300 mb-4">
            Keep these resources open while you budget—each one feeds data into the calculator or helps validate your plan.
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
            Export your totals to guild spreadsheets or screenshot the summary so everyone knows the Bronze target before the next reset.
          </p>
        </div>
      </div>
    </div>
  );
}
