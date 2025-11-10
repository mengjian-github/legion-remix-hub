import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/ui/Countdown';
import { eventDates, remixPhases } from '@/data/timeline';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const pageTitle = formatMetaTitle('Legion Remix Road Map Timeline & Weekly Checklist');
const pageDescription = formatMetaDescription(
  'Legion Remix Road Map guide for Timerunners with phase timeline, weekly checklist, Bronze spending plan, and FAQ to keep your Legion Remix Road Map goals on schedule.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/roadmap'),
  },
  openGraph: {
    title: 'Legion Remix Road Map Timeline & Bronze Planner',
    description: 'Use this Legion Remix Road Map to track every phase unlock, weekly checklist, Bronze spending milestone, and event deadline.',
    type: 'article',
    url: buildCanonicalUrl('/roadmap'),
    images: [
      {
        url: legionImages.phaseSchedule,
        alt: 'Legion Remix Road Map phase schedule overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legion Remix Road Map Timeline & Bronze Planner',
    description: 'Use this Legion Remix Road Map to track every phase unlock, weekly checklist, Bronze spending milestone, and event deadline.',
    images: [legionImages.phaseSchedule],
  },
};

const updatedOn = 'October 31, 2025';

const weeklyBeats = [
  {
    title: 'Phase cadence',
    detail: 'Review phase unlocks every Tuesday reset and line up raid or dungeon priorities for the next fortnight.',
  },
  {
    title: 'Bronze targets',
    detail: 'Bank roughly 60,000 Bronze weekly so Infinite Bazaar vendors and class mount purchases never bottleneck you.',
  },
  {
    title: 'Collection pulses',
    detail: 'Schedule Violet Spellwing runs, Argus rares, and class mount chapters during the weeks they unlock.',
  },
  {
    title: 'Quality-of-life',
    detail: 'Refresh addons and macros after each hotfix so UI exports and Bronze calculators stay accurate.',
  },
];

const bronzeChecklist = [
  {
    name: 'Infinite Knowledge research',
    amount: '15,000 Bronze',
    note: 'Finish before Week 3 to keep every alt’s artifact tree on pace with the main.',
  },
  {
    name: 'Class mount finales',
    amount: '25,000 Bronze',
    note: 'Phase 3 brings Legionfall finales—budget Bronze for the mount variants you still need.',
  },
  {
    name: 'Housing decor bundles',
    amount: '18,000 Bronze',
    note: 'Phase 5 décor rotates weekly; flag desired pieces before Infinite Echoes kicks off.',
  },
  {
    name: 'Antorus catch-up gear',
    amount: '40,000 Bronze',
    note: 'Plan Week 8 and Week 10 shopping sprees so every Timerunner reaches Antorus item levels together.',
  },
];

const roadmapFaq = [
  {
    question: 'Why does the Legion Remix Road Map focus on two-week checkpoints?',
    answer:
      'Each phase lasts about fourteen days. Planning around that cadence keeps reputation pushes, raid clears, and Bronze spending manageable.',
  },
  {
    question: 'How often should I update my legion remix road map tasks?',
    answer: 'Log progress after the Tuesday reset and a Sunday cleanup session so hotfixes and bonus events never surprise you.',
  },
  {
    question: 'Can the Legion Remix Road Map support multiple Timerunners?',
    answer: 'Yes—duplicate the checklist per alt, then mirror Bronze targets so each character finishes artifacts, gear, and cosmetics together.',
  },
];

type PhaseCardCta = {
  label: string;
  description: string;
  href: string;
};

type PhaseCard = {
  id: string;
  title: string;
  dates: string;
  image: string;
  highlights: string[];
  cta?: PhaseCardCta;
};

const phaseCards: PhaseCard[] = [
  {
    id: 'phase-1',
    title: 'Phase 1 – Skies of Fire',
    dates: 'October 7 – October 20, 2025',
    image: legionImages.phase1Overview,
    highlights: [
      'Class campaign openers, order hall unlocks, and artifact introductions return.',
      'Heroic World Tier, Timewarped Obelisks, and Infinite Research begin delivering Artifactum Sand.',
      'Emerald Nightmare, Trial of Valor, and the launch Timeworn Keystone dungeons anchor gearing.'
    ]
  },
  {
    id: 'phase-2',
    title: 'Phase 2 – Rise of the Nightfallen',
    dates: 'October 21 – November 3, 2025',
    image: legionImages.phase2Overview,
    highlights: [
      'Return to Karazhan and The Nighthold open alongside new Timeworn Keystone rotations.',
      'Suramar campaign chapters pace Ancient Mana upgrades and the Kaldorei queen ensemble.',
      'New rewards include arcwine toys, Withered Army Training buffs, and Infinite Knowledge ranks.'
    ]
  },
  {
    id: 'phase-3',
    title: 'Phase 3 – Legionfall',
    dates: 'November 4 – November 17, 2025',
    image: legionImages.phase3Overview,
    highlights: [
      'Broken Shore assaults, construction missions, and Legionfall supplies unlock class mount finales.',
      'Cathedral of Eternal Night enters the dungeon pool while Tomb of Sargeras headlines weekly raids.',
      'Fragmented Mementos drop more often, complementing Legionfall Champion’s Insignia catch-up.'
    ],
    cta: {
      label: 'Open the Legionfall launch briefing',
      description: 'Review Broken Shore unlock order, Legion Assault cadence, and Bronze priorities before Argus prep begins.',
      href: '/news/phase-3-legion-remix-now-live'
    }
  },
  {
    id: 'phase-4',
    title: 'Phase 4 – Argus Eternal',
    dates: 'November 18 – December 8, 2025',
    image: legionImages.phase4Overview,
    highlights: [
      'Krokuun, Antoran Wastes, and Mac’Aree unlock with new world quests and rare trains.',
      'Seat of the Triumvirate joins Timeworn Keystones while Antorus anchors raid progression.',
      'Army of the Light and Argussian Reach vendors stock late-season mounts, toys, and ensembles.'
    ]
  }
];

export default function RoadmapPage() {
  const now = new Date();
  const currentPhaseIndex = remixPhases.findIndex(
    (phase) => now >= phase.startDate && now <= phase.endDate
  );
  const eventEnded = now > eventDates.end;
  const rawProgressPercent = eventEnded
    ? 100
    : currentPhaseIndex === -1
    ? 0
    : ((currentPhaseIndex + 1) / remixPhases.length) * 100;
  const progressPercent = Math.min(Math.max(rawProgressPercent, 0), 100);

  return (
    <main className="bg-gray-950 text-gray-200">
      <section className="relative overflow-hidden border-b border-gray-800 min-h-[420px]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={legionImages.phaseSchedule}
            alt="Legion Remix Road Map infographic"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-950" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Updated {updatedOn}</span>
            <span className="h-1 w-1 rounded-full bg-green-400" />
            <span>Event Window: October 7, 2025 – January 19, 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Legion Remix Road Map
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Track every Legion Remix phase, weekly priority, and Bronze milestone at a glance so Timerunners can stay ahead of unlocks without juggling multiple docs.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mt-4">
            Use the timeline below to snapshot what lands on each reset, from class campaign beats to raid rotations and Infinite Bazaar stock. Each checklist pairs the latest reference notes with actionable goals.
          </p>
          <p className="text-sm md:text-base text-green-300 max-w-3xl mt-3">
            Sync Mythic+ pushes, raid splits, and collection runs here, then copy the Bronze planner into your guild sheet so everyone spends with the same deadlines.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {weeklyBeats.map((beat) => (
              <div
                key={beat.title}
                className="bg-gray-900/70 border border-green-600/30 rounded-xl p-5 shadow-lg shadow-green-900/40"
              >
                <h3 className="text-lg font-semibold text-green-300 mb-2">{beat.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{beat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <div className="relative overflow-hidden rounded-2xl border border-green-700/30 bg-gray-900/70 shadow-2xl shadow-green-900/40">
          <div className="absolute inset-0 opacity-40">
            <Image
              src={legionImages.phaseTimeline}
              alt="Legion Remix Road Map phase visualization"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/90 to-green-950/70" />
          </div>

          <div className="relative z-10 px-6 py-10 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Visual Phase Tracker</h2>
                <p className="text-gray-300 max-w-2xl">
                  Watch the progress bar light up as each phase arrives. Hover over a node to double-check dates, required achievements, and when to pivot your focus.
                </p>
                <p className="text-sm text-gray-400 max-w-xl mt-3">
                  Screenshot the graphic for your guild discord or stream overlay so everyone stays aligned on unlock cadence and upcoming checklists.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Road Map Completion</p>
                <p className="text-3xl font-bold text-green-300">
                  {progressPercent.toFixed(0)}%
                </p>
              </div>
            </div>

            <div className="relative mt-10 px-4">
              <div className="absolute left-10 right-10 top-11 h-1 bg-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="relative flex flex-wrap gap-y-10 justify-between">
                {remixPhases.map((phase, idx) => {
                  const isActive = idx === currentPhaseIndex;
                  const isComplete = currentPhaseIndex !== -1 && idx < currentPhaseIndex;
                  const statusClass = isActive
                    ? 'border-green-400 bg-green-600/40 text-green-200 shadow-lg shadow-green-500/40'
                    : isComplete
                    ? 'border-green-500 bg-green-600 text-white shadow-md shadow-green-500/40'
                    : 'border-gray-700 bg-gray-900 text-gray-300';

                  return (
                    <div key={phase.id} className="flex-1 min-w-[160px] flex flex-col items-center text-center px-2">
                      <div
                        className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-sm font-bold transition-all duration-500 ${statusClass}`}
                      >
                        {idx + 1}
                      </div>
                      <p className="mt-4 text-sm font-semibold text-white leading-tight">{phase.name}</p>
                      <p className="mt-1 text-xs text-gray-400 uppercase tracking-wide">
                        {phase.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} –{' '}
                        {phase.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                      <p className="mt-2 text-xs text-gray-400 max-w-[200px]">
                        {phase.focus}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {phaseCards.map((card) => (
                <article
                  key={card.id}
                  className="rounded-2xl border border-gray-800 bg-gray-900/70 overflow-hidden hover:border-green-500/50 transition-colors"
                >
                  <div className="relative h-40">
                    <Image
                      src={card.image}
                      alt={`${card.title} artwork`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs uppercase tracking-wide text-green-300">{card.dates}</span>
                      <h3 className="text-lg font-semibold text-white mt-1">{card.title}</h3>
                    </div>
                  </div>
                  <ul className="p-5 space-y-2 text-sm text-gray-300">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {card.cta && (
                    <div className="border-t border-gray-800 bg-gray-950/60 px-5 py-4 space-y-3">
                      <p className="text-xs text-gray-400">{card.cta.description}</p>
                      <Link
                        href={card.cta.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-300 hover:text-green-200"
                      >
                        {card.cta.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-.293 1.707l-1 1a1 1 0 01-1.414-1.414l.293-.293H9a1 1 0 110-2h6.586l-.293-.293a1 1 0 010-1.414l1-1zM4 5a1 1 0 011-1h4a1 1 0 010 2H6v10h8v-3a1 1 0 112 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-10 items-start">
          <div id="timeline">
            <h2 className="text-3xl font-bold text-white mb-4">Season Timeline</h2>
            <p className="text-gray-300 mb-4">
              Browse the schedule to reference exactly when raids, dungeons, and vendor rotations unlock. Each card summarizes the major activities of its two-week window.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Export or bookmark this view for guild planning channels so roster leads can assign goals before the reset lands.
            </p>

            <div className="space-y-6">
              {remixPhases.map((phase, idx) => (
                <div
                  key={phase.id}
                  className="border border-gray-800 rounded-xl p-6 bg-gray-900/60 hover:border-green-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">
                        {idx + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{phase.name}</h3>
                    </div>
                    <span className="text-sm text-green-300 font-medium">
                      {phase.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} –{' '}
                      {phase.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{phase.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {phase.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Countdown targetDate={eventDates.end} title="Legion Remix Road Map Countdown" />
            <div className="border border-green-700/40 bg-gray-900/60 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">Planning Snapshot</h3>
              <p className="text-sm text-gray-300 mb-4">
                Download the quick-reference sheet to mirror these checkpoints inside your guild docs and personal trackers.
              </p>
              <Link
                href="#weekly-checkpoints"
                className="inline-flex items-center justify-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                Open Weekly Checkpoints
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                Duplicate the checklist into Notion, Google Sheets, or your preferred planner and tag each tab with the corresponding phase.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Share the calendar link with returning players so they can skim upcoming highlights before jumping back in.
              </p>
            </div>
          </div>
        </div>

        <div id="weekly-checkpoints">
          <h2 className="text-3xl font-bold text-white mb-4">Legion Remix Road Map Weekly Checkpoints</h2>
          <p className="text-gray-300 mb-6">
            Stack your chores, raids, and Bronze farming into themed buckets. By keeping each task
            under the Legion Remix Road Map weekly checkpoints, you convert big goals into simple
            nightly routines and never miss a currency cap.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Pin this Legion Remix Road Map cadence beside your guild calendar so casual players and
            raid leads speak the same Legion Remix Road Map language during planning meetings.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/60 border border-green-700/30 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Reset (Tue–Wed)</h3>
              <p className="text-sm text-gray-300">
                Clear raids, refresh World Quests, and log Mythic+ keys so the Legion Remix Road Map
                starts the week fully synced.
              </p>
            </div>
            <div className="bg-gray-900/60 border border-green-700/30 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Midweek (Thu–Fri)</h3>
              <p className="text-sm text-gray-300">
                Focus Suramar story, artifact research, and Argus rares that align with the Legion Remix Road Map timers.
              </p>
            </div>
            <div className="bg-gray-900/60 border border-green-700/30 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Weekend (Sat)</h3>
              <p className="text-sm text-gray-300">
                Host community carries, finish class campaigns, and pre-farm Bronze caches highlighted in the Legion Remix Road Map.
              </p>
            </div>
          <div className="bg-gray-900/60 border border-green-700/30 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-2">Cleanup (Sun)</h3>
            <p className="text-sm text-gray-300">
              Audit checklists, update logs, and prep consumables so the Legion Remix Road Map
              roll-over is painless.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Post screenshots of your Legion Remix Road Map board in guild chat to catch missed tasks and to celebrate completed Legion Remix Road Map milestones.
            </p>
          </div>
          </div>
        </div>

        <div id="bronze-strategy" className="border border-green-700/30 bg-gray-900/60 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Legion Remix Road Map Bronze Strategy</h2>
          <p className="text-gray-300 mb-6">
            Funnel Bronze into priority unlocks while leaving room for impulse buys. The Legion Remix
            Road Map Bronze planner below keeps your shopping list realistic and avoids last-week
            scrambles when Infinite Echoes bonuses arrive.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr className="text-left text-sm text-gray-400 uppercase tracking-wide">
                  <th className="py-3 pr-6">Milestone</th>
                  <th className="py-3 pr-6">Bronze Goal</th>
                  <th className="py-3">Legion Remix Road Map Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {bronzeChecklist.map((row) => (
                  <tr key={row.name}>
                    <td className="py-4 pr-6 text-sm text-gray-200 font-semibold">{row.name}</td>
                    <td className="py-4 pr-6 text-sm text-green-300">{row.amount}</td>
                    <td className="py-4 text-sm text-gray-300">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Keep 10,000 Bronze liquid for emergency buys; the Legion Remix Road Map highlights
            limited-time vendor stock in weekly notes, and our Legion Remix Road Map alert ticker
            surfaces unexpected vendor rotations.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Share your results in Discord and mark each Legion Remix Road Map purchase complete so
            teammates can spot gaps before the next reset hits.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Drop the Legion Remix Road Map Bronze table into your spreadsheets so accountants can balance the Legion Remix Road Map budget across multiple Timerunners.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Legion Remix Road Map Q&A</h2>
          <div className="space-y-6">
            {roadmapFaq.map((item) => (
              <div key={item.question} className="border border-gray-800 rounded-xl p-6 bg-gray-900/60">
                <h3 className="text-xl font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-600/10 border border-green-500/40 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead With This Legion Remix Road Map</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-6">
            Pin the Legion Remix Road Map to your browser favorites, sync it with your raid calendar,
            and share it inside Discord while appointing a Legion Remix Road Map champion. Every time
            the event shifts, this Legion Remix Road Map refreshes alongside hotfixes so you never
            lose momentum.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
          >
            Return to Legion Remix Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
