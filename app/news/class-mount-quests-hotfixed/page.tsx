import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/class-mount-quests-hotfixed';
const rawTitle = 'Class Mount Quest Hotfix Restores Legion Remix Mount Unlocks';
const rawDescription =
  'Blizzard\'s November 9 Legion Remix hotfix clears every class mount progression blocker, repairs rogue infiltration steps, and repopulates hidden artifact appearance trackers so Timerunners can finish Breaching the Tomb and Champions of Legionfall.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(
  `${rawDescription} Use this checklist to re-sync quest states, confirm NPC spawns, and schedule class order hall runs before Phase 4.`
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-11-09',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Hotfix Explainer',
  },
};

const heroStats = [
  { label: 'Hotfix deployment', value: 'Sunday, November 9, 2025 – 04:15 UTC region-wide' },
  { label: 'Primary targets', value: 'Class mount finales, rogue infiltration chain, hidden artifact trackers' },
  { label: 'Required actions', value: 'Relog, re-enter your class hall, and interact with fresh "!" NPCs to advance' },
];

const fixHighlights = [
  {
    title: 'Campaign finales unblocked',
    details: [
      'Death Knight, Mage, Paladin, Shaman, Warlock, and Warrior finale scenarios now spawn remaining waves/NPCs, unlocking their mount turn-ins.',
      'Shadowy Reins of the Accursed Wrathsteed drop table is restored so Warlocks can loot the remixed fel variant inside the Twisting Nether.',
      'Class hall scouting maps stop soft-locking, letting Champions of Legionfall objectives appear after the Broken Shore briefing.',
    ],
  },
  {
    title: 'Special-case questlines fixed',
    details: [
      'Hunters regain their Maiev hand-off and Night of the Wilds steps after Morsteth resets the scenario timeline.',
      'Rogue infiltration (“Hiding in Plain Sight” and “Professionally Good Looking”) now auto-complete once you talk to Moratari in the Hall of Shadows.',
      'Priests, Druids, and Shamans receive proper class hall gossip options so hidden appearance breadcrumbs and follower missions populate again.',
    ],
  },
  {
    title: 'UI + tracker polish',
    details: [
      'Hidden artifact appearance tabs display progress once more, so collections update as soon as you loot the trigger items.',
      'Quest log hints updated to Bronze-era terminology, preventing players from chasing missing Wyrmtongue caches.',
      'Legionfall building rotation timers sync with the new quest unlock flow, ensuring you can complete Breaching the Tomb in 11 days.',
    ],
  },
];

const classFixes = [
  {
    label: 'Death Knight & Warrior',
    notes: [
      '"Champions of the Horsemen" and "Herald of the Apocalypse" scripts resume after relogging; interact with Darion Mograine to retrigger the cinematic.',
      'Warriors can now click Odyn\'s Gjallarhorn inside Skyhold to spawn the final challenge for Battlelord\'s Valor.',
    ],
  },
  {
    label: 'Mage & Paladin',
    notes: [
      'Archmage Kael\'thas and Lord Maxwell Tyrosus now offer their finale gossip within ten seconds of entering the class hall.',
      'Teleport to the Cathedral of Eternal Night to ensure pageant waves spawn if you abandoned the quest during the bug window.',
    ],
  },
  {
    label: 'Shaman & Warlock',
    notes: [
      'Shaman Earthmother vision now includes the missing voiceover checkpoint, immediately awarding the Farseer\'s Raging Tempest stormrider.',
      'Warlocks regain access to the Shadow Council ritual; collect 50 Demonic Runes again before queuing the final scenario.',
    ],
  },
  {
    label: 'Hunter & Rogue',
    notes: [
      'Hunters should reset the scenario from the Dalaran flight master; Maiev\'s portal now appears without using Group Finder tricks.',
      'Rogues can speak to Moratari to auto-complete Lilian Voss\'s disguise work, then continue straight to the Stormwind infiltration finale.',
    ],
  },
  {
    label: 'Priest & Druid',
    notes: [
      'Priests gain the Exodar beacon again, letting you wrap up the Light\'s Wrath reunion before the Broken Shore send-off.',
      'Druids can interact with Broll Bearmantle in the Dreamgrove to recover “Gathering Information” if it disappeared post-hotfix.',
    ],
  },
];

const recoveryChecklist = [
  {
    title: 'Resync quest states',
    steps: [
      'Log out to the character screen for 60 seconds, then log back in to refresh the phase data.',
      'Enter your class order hall and talk to the mission table NPC even if no quests show on the map.',
      'Pick up the refreshed "!" quest and ride/portal to the scenario start; abandon and reaccept if progress stalls.',
    ],
  },
  {
    title: 'Track Breaching the Tomb cadence',
    steps: [
      'Complete the daily Broken Shore chapter as soon as it appears so the 11-day cadence stays aligned with the November 17 Argus prepatch.',
      'Use the Construction Table to ensure your region builds the Mage Tower by Day 6; its buff is required for several finale fights.',
      'If a chapter remains missing after the daily reset, pick up "Champions of Legionfall" again from Khadgar to refresh the chain.',
    ],
  },
  {
    title: 'Document proof for support',
    steps: [
      'Screenshot your quest log and map before and after each fix to prove you completed the requirements within Legion Remix.',
      'Record Infinite Knowledge rank and Bronze totals in case support needs to replace a missing mount.',
      'Share the evidence with your guild so others can mirror the recovery path without re-doing detective work.',
    ],
  },
];

const monitoringList = [
  {
    issue: 'Mage Tower downtime overlap',
    note: 'If your region builds the Mage Tower during server maintenance, the tower may despawn early; repeat the construction vote to restore the buff.',
  },
  {
    issue: 'Rogue followers stuck on missions',
    note: 'Cancel any mission that started before November 9; otherwise, mission tables can report the wrong success chance and block the finale.',
  },
  {
    issue: 'Hunter pet stable overflow',
    note: 'Switch to a default pet before entering the class scenario; exotic pets tamed in Remix sometimes fail to load the correct dialogue triggers.',
  },
];

const timeline = [
  { date: 'November 7, 2025', event: 'Community bug reports spike as class mount finales stall during Legionfall Week 1.' },
  { date: 'November 8, 2025', event: 'Blizzard deploys partial server restarts; some quests resume but Hunters and Rogues remain blocked.' },
  { date: 'November 9, 2025', event: 'Full hotfix sweep ships worldwide, restoring infiltration scripts, NPC gossip, and hidden appearance tracking.' },
  { date: 'November 10, 2025', event: 'Follow-up tuning calibrates Bronze rewards and ensures Champions of Legionfall prerequisites auto-complete for alts.' },
];

const faqItems = [
  {
    question: 'Do I need to restart the entire class campaign?',
    answer:
      'No. The hotfix preserves campaign progress. Relog, talk to the nearest quest-giver, and re-run only the finale scenario. If objectives reset to earlier chapters, abandon the quest and reaccept it inside your order hall.',
  },
  {
    question: 'Will missing mounts be auto-granted?',
    answer:
      'The Reward Delivery Service checks completion flags daily. If you finished the finale but did not receive the mount, open a ticket with screenshots. Most cases resolve after the next daily reset without GM intervention.',
  },
  {
    question: 'How do hidden artifact appearances interact with Remix?',
    answer:
      'Hidden tab progress mirrors retail Legion. Once the UI started updating again on November 9, any hidden trigger you loot inside Remix (e.g., Smelly\'s Luckydo, the Burning Plate) immediately unlocks the recolor set for your account-wide collection.',
  },
];

const faqSchema = createFAQSchema(
  faqItems.map((faq) => ({ question: faq.question, answer: faq.answer }))
);

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: `${rawDescription} Hotfix guide covers recovery steps, class-by-class fixes, and monitoring tips.`,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: 'https://legionremixhub.com/images/news/2025-11-09-class-mount-quests-hotfix.jpg',
  datePublished: '2025-11-09',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Class Mount Hotfix', path: canonicalPath },
]);

export default function ClassMountHotfixPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0">
          <Image
            src="/images/news/2025-11-09-class-mount-quests-hotfix.jpg"
            alt="Timerunners regrouping at Deliverance Point after the class mount hotfix"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to Legion Remix News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/90">Hotfix Briefing</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published November 9, 2025 • Legion Remix Hub Team</p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-emerald-400/30 bg-gray-950/70 p-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">{stat.label}</p>
                <p className="mt-2 text-sm text-gray-200">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-8 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What changed in the November 9 sweep</h2>
            <p className="text-sm text-gray-300">
              The hotfix travels across every Legion Remix realm simultaneously, so the safest recovery plan is to relog, clear your quest log of duplicate steps, and follow the refreshed breadcrumbs below. Expect your class hall to feel busy for 24 hours while players redo finales—stay patient and restart scenarios if NPCs overlap.
            </p>
            <ul className="space-y-4">
              {fixHighlights.map((section) => (
                <li key={section.title} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
                  <p className="text-base font-semibold text-emerald-300">{section.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-gray-800 bg-gray-950/60 p-5">
            <h3 className="text-lg font-semibold text-white">Hotfix triage tips</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>Group scenarios behave best when you soft reset the instance by right-clicking your portrait → Reset All Instances.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>Loot quest items even if objectives auto-complete—the hidden appearance tracker requires the physical item pickup.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                <span>Use `/reload` sparingly; a full relog is safer when phasing bugs appear inside class halls.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Class-by-class fixes</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {classFixes.map((entry) => (
              <div key={entry.label} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-emerald-300">{entry.label}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {entry.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-gray-800 bg-gray-950/60 p-6 lg:grid-cols-3">
          {recoveryChecklist.map((block) => (
            <div key={block.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{block.title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {block.steps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Issues still worth watching</h2>
          <div className="space-y-4">
            {monitoringList.map((item) => (
              <div key={item.issue} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-base font-semibold text-emerald-300">{item.issue}</p>
                <p className="text-sm text-gray-300 mt-2">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-white mb-6">Hotfix timeline</h2>
          <div className="space-y-4">
            {timeline.map((entry) => (
              <div key={entry.date} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">{entry.date}</p>
                <p className="mt-2 text-sm text-gray-300">{entry.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6">
          <h2 className="text-3xl font-semibold text-white mb-4">FAQ</h2>
          <dl className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-950/50 p-4">
                <dt className="text-base font-semibold text-emerald-300">{faq.question}</dt>
                <dd className="mt-2 text-sm text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  );
}
