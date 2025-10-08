import Link from 'next/link';
import Image from 'next/image';
import Countdown from '@/components/ui/Countdown';
import { eventDates, remixPhases, getCurrentPhase } from '@/data/timeline';
import { classes } from '@/data/classes';
import { legionImages } from '@/data/images';

export default function Home() {
  const currentPhase = getCurrentPhase();

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={legionImages.heroBanner}
            alt="Legion Remix: Skies of Fire"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-950"></div>
        </div>

        {/* Decorative fel glow effects */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-700 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <span className="text-green-400 font-semibold">⚡ EVENT NOW LIVE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="text-gradient-fel">Legion Remix Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-3 font-medium">
              Complete Legion Remix Guide for World of Warcraft 2025 - Master Leveling, Bronze Farming & Class Selection
            </p>
            <p className="text-lg text-green-400 font-semibold mb-6">
              🔥 Skies of Fire • October 7, 2025 - January 19, 2026
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/guides/getting-started"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all fel-glow hover:fel-glow-strong"
              >
                Start Your Legion Remix Guide →
              </Link>
              <Link
                href="/calculator"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all bronze-glow"
              >
                💰 Bronze Calculator
              </Link>
            </div>
          </div>

          {/* Countdown */}
          <div className="max-w-3xl mx-auto">
            <Countdown targetDate={eventDates.end} title="⏰ Event Ends In" />
          </div>
        </div>
      </section>

      {/* Current Phase */}
      {currentPhase && (
        <section className="py-12 px-4 bg-gray-900/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img
              src={legionImages.artifactWeapon}
              alt="Artifact Weapon"
              className="w-full h-full object-cover object-left"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-gradient-to-r from-green-900/60 to-emerald-900/40 rounded-lg p-8 border border-green-700/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">
                Current Phase: {currentPhase.name}
              </h2>
              <p className="text-gray-300 mb-6">{currentPhase.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Features</h3>
                  <ul className="space-y-2">
                    {currentPhase.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Focus</h3>
                  <p className="text-gray-300">{currentPhase.focus} Follow our legion remix guide tips to maximize your progress during this phase.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* New Systems & Features */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Essential Legion Remix Guide Features
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Master the new systems in our comprehensive legion remix guide. Learn infinite artifact weapons, heroic world tier mechanics, and infinite research quests to dominate the legion remix leveling guide experience and maximize your bronze farming efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Infinite Artifact Weapons */}
            <div className="bg-gray-800 border border-green-700/30 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <img
                  src={legionImages.artifactTraitTree}
                  alt="Infinite Artifact Weapon Trait Tree"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  ⚔️ Infinite Artifact Weapons
                </h3>
                <p className="text-gray-300 mb-4">
                  All artifact weapons share a common trait tree in this legion remix guide system. Specialize in Nature, Fel, Arcane, Storm, or Holy Light.
                  Mix and match schools using jewelry items, and respec anytime for ultimate flexibility!
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Infinite power scaling - no caps
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Upgrade with Artifactum Sand from any content
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Push beyond max rank with jewelry
                  </li>
                </ul>
              </div>
            </div>

            {/* Heroic World Tier */}
            <div className="bg-gray-800 border border-orange-700/30 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <img
                  src={legionImages.imperiousEffect}
                  alt="Heroic World Tier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-3">
                  🔥 Heroic World Tier
                </h3>
                <p className="text-gray-300 mb-4">
                  Opt-in difficulty inspired by Diablo, covered extensively in our legion remix guide. Face Empowered enemies with unique buffs for greater Bronze and Infinite Power rewards.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    4 Empowered effects: Imperious, Beacon of Chaos, Fel Raiser, Engorged
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    Mobs can stack multiple empowerments
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    Toggle on/off anytime at Infinite Bazaar
                  </li>
                </ul>
              </div>
            </div>

            {/* Infinite Research */}
            <div className="bg-gray-800 border border-blue-700/30 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <img
                  src={legionImages.infiniteResearchQuests}
                  alt="Infinite Research Quests"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">
                  📚 Infinite Research
                </h3>
                <p className="text-gray-300 mb-4">
                  Daily quest system with 100+ different research assignments. Bank up to 6 days worth of quests for flexible progression.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    Kill demons, run dungeons, collect Bronze
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    Complete daily or save for weekly bursts
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    Unlock multiple quest slots over time
                  </li>
                </ul>
              </div>
            </div>

            {/* Timewarped Obelisks */}
            <div className="bg-gray-800 border border-purple-700/30 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <img
                  src={legionImages.timeWarpedObelisk}
                  alt="Timewarped Obelisk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">
                  🌀 Timewarped Obelisks
                </h3>
                <p className="text-gray-300 mb-4">
                  Mysterious obelisks scattered across the Broken Isles grant powerful buffs and occasionally spawn challenging encounters.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Random powerful buffs for exploration
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Chance to spawn elite demons with loot
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Found throughout all Legion zones
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase Roadmap */}
      <section className="py-16 px-4 bg-gray-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Phase Roadmap</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Content unlocks every two weeks: Skies of Fire on October 7, Rise of the Nightfallen on October 21, Legionfall on November 4, Argus Eternal on November 18, and Infinite Echoes on December 9. Plan your alts and Bronze spending around these dates.
            </p>
          </div>

          {/* Timeline Image */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-green-700/40 shadow-2xl shadow-green-900/50">
            <img
              src={legionImages.phaseTimeline}
              alt="Legion Remix phase timeline"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remixPhases.map((phase, idx) => (
              <div
                key={phase.id}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-xl ${
                  phase.id === currentPhase?.id
                    ? 'border-green-500 shadow-green-900/50 shadow-lg'
                    : 'border-gray-700 hover:border-green-600/50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    phase.id === currentPhase?.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {idx + 1}
                  </div>
                  {phase.id === currentPhase?.id && (
                    <span className="text-xs bg-green-500 text-white px-2.5 py-1 rounded-full font-semibold animate-pulse">
                      Active
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{phase.name}</h3>

                <div className="flex items-center gap-2 text-xs text-green-400 mb-3 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {phase.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – {phase.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{phase.description}</p>

                <div className="flex flex-wrap gap-2">
                  {phase.features.slice(0, 3).map((feature, featureIdx) => (
                    <span
                      key={featureIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                  {phase.features.length > 3 && (
                    <span className="text-xs px-2.5 py-1 rounded-md bg-gray-700/30 text-gray-400">
                      +{phase.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Complete Legion Remix Guide Resources
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Navigate our complete legion remix guide collection. From the essential legion remix leveling guide to advanced legion remix bronze farming strategies, find everything you need to master legion remix best class selection and claim all legion remix rewards.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/guides/getting-started"
              className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 rounded-lg p-6 transition-all hover:border-green-500 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Legion Remix Guide - Start Here
              </h3>
              <p className="text-gray-400">
                New to Legion Remix? This complete legion remix guide covers everything from basics to advanced strategies
              </p>
            </Link>

            <Link
              href="/guides/leveling"
              className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 rounded-lg p-6 transition-all hover:border-green-500 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Legion Remix Leveling Guide
              </h3>
              <p className="text-gray-400">
                Our legion remix leveling guide provides the fastest path to level 80 with optimized strategies
              </p>
            </Link>

            <Link
              href="/guides/bronze-farming"
              className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 rounded-lg p-6 transition-all hover:border-green-500 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Legion Remix Bronze Farming
              </h3>
              <p className="text-gray-400">
                Master legion remix bronze farming methods and maximize your bronze per hour earnings
              </p>
            </Link>

            <Link
              href="/rewards"
              className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 rounded-lg p-6 transition-all hover:border-green-500 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Legion Remix Rewards
              </h3>
              <p className="text-gray-400">
                Complete catalog of legion remix rewards including mounts, pets, transmog, and toys
              </p>
            </Link>

            <Link
              href="/guides/dungeons"
              className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 hover:from-indigo-800/50 hover:to-blue-800/50 border border-blue-700/50 rounded-lg p-6 transition-all hover:border-blue-400 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏰</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Dungeon Roadmap
              </h3>
              <p className="text-gray-400">
                Recommended keystones, Empowered affix tips, and Bronze routes per phase.
              </p>
            </Link>

            <Link
              href="/guides/raids"
              className="bg-gradient-to-br from-red-900/40 to-purple-900/40 hover:from-red-800/50 hover:to-purple-800/50 border border-red-700/50 rounded-lg p-6 transition-all hover:border-red-400 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔥</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                Raid Planner
              </h3>
              <p className="text-gray-400">
                Track unlock dates, achievement cosmetics, and Violet Spellwing prep.
              </p>
            </Link>

            <Link
              href="/calculator"
              className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 hover:from-amber-800/50 hover:to-orange-800/50 border border-amber-700/50 rounded-lg p-6 transition-all hover:border-amber-500 group card-hover bronze-glow"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Bronze Calculator
              </h3>
              <p className="text-gray-400">
                Calculate bronze needed for your legion remix rewards wishlist with our planning tool
              </p>
            </Link>

            <Link
              href="/classes"
              className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 rounded-lg p-6 transition-all hover:border-green-500 group card-hover"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⚔️</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                Legion Remix Best Class
              </h3>
              <p className="text-gray-400">
                Find the legion remix best class for your playstyle with detailed specs, tips, and Fel mount guides
              </p>
            </Link>
          </div>

          {/* Classes Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Legion Remix Best Class - Choose Your Path
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              Explore our detailed legion remix guide for each class to discover the legion remix best class for your preferred playstyle and goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {classes.map((cls) => (
                <Link
                  key={cls.id}
                  href={`/classes/${cls.id}`}
                  className="bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg p-4 text-center transition-all hover:border-green-500 group card-hover"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold border-2 group-hover:scale-110 transition-transform shadow-lg"
                    style={{
                      backgroundColor: cls.iconColor + '20',
                      borderColor: cls.iconColor,
                      boxShadow: `0 0 15px ${cls.iconColor}40`
                    }}
                  >
                    <span style={{ color: cls.iconColor }}>{cls.name.charAt(0)}</span>
                  </div>
                  <h3
                    className="font-semibold text-sm group-hover:scale-105 transition-transform"
                    style={{ color: cls.iconColor }}
                  >
                    {cls.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Rewards Showcase */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Exclusive Legion Remix Rewards
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Our legion remix guide helps you earn unique fel-infused mounts, legendary transmogs, and exclusive collectibles. Use our legion remix bronze farming strategies to claim these limited-time legion remix rewards before the event ends.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Fel Class Mounts */}
            <div className="bg-gray-800 border border-green-700/30 rounded-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={legionImages.felClassMounts}
                  alt="Fel-infused Class Mounts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    🐎 Felscorched Class Mounts
                  </h3>
                  <p className="text-gray-300">
                    Exclusive fel-infused versions of all 12 class mounts. Our legion remix guide shows you how to complete class-specific challenges and earn these unique variants!
                  </p>
                </div>
              </div>
            </div>

            {/* Azshara Transmog */}
            <div className="bg-gray-800 border border-purple-700/30 rounded-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={legionImages.azsharaTransmog}
                  alt="Azshara-inspired Transmog"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    👑 Azshara-inspired Transmog
                  </h3>
                  <p className="text-gray-300">
                    Brand new armor sets inspired by Queen Azshara, available for the first time in Legion Remix.
                  </p>
                </div>
              </div>
            </div>

            {/* Legendary Weapons */}
            <div className="bg-gray-800 border border-orange-700/30 rounded-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={legionImages.corruptedShalamayne}
                  alt="Corrupted Shalamayne"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">
                    ⚔️ Legendary Weapons
                  </h3>
                  <p className="text-gray-300">
                    Corrupted Shalamayne (Varian's swords), Mannoroth's Shield, and Scythe of the Unmaker variants.
                  </p>
                </div>
              </div>
            </div>

            {/* Housing Decor */}
            <div className="bg-gray-800 border border-blue-700/30 rounded-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={legionImages.housingDecorItems}
                  alt="Housing Decor Items"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">
                    🏠 Housing Decor
                  </h3>
                  <p className="text-gray-300">
                    Unique Legion-themed decorations for your player housing in the Infinite Echoes phase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/rewards"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all fel-glow"
            >
              <span>View All 100+ Rewards</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Event Timeline
          </h2>

          {/* Official Phase Schedule Image */}
          <div className="mb-12 rounded-lg overflow-hidden border border-green-700/30">
            <img
              src={legionImages.phaseSchedule}
              alt="Legion Remix Phase Schedule"
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Detailed Phase Information
          </h3>

          <div className="space-y-6">
            {remixPhases.map((phase, idx) => (
              <div
                key={phase.id}
                className={`bg-gray-800 border rounded-lg p-6 ${
                  phase.id === currentPhase?.id
                    ? 'border-green-500 bg-green-900/20'
                    : 'border-gray-700'
                }`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    phase.id === currentPhase?.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {phase.name}
                      {phase.id === currentPhase?.id && (
                        <span className="ml-3 text-sm bg-green-500 text-white px-2 py-1 rounded">
                          Active Now
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {phase.startDate.toLocaleDateString()} - {phase.endDate.toLocaleDateString()}
                    </p>
                    <p className="text-gray-300 mb-3">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.features.map((feature, featureIdx) => (
                        <span
                          key={featureIdx}
                          className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
