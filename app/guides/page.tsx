import type { Metadata } from 'next';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Guides Hub',
  description: 'Browse Legion Remix leveling, bronze farming, dungeon, and raid guides to plan your Timerunner adventure.',
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
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legion Remix Guides</h1>
          <p className="text-gray-400 text-lg mb-6">
            Comprehensive guides to help you make the most of your Legion Remix experience.
            From beginner tips to advanced strategies, we've got you covered.
          </p>

          {/* Featured Guide Banner */}
          <div className="relative rounded-lg overflow-hidden border border-green-700/30 mb-8">
            <img
              src={legionImages.contentUpdate}
              alt="Legion Remix Content"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
                <span className="text-gray-300 text-sm">Updated for all phases</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Complete Legion Remix Experience</h2>
              <p className="text-gray-300 text-sm">
                Everything you need to know about the event, from start to finish
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
                We are expanding the dungeon and raid hub with deeper dives, including:
              </p>
              <ul className="text-sm text-gray-400 space-y-1 ml-4">
                <li>• Weekly Timeworn Keystone affix recommendations and skip maps</li>
                <li>• Speed-run pulls for Phase 4 Argus dungeons</li>
                <li>• Savage Challenge tips for remixed raid achievements</li>
                <li>• One-page loot cheat sheets by armor type</li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Check back soon or follow us for updates!
              </p>
            </div>
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
      </div>
    </div>
  );
}
