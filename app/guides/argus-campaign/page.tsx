import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { legionImages } from '@/data/images';
import { buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const canonicalPath = '/guides/argus-campaign';
const pageTitle = formatMetaTitle('Argus Campaign, Invasion Points & Antorus Access Guide');
const pageDescription = formatMetaDescription(
  'Step-by-step Argus campaign walkthrough for Legion Remix 2025 with beacon routing, Invasion Points, weekly quests, and fast paths to Antorus and the Seat of the Triumvirate.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
};

const quickLinks = [
  { label: 'Start the Argus campaign', href: '#requirements' },
  { label: 'Chapter 1: The Assault Begins', href: '#assault-begins' },
  { label: 'Chapter 2: Dark Awakenings', href: '#dark-awakenings' },
  { label: 'Chapter 3: War of Light and Shadow', href: '#war-of-light-and-shadow' },
  { label: 'Weekly quests & reputation', href: '#weekly' },
  { label: 'Invasion Points', href: '#invasion-points' },
  { label: 'Greater Invasion Points', href: '#greater-invasion' },
  { label: 'Reach Antorus quickly', href: '#antorus-access' },
  { label: 'Seat of the Triumvirate access', href: '#seat-access' },
];

const invasionWorlds = [
  { name: 'Aurinor', mechanic: 'Avoid Temporal Precognition clones; destroy Temporal Anomalies for the 25% Synchronicity damage buff.' },
  { name: 'Bonich', mechanic: 'Dodge Swarming Insects, stand in Invigorating Pollen circles for +75% Haste, and sidestep Sacred Vines.' },
  { name: "Cen'gar", mechanic: 'Collapse Smoldering Rifts and use Searing Pain circles for the Searing Power damage buff.' },
  { name: 'Naigtal', mechanic: 'Steer clear of Spore Pools, ignore Fel Enraged Shamblers if you prefer, and click Energized Vines for a sprint.' },
  { name: 'Sangua', mechanic: 'Burn Blood Drainers quickly and keep moving out of Obliteration beams between waves.' },
  { name: 'Val', mechanic: "Hug braziers for Brazier's Warmth to counter Flash Freeze; free demon hunters from Ice Prisons while dodging Blizzards." },
];

export default function ArgusCampaignGuide() {
  const articleSchema = createArticleSchema({
    headline: 'Argus Campaign & Invasion Points Guide',
    description:
      'Complete the Argus campaign, Invasion Points, and raid/dungeon access in Legion Remix 2025 with beacon routing and weekly reputation tips.',
    url: `https://legionremixhub.com${canonicalPath}`,
    datePublished: '2025-12-10',
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Argus Campaign', path: canonicalPath },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="text-green-400 hover:text-green-300 mb-4 inline-block">
          Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">Argus Campaign, Invasion Points, and Antorus Access</h1>
          <p className="text-gray-300">
            Phase 4 (November 18, 2025) unlocks Argus Eternal for Legion Remix. Use this playbook to blast through the three
            campaign chapters, farm Invasion Points, and reach Antorus or the Seat of the Triumvirate without wandering the
            wastes on foot.
          </p>

          <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-5 mb-8 text-sm text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg px-4 py-3 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="my-6 rounded-lg overflow-hidden border border-green-700/30">
            <Image
              src={legionImages.argusNavigationMap}
              alt="Argus navigation map with Lightforged beacons"
              width={1200}
              height={830}
              className="w-full h-auto"
              priority
            />
          </div>

          <h2 id="requirements" className="text-2xl font-bold text-white mt-10 mb-4">Requirements & Onboarding</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Level 80 and completion of the Assault on Broken Shore quest (Phase 3) are required to start.</li>
            <li>Pick up <strong>The Hand of Fate</strong> from Archmage Khadgar in Dalaran, then sail from Stormwind or Orgrimmar to board the Vindicaar.</li>
            <li>Legion Remix treats you like an alt: every Lightforged Beacon and Argus World Quest is auto-unlocked as soon as you accept its quest.</li>
            <li>Use the Navigation Console on the Vindicaar bridge to move the ship between Krokuun, Mac'Aree, and Antoran Wastes.</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusLightforgedBeacon} alt="Lightforged beacon at Krasus Landing" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusVindicaarConsole} alt="Vindicaar navigation console" className="w-full h-auto" />
            </div>
          </div>

          <h3 id="assault-begins" className="text-xl font-semibold text-green-400 mt-10 mb-3">Chapter 1: The Assault Begins</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Complete <strong>The Hand of Fate</strong> through <strong>Rendezvous</strong> to establish the Krokul Hovel beacon and avoid phasing issues.</li>
            <li>Follow Turalyon to secure beacons at <strong>Light's Purchase</strong> and <strong>The Veiled Den</strong>; both are instantly usable in Remix.</li>
            <li>Board the Vindicaar whenever a quest offers a <strong>Signal Crystal</strong> - it auto-completes but still unlocks the matching beacon.</li>
            <li>This chapter wraps once you return to the Vindicaar after placing the Antoran Wastes beacon.</li>
          </ul>

          <h3 id="dark-awakenings" className="text-xl font-semibold text-green-400 mt-8 mb-3">Chapter 2: Dark Awakenings</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Optional: collect 50 Pristine Argunite from Invasion Points, rares, or chests for <strong>Fuel of a Doomed World</strong>.</li>
            <li>Beam to Krokul Hovel and place the <strong>Lightforged Beacon: Destiny Point</strong>, then grind toward the Shattered Fields beacon.</li>
            <li>Use the <strong>Lightforged Warframe</strong> from the Vindicaar Matrix Core to obliterate 60 demons and seal 3 Nath'raxxan Rifts.</li>
            <li>Finish by activating <strong>Triumvirate's End</strong> to push the Vindicaar toward Mac'Aree.</li>
          </ul>

          <h3 id="war-of-light-and-shadow" className="text-xl font-semibold text-green-400 mt-8 mb-3">Chapter 3: War of Light and Shadow</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Work through the Mac'Aree storyline to unlock <strong>Conservatory of the Arcane</strong> and <strong>Prophet's Reflection</strong> beacons.</li>
            <li>Recover the <strong>Sigil of Awakening</strong> aboard the Vindicaar to open Eredath world quests.</li>
            <li>Confront Talgath and Nhal'athoth, then place the <strong>Shadowguard Incursion</strong> beacon - your launch point for the Seat of the Triumvirate.</li>
            <li>When the chapter ends you earn <strong>You Are Now Prepared!</strong>, a rank of Infinite Knowledge, and full access to Argus world quests.</li>
          </ul>

          <h3 id="weekly" className="text-xl font-semibold text-green-400 mt-8 mb-3">Weekly quests & reputation ties</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Fuel of a Doomed World</strong> (Vindicaar): turn in 50 Pristine Argunite for Army of the Light & Argussian Reach reputation and a Lesser Bronze Cache.</li>
            <li><strong>Invasion Onslaught</strong>: complete once per week after <strong>Commander's Downfall</strong> to cash in 3 Invasion Point clears for extra rep and Fragmented Mementos.</li>
            <li>Emissaries for <strong>Army of the Light</strong> (Vindicator Jaelaana) and <strong>Argussian Reach</strong> (Toraan the Revered) sit on the Vindicaar - spend their Insignias immediately.</li>
            <li>Need the reward lists? Hop to <Link href="/reputation/army-of-the-light" className="text-green-300 underline">Army of the Light</Link> or <Link href="/reputation/argussian-reach" className="text-green-300 underline">Argussian Reach</Link> pages.</li>
          </ul>

          <h2 id="invasion-points" className="text-2xl font-bold text-white mt-12 mb-3">Invasion Points</h2>
          <p className="text-gray-300 mb-3">
            Three Invasion Points are always up - one per Argus zone - lasting six hours and respawning every two. Each scenario has two
            quick objective stages followed by a Legion mini-boss. Clear them for reputation, Pristine Argunite, and a fast break from
            world quest loops.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {invasionWorlds.map(world => (
              <div key={world.name} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4">
                <p className="text-lg font-semibold text-white">{world.name}</p>
                <p className="text-sm text-gray-300 mt-2">{world.mechanic}</p>
              </div>
            ))}
          </div>

          <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
            <img src={legionImages.argusInvasionMap} alt="Invasion Point map locations on Argus" className="w-full h-auto" />
          </div>

          <h3 id="greater-invasion" className="text-xl font-semibold text-green-400 mt-8 mb-3">Greater Invasion Points</h3>
          <p className="text-gray-300">
            One Greater Invasion Point opens daily during Legion Remix (instead of weekly). Expect a raid-sized boss - join a group finder
            listing before you click the portal. Boss rotation: Inquisitor Meto, Matron Folnuna, Mistress Alluradel, Occularus,
            Pit Lord Vilemus, and Sotanathor. Each kill feeds both Argus reputations and drops a shot at extra loot.
          </p>

          <h2 id="antorus-access" className="text-2xl font-bold text-white mt-12 mb-3">How to reach Antorus, the Burning Throne</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>In Dalaran, click the Lightforged Beacon at Krasus' Landing to board the Vindicaar.</li>
            <li>Use the Navigation Console to set destination to <strong>Light's Purchase</strong> in the Antoran Wastes.</li>
            <li>Hop down to Light's Purchase via the beacon, ride southwest past the stasis core, and follow the ridge toward the raid portal.</li>
            <li>The meeting stone sits just outside the portal; both Normal and Heroic queues originate here.</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusAntorusEntrance} alt="Antorus raid entrance in Antoran Wastes" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusNavigationMap} alt="Argus navigation overview" className="w-full h-auto" />
            </div>
          </div>

          <h2 id="seat-access" className="text-2xl font-bold text-white mt-12 mb-3">Seat of the Triumvirate entrance</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>From the Vindicaar, set destination to <strong>Shadowguard Incursion</strong> (Mac'Aree).</li>
            <li>Grab the Shadowguard Incursion beacon, then ride east toward the Conservatory; the dungeon portal faces the river.</li>
            <li>Meeting stone sits beside the portal - ideal if you are summoning Mythic+ groups for Seat keystones.</li>
            <li>Already in Dalaran? Use the Lightforged Beacon at Krasus' Landing &rarr; Vindicaar &rarr; Shadowguard Incursion to arrive in two clicks.</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusSeatEntrance} alt="Seat of the Triumvirate dungeon entrance" className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-700">
              <img src={legionImages.argusLightforgedBeacon} alt="Lightforged beacon to board the Vindicaar" className="w-full h-auto" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
