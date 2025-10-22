import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Kaldorei Queen’s Royal Vestments Legion Remix Guide');
const pageDescription = formatMetaDescription(
  'Unlock the Kaldorei Queen’s Royal Vestments in Legion Remix by completing two Suramar achievements. Follow campaign, exploration, and group activity checklists plus Nightfallen reputation tips.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/kaldorei-royal-vestments'),
  },
  other: {
    'article:published_time': '2025-10-22',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Rewards Guide',
  },
};

const quickLinks = [
  { label: 'Unlock requirements', href: '#requirements' },
  { label: 'Campaign roadmap', href: '#campaign' },
  { label: 'Tour Suramar speed run', href: '#tour-suramar' },
  { label: 'Group content checklist', href: '#group-checklist' },
  { label: 'Nightfallen reputation tips', href: '#nightfallen' },
  { label: 'Bronze & FAQs', href: '#bronze' },
];

const requirementCards = [
  {
    title: 'Campaign: Suramar',
    description:
      'Complete the 17-chapter Insurrection questline beginning with “Lockdown.” Counts toward Infinite Knowledge and unlocks key Suramar story beats.',
  },
  {
    title: 'Tour Suramar',
    description:
      'Recover treasures, defeat rares, and explore the Suramar map. HandyNotes and the Treasure Map sold by First Arcanist Thalyssra speed this up.',
  },
  {
    title: 'Looking for Group: Suramar',
    description:
      'Finish The Arcway, Court of Stars, and The Nighthold once each on any difficulty. Queue with Timerunner friends or use Group Finder.',
  },
  {
    title: 'The Nightfallen',
    description:
      'Reach Exalted with the Nightfallen to unlock their vendor tab and complete the Suramar meta quickly if you prefer a reputation route.',
  },
];

const campaignMilestones = [
  {
    title: 'Start “Lockdown”',
    note: 'Pick up the quest from First Arcanist Thalyssra inside Shal’Aran after finishing “A Change of Seasons.”',
  },
  {
    title: 'Withered Army Training',
    note: 'Bank two scenario tickets before Turbo Boost weekends—each run awards Infinite Knowledge and Bronze in Remix.',
  },
  {
    title: 'Finale “Kaldorei Resistance”',
    note: 'The last chapter caps the Campaign: Suramar achievement and unlocks the cinematic against Elisande.',
  },
];

const tourSuramarTips = [
  'Buy Treasure Map: Suramar (20 gold, Honored) from First Arcanist Thalyssra at 37.0, 46.2 to mark chest locations.',
  'Install HandyNotes: Legion (Broken Isles) Treasures & Rares or import a TomTom route to chain the map in one flight.',
  'Warband Map to Everywhere All At Once instantly grants exploration credit if another character has already revealed the zone.',
];

const groupChecklist = [
  {
    name: 'The Arcway',
    location: 'Entrance at /way Suramar 41.1 61.5 — use the meeting stone just outside the Sanctum of Order.',
  },
  {
    name: 'Court of Stars',
    location: 'Entrance at /way Suramar 50.3 65.6 on the canal. Ideal for keystone practice before Timeworn pushes.',
  },
  {
    name: 'The Nighthold',
    location: 'Enter the Sanctum of Order in Suramar City and ride the teleporters down to the raid doors at /way 44.1 60.1.',
  },
];

const bronzeNotes = [
  'Each achievement grants 1,000 Bronze via Infinite Knowledge overflow once you cap at 36 ranks.',
  'Campaign chapters award large chunks of Artifactum Sand—spend it on weapon nodes before Phase 3.',
  'Nightfallen Paragon caches can drop the Enchanted Nightborne Coin; disenchant for extra Bronze if you are not collecting toys.',
];

export default function KaldoreiRoyalVestmentsPage() {
  const articleSchema = createArticleSchema({
    headline: 'Kaldorei Queen’s Royal Vestments Legion Remix Guide',
    description:
      'Step-by-step plan for unlocking the Kaldorei Queen’s Royal Vestments by completing Suramar achievements during Legion Remix Phase 2.',
    url: 'https://legionremixhub.com/guides/kaldorei-royal-vestments',
    datePublished: '2025-10-22',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Kaldorei Queen’s Royal Vestments', path: '/guides/kaldorei-royal-vestments' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">Kaldorei Queen’s Royal Vestments Guide</h1>
            <p className="text-sm text-gray-400">
              Published October 22, 2025 • Updated{' '}
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • 7 min read
            </p>
            <p className="text-gray-300">
              The <strong>Kaldorei Queen’s Royal Vestments</strong> comprise six individual appearance items rather than
              a single ensemble. You can unlock the full look during Legion Remix Phase 2 by completing any two
              achievements from the Suramar meta (“Campaign: Suramar”, “Tour Suramar”, “Looking for Group: Suramar”, or
              “The Nightfallen”). The checklist below helps you clear those requirements quickly while stacking Infinite
              Knowledge awards and Bronze along the way.
            </p>
          </header>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-300">
              {quickLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 hover:border-green-500 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <section id="requirements">
            <h2 className="text-3xl font-bold text-white mb-4">Unlock Requirements at a Glance</h2>
            <p className="text-gray-300 mb-4">
              Complete <strong>any two</strong> of the achievements below to receive all six wardrobe pieces in your
              Timerunner collections tab. Most players pair <em>The Nightfallen</em> with either <em>Tour Suramar</em> or
              the <em>Campaign: Suramar</em> storyline for the fastest results.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {requirementCards.map(({ title, description }) => (
                <div key={title} className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-300">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-purple-700/40 bg-purple-900/20 p-5 text-sm text-purple-100">
              <p>
                Tip: Every achievement above awards Infinite Knowledge during Phase 2. After capping at 36 ranks, those
                packets refund <strong>1,000 Bronze each</strong>, so plan your spending in the{' '}
                <Link href="/calculator" className="text-green-300 hover:text-green-200">
                  Bronze calculator
                </Link>{' '}
                before turning them in.
              </p>
            </div>
          </section>

          <section id="campaign" className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Campaign: Suramar Roadmap</h2>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="space-y-4">
                <p className="text-gray-300">
                  The campaign spans <strong>17 chapters</strong> and begins with “Lockdown” inside Shal’Aran once you
                  unlock the Insurrection questline. Set aside roughly three hours if you skip cutscenes, or stretch it
                  over several daily sessions alongside Withered Army Training runs.
                </p>
                <ul className="space-y-3 text-sm text-gray-300 list-disc pl-5">
                  {campaignMilestones.map(({ title, note }) => (
                    <li key={title}>
                      <strong>{title}:</strong> {note}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400">
                  Keep Heroic World Tier active for rare elites—each chapter boss drops Artifactum Sand and Fragmented
                  Mementos after the October 22 hotfix.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-800">
                <Image
                  src={legionImages.rewardAppearanceKaldorei}
                  alt="Kaldorei Queen’s Royal Vestments preview"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </section>

          <section id="tour-suramar" className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tour Suramar Speed Run</h2>
            <p className="text-gray-300 mb-4">
              Tour Suramar tracks <strong>exploration, treasures, and rare elites</strong>. Stack the tasks with your
              campaign chapters to avoid repeat flights.
            </p>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 space-y-3 text-sm text-gray-300">
              {tourSuramarTips.map((tip) => (
                <p key={tip}>• {tip}</p>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              You can complete the treasure sweep in 30–40 minutes with a dragonriding mount. Hitting rares during Turbo
              Boost weekends adds bonus Bronze and Fragmented Mementos after the latest hotfix.
            </p>
          </section>

          <section id="group-checklist" className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Looking for Group: Suramar Checklist</h2>
            <p className="text-gray-300 mb-4">
              Queue for the two dungeons and raid on Normal difficulty for a painless clear. Heroic or Mythic runs work
              too if you want extra loot or Infinite Knowledge.
            </p>
            <div className="grid gap-4">
              {groupChecklist.map(({ name, location }) => (
                <div key={name} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
                  <p className="text-sm text-gray-300">{location}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Already in Dalaran? Take the Chamber of the Guardian portal to Karazhan, then fly up to the side entrance
              for the dungeon. For The Nighthold, use the Sanctum of Order entrances in Suramar City and follow the path
              past The Arcway meeting stone.
            </p>
          </section>

          <section id="nightfallen" className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nightfallen Reputation Tips</h2>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="rounded-2xl border border-gray-800 overflow-hidden">
                <Image
                  src={legionImages.rewardVendorNightfallen ?? legionImages.rewardVendorHoros}
                  alt="First Arcanist Thalyssra selling Nightfallen rewards"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-sm text-gray-300 space-y-3">
                <p>
                  Exalted status is easier than ever with Remix bonuses. Prioritize Nightfallen emissaries, feed them
                  Champion’s Insignias from Infinite Research caches, and chain Withered Army Training on Turbo Boost
                  weekends.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Rotate the Shal’Aran repeatables “Feeding Shal’Aran” and “An Ancient Recipe” for quick rep ticks.</li>
                  <li>Join Suramar rare trains during Heroic World Tier to double-dip on Bronze and reputation.</li>
                  <li>Buy the Treasure Map once you hit Honored to overlap with Tour Suramar progress.</li>
                </ul>
                <p>
                  Once Exalted, stock up on Nightfallen cosmetics and toys in the{' '}
                  <Link href="/rewards#category-reputation" className="text-green-300 hover:text-green-200">
                    rewards catalog
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section id="bronze" className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bronze Planning & FAQ</h2>
            <div className="bg-gradient-to-r from-emerald-900/30 via-emerald-800/20 to-emerald-900/30 border border-emerald-600/40 rounded-xl p-6 text-sm text-emerald-100 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Bronze Snapshot</h3>
              <ul className="list-disc pl-5 space-y-2">
                {bronzeNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Do I lose credit if I finish more than two achievements?</h3>
                <p>
                  No—any additional criteria earn their usual rewards. Completing all four provides extra Infinite
                  Knowledge and Bronze, so keep going if you enjoy Suramar content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Are the appearance pieces account-wide?</h3>
                <p>
                  Yes, the six armor slots unlock for your entire Warband once the second achievement completes. Check
                  the Appearances tab on any Timerunner to transmog them immediately.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What if the campaign quest markers bug out?</h3>
                <p>
                  After the October 21 hotfix, off-phase quest items should appear correctly. If you are still stuck,
                  toggle Heroic World Tier off, relog, or abandon and reaccept the step inside Shal’Aran before
                  proceeding.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

