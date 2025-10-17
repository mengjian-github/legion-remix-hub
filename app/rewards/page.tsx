'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { bronzeRewards, rewardsByCategory, totalBronzeCost, getRewardsByType, rewardSpotlights } from '@/data/rewards';
import { legionImages } from '@/data/images';

export default function RewardsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRewards = useMemo(() => {
    return bronzeRewards.filter(reward => {
      const matchesType = filter === 'all' || reward.type === filter;
      const matchesSearch = reward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           reward.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [filter, searchTerm]);

  const rewardsByType = useMemo(() => {
    return filteredRewards.reduce((acc, reward) => {
      if (!acc[reward.type]) {
        acc[reward.type] = [];
      }
      acc[reward.type].push(reward);
      return acc;
    }, {} as Record<string, typeof bronzeRewards>);
  }, [filteredRewards]);
  const quickLinks = [
    { label: 'Cost breakdown', href: '#reward-stats' },
    { label: 'Featured cosmetics', href: '#exclusive-rewards' },
    { label: 'Achievement metas', href: '#meta-rewards' },
    { label: 'Farming tips', href: '#farming-tips' },
    { label: 'Bronze calculator', href: '/calculator' }
  ];

  const referenceHighlights = [
    {
      title: 'Legion Remix Rewards: Titles, Toys, Mounts, Pets, Transmog, & Housing',
      summary: 'Contains the master list of Infinite Bazaar items, Bronze prices, and noted returning cosmetics referenced throughout this page.'
    },
    {
      title: 'Content Phases & Schedule',
      summary: 'Explains when new vendors and housing decor arrive so you can time large Bronze purchases.'
    },
    {
      title: 'Legion Remix Overview',
      summary: 'Clarifies how rewards are account-wide via Warband sharing and which systems (auction house, professions) are disabled.'
    },
    {
      title: 'Bronze Farming Blueprint',
      summary: 'Pairs each major reward tier with recommended Bronze-per-hour routes, helping you fund this wishlist.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Legion Remix Rewards</h1>
          <p className="text-gray-400 mb-4">
            The Infinite Bazaar stocks legacy mounts, toys, ensembles, and brand-new Legion-themed housing decor. The rewards reference confirms every cosmetic is Warband-wide, while the content schedule lays out when new vendors arrive between October 7, 2025 and January 19, 2026.
          </p>
          <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-700/50 rounded-lg p-6">
            <div className="text-center">
              <div className="text-sm text-gray-300 mb-2">Total Bronze for Everything</div>
              <div className="text-5xl font-bold text-yellow-500">
                {totalBronzeCost.toLocaleString()}
              </div>
              <Link
                href="/calculator"
                className="inline-block mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
              >
                Calculate Your Wishlist
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-10">
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

        {/* Featured Rewards Showcase */}
        <div id="exclusive-rewards" className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Exclusive New Rewards
          </h2>

          {/* Top Highlight Rewards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg overflow-hidden">
              <div className="relative h-72">
                <img
                  src={legionImages.felClassMounts}
                  alt="Felscorched Class Mounts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-green-400">🐎 Felscorched Class Mounts</h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">FREE @ 80</span>
                  </div>
                  <p className="text-gray-200 mb-2">12 unique fel-infused class mount variants - one for each class!</p>
                  <p className="text-sm text-gray-300">Automatically earned at level 80, or purchase for 20,000 Bronze for alts</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-700/50 rounded-lg overflow-hidden">
              <div className="relative h-72">
                <img
                  src={legionImages.azsharaTransmog}
                  alt="Azshara Transmog"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-purple-400">👑 Queen Azshara Sets</h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">NEW!</span>
                  </div>
                  <p className="text-gray-200 mb-2">Brand new Queen Azshara-inspired armor appearances</p>
                  <p className="text-sm text-gray-300">Exclusive to Legion Remix - never available before</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Featured Rewards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 border border-orange-700/30 rounded-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src={legionImages.corruptedShalamayne}
                  alt="Corrupted Shalamayne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-orange-400 mb-2">⚔️ Corrupted Shalamayne</h3>
                <p className="text-sm text-gray-300 mb-2">Varian's legendary swords, fel-corrupted variant</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Weapon Transmog</span>
                  <span className="text-yellow-500 font-bold">Price TBA</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-yellow-700/30 rounded-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src={legionImages.housingDecorReference ?? legionImages.housingDecor}
                  alt="Legion Remix Housing Decor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">🏠 Housing Decor Vendor</h3>
                <p className="text-sm text-gray-300 mb-2">Infinite Echoes unlock brings dozens of unique furnishings</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Housing Items</span>
                  <span className="text-yellow-500 font-bold">Various</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-red-700/30 rounded-lg overflow-hidden">
              <div className="relative h-56">
                <img
                  src={legionImages.rewardsToysReference ?? legionImages.felshatterIllusion}
                  alt="Legion Remix Toys"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-400 mb-2">🎲 Remix Toys & Illusions</h3>
                <p className="text-sm text-gray-300 mb-2">Collect seasonal toys, illusions, and party tricks</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Cosmetics</span>
                  <span className="text-yellow-500 font-bold">Various</span>
                </div>
              </div>
            </div>
          </div>

          {/* Violet Spellwing Callout */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-700/50 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-500">
                  <span className="text-5xl">🦇</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">🌟 Violet Spellwing Returns!</h3>
                <p className="text-gray-300 mb-2">
                  The <strong>Violet Spellwing</strong> is back! This previously unobtainable mount from Antorus Heroic is now available for <strong className="text-yellow-500">150,000 Bronze</strong>.
                </p>
                <p className="text-sm text-gray-400">
                  Originally only available during Legion's Ahead of the Curve achievement, this is your chance to add it to your collection!
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-3xl font-bold text-yellow-500">150,000</span>
                <div className="text-xs text-gray-400 text-center">Bronze</div>
              </div>
            </div>
          </div>

          {/* Achievement & Meta Reward Highlights */}
          <div id="meta-rewards" className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Achievement & Meta Reward Highlights
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
              Target these milestone objectives to unlock cosmetics that cannot be bought directly with Bronze.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {rewardSpotlights.map((spotlight) => (
                <div
                  key={spotlight.id}
                  className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg shadow-black/20"
                >
                  <div className="relative h-56">
                    <img
                      src={spotlight.image}
                      alt={spotlight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-xs uppercase tracking-wide text-green-300/80">Meta Reward</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{spotlight.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{spotlight.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    {spotlight.highlights.map((item) => (
                      <div key={item.name} className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-white mb-1">{item.name}</h4>
                        <p className="text-xs text-gray-300 leading-snug">{item.requirement}</p>
                        {item.note && (
                          <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div id="reward-stats" className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 border border-green-700/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-400 mb-1">
              {getRewardsByType('mount').length}
            </div>
            <div className="text-sm text-gray-400">Mounts Available</div>
          </div>
          <div className="bg-gray-800 border border-blue-700/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">
              {getRewardsByType('pet').length}
            </div>
            <div className="text-sm text-gray-400">Battle Pets</div>
          </div>
          <div className="bg-gray-800 border border-purple-700/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-purple-400 mb-1">
              {getRewardsByType('ensemble').length + getRewardsByType('transmog').length}
            </div>
            <div className="text-sm text-gray-400">Transmog Sets</div>
          </div>
          <div className="bg-gray-800 border border-amber-700/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-amber-400 mb-1">
              {getRewardsByType('toy').length}
            </div>
            <div className="text-sm text-gray-400">Toys & Fun Items</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Filter & Search</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search rewards by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'mount', 'pet', 'transmog', 'ensemble', 'toy'].map((type) => (
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
          <p className="text-xs text-gray-500 mt-3">
            💡 Tip: Use filters to narrow down rewards by type, or search for specific items
          </p>
        </div>

        {/* Rewards Grid */}
        {Object.entries(rewardsByType).map(([type, rewards]) => (
          <div key={type} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white capitalize">
                {type === 'ensemble' ? 'Transmog Ensembles' : `${type}s`} ({rewards.length})
              </h2>
              <div className="text-sm text-gray-400">
                Total: <span className="text-yellow-500 font-bold">
                  {rewards.reduce((sum, r) => sum + r.cost, 0).toLocaleString()}
                </span> Bronze
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => (
                <div
                  key={reward.id}
                  className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-green-500/20"
                >
                  {/* Visual indicator based on type */}
                  <div className={`h-1 ${
                    type === 'mount' ? 'bg-green-500' :
                    type === 'pet' ? 'bg-blue-500' :
                    type === 'transmog' || type === 'ensemble' ? 'bg-purple-500' :
                    type === 'toy' ? 'bg-amber-500' : 'bg-gray-500'
                  }`}></div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                          {reward.name}
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                          <span className={`text-xs px-2 py-1 rounded ${
                            type === 'mount' ? 'bg-green-900/40 text-green-300 border border-green-700/30' :
                            type === 'pet' ? 'bg-blue-900/40 text-blue-300 border border-blue-700/30' :
                            type === 'transmog' || type === 'ensemble' ? 'bg-purple-900/40 text-purple-300 border border-purple-700/30' :
                            type === 'toy' ? 'bg-amber-900/40 text-amber-300 border border-amber-700/30' :
                            'bg-gray-700 text-gray-300'
                          }`}>
                            {type}
                          </span>
                          {reward.category && (
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded border border-gray-600">
                              {reward.category}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-yellow-500">
                          {reward.cost.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">Bronze</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-3 min-h-[40px]">{reward.description}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                      <div className="text-xs text-gray-500">
                        <span className="text-gray-400">📍</span> {reward.source}
                      </div>
                      {reward.category === 'Rare Mounts' && (
                        <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded border border-red-700/30">
                          ⭐ Rare
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredRewards.length === 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
            <p className="text-gray-400 text-lg mb-2">No rewards found matching your filters.</p>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter settings</p>
          </div>
        )}

        {/* Farming Tips Section */}
        {filteredRewards.length > 0 && (
          <div id="farming-tips" className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">💡 Farming Tips & Strategy</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">Most Efficient Methods</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▸</span>
                    <span><strong>Heroic Dungeons:</strong> 1,200-2,200 Bronze per run (~15 mins)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▸</span>
                    <span><strong>Infinite Research Quests:</strong> +1,000 Bronze bonus each (bank up to 6)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▸</span>
                    <span><strong>World Quests:</strong> 200 Bronze each (quick and easy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">▸</span>
                    <span><strong>Bronze Caches:</strong> Substantially increased rewards in recent updates</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Priority Recommendations</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">★</span>
                    <span><strong>Violet Spellwing first</strong> if you missed it in original Legion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">★</span>
                    <span><strong>Ur'zul mounts</strong> are the most expensive but very unique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">★</span>
                    <span><strong>Transmog ensembles</strong> unlock full sets instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2 mt-1">★</span>
                    <span>Use the <Link href="/calculator" className="text-green-400 hover:text-green-300 underline">Bronze Calculator</Link> to plan your wishlist</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-blue-400">💎 Pro Tip:</strong> All cosmetic rewards are <strong>account-wide</strong> via Warband system!
                Once you earn a mount, pet, or transmog on your Timerunner, it's available to all your characters on your Battle.net account.
              </p>
            </div>
          </div>
        )}

        <div className="mt-16 bg-gray-900/40 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
          <p className="text-sm text-gray-300 mb-4">
            Cross-reference these articles whenever you need the raw Bronze prices, vendor unlock timing, or rarity notes behind each cosmetic listed above.
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
            Keep the rewards compendium handy while you shop—stock and Bronze costs will not surprise you mid-farm.
          </p>
        </div>

      </div>
    </div>
  );
}
