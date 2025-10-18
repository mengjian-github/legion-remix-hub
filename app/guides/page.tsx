import type { Metadata } from 'next';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const pageTitle = formatMetaTitle('Legion Remix Guides Hub & Strategy Vault 2025');
const pageDescription = formatMetaDescription(
  'Browse Legion Remix leveling, Bronze farming, dungeon, and raid guides with quick links, recommended routes, and weekly priorities to steer Timerunner planning.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides'),
  },
};

const guides = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to Legion Remix? Learn the basics, event timeline, and how to create your Timerunner.',
    icon: '🚀',
    color: 'from-blue-900/40 to-cyan-900/40',
    image: legionImages.heroBanner
  },
  {
    id: 'leveling',
    title: 'Leveling Guide',
    description: 'Fast-track to level 80 with optimized dungeon strategies, quest routes, and XP bonuses.',
    icon: '📈',
    color: 'from-green-900/40 to-emerald-900/40',
    image: legionImages.druidOrderHall
  },
  {
    id: 'bronze-farming',
    title: 'Bronze Farming',
    description: 'Maximize your Bronze per hour with proven farming methods and efficiency tips.',
    icon: '💰',
    color: 'from-yellow-900/40 to-amber-900/40',
    image: legionImages.wyrmtongue
  },
  {
    id: 'reputation',
    title: 'Reputation Guide',
    description: "Broken Isles emissary routes, Champion's Insignia sources, and vendor highlights.",
    icon: '🏅',
    color: 'from-teal-900/40 to-slate-900/40',
    image: legionImages.rewardVendorFarondis ?? legionImages.phaseTimeline
  },
  {
    id: 'infinite-knowledge',
    title: 'Infinite Knowledge',
    description: 'All rank sources, phase achievements, and overflow Bronze conversion strategies.',
    icon: '♾️',
    color: 'from-purple-900/40 to-indigo-900/40',
    image: legionImages.infiniteResearch ?? legionImages.infiniteResearchQuests ?? legionImages.timewornKeystone
  },
  {
    id: 'dungeons',
    title: 'Dungeon Roadmap',
    description: 'Timeworn Keystone breakpoints, best-of-phase recommendations, and affix prep.',
    icon: '🏰',
    color: 'from-indigo-900/40 to-blue-900/40',
    image: legionImages.timewornKeystone
  },
  {
    id: 'raids',
    title: 'Raid Progression',
    description: 'Phase-by-phase unlocks, loot highlights, and Violet Spellwing planning.',
    icon: '🔥',
    color: 'from-red-900/40 to-purple-900/40',
    image: legionImages.scytheOfUnmaker
  },
  {
    id: 'challiane-vineyards',
    title: 'Challiane Vineyards',
    description: 'Sojourner of Azsuna walkthrough with Turbo Boost routing and Infinite Knowledge planning.',
    icon: '🍇',
    color: 'from-rose-900/40 to-violet-900/40',
    image: legionImages.challianeVineyardsLocation ?? legionImages.challianeVineyardsMap
  }
];

export default function GuidesPage() {
  const quickLinks = [
    { label: 'First steps checklist', href: '/guides/getting-started#timerunner-creation' },
    { label: 'Fast leveling routes', href: '/guides/leveling#fastest-way-to-level-legion-remix' },
    { label: 'Bronze farming loops', href: '/guides/bronze-farming#bronze-collection-in-action' },
    { label: 'Reputation emissary planner', href: '/reputation' },
    { label: 'Infinite Knowledge ranks', href: '/guides/infinite-knowledge#rank-breakdown' },
    { label: 'Dungeon rotation planner', href: '/guides/dungeons#keystone-roadmap' },
    { label: 'Raid unlock timeline', href: '/guides/raids#phase-unlocks' },
    { label: 'Rewards wish list', href: '/rewards' },
    { label: 'Challiane Vineyards route', href: '/guides/challiane-vineyards' },
    { label: 'Bronze calculator', href: '/calculator' },
    { label: 'FAQ & troubleshooting', href: '/faq' }
  ];

  const referenceHighlights = [
    {
      title: 'Legion Remix Overview',
      summary: 'Covers the 15-week schedule from October 7, 2025 through January 19, 2026, explains Heroic World Tier, Infinite Bazaar vendors, and the features omitted from the remix (auction house, professions, ranked PvP).'
    },
    {
      title: 'Content Phases & Schedule',
      summary: 'Lists the five unlock waves—Skies of Fire, Rise of the Nightfallen, Legionfall, Argus Eternal, and Infinite Echoes—so you can time alts, raid goals, and housing decor shopping.'
    },
    {
      title: 'Leveling & Gearing Guide',
      summary: 'Details the 10-80 path, the XP bonuses from Infinite Research and Warband milestones, and when to pivot from quests to dungeons.'
    },
    {
      title: 'Infinite Knowledge / Research Guides',
      summary: 'Explain how 46 achievements and daily research packets feed the 36 ranks that later convert into 1,000 Bronze each on overflow.'
    },
    {
      title: 'Rewards Compendium',
      summary: 'Breaks down mounts, toys, ensembles, and the total 7,934,500 Bronze cost so you can prioritize purchases.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legion Remix Guides Hub</h1>
          <p className="text-gray-400 text-lg mb-6">
            Legion Remix runs from October 7, 2025 through January 19, 2026 and reimagines the Legion campaign with Heroic World Tier, Infinite Bazaar vendors, and a unified artifact tree. The overview and content schedule in our reference pack outline every phase unlock—use this hub to jump straight to the guide that answers your current question.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Whether you need the introductory quest walkthrough, a dungeon XP ranking, or a Bronze budget before Infinite Echoes opens housing decor, the cards below funnel you to the right deep dive. Bookmark the quick links for Turbo Boost weekends so your group can react to hotfixes without hunting through patch notes.
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

          {/* Featured Guide Banner */}
          <div className="relative rounded-lg overflow-hidden border border-green-700/30 mb-8">
            <img
              src={legionImages.referenceSplash ?? legionImages.contentUpdate}
              alt="Legion Remix Content"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
                <span className="text-gray-300 text-sm">Updated for all phases</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Complete Legion Remix Guide Experience</h2>
              <p className="text-gray-300 text-sm">
                Everything you need to know about Infinite Knowledge, Heroic World Tier, Turbo Boost windows, and troubleshooting lag or name conflicts.
              </p>
            </div>
          </div>
        </div>

        {/* Main Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg overflow-hidden transition-all group hover:shadow-lg hover:shadow-green-500/20"
            >
              {/* Guide Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4 text-5xl drop-shadow-lg">
                  {guide.icon}
                </div>
              </div>

              {/* Guide Content */}
              <div className={`bg-gradient-to-br ${guide.color} p-6`}>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center text-green-400 group-hover:text-green-300 font-medium">
                  <span>Read Guide</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links & Tools</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/calculator"
              className="bg-gray-800 border border-gray-700 hover:border-yellow-500 rounded-lg p-5 transition-all group"
            >
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Bronze Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Calculate how much Bronze you need for your wishlist
              </p>
            </Link>

            <Link
              href="/rewards"
              className="bg-gray-800 border border-gray-700 hover:border-purple-500 rounded-lg p-5 transition-all group"
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                All Rewards
              </h3>
              <p className="text-sm text-gray-400">
                Browse 100+ mounts, pets, transmog, and toys
              </p>
            </Link>

            <Link
              href="/classes"
              className="bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-lg p-5 transition-all group"
            >
              <div className="text-4xl mb-3">⚔️</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Class Guides
              </h3>
              <p className="text-sm text-gray-400">
                Specs, tips, and Fel mount info for all 12 classes
              </p>
            </Link>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-700/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-4xl">🚧</div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Coming Soon: Mythic+ Routes & Savage Challenge Notes</h3>
              <p className="text-gray-300 mb-3">
                We are expanding the Legion Remix Guides hub with deeper dives that target trending searches from Google Trends and GSC, including:
              </p>
              <ul className="text-sm text-gray-400 space-y-1 ml-4">
                <li>• Weekly Timeworn Keystone affix recommendations and skip maps</li>
                <li>• Speed-run pulls for Phase 4 Argus dungeons</li>
                <li>• Savage Challenge tips for remixed raid achievements</li>
                <li>• One-page loot cheat sheets by armor type</li>
                <li>• Legion Remix hard mode and Time Crisis: Failed recovery guides</li>
                <li>• Brewmaster Monk, Havoc Demon Hunter, and Protection Paladin Legion Remix build spotlights</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Check back soon or follow us for updates!
              </p>
            </div>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 mb-12" id="trending-legion-remix-searches">
          <h2 className="text-2xl font-bold text-white mb-4">Trending Legion Remix Searches</h2>
          <p className="text-gray-300 text-sm mb-4">
            Address the hottest topics right now. Each quick link jumps to a Legion Remix Guide section that covers the surge term users are searching for.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <Link href="/guides/leveling#fastest-way-to-level-legion-remix" className="group bg-gray-900/40 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-all">
              <h3 className="text-lg font-semibold text-green-400 mb-1 group-hover:text-green-300">Fastest Way to Level in Legion Remix</h3>
              <p>Updated XP windows, Turbo Boost weeks, and Havoc Demon Hunter Legion Remix talent strings.</p>
            </Link>
            <Link href="/guides/infinite-knowledge" className="group bg-gray-900/40 border border-gray-700 rounded-lg p-4 hover:border-yellow-500 transition-all">
              <h3 className="text-lg font-semibold text-yellow-400 mb-1 group-hover:text-yellow-300">Infinite Knowledge & Infinite Power Farms</h3>
              <p>Turn Infinite Knowledge and Strange Humming Crystal drops into Bronze and artifact upgrades.</p>
            </Link>
            <Link href="/guides/getting-started#legion-remix-hard-mode" className="group bg-gray-900/40 border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-all">
              <h3 className="text-lg font-semibold text-purple-400 mb-1 group-hover:text-purple-300">Legion Remix Hard Mode & Time Crisis</h3>
              <p>Unlock Heroic World Tier, recover Time Crisis: Failed runs, and prep for To Fel and Back.</p>
            </Link>
            <Link href="/faq#troubleshooting-and-performance" className="group bg-gray-900/40 border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-all">
              <h3 className="text-lg font-semibold text-blue-400 mb-1 group-hover:text-blue-300">Fix Legion Remix Lag & Name Errors</h3>
              <p>Step-by-step for lag spikes, "a character with that name already exists," and addon conflicts.</p>
            </Link>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-4xl">💡</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">New to Legion Remix?</h3>
              <p className="text-gray-300 mb-3">
                Start with the <Link href="/guides/getting-started" className="text-green-400 hover:text-green-300 underline">Getting Started Guide</Link> to understand
                the event basics. Then check out the <Link href="/guides/leveling" className="text-green-400 hover:text-green-300 underline">Leveling Guide</Link> to
                reach level 80 quickly and claim your free Felscorched class mount!
              </p>
              <p className="text-sm text-gray-400">
                All rewards are account-wide via the Warband system, so everything you earn is available to all your characters.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
          <p className="text-sm text-gray-300 mb-4">
            These core articles informed the summaries above—consult them whenever you need raw numbers or step-by-step walkthroughs straight from the source material.
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            {referenceHighlights.map((item) => (
              <li key={item.title} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.summary}</p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-4">
            Keep a copy of the reference pack handy during Turbo Boost weekends—most questions about ranks, Bronze payouts, or unlock timing can be answered with a quick skim of these documents.
          </p>
        </div>
      </div>
    </div>
  );
}
