import type { Metadata } from 'next';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Infinite Knowledge Guide',
  description:
    'Understand how Infinite Knowledge ranks unlock, the achievements that award them across each phase, and how to convert surplus power into Bronze in Legion Remix 2025.',
  alternates: {
    canonical: buildCanonicalUrl('/guides/infinite-knowledge'),
  },
};

const phaseMilestones = [
  {
    id: 'phase-1',
    title: 'Phase 1 – Skies of Fire (October 7 – October 20, 2025)',
    bullets: [
      'Unlimited Power I–VI kick off the grind by investing Infinite Knowledge directly into your artifact, culminating in the 5,000,000 point capstone.',
      'Broken Isles World Quests I–IV reward steady ranks for Timerunners who clear emissaries immediately after unlocking world quests.',
      'Dungeon achievements such as Legion Dungeons: Might of the Legion and Threats of the Isle layer in extra ranks while you learn the +10 Empowered affix rotations.',
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2 – Rise of the Nightfallen (October 21 – November 3, 2025)',
    bullets: [
      'The Suramar storyline achievements continue the Infinite Knowledge chain—bank the Withered Army Training quests so you can double-dip Bronze while turning in ranks.',
      'Court of Stars and Arcway keystones feed the Legion Dungeons: Power of the Ancients objective, accelerating catch-up on alts unlocked during this phase.',
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3 – Legionfall (November 4 – November 17, 2025)',
    bullets: [
      'Broken Shore metas, including Legionfall Commander and the Sentinax raid events, inject multiple Infinite Knowledge ranks when you group up on Turbo Boost week.',
      'Timeworn Keystone Adept and higher push goals start handing out repeatable ranks—plan Mythic+ nights around +20 and +30 clears while the Turbo Boost buff is active.',
    ],
  },
  {
    id: 'phase-4',
    title: 'Phase 4 – Argus Eternal (November 18 – December 8, 2025)',
    bullets: [
      'Krokuun, Mac’Aree, and Antoran Wastes callings unlock the last Infinite Knowledge achievements; combine them with Argus rare trains for Blanket Bronze gains.',
      'Antorus completion and the Argussian Reach victory achievements close the book on the 36 rank cap; any additional ranks earned after this point convert one-to-one into Bronze.',
    ],
  },
  {
    id: 'phase-5',
    title: 'Phase 5 – Infinite Echoes (December 9, 2025 – January 19, 2026)',
    bullets: [
      'Fel Skies catch-up events refresh open world objectives—stockpile six Infinite Research quests before the reset, then cash them in during Fel Skies for simultaneous Bronze and Knowledge gains.',
      'Overflow Bronze is the goal in this final stretch: every post-cap Infinite Knowledge token turns into currency you can route into housing decor and missing cosmetics.',
    ],
  },
];

const farmingChecklist = [
  'Use Chromie’s “gold” icons to identify daily quests that include Infinite Knowledge packets alongside Bronze and Artifactum Sand.',
  'Always pick up a fresh assignment from Eternus before starting a dungeon or raid session—Infinite Research slots now bank up to six days without losing progress.',
  'Combine Strange Humming Crystal loops with your knowledge turn-ins; Argus patrols regularly drop extra packets when run on Heroic World Tier.',
  'Convert finished ranks into artifact upgrades before you cap—holding tokens does not provide power until the rank is spent.',
  'When the 36-rank limit is reached, schedule high-value Bronze purchases (Violet Spellwing, Shackled Ur’zul, housing decor) so you feel the benefit of every surplus packet.',
];

export default function InfiniteKnowledgeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">Legion Remix Infinite Knowledge Guide</h1>
          <p className="text-gray-300 mb-4">
            Infinite Knowledge is the most important long-term system in Legion Remix: every rank permanently increases how much Infinite Power you earn. Hotfixes confirm a 36-rank cap—anything beyond that converts directly into Bronze. This page collects phase releases, daily routines, and tips for turning overflow into cosmetics.
          </p>

          <div className="bg-gray-900/40 border border-green-700/40 rounded-lg overflow-hidden mb-8">
            <img src={legionImages.infiniteResearch ?? legionImages.infiniteResearchQuests ?? legionImages.heroBanner} alt="Infinite Knowledge roadmap" className="w-full h-auto" />
            <div className="p-6">
              <h2 id="infinite-knowledge-legion-remix" className="text-2xl font-semibold text-white mb-2">Highlights</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                <li>36 ranks maximum—reachable around Phase 4; any extra tokens become Bronze instantly.</li>
                <li>Achievements stagger across phases, starting with Broken Isles world quests and ending on Argus.</li>
                <li>Infinite Research dailies now bank six days, ideal for Turbo Boost or Fel Skies turn-in bursts.</li>
                <li>Knowledge packets pair naturally with Strange Humming Crystal loops—plan routes and Bronze spending together.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Phase Achievements & Unlocks</h2>
          <p className="text-gray-300 mb-4">
            Each two-week phase opens additional Infinite Knowledge achievements. With smart scheduling you can cap ranks within the first month of the event.
          </p>

          <div className="space-y-6 mb-8">
            {phaseMilestones.map((phase) => (
              <div key={phase.id} id={phase.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{phase.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Daily Planning Checklist</h2>
          <p className="text-gray-300 mb-4">
            Follow this list to keep Knowledge and Bronze snowballing across mains and alts.
          </p>
          <div className="bg-gray-900/50 border border-green-700/30 rounded-lg p-6 mb-10">
            <ul className="list-disc list-inside space-y-3 text-sm text-gray-300">
              {farmingChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">System Synergy</h2>
          <ul className="list-disc list-inside space-y-3 text-sm text-gray-300 mb-10">
            <li>
              <strong>Infinite Artifact Weapons:</strong> Spending Knowledge unlocks additional paths—max the weapon for your primary spec before branching into alt builds.
            </li>
            <li>
              <strong>Heroic World Tier:</strong> Empowered world quests and rares grant more Bronze, Artifactum Sand, and Knowledge simultaneously—perfect for offense-oriented specs.
            </li>
            <li>
              <strong>Bronze Budget:</strong> When you approach the rank cap, pre-plan big-ticket items in the{' '}
              <Link href="/calculator" className="text-green-400 hover:text-green-300">
                Bronze Calculator
              </Link>{' '}
              so overflow conversions instantly fund Violet Spellwing, Shackled Ur’zul, or housing decor.
            </li>
          </ul>

          <div className="bg-gray-900/40 border border-yellow-700/40 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-3">Final Reminder</h2>
            <p className="text-sm text-gray-300">
              Hotfixes confirm every rank beyond 36 becomes Bronze. Check in with Eternus at the Infinite Bazaar frequently so every packet turns into real power—or your next collection target.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
