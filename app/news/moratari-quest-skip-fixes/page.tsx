import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const canonicalPath = '/news/moratari-quest-skip-fixes';
const rawTitle = 'Moratari Quest Skip Fixes in Legion Remix';
const rawDescription =
  'Moratari’s fast-forward skips now cover Ruins of Oronaar and additional Argus quests, Pristine Argunite is obtainable again, and several Argus/Suramar blockers were hotfixed on November 26.';

const pageTitle = formatMetaTitle(rawTitle);
const pageDescription = formatMetaDescription(`${rawDescription} Use these steps to catch up alts before the December 9 Phase 5 finale.`);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl(canonicalPath) },
  openGraph: buildOpenGraphMetadata(canonicalPath, pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': '2025-11-26',
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Hotfix Explainer',
  },
};

const skipFixes = [
  'Moratari now correctly skips “The Ruins of Oronaar” and other tedious Argus chain steps.',
  'Additional side quests are autocompleted when you choose the skip option, reducing dead travel for alts.',
  'Pristine Argunite once again drops in the Remix timeline—open your world quest and invasion caches.',
];

const questFixes = [
  'Standard characters above level 45 can enter “The Battle for Broken Shore” again.',
  'Insurrection achievement can be completed; it no longer blocks Nightborne unlocks in Remix.',
  'World quests “Gatekeeper’s Review: Tenacity/Cunning” no longer appear before their prerequisite challenge quests.',
  'Mythic boss Shatug now drops loot as expected.',
];

const catchupSteps = [
  'Visit Moratari in the Infinite Bazaar and select the fast-forward option; confirm your log only shows the main Argus chapters.',
  'Check your bags for Pristine Argunite; if missing, loop invasion points and world bosses for drops.',
  'Re-pick any stalled Suramar/Insurrection quests to refresh the achievement tracker.',
  'Stock Bronze, Infinite Knowledge, and Mementos before Phase 5 hits on December 9.',
];

const faqItems = [
  {
    question: 'I already did part of Argus—can I still use the skip?',
    answer: 'Yes. Moratari keeps completed steps and jumps you to the remaining chapters without resetting rewards or beacons.',
  },
  {
    question: 'Where does Pristine Argunite drop now?',
    answer: 'Argus world quest rewards, invasion point caches, and certain elites again—leave bag space before opening.',
  },
  {
    question: 'Why does this matter for Phase 5?',
    answer: 'Phase 5 is all about catch-up and new rewards. These fixes let fresh characters finish Argus setup in 1–2 hours instead of stalling on old bugs.',
  },
];

const faqSchema = createFAQSchema(faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })));

const articleSchema = createArticleSchema({
  headline: rawTitle,
  description: rawDescription,
  url: buildCanonicalUrl(canonicalPath),
  imageUrl: legionImages.phase4Overview,
  datePublished: '2025-11-26',
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'Moratari Skip Fix', path: canonicalPath },
]);

export default function MoratariQuestSkipPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/80 to-black" />
        <div className="absolute inset-0">
          <Image
            src={legionImages.phase4Overview}
            alt="Argus skyline with fel-cracked terrain"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/news" className="text-emerald-300 hover:text-emerald-200 text-sm">
            ← Back to News
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Quest Skips</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{rawTitle}</h1>
            <p className="text-lg text-gray-200">{rawDescription}</p>
            <p className="text-sm text-gray-400">Published November 26, 2025 • Legion Remix Hub Team</p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-6 rounded-3xl border border-emerald-500/20 bg-gray-900/70 p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Moratari Skip Fixes</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {skipFixes.map((fix) => (
                <li key={fix} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{fix}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-4">
            <Image
              src={legionImages.infiniteBazaarIsland}
              alt="Infinite Bazaar island hub"
              width={960}
              height={540}
              className="rounded-xl border border-gray-800 object-cover"
            />
            <p className="mt-3 text-xs text-gray-400">Find Moratari in the Infinite Bazaar to one-click past the longest Argus prequests.</p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-gray-800 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Quests Fixed Alongside</h2>
            <ul className="space-y-3 text-sm text-gray-200">
              {questFixes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-emerald-500/30 bg-gray-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">Catch-up Steps</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-200">
              {catchupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
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
