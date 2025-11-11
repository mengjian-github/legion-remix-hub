import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { remixPhases, eventDates } from '@/data/timeline';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const canonicalPath = '/guides/release-schedule';
const pageTitle = formatMetaTitle('Legion Remix Release Schedule & Phase Timeline 2025');
const pageDescription = formatMetaDescription(
  'Track the Legion Remix release schedule with phase dates, raid unlocks, vendor rotations, and weekly priorities so every Timerunner is ready for each content drop.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
  other: {
    'article:published_time': '2025-11-03',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Schedule Guide',
  },
};

const quickLinks = [
  { label: 'Phase timeline', href: '#phase-timeline' },
  { label: 'Weekly priorities', href: '#weekly-priorities' },
  { label: 'Raid & dungeon unlocks', href: '#raid-dungeon-unlocks' },
  { label: 'Vendor rotations', href: '#vendor-rotations' },
  { label: 'Alt planning matrix', href: '#alt-planning' },
  { label: 'FAQ', href: '#faq' },
];

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

const rangeFormatter = (start: Date, end: Date) => `${dateFormatter.format(start)} – ${dateFormatter.format(end)}`;

const weeklyCadence = [
  {
    title: 'Tuesday reset',
    notes: 'Claim Bronze cache, refresh Mythic+ scores, buy Infinite Bazaar crest upgrades, and review the legion remix release schedule milestones for the week.',
  },
  {
    title: 'Thursday knowledge',
    notes: 'Run Infinite Knowledge dailies, funnel surplus into alts, and tag new rares tied to the legion remix release schedule unlock wave.',
  },
  {
    title: 'Weekend catch-up',
    notes: 'Group for raids, complete World Quests before they rotate, and spend Bronze according to the legion remix release schedule shopping list.',
  },
];

const vendorHighlights = [
  {
    name: 'Infinite Bazaar Core',
    detail:
      'All core vendors open on October 7. Use the legion remix release schedule to pace Bronze between cosmetics, crests, and class transmog bundles.',
  },
  {
    name: 'Broken Shore Quartermasters',
    detail:
      'Unlock November 4 with Phase 3. Align Withered Army Training and Mage Tower prep with the legion remix release schedule so the Broken Shore currency grind stays efficient.',
  },
  {
    name: 'Argus Housing Vendors',
    detail:
      'Arrive November 18 alongside Argus Eternal. Preview decor drops and craft Bronze budgets around the legion remix release schedule before the portals open.',
  },
  {
    name: 'Infinite Echoes Finale',
    detail:
      'December 9 through January 19 brings rotating buffs and 100% vendor availability. Stack the bonus weekends inside the legion remix release schedule to finish collections.',
  },
];

const faqItems = [
  {
    question: 'How long does Legion Remix run?',
    answer:
      'The legion remix release schedule covers 15 weeks, from October 7, 2025 through January 19, 2026. Plan Bronze milestones and artifact ranks around that full window.',
  },
  {
    question: 'When should I swap to alts?',
    answer:
      'Stick with mains for Phases 1–2, then follow the legion remix release schedule alt cadence: start first alt in Phase 3, second alt after Argus Eternal, and final catch-up during Infinite Echoes.',
  },
  {
    question: 'What if I miss a phase unlock?',
    answer:
      'Every unlock returns during Infinite Echoes. Check the legion remix release schedule calendar, then focus on activities flagged for bonus Bronze the following week.',
  },
];

export default function ReleaseScheduleGuide() {
  const articleSchema = createArticleSchema({
    headline: 'Legion Remix Release Schedule & Phase Timeline 2025',
    description:
      'Detailed Legion Remix release schedule with phase dates, raid unlocks, vendor rotations, and weekly planning tips for Timerunners.',
    url: 'https://legionremixhub.com/guides/release-schedule',
    datePublished: '2025-11-03',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Release Schedule', path: '/guides/release-schedule' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-5xl mx-auto text-gray-200">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white">Legion Remix Release Schedule Guide</h1>
          <p className="text-sm text-gray-400 mt-2">
            Updated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 8 min read
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The legion remix release schedule exploded in search interest this week, so this playbook captures every milestone in one place.
            From launch on October 7 through the January 19 finale, the legion remix release schedule keeps Timerunners aligned on phase unlocks, raid targets, and Bronze payouts.
          </p>
          <p className="text-sm text-gray-300 mt-3">
            Bookmark, export, or embed this legion remix release schedule so teammates, alt army planners, and casual friends never miss a key unlock window.
          </p>
          <div className="mt-6 grid md:grid-cols-[2fr_3fr] gap-6 items-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative h-56 md:h-64 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src={legionImages.phaseTimeline ?? '/images/reference/reference-splash.png'}
                alt="Legion Remix phase timeline infographic"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </header>

        <section id="phase-timeline" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Phase Timeline</h2>
          <p className="text-gray-300 mb-4">
            This legion remix release schedule timeline summarizes every phase window so you can schedule raids, alt gear funnels, and Bronze shopping sprees without guesswork.
            Each phase card highlights major unlocks, recommended goals, and the feeling you should prioritize before the next wave arrives.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {remixPhases.map((phase) => (
              <div key={phase.id} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-xl font-semibold text-white">{phase.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{rangeFormatter(phase.startDate, phase.endDate)}</p>
                <p className="text-gray-300 mt-3">{phase.description}</p>
                <p className="text-sm text-gray-400 mt-3">
                  Focus: <span className="text-gray-200">{phase.focus}</span>
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc list-inside">
                  {phase.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-emerald-900/20 border border-emerald-700/40 rounded-xl p-4 text-sm text-emerald-200">
            Export the legion remix release schedule to your calendar or Discord bot so the entire roster shares the same countdown.
            Tag #remix-planning with the legion remix release schedule snippets when you post reminders for raid nights or Bronze spending pushes.
          </div>
        </section>

        <section id="weekly-priorities" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Weekly Priorities</h2>
          <p className="text-gray-300 mb-4">
            Anchor every reset to this legion remix release schedule cadence. Splitting your focus into three touchpoints keeps artifacts, Bronze, and collectibles aligned with the live unlock wave.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {weeklyCadence.map((cadence) => (
              <div key={cadence.title} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">{cadence.title}</h3>
                <p className="text-gray-300 mt-2">{cadence.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="raid-dungeon-unlocks" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Raid & Dungeon Unlocks</h2>
          <p className="text-gray-300 mb-4">
            Raids and keystones define the heart of the legion remix release schedule. Use the timeline below to assign progression nights, swap compositions, and claim Violet Spellwing carries before Infinite Echoes settles in.
          </p>
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 space-y-4 text-gray-300">
            <p>
              <strong>October 7:</strong> Emerald Nightmare, Trial of Valor, and Timeworn Keystone Season start. The legion remix release schedule flags this as the launch triad—perfect for tutorial clears and Bronze token hoarding.
            </p>
            <p>
              <strong>October 21:</strong> Return to Karazhan and the Nighthold unlock. Align crafting cooldowns with the legion remix release schedule to funnel upgrades into raid mains.
            </p>
            <p>
              <strong>November 4:</strong> Tomb of Sargeras joins the rotation. Follow this legion remix release schedule recommendation to swap off split runs and focus on Mage Tower prep.
            </p>
            <p>
              <strong>November 18:</strong> Antorus, the Burning Throne arrives with Seat of the Triumvirate. Use the legion remix release schedule to lock in two raid nights, then push keystones for Fragmented Mementos.
            </p>
            <p>
              <strong>December 9:</strong> Infinite Echoes begins. The timeline marks every bonus buff weekend—bookmark those if you are chasing Violet Spellwing or Shackled Ur’zul.
            </p>
          </div>
        </section>

        <section id="vendor-rotations" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Vendor Rotations</h2>
          <p className="text-gray-300 mb-4">
            Vendors refresh with each wave, so keep the legion remix release schedule handy when budgeting Bronze or planning housing decor hauls. These highlights cover the biggest inflection points.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {vendorHighlights.map((vendor) => (
              <div key={vendor.name} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">{vendor.name}</h3>
                <p className="text-gray-300 mt-2">{vendor.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="alt-planning" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">Alt Planning Matrix</h2>
          <p className="text-gray-300 mb-4">
            A structured alt cadence keeps your roster in sync with the legion remix release schedule. Track artifact ranks, Bronze targets, and Infinite Knowledge overflow so every alt feels rewarding without burning out.
          </p>
          <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 text-gray-300 space-y-3">
            <p>
              <strong>Primary Main (Phases 1–2):</strong> Finish campaign chapters, maintain Mythic+ score, and secure week-one raid clears. The legion remix release schedule ensures you stay ahead of the gear curve.
            </p>
            <p>
              <strong>Secondary Alt (Phase 3):</strong> Begin Broken Shore and class mount quests. Follow the legion remix release schedule to sync Mage Tower unlocks, then buy crest catch-ups.
            </p>
            <p>
              <strong>Tertiary Alt (Phase 4):</strong> Jump into Argus Eternal with emissary chains prepped. The legion remix release schedule calls for alternating Antorus clears with keystone farming.
            </p>
            <p>
              <strong>Cleanup Roster (Phase 5):</strong> Infinite Echoes resets the board. Use the schedule to plot bonus buff weekends and finish cosmetic wish lists.
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">FAQ</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 text-gray-300">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-gray-800 pt-6 text-sm text-gray-400">
          This legion remix release schedule anchors the run from {dateFormatter.format(eventDates.start)} to {dateFormatter.format(eventDates.end)}.
          Check back after each hotfix and we&apos;ll refresh this legion remix release schedule with any new buffs, vendor rotations, or event-specific announcements.
        </footer>
      </div>
    </div>
  );
}
