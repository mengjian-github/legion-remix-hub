import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Countdown from '@/components/ui/Countdown';
import { eventDates, remixPhases, getCurrentPhase } from '@/data/timeline';
import { classes } from '@/data/classes';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const homeTitle = formatMetaTitle('Legion Remix 2025 Guide Hub for Timerunners');
const homeDescription = formatMetaDescription(
  'Plan Legion Remix 2025 with a home base covering phase roadmap, leveling routes, Bronze farming loops, class builds, rewards tracking, and daily prep lists.'
);

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: buildCanonicalUrl('/'),
  },
};

export default function Home() {
  const currentPhase = getCurrentPhase();

  const mainGuideDirectory = [
    { label: 'Legion Remix Guide for Infinite Knowledge farming', href: '/guides/infinite-knowledge' },
    { label: 'Legion Remix Guide for Strange Humming Crystal routes', href: '/guides/bronze-farming#strange-humming-crystal' },
    { label: 'Legion Remix Guide for Havoc Demon Hunter builds', href: '/classes/demon-hunter/havoc' },
    { label: 'Legion Remix Guide for Brewmaster Monk hard mode', href: '/classes/monk/brewmaster' },
    { label: 'Legion Remix Guide for Subtlety Rogue rotations', href: '/classes/rogue/subtlety' },
    { label: 'Legion Remix Guide for Protection Paladin tanks', href: '/classes/paladin/protection' },
    { label: 'Holy Paladin Legion Remix guide for raid healing', href: '/classes/paladin/holy' },
    { label: 'Legion Remix Holy Paladin guide for Mythic+ sustain', href: '/classes/paladin/holy' },
    { label: 'Legion Remix Guide for Zygor addon alternatives', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Guide for fastest leveling paths', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix lag fixes', href: '#legion-remix-lag' },
    { label: 'Legion Remix Guide for Time Crisis objectives', href: '/guides/getting-started#legion-remix-hard-mode' },
    { label: 'Legion Remix Guide for To Fel and Back achievement', href: '/guides/getting-started#legion-remix-hard-mode' },
    { label: 'Legion Remix Guide for Legion Remix rare elites', href: '/guides/bronze-farming#rare-elites-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix hard mode setup', href: '/guides/getting-started#legion-remix-hard-mode' },
    { label: 'Legion Remix Guide for Infinite Power upgrades', href: '/guides/infinite-knowledge#phase-1' },
    { label: 'Legion Remix Guide for Legion Remix calculator usage', href: '/calculator' },
    { label: 'Legion Remix Guide for Legion Remix a character with that name already exists error', href: '/faq#troubleshooting-and-performance' },
    { label: 'Legion Remix Guide for Legion Remix druid flight form unlock', href: '/classes/druid' },
    { label: 'Legion Remix Guide for Legion Remix DH build comparisons', href: '/classes/demon-hunter' },
    { label: 'Legion Remix Guide for Legion Remix world quest unlocks', href: '/guides/getting-started#how-to-unlock-world-quests-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix lag troubleshooting on laptops', href: '#legion-remix-lag' },
    { label: 'Legion Remix Guide for Legion Remix Violet Spellwing planning', href: '/guides/bronze-farming#achievement-targets-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix Bronze per hour benchmarks', href: '/guides/bronze-farming#time-investment-calculator' },
    { label: 'Legion Remix Guide for Legion Remix Infinite Bazaar vendors', href: '/rewards' },
    { label: 'Legion Remix Guide for Broken Isles reputation routes', href: '/reputation' },
    { label: 'Legion Remix Guide for Legion Remix Artifact path swaps', href: '/guides/infinite-knowledge' },
    { label: 'Legion Remix Guide for Legion Remix Mythic+ Turbo Boost weeks', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix Argus Eternal roadmap', href: '#phase-roadmap' },
    { label: 'Legion Remix Guide for Legion Remix housing decor unlocks', href: '/rewards' },
    { label: 'Legion Remix Guide for Legion Remix campaign boost prep', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Legion Remix Guide for Legion Remix console achievements', href: '/guides/getting-started#legion-remix-hard-mode' },
    { label: 'Legion Remix Guide for Legion Remix Bronze cache farming', href: '/guides/bronze-farming#bronze-collection-in-action' },
    { label: 'Legion Remix guide for Kaldorei Queen transmog', href: '/guides/kaldorei-royal-vestments#requirements' },
    { label: 'Legion Remix guide for Suramar achievements', href: '/guides/kaldorei-royal-vestments#campaign' },
    { label: 'Warlock Legion Remix guide for Destruction burst', href: '/classes/warlock/destruction' },
    { label: 'Legion Remix Warlock guide for Affliction DoTs', href: '/classes/warlock/affliction' },
    { label: 'Legion Remix guide for Demonology Warlock tyrant setups', href: '/classes/warlock/demonology' },
    { label: 'Lock Stock and Two Smoking Goblins Legion Remix guide', href: '/guides/lock-stock-two-smoking-goblins' },
    { label: 'A Noble Event Legion Remix guide', href: '/guides/a-noble-event' }
  ];

  const trendingSearches = [
    {
      query: 'Legion Remix bronze calculator',
      blurb: 'Budget every Bronze purchase with live totals and preset wish lists.',
      href: '/calculator',
    },
    {
      query: 'Legion Remix site',
      blurb: 'Launch point to every class build, quest guide, and Infinite Knowledge checklist.',
      href: '/',
    },
    {
      query: 'Legion Remix website',
      blurb: 'Bookmark the Legion Remix Hub homepage for roadmap, tools, and weekly prep.',
      href: '/',
    },
    {
      query: 'Legion Remix warlock guide',
      blurb: 'Pick between Affliction, Demonology, and Destruction builds tuned for Heroic World Tier.',
      href: '/classes/warlock',
    },
    {
      query: 'Legion Remix ret paladin',
      blurb: 'Review Retribution Paladin burst windows, Infinite Artifact priorities, and Bronze goals.',
      href: '/classes/paladin/retribution',
    },
    {
      query: 'Legion Remix rogue guide',
      blurb: 'Compare Subtlety, Outlaw, and Assassination paths before you grind keystones.',
      href: '/classes/rogue',
    },
    {
      query: 'Legion Remix rewards tracker',
      blurb: 'Track Violet Spellwing, class mounts, toys, and ensembles with shareable lists.',
      href: '/rewards',
    },
    {
      query: 'A Noble Event Legion Remix',
      blurb: 'Time your Dalaran shopping spree and Torn Invitation hand-ins every other Friday.',
      href: '/guides/a-noble-event',
    },
    {
      query: 'Lock Stock and Two Smoking Goblins Legion Remix',
      blurb: 'Snag the fox mount and Bronze cache before the goblins escape Stormheim.',
      href: '/guides/lock-stock-two-smoking-goblins',
    },
    {
      query: 'Legion Remix heroic world tier',
      blurb: 'Enable the empowered mode safely with spec-specific mitigation tips.',
      href: '/guides/leveling#heroic-world-tier',
    },
    {
      query: 'Legion Remix lag',
      blurb: 'Triage performance issues in Suramar, Argus, and high-density Bronze farms.',
      href: '#legion-remix-lag',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={legionImages.heroBanner}
            alt="Legion Remix: Skies of Fire"
            fill
            sizes="100vw"
            priority
            className="object-cover scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-950"></div>
        </div>

        {/* Decorative fel glow effects - Enhanced */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[140px] animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700 rounded-full blur-[160px] animate-pulse-slowest"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <div className="inline-block mb-8 px-6 py-3 bg-green-500/30 border-2 border-green-500/70 rounded-full backdrop-blur-sm">
              <span className="text-green-300 font-bold text-lg tracking-wider">⚡ EVENT NOW LIVE</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight leading-none">
              <span className="text-gradient-fel drop-shadow-2xl">Legion Remix</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-6 font-bold max-w-5xl mx-auto leading-relaxed">
              Plan your Timerunner from day one with this Legion Remix Guide—covering leveling routes, Bronze priorities, and class picks specifically tuned for the 2025 Legion Remix season.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Treat this Legion Remix site as your always-on command center: the Legion Remix website roadmap tracks every phase drop, links to Bronze tools, and highlights the week&apos;s hotfixes so you spend less time scraping forums and more time farming.
            </p>
            <p className="text-xl md:text-2xl text-green-300 font-bold mb-12 drop-shadow-lg">
              🔥 Event Window: October 7, 2025 - January 19, 2026 • 15 weeks of Skies of Fire rewards
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link
                href="/guides/getting-started"
                className="px-10 py-5 text-lg bg-green-600 hover:bg-green-500 text-white font-black rounded-xl transition-all fel-glow-strong hover:scale-105 transform shadow-2xl"
              >
                Start Your Legion Remix Guide →
              </Link>
              <Link
                href="/calculator"
                className="px-10 py-5 text-lg bg-amber-600 hover:bg-amber-500 text-white font-black rounded-xl transition-all bronze-glow-strong hover:scale-105 transform shadow-2xl"
              >
                💰 Bronze Calculator
              </Link>
            </div>
          </div>

          {/* Countdown */}
          <div className="max-w-3xl mx-auto">
            <Countdown targetDate={eventDates.end} title="⏰ Event Ends In" />
          </div>
          <div className="mt-16 bg-gray-900/60 border-2 border-gray-700/50 rounded-2xl p-10 backdrop-blur-md shadow-2xl" id="legion-remix-guide-checklist">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">Top Starter Picks</h3>
            <div className="grid md:grid-cols-3 gap-10 text-base text-gray-300">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30">
                <p className="text-green-400 font-bold mb-4 text-xl">Solo Progression</p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">Havoc Demon Hunter — mobility plus self-heal spikes keep Heroic mobs manageable.</li>
                  <li className="leading-relaxed">Beast Mastery Hunter — tank pets handle threat while you stay mobile and safe.</li>
                  <li className="leading-relaxed">Blood Death Knight — enormous self-sustain for Argus elites and campaign bosses.</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/30">
                <p className="text-amber-300 font-bold mb-4 text-xl">Group Backbone</p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">Vengeance Demon Hunter — fast pulls, sigil control, and forgiving mitigation.</li>
                  <li className="leading-relaxed">Restoration Shaman — Totemic and Farseer hero talents cover every healing profile.</li>
                  <li className="leading-relaxed">Retribution Paladin — frequent burst cooldowns and Blessings for coordinated teams.</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/30">
                <p className="text-blue-300 font-bold mb-4 text-xl">Heroic World Tier Ready</p>
                <ul className="space-y-3">
                  <li className="leading-relaxed">Windwalker Monk — high mobility cleave to delete empowered packs before they stack.</li>
                  <li className="leading-relaxed">Balance Druid — ranged AoE with self-healing HoTs for the toughest pacing checks.</li>
                  <li className="leading-relaxed">Protection Paladin — instant queues and reliable cooldowns while farming Bronze.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-900/40 border border-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">How to Use This Legion Remix Guide</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <p className="mb-3">Follow this Legion Remix Guide roadmap to stay ahead of weekly unlocks and trending problems surfaced in Google Search Console:</p>
                <ul className="space-y-2">
                  <li>➡️ Begin with the <Link href="/guides/getting-started" className="text-green-400 hover:text-green-300">Getting Started Legion Remix Guide</Link> to unlock world quests, Infinite Knowledge dailies, and hero talent access.</li>
                  <li>➡️ Jump to the <Link href="/guides/leveling" className="text-green-400 hover:text-green-300">Legion Remix Leveling Guide</Link> for fastest-way-to-level routes, Heroic World Tier tips, and Havoc Demon Hunter builds.</li>
                  <li>➡️ Track your cosmetics with the <Link href="/calculator" className="text-green-400 hover:text-green-300">Bronze Calculator</Link> while the <Link href="/guides/bronze-farming" className="text-green-400 hover:text-green-300">Bronze Farming Legion Remix Guide</Link> explains Infinite Power farms, Strange Humming Crystal loops, and rare elite circuits.</li>
                </ul>
              </div>
              <div>
                <p className="mb-3">Keep this Legion Remix Guide handy for troubleshooting:</p>
                <ul className="space-y-2">
                <li>⚙️ "Legion Remix lag" fixes and hardware tips are documented in the <Link href="#legion-remix-lag" className="text-green-400 hover:text-green-300">performance section</Link>.</li>
                  <li>🆔 "A character with that name already exists" errors have a step-by-step resolution in our FAQ anchors.</li>
                  <li>🧭 Need a spec? Use the <Link href="/classes" className="text-green-400 hover:text-green-300">Legion Remix Classes Guide</Link> to compare Havoc Demon Hunter, Brewmaster Monk, Subtlety Rogue, and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Searches */}
      <section className="bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-green-300/80">Search Console Signals</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Trending Legion Remix Searches</h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              We weave every popular Legion Remix query straight into our guides so you can react faster than hotfixes.
              Use the cards below to jump directly to the Legion Remix bronze calculator, class primers, rewards tracker,
              and troubleshooting hubs people search for most often this week.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trendingSearches.map((item) => (
              <Link
                key={item.query}
                href={item.href}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 transition hover:border-green-500/60 hover:bg-gray-900"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-green-400/80">Hot Keyword</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.query}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-400">
                  Open guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Phase */}
      {currentPhase && (
        <section className="py-12 px-4 bg-gray-900/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="relative w-full h-full">
              <Image
                src={legionImages.artifactWeapon}
                alt="Artifact Weapon"
                fill
                sizes="50vw"
                className="object-cover object-left"
              />
            </div>
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
            Legion Remix Guide: Systems to Master
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Understand the pillars of Skies of Fire before you log in. This Legion Remix Guide explains Infinite Artifact scaling, Heroic World Tier toggles, Infinite Knowledge dailies, and the Bronze economy loops that power every character.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Infinite Artifact Weapons */}
            <div className="bg-gray-800 border border-green-700/30 rounded-lg overflow-hidden card-hover">
              <div className="relative h-64">
                <Image
                  src={legionImages.artifactTraitTree}
                  alt="Infinite Artifact Weapon Trait Tree"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-3">
                  ⚔️ Infinite Artifact Weapons
                </h3>
                <p className="text-gray-300 mb-4">
                  Every weapon now feeds a single infinite tree. Specialize in Nature, Fel, Arcane, Storm, or Holy Light, then pivot with jewelry traits when your group comp or content changes.
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
                <Image
                  src={legionImages.imperiousEffect}
                  alt="Heroic World Tier"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-3">
                  🔥 Heroic World Tier
                </h3>
                <p className="text-gray-300 mb-4">
                  Opt-in challenge inspired by Diablo. Flip the console in the Infinite Bazaar to face Empowered enemies that pay out extra Bronze, Infinite Power, and XP when you survive the pressure.
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
                  Warband-wide daily research rotates through 100+ assignments. Bank up to six charges, then cash them in for Bronze, Infinite Power, and permanent XP boosts.
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
                <Image
                  src={legionImages.timeWarpedObelisk}
                  alt="Timewarped Obelisk"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
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
      <section className="py-16 px-4 bg-gray-950/80" id="phase-roadmap">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Phase Roadmap</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Content unlocks every two weeks: Skies of Fire on October 7, Rise of the Nightfallen on October 21, Legionfall on November 4, Argus Eternal on November 18, and Infinite Echoes on December 9. Plan your alts and Bronze spending around these dates.
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Think of this matrix as the definitive Legion Remix roadmap—spell it “road map” or “roadmap” and you still land on the same schedule that keeps Timerunners sprinting toward Violet Spellwing, Lock, Stock, and Two Smoking Goblins, and every Infinite Echoes vendor debut.
            </p>
          </div>

          {/* Timeline Image */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-green-700/40 shadow-2xl shadow-green-900/50">
            <div className="relative w-full h-auto" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={legionImages.phaseTimeline}
                alt="Legion Remix phase timeline"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
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
            Jump straight to the playbook you need—onboarding checklists, sprint-to-80 plans, Bronze farming routes, or class deep dives.
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
                New to Legion Remix? Walk through the intro scenario, account rules, Infinite Knowledge unlocks, and first-day priorities step by step in one consolidated Legion Remix Guide.
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
                Benchmarked splits for 10-25, 25-60, and 60-80 with dungeon picks, Turbo Boost timing, XP buffs, and fastest-way-to-level Legion Remix checklists.
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
                Compare Bronze per hour across dungeons, world loops, Infinite Knowledge turn-ins, Strange Humming Crystal routes, and rare elite rotations.
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
                Filter every mount, pet, ensemble, and toy with live Bronze totals, Violet Spellwing requirements, and Argus Eternal highlights.
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
                Build a wishlist, then see total Bronze plus estimated farm hours using top-tier Legion Remix Bronze farming methods.
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
                Compare all 12 classes with spec strengths, artifact picks, Fel mount unlock tips, and Legion Remix build notes for Havoc Demon Hunter, Brewmaster Monk, and Subtlety Rogue.
              </p>
            </Link>
          </div>

          {/* Classes Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Class Knowledge Base
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              Dive into curated notes for every class—artifact path priorities, standout specs, and Fel mount unlock requirements.
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

      {/* Troubleshooting Section */}
      <section className="py-16 px-4 bg-gray-900/50" id="legion-remix-lag">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Legion Remix Guide Troubleshooting Center</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-blue-700/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-3">Legion Remix Lag Fixes</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Lower ground clutter and particle density before triggering Heroic World Tier events.</li>
                <li>Disable heavy addons (Zygor Legion Remix, RareScanner) during Time Crisis objectives.</li>
                <li>Switch to DirectX 11 legacy mode if frame drops spike inside Argus zones.</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-green-700/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-300 mb-3">“A Character With That Name Already Exists”</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Log completely out of WoW, wait 60 seconds, then create the Timerunner again.</li>
                <li>Delete stuck characters in the Legion Remix realm list; empty recycle bins after deletion.</li>
                <li>Use unique suffixes (e.g., “-Remix”, “-DH”) to avoid global name reservations.</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-purple-700/40 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Console & Quest Issues</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Track <strong>Strange Humming Crystal</strong> timers with /event alerts to prevent Time Crisis: Failed.</li>
                <li>Use the <Link href="/guides/getting-started#legion-remix-hard-mode" className="text-green-400 hover:text-green-300">Legion Remix Hard Mode guide</Link> before toggling Heroic difficulties.</li>
                <li>Report persistent phasing bugs via the in-game support tool; reference the hard mode quest ID.</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">Need more answers? Visit the <Link href="/faq#troubleshooting-and-performance" className="text-green-400 hover:text-green-300">Legion Remix FAQ troubleshooting section</Link> for detailed steps.</p>
        </div>
      </section>

      {/* SEO Directory */}
      <section className="py-16 px-4 bg-gray-950/70">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Legion Remix Guide Directory</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Use this Legion Remix Guide directory to jump straight to the content you need. Each entry links to a focused Legion Remix Guide for the query players are actively searching in October 2025.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
            {mainGuideDirectory.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
