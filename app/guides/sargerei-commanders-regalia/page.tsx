import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { JsonLd, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '@/lib/schema';

const publishedDate = '2025-11-04';

const pageTitle = formatMetaTitle("Sargerei Commander's Regalia Ensembles – Legion Remix Unlock Guide");
const pageDescription = formatMetaDescription(
  'Learn how to unlock every Sargerei Commander’s Regalia ensemble in Legion Remix: To Fel and Back, Heroic Broken Isles World Quests IV, Mythic raid clears, and Timeworn Keystone Hero.',
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: buildCanonicalUrl('/guides/sargerei-commanders-regalia'),
  },
  openGraph: buildOpenGraphMetadata('/guides/sargerei-commanders-regalia', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Transmog Guide',
  },
};

const quickLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Felscorned (To Fel and Back)', href: '#felscorned' },
  { label: 'Voidscarred (Heroic WQs IV)', href: '#voidscarred' },
  { label: 'Lightbound (Mythic Raids)', href: '#lightbound' },
  { label: 'Hellforged (Timeworn Hero)', href: '#hellforged' },
  { label: 'FAQ', href: '#faq' },
];

const ensembleTable = [
  {
    id: 'felscorned',
    name: 'Ensemble: Sargerei Commander’s Felscorned Regalia',
    achievement: 'To Fel and Back',
    steps: [
      'Complete the Legion Remix campaign, including “Shape a New Legend.”',
      'Finish the Broken Shore Legionfall campaign to unlock Eternus at the Infinite Bazaar.',
      'Accept “Embrace Your Own Legend” and clear the three follow-up scenarios culminating in “Shape a New Legend.”',
    ],
    tips: [
      'Stockpile 20,000 Bronze to purchase the ensemble once the achievement flags.',
      'Felscorned version glows fel-green; perfect match for class mount recolors.',
    ],
  },
  {
    id: 'voidscarred',
    name: 'Ensemble: Sargerei Commander’s Voidscarred Regalia',
    achievement: 'Heroic Broken Isles World Quests IV',
    steps: [
      'Unlock Heroic World Tier by talking to Eternus after reaching item level 845 in Legion Remix.',
      'Complete four Heroic World Tier world quests in each Broken Isles zone.',
      'Finish the weekly Legionfall emissary for additional progress tokens.',
    ],
    tips: [
      'Equip survivability gems—the Heroic World Tier doubles enemy health.',
      'Pair the grind with Legion Assaults to tick Defending the Broken Isles achievements.',
    ],
  },
  {
    id: 'lightbound',
    name: 'Ensemble: Sargerei Commander’s Lightbound Regalia',
    achievement: 'Mythic Legion Remix Raids',
    steps: [
      'Clear Emerald Nightmare, Trial of Valor, Nighthold, and Tomb of Sargeras on Mythic difficulty within Legion Remix.',
      'Use the Infinite Echoes catch-up buffs when Phase 5 arrives if you prefer an over-leveled run.',
      'Leverage Violet Spellwing raid listings for coordinated pug groups.',
    ],
    tips: [
      'Mythic loot scales to item level 900+ in Remix—helps with future keystone pushes.',
      'Coordinate lockouts so you only kill the required bosses (e.g., mythic Gul’dan and Kil’jaeden) with friends.',
    ],
  },
  {
    id: 'hellforged',
    name: 'Ensemble: Sargerei Commander’s Hellforged Regalia',
    achievement: 'Timeworn Keystone Hero',
    steps: [
      'Reach Timeworn Keystone rank 20 within the Remix keystone ladder.',
      'Complete each dungeon on Tier 20 or higher within the weekly rotation.',
      'Submit your best score to the Infinite Echo leaderboard to trigger the achievement.',
    ],
    tips: [
      'Turbo Boost weekends cut keystone timers by 20%—great time to push for the final tiers.',
      'Always pick up the Gift of Eternus role buff at dungeon start; tanks get +10% healing received.',
    ],
  },
];

const faqItems = [
  {
    question: 'Are the ensembles account-wide?',
    answer: 'Yes. Once unlocked, every Timerunner on your account can transmog the set regardless of armor class.',
  },
  {
    question: 'Can I buy the ensembles without finishing the achievements?',
    answer: 'No. Each ensemble requires the associated achievement flag before Grandmaster Jakkus will sell it for Bronze.',
  },
  {
    question: 'Do Remix versions recolor live-server transmogs?',
    answer:
      'The ensembles unlock new fel-themed tints exclusive to Legion Remix. They do not retroactively grant the original Warlords of Draenor Sargerei set.',
  },
];

export default function SargereiCommandersRegaliaPage() {
  const articleSchema = createArticleSchema({
    headline: "Sargerei Commander's Regalia Ensembles – Legion Remix Unlock Guide",
    description: pageDescription,
    url: buildCanonicalUrl('/guides/sargerei-commanders-regalia'),
    imageUrl: legionImages.sargereiCommandersRegalia,
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Sargerei Commander’s Regalia', path: '/guides/sargerei-commanders-regalia' },
  ]);

  const faqSchema = createFAQSchema(
    faqItems.map((faq) => ({ question: faq.question, answer: faq.answer })),
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="space-y-6">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
            ← Back to guides hub
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Transmog & Bronze Planning
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white">Sargerei Commander’s Regalia Ensembles</h1>
            <p className="mt-3 text-gray-300">
              Unlock all four Legion Remix Sargerei ensembles—Felscorned, Voidscarred, Lightbound, and Hellforged—with targeted checklists that respect Phase 3’s timelines.
            </p>
            <p className="text-xs text-gray-500 mt-2">Updated {publishedDate}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-gray-700 bg-gray-900/60 px-4 py-2 uppercase tracking-wide text-gray-300 hover:border-emerald-500 hover:text-emerald-200 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section id="overview" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Unlock Overview</h2>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-gray-800">
            <Image
              src={legionImages.sargereiCommandersRegalia}
              alt="Sargerei Commander’s Regalia ensemble in Legion Remix"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-300">
            Each ensemble costs 20,000 Bronze after you complete its achievement. Plan for 80,000 Bronze total if you want the entire wardrobe.
          </p>
        </section>

        {ensembleTable.map((ensemble) => (
          <section key={ensemble.id} id={ensemble.id} className="mt-12 space-y-4">
            <h2 className="text-3xl font-semibold text-white">{ensemble.name}</h2>
            <p className="text-sm text-emerald-300 uppercase tracking-widest">{ensemble.achievement}</p>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div className="space-y-3 rounded-3xl border border-gray-800 bg-gray-900/60 p-6">
                <p className="text-base font-semibold text-white">Steps</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                  {ensemble.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="space-y-3 rounded-3xl border border-gray-800 bg-gray-900/40 p-6">
                <p className="text-base font-semibold text-white">Pro Tips</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {ensemble.tips.map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section id="faq" className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold text-white">FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <p className="text-base font-semibold text-emerald-300">{faq.question}</p>
                <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
