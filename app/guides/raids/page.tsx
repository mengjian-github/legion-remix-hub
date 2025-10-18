import type { Metadata } from 'next';
import Link from 'next/link';
import { remixPhases } from '@/data/timeline';
import { legionImages } from '@/data/images';
import { rewardSpotlights } from '@/data/rewards';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const pageTitle = formatMetaTitle('Legion Remix Raid Progression Planner 2025');
const pageDescription = formatMetaDescription(
  'Plan Legion Remix raid progression with phase unlocks, loot highlights, Violet Spellwing timing, and weekly assignments that keep Timerunner raids ready weekly.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/raids'),
  },
};

interface RaidSummary {
  name: string;
  unlockDate: string;
  highlights: string[];
}

const raidSchedule: Record<string, RaidSummary[]> = {
  'Phase 1: Skies of Fire': [
    {
      name: 'Emerald Nightmare',
      unlockDate: 'October 7, 2025',
      highlights: [
        'Quick clear for Infinite Power catch-up and introductory gear.',
        'Drops Sheath of Nightmares cosmetic weapons available for Bronze trade-ins.'
      ]
    },
    {
      name: 'Trial of Valor',
      unlockDate: 'October 7, 2025',
      highlights: [
        'Short, three-boss raid ideal for early Violet Spellwing farm groups.'
      ]
    }
  ],
  'Phase 2: Rise of the Nightfallen': [
    {
      name: 'The Nighthold',
      unlockDate: 'October 21, 2025',
      highlights: [
        'Gul\'dan drops the Arcane Scythe illusions—combine with Court of Stars farming.',
        'Completing on Heroic contributes toward Sargerei Commander ensembles.'
      ]
    }
  ],
  'Phase 3: Legionfall': [
    {
      name: 'Tomb of Sargeras',
      unlockDate: 'November 4, 2025',
      highlights: [
        'Required for Fallen King\'s Corrupted Blades achievement reward.',
        'Mythic clears unlock class mount epilogues and push Infinite Power caps.'
      ]
    }
  ],
  'Phase 4: Argus Eternal': [
    {
      name: 'Antorus, the Burning Throne',
      unlockDate: 'November 18, 2025',
      highlights: [
        'Mythic Antorus awards the Felscorned Scythe of the Unmaker variant.',
        'Heroic clears grant Violet Spellwing for 150,000 Bronze.'
      ]
    }
  ],
  'Phase 5: Infinite Echoes': [
    {
      name: 'Remix Challenge Rotations',
      unlockDate: 'December 9, 2025',
      highlights: [
        'Catch-up tuning lets alts clear previous raids with elevated Bronze drops.',
        'Expect featured "Savage Challenge" achievements with bonus cosmetics.'
      ]
    }
  ]
};

const savageChecklist = [
  'Push at least one +30 Timeworn Keystone before November 18 to secure Hellforged ensembles.',
  'Save bonus roll currency for Antorus once Phase 4 launches—weapon cosmetics are limited.',
  'Use Turbo Boost windows (October 7 and November 4 rotations) to funnel gear into your raid squad.'
];

export default function RaidsGuidePage() {
  const ensembleSpotlight = rewardSpotlights.find((item) => item.id === 'sargerei-ensembles');
  const argusSpotlight = rewardSpotlights.find((item) => item.id === 'argus-legacies');
  const quickLinks = [
    { label: 'Phase unlock grid', href: '#raid-checklist' },
    { label: 'Ensemble rewards', href: '#sargerei-ensembles' },
    { label: 'Argus cosmetics', href: '#argus-legacies' },
    { label: 'Savage challenge prep', href: '#savage-prep' },
    { label: 'Bronze budgeting', href: '/rewards' }
  ];

  const referenceHighlights = [
    {
      title: 'Raid Locations, Difficulties & Achievements',
      summary: 'Lists every raid wing, difficulty, and achievement needed for cosmetics like Violet Spellwing and the Fallen King blades.'
    },
    {
      title: 'Content Phases & Schedule',
      summary: 'Provides the exact unlock dates for each raid, aligning with the timeline summarized in the phase grid.'
    },
    {
      title: 'Legion Remix Rewards Guide',
      summary: 'Breaks down the Bronze costs for Sargerei ensembles, Violet Spellwing, and Argus legacies so you can set raid shopping goals.'
    },
    {
      title: 'Infinite Knowledge & Research Guides',
      summary: 'Highlight how raid achievements contribute to the 36 Knowledge ranks and the Bronze overflow once you cap them.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Raid Progression Planner</h1>
          <p className="text-gray-300 mb-6">
            Stay ahead of each phase unlock, plan your achievement runs, and map out the cosmetics you want before the event ends on January 19, 2026.
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

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
              <img
                src={legionImages.phaseTimeline}
                alt="Legion Remix phase timeline"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Phase Unlock At-a-Glance</h2>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>October 7 – Emerald Nightmare & Trial of Valor return with Skies of Fire.</li>
                <li>October 21 – The Nighthold opens during Rise of the Nightfallen.</li>
                <li>November 4 – Tomb of Sargeras headlines Legionfall.</li>
                <li>November 18 – Antorus crowns Argus Eternal.</li>
                <li>December 9 – Infinite Echoes catch-up events enable full vendor stock.</li>
              </ul>
            </div>
          </div>

          <h2 id="raid-checklist" className="text-3xl font-bold text-white mb-4">Raid Checklist by Phase</h2>
          <div className="space-y-4 mb-10">
            {remixPhases.map((phase) => (
              <div key={phase.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{phase.name}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  {phase.startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} – {phase.endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <div className="space-y-3">
                  {(raidSchedule[phase.name] || []).map((raid) => (
                    <div key={raid.name} className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-white">{raid.name}</h4>
                        <span className="text-xs text-green-400">Unlocks {raid.unlockDate}</span>
                      </div>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {raid.highlights.map((highlight) => (
                          <li key={highlight}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {ensembleSpotlight && (
            <div id="sargerei-ensembles" className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden mb-10">
              <img src={ensembleSpotlight.image} alt={ensembleSpotlight.title} className="w-full h-auto" />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-3">{ensembleSpotlight.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{ensembleSpotlight.subtitle}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {ensembleSpotlight.highlights.map((item) => (
                    <div key={item.name} className="bg-gray-900/60 border border-gray-700/60 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-white mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-300">{item.requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {argusSpotlight && (
            <div id="argus-legacies" className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden mb-10">
              <img src={argusSpotlight.image} alt={argusSpotlight.title} className="w-full h-auto" />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-3">{argusSpotlight.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{argusSpotlight.subtitle}</p>
                <div className="space-y-3">
                  {argusSpotlight.highlights.map((item) => (
                    <div key={item.name} className="bg-gray-900/60 border border-gray-700/60 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-white mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-300">{item.requirement}</p>
                      {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <h2 id="savage-prep" className="text-3xl font-bold text-white mb-4">Savage Challenge Prep</h2>
          <div className="bg-gray-900/40 border border-red-700/40 rounded-lg p-6 mb-12">
            <p className="text-sm text-gray-300 mb-4">
              Use these quick reminders to keep your roster ready for Remix-specific achievements.
            </p>
            <ul className="text-sm text-gray-300 space-y-2">
              {savageChecklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
            <p className="text-sm text-gray-300 mb-4">
              Need detailed boss mechanics or cosmetic unlock specifics? Start with these reference articles pulled from the Legion Remix research pack.
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
              Revisit them before each phase unlock so your raid night plans and Bronze spending stay aligned with the latest timeline.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
