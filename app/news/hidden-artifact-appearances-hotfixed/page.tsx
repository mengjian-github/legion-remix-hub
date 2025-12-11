import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/hidden-artifact-appearances-hotfixed';
const rawTitle = 'Hidden Artifact Appearances Hotfixed in Legion Remix';
const rawDescription =
  'Order Hall advancements, Horos vendor items, and class-specific triggers for hidden artifact appearances are now fixed in Legion Remix after the November 15 hotfix sweep.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(
  `${rawDescription} Follow this checklist to finish hidden skins before the Phase 5 finale.`
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-11-15',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Hotfix Explainer',
  },
};

const orderHallAdvancements = [
  { className: 'Demon Hunter', detail: 'Twisting Nether advancement available again for the Warglaive appearance trigger.' },
  { className: 'Druid', detail: 'Evergreen advancement is back, enabling seedling growth for Scythe of Elune variants.' },
  { className: 'Mage', detail: 'Teleportation Nexus unlocked—required for Aluneth whispers that start the hidden quest line.' },
  { className: 'Monk', detail: 'Brewhouse advancement restored so the hidden staff appearances can spawn at your keg.' },
];

const vendorItems = [
  { name: 'Shard of Darkness', use: 'Retribution Paladin artifact — speak to Lord Maxwell Tyrosus to start “Walking in Shadows”.' },
  { name: 'Tome of Otherworldly Venoms', use: 'Subtlety Rogue artifact — unlocks the poison-fueled hidden daggers.' },
  { name: 'Designs of the Grand Architect', use: 'Beast Mastery Hunter artifact — blueprint for the Titanstrike variant.' },
];

const extraFixes = [
  'Horos now sells the above items in the Infinite Bazaar; bring Bronze and pick them up immediately.',
  'Annals of Light and Shadow volumes spawn again near Pageturner Metros for Discipline Priests.',
  'Unholy Death Knights can find the timewarped trap door to Putricide’s Secret Lab and summon the special Army of the Dead member.',
  'Warlocks can cast Ritual of Doom at the Dreadscar Rift platform; Arcane Mages hear Aluneth’s whispers again.',
  'Broken Shore world boss quests now reward Cache of Infinite Power and grant Fallen King’s Corrupted Blades correctly.',
  'Achievements “Law and Order: Shaman/Monk” and “Bringing Order to the Isles” are completable after the fix.',
];

const checklist = [
  'Relog, then visit your Class Hall to purchase/activate the missing advancement.',
  'Buy Horos vendor items in Dalaran’s Infinite Bazaar before queueing dungeons—stock may be camped during prime time.',
  'Finish your class-specific ritual (e.g., Ritual of Doom, trap door, Aluneth whispers) and screenshot the completion for tracking.',
  'Run a Broken Shore world boss and open the cache to confirm the weapon appearance unlock.',
];

const faqItems = [
  {
    question: 'I was stuck on the hidden appearance progress bar—do I need to redo it?',
    answer: 'No. After the fix, relog and trigger the related event once (loot the item or enter the scene) to update progress.',
  },
  {
    question: 'Will Horos remove these items?',
    answer: 'No, but they can sell out during peak hours. Visit the Infinite Bazaar first each session to secure them.',
  },
  {
    question: 'Is “Law and Order” now completable?',
    answer: 'Yes. The Shaman/Monk steps are fixed, so you can finish Bringing Order to the Isles without rerolling.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.artifactWeapon,
  datePublished: '2025-11-15',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Hidden Artifact Hotfix', path: canonicalPath },
]);

export default function HiddenArtifactPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.artifactWeapon}
            alt="Hidden artifact weapons surrounded by fel energy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Hidden Appearances</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published November 15, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Order Hall Advancements Restored</h2>
            <p className="text-sm text-gray-300">Return to your Class Hall, buy/activate the key advancement, then trigger the hidden appearance.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {orderHallAdvancements.map((entry) => (
                <div key={entry.className} className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4 text-sm text-gray-200">
                  <p className="font-semibold text-white">{entry.className}</p>
                  <p className="mt-2 text-gray-300 leading-relaxed">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
            <Image
              src={legionImages.vendorHoros}
              alt="Horos vendor inside the Infinite Bazaar"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="mt-3 text-xs text-gray-400">Horos has restocked the three key tomes—bring enough Bronze before dungeon queues.</p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Unlock Items Sold by Horos</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {vendorItems.map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>
                    <strong className="text-white">{item.name}</strong> — {item.use}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400">Buying all three tomes in one run skips the longest farm sections entirely.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Other Fixes</h2>
            <ul className="space-y-2 text-sm text-gray-200">
              {extraFixes.map((fix) => (
                <li key={fix} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{fix}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-emerald-500/30 bg-gray-900/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Rapid Checklist</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-gray-200">
            {checklist.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">FAQ</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-sm font-semibold text-white">{faq.question}</p>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
