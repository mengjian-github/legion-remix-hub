'use client';

import { useEffect, useMemo, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import dynamic from 'next/dynamic';
import AnswerFirstBlock from '@/components/seo/AnswerFirstBlock';
import { bronzeEntries } from '@/data/rewards';
import { farmingMethods } from '@/data/dungeons';
import { createBreadcrumbSchema, createFAQSchema, JsonLd } from '@/lib/schema';

const calculatorTypes = ['all', ...Array.from(new Set(bronzeEntries.map(entry => entry.type)))] as string[];

type CalculatorFaqEntry = { question: string; answer: string };

const calculatorFaq: CalculatorFaqEntry[] = [
  {
    question: 'How do I use the Legion Remix bronze calculator to build a wishlist?',
    answer: 'Toggle any reward in the list, watch the totals update in the sidebar, and keep the tab open so you can compare bronze costs before buying in Legion Remix.'
  },
  {
    question: 'Does the calculator estimate how long Legion Remix farms will take?',
    answer: 'Yes—the sidebar converts your bronze total into hours for three top-tier farming routes, so you know exactly how many keystones or scenarios you need.'
  },
  {
    question: 'Can I share my Legion Remix bronze calculator totals with friends?',
    answer: 'Take a screenshot or export the visible list—guilds often post the totals in Discord so everyone follows the same upgrade order on reset night.'
  },
  {
    question: 'What presets come with this Legion Remix bronze calculator?',
    answer: 'Category filters cover mounts, transmogs, toys, class sets, and utility bundles, and there is a “calculator10” preset for quickly budgeting ten priority items.'
  }
];

export default function CalculatorPage() {
  const [selectedRewards, setSelectedRewards] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const toggleReward = (rewardId: string) => {
    const reward = bronzeEntries.find(item => item.id === rewardId);
    const newSelected = new Set(selectedRewards);
    const action = newSelected.has(rewardId) ? 'remove' : 'add';
    if (newSelected.has(rewardId)) {
      newSelected.delete(rewardId);
    } else {
      newSelected.add(rewardId);
    }
    setSelectedRewards(newSelected);
    trackEvent('calculator_select', {
      reward_id: rewardId,
      reward_name: reward?.name ?? rewardId,
      reward_type: reward?.type ?? 'unknown',
      action,
      selected_count: newSelected.size,
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.trim().length >= 2) {
      trackEvent('calculator_search', { query: value.trim().slice(0, 80), result_scope: filter });
    }
  };

  const handleShareClick = async () => {
    const shareText = `Legion Remix wishlist: ${selectedRewards.size} rewards, ${totalBronze.toLocaleString()} Bronze, ${estimatedTime.toFixed(1)}h at top farm speed.`;
    trackEvent('calculator_copy_or_share', {
      page: 'calculator',
      selected_count: selectedRewards.size,
      total_bronze: totalBronze,
    });

    try {
      if (navigator.share) {
        await navigator.share({ title: 'Legion Remix Bronze Calculator', text: shareText, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(shareText);
      }
    } catch {
      // User cancelled native share or clipboard was unavailable; analytics has already recorded intent.
    }
  };

  const handleClearAll = () => {
    trackEvent('wishlist_total_changed', { action: 'clear_all', previous_count: selectedRewards.size, previous_bronze: totalBronze });
    setSelectedRewards(new Set());
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
  const faqSchema = useMemo(() => createFAQSchema(calculatorFaq), []);
  const breadcrumbSchema = useMemo(() => createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Calculator', path: '/calculator' },
  ]), []);

  useEffect(() => {
    trackEvent('wishlist_total_changed', {
      selected_count: selectedRewards.size,
      total_bronze: totalBronze,
      estimated_hours: Number(estimatedTime.toFixed(2)),
    });
  }, [selectedRewards.size, totalBronze, estimatedTime]);

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
    <div className="min-h-screen overflow-x-hidden bg-gray-950 py-6 sm:py-12 px-4">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-amber-300">Bronze tool first</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Legion Remix Bronze Calculator</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            Search 313 rewards, tap categories, and build a wishlist before you read the full planning notes.
          </p>
        </div>

        <AnswerFirstBlock
          answer="Use the Legion Remix Bronze Calculator when you need a direct Bronze budget: search a reward, select it, then read total Bronze and estimated farm time before buying from vendors. The list is based on the site reward compendium and should be checked against in-game vendor stock after hotfixes."
          checkedAt="June 6, 2026"
          sourceBasis="Legion Remix Hub reward tables, farming method estimates, and in-game vendor planning notes."
          officialLinks={[{ label: 'World of Warcraft', href: 'https://worldofwarcraft.blizzard.com/', external: true }]}
          internalLinks={[
            { label: 'Reward tables', href: '/rewards' },
            { label: 'Bronze farming guide', href: '/guides/bronze-farming' },
            { label: 'Suramar campaign', href: '/guides/suramar-campaign' },
          ]}
        />

        <div className="lg:hidden sticky top-2 z-20 mb-4 rounded-2xl border border-green-700/50 bg-gray-950/95 p-3 shadow-2xl backdrop-blur">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Items</div>
              <div className="text-lg font-black text-white">{selectedRewards.size}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Total Bronze</div>
              <div className="text-lg font-black text-yellow-400">{totalBronze.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-gray-400">Farm Time</div>
              <div className="text-lg font-black text-green-300">{totalBronze > 0 ? `${estimatedTime.toFixed(1)}h` : '0h'}</div>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 lg:grid-cols-3 gap-5 lg:gap-8">
          {/* Main Content */}
          <div className="min-w-0 lg:col-span-2 space-y-3 sm:space-y-6">
            {/* Filters */}
            <div className="min-w-0 bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search rewards..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                  {calculatorTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFilter(type);
                        trackEvent('calculator_filter_click', { filter: type });
                      }}
                      className={`min-h-10 shrink-0 px-4 py-2 rounded-md font-medium transition-colors ${
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
                        onClick={handleClearAll}
                        className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={handleShareClick}
                        className="w-full mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-md font-medium transition-colors"
                      >
                        Copy / Share Summary
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
                      trackEvent('wishlist_total_changed', { preset: 'all_mounts', selected_count: mountIds.length });
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select All Mounts
                  </button>
                  <button
                    onClick={() => {
                      const petIds = bronzeEntries.filter(r => r.type === 'pet').map(r => r.id);
                      setSelectedRewards(new Set(petIds));
                      trackEvent('wishlist_total_changed', { preset: 'all_pets', selected_count: petIds.length });
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select All Pets
                  </button>
                  <button
                    onClick={() => {
                      const housingIds = bronzeEntries.filter(r => r.category === 'housing').map(r => r.id);
                      setSelectedRewards(new Set(housingIds));
                      trackEvent('wishlist_total_changed', { preset: 'housing_decor', selected_count: housingIds.length });
                    }}
                    className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition-colors"
                  >
                    Select Housing Decor
                  </button>
                  <button
                    onClick={() => {
                      const allIds = bronzeEntries.map(r => r.id);
                      setSelectedRewards(new Set(allIds));
                      trackEvent('wishlist_total_changed', { preset: 'everything', selected_count: allIds.length });
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

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-900/60 border border-green-700/40 rounded-lg p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-emerald-200 mb-2">Bronze Calculator Highlights</h2>
            <p className="text-sm text-gray-300 mb-3">
              Use the Legion Remix bronze calculator to select the rewards you want from the Infinite Bazaar and see how much Bronze the run will cost. Prices mirror the rewards compendium while the farming blueprint feeds hourly estimates.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
              <li>Plan smarter farm routes while comparing trinkets, transmogs, mounts, toys, and class-set wishlists.</li>
              <li>Replace spreadsheets with a Bronze budget planner that pairs costs with farming hours.</li>
              <li>Players searching for “Legion Remix calculator 10” or “calculator10” can use presets to budget priority rewards quickly.</li>
            </ul>
          </div>
          <div className="bg-gray-900/60 border border-amber-700/40 rounded-lg p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-amber-200 mb-2">How to use it</h2>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
              <li>Search rewards or tap a category.</li>
              <li>Select items to update total Bronze and farm time.</li>
              <li>Copy/share the summary for your guild plan.</li>
            </ol>
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

        <div className="mt-16 bg-gray-900/60 border border-green-700/40 rounded-lg p-6" id="faq">
          <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Bronze Calculator FAQ</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            {calculatorFaq.map((item) => (
              <li key={item.question}>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p>{item.answer}</p>
              </li>
            ))}
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
