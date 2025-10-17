'use client';

import { useMemo, useState } from 'react';
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

  const filteredRewards = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return bronzeEntries.filter(reward => {
      const matchesType = filter === 'all' || reward.type === filter;
      if (!matchesType) {
        return false;
      }
      if (!term) {
        return true;
      }
      const haystack = [
        reward.name,
        reward.tableLabel,
        reward.sectionTitle,
        reward.source,
        reward.requirement,
        reward.achievement,
        ...Object.values(reward.metadata)
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [filter, searchTerm]);

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

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Bronze Calculator</h1>
          <p className="text-gray-400">
            Select the rewards you want from the Infinite Bazaar and see how much Bronze the run will cost. Numbers mirror the prices listed in the rewards compendium and hook into the Bronze-per-hour estimates from the farming blueprint.
          </p>
        </div>

        <div className="mb-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">How to Use the Calculator</h2>
            <ol className="list-decimal list-inside text-sm text-gray-300 space-y-2">
              <li>Filter or search for the cosmetics you want, then tick the checkbox to add them to your wishlist.</li>
              <li>Keep the panel on the right open while you experiment—your total Bronze and estimated farm hours update instantly.</li>
              <li>Share your plan by screenshotting the summary or keeping the tab open as you run dungeons.</li>
            </ol>
          </div>
          <div className="bg-gray-800 border border-amber-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-300 mb-3">Preset Ideas</h3>
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

            {/* Rewards List */}
            <div className="space-y-3">
              {filteredRewards.map((reward) => {
                const detailParts = [
                  reward.tableLabel,
                  reward.source,
                  reward.requirement,
                  reward.achievement
                ].filter(Boolean) as string[];

                return (
                  <div
                    key={reward.id}
                    className={`bg-gray-800 border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedRewards.has(reward.id)
                        ? 'border-green-500 bg-green-900/20'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => toggleReward(reward.id)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <input
                          type="checkbox"
                          checked={selectedRewards.has(reward.id)}
                          onChange={() => toggleReward(reward.id)}
                          className="mt-1 w-5 h-5 rounded text-green-600 focus:ring-green-500"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{reward.name}</h3>
                          {detailParts.length > 0 && (
                            <p className="text-sm text-gray-400 mt-1">{detailParts.slice(0, 2).join(' • ')}</p>
                          )}
                          <div className="flex gap-2 flex-wrap mt-2">
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {reward.type}
                            </span>
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {reward.sectionTitle}
                            </span>
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {reward.tableLabel}
                            </span>
                            {reward.phase && (
                              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                Phase {reward.phase}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right min-w-[120px]">
                        <div className="text-2xl font-bold text-yellow-500">
                          {reward.cost?.amount ? reward.cost.amount.toLocaleString() : '—'}
                        </div>
                        <div className="text-xs text-gray-400">Bronze</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredRewards.length === 0 && (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
                <p className="text-gray-400">No rewards found matching your filters.</p>
              </div>
            )}
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
