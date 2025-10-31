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
    detail:
      'Review phase unlocks every Tuesday reset and align your Legion Remix Road Map with raid or dungeon goals so the Legion Remix Road Map timeline stays current.',
  },
  {
    title: 'Bronze targets',
    detail:
      'Bank 60,000 Bronze per week to stay ahead of Infinite Bazaar unlocks outlined in this Legion Remix Road Map and use the Legion Remix Road Map to flag priority vendors.',
  },
  {
    title: 'Collection pulses',
    detail:
      'Run Violet Spellwing, Argus rares, and class mount chains during their highlighted Legion Remix Road Map windows while stacking the Legion Remix Road Map alerts to catch limited-time spawns.',
  },
  {
    title: 'Quality-of-life',
    detail:
      'Refresh addons, macros, and UI exports following each hotfix so the Legion Remix Road Map remains smooth to follow and archive every Legion Remix Road Map change log for future seasons.',
  },
];

const bronzeChecklist = [
  {
    name: 'Infinite Knowledge research',
    amount: '15,000 Bronze',
    note:
      'Complete before Week 3 so the Legion Remix Road Map keeps your alts on the same artifact power curve.',
  },
  {
    name: 'Class mount finales',
    amount: '25,000 Bronze',
    note:
      'Schedule purchases for Phase 3 to sync with Legion Remix Road Map class campaign beats and travel time.',
  },
  {
    name: 'Housing decor bundles',
    amount: '18,000 Bronze',
    note:
      'Phase 5 bundles rotate quickly—tag them in the Legion Remix Road Map calendar so you never miss stock.',
  },
  {
    name: 'Antorus catch-up gear',
    amount: '40,000 Bronze',
    note:
      'Plan Week 8 and Week 10 shopping sprees so the Legion Remix Road Map equips every Timerunner equally.',
  },
];

const roadmapFaq = [
  {
    question: 'Why does the Legion Remix Road Map focus on two-week checkpoints?',
    answer:
      'Each phase runs for roughly fourteen days. Anchoring the Legion Remix Road Map to that cadence ensures you budget reps, raid clears, and Bronze in manageable bursts that match Blizzard’s unlock schedule.',
  },
  {
    question: 'How often should I update my legion remix road map tasks?',
    answer:
      'Log progress after every Tuesday reset and Sunday cleanup session. That rhythm keeps your legion remix road map aligned with hotfixes, bonus events, and the newest Infinite Bazaar stock.',
  },
  {
    question: 'Can the Legion Remix Road Map support multiple Timerunners?',
    answer:
      'Yes—duplicate the Legion Remix Road Map checklist for each alt, then use the Bronze planner so every character hits artifact, gear, and cosmetic milestones together.',
  },
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
            This Legion Remix Road Map collects every phase unlock, weekly goal, and Bronze milestone
            in one command center so Timerunners never scramble. Use the Legion Remix Road Map to
            snapshot your plan, confirm which checklist items unlock next, and align your group on
            priorities before the reset hits.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mt-4">
            If your legion remix road map felt scattered inside spreadsheets or GSC anchor links,
            this dedicated hub gives you a clean calendar, downloadable notes, and a transparent
            cadence for all five phases.
          </p>
          <p className="text-sm md:text-base text-green-300 max-w-3xl mt-3">
            Map your Mythic+ schedule, raid splits, and cosmetic runs on the Legion Remix Road Map
            checklist so every teammate respects the Legion Remix Road Map priorities without
            ping-ponging across docs.
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
                <h2 className="text-3xl font-bold text-white mb-2">Visual Legion Remix Road Map Tracker</h2>
                <p className="text-gray-300 max-w-2xl">
                  Follow the Legion Remix Road Map progress bar to see which phase is active and what
                  unlocks next. Each node lights up as the Legion Remix Road Map advances so your team
                  instantly understands where to spend time and Bronze.
                </p>
                <p className="text-sm text-gray-400 max-w-xl mt-3">
                  Screenshot this Legion Remix Road Map visualization or embed it in your stream overlay so the
                  Legion Remix Road Map cadence becomes second nature for viewers and teammates, and keep a spare
                  widget running for emergent Legion Remix Road Map events.
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

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Legion Remix Road Map phase view',
                'Legion Remix Road Map Bronze flow',
                'Legion Remix Road Map raid prep',
                'Legion Remix Road Map collector checklist',
                'Legion Remix Road Map time blocks',
              ].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-green-600/20 border border-green-500/40 text-green-200 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-10 items-start">
          <div id="timeline">
            <h2 className="text-3xl font-bold text-white mb-4">Legion Remix Road Map Timeline</h2>
            <p className="text-gray-300 mb-4">
              Scroll through the dates below to see how the Legion Remix Road Map stacks phase
              unlocks, raid releases, and Bronze surges. Because every milestone lives under the same
              Legion Remix Road Map, you can prioritize alts, schedule group nights, and log vendor
              cooldowns without juggling tabs.
            </p>
            <p className="text-gray-300 mb-6">
              Bookmark this section or export it as a PDF so the Legion Remix Road Map follows you
              into Discord planning channels and in-game group finder notes.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Highlight the Legion Remix Road Map milestones inside your guild calendar and color code each Legion Remix Road Map window so roster leads know which dungeons, raids, or farms to spotlight weekly.
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
              <h3 className="text-2xl font-semibold text-white mb-3">Legion Remix Road Map Snapshot</h3>
              <p className="text-sm text-gray-300 mb-4">
                Download the quick-reference sheet to mirror this Legion Remix Road Map inside your
                guild docs and personal trackers.
              </p>
              <Link
                href="#weekly-checkpoints"
                className="inline-flex items-center justify-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all"
              >
                Open Weekly Checkpoints
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                Duplicate the Legion Remix Road Map checklist into Notion, Google Sheets, or your preferred planner, and label each tab "Legion Remix Road Map Sprint" so every reset stays aligned.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Share the Legion Remix Road Map calendar link with returning players so they can skim the Legion Remix Road Map highlights before jumping back in.
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
