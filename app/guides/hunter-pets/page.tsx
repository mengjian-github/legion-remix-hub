import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { legionImages } from '@/data/images';
import { buildCanonicalUrl, buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createArticleSchema, createBreadcrumbSchema, JsonLd } from '@/lib/schema';

const publishedDate = '2025-10-31';

type HunterPetSpot = {
  id: string;
  name: string;
  zone: string;
  description: string;
  coordinates: { label: string; value: string }[];
  tips: string[];
  image: string;
  alt: string;
  gallery?: { src: string; alt: string }[];
};

const canonicalPath = '/guides/hunter-pets';
const pageTitle = formatMetaTitle('New Hunter Pet Locations – Legion Remix 2025');
const pageDescription = formatMetaDescription(
  'Tame remix-exclusive Clefthoof, Felhound, Devilsaur, Hyena, and Stone Hound pets with precise /way coordinates and travel tips for Legion Remix hunters.'
);

export const metadata: Metadata = {
  ...buildPageMetadata({ path: canonicalPath, title: pageTitle, description: pageDescription }),
  other: {
    'article:published_time': publishedDate,
    'article:modified_time': new Date().toISOString(),
    'article:author': 'Legion Remix Hub Team',
    'article:section': 'Class Guides',
  },
};

const quickLinks = [
  { label: 'Clefthoof', href: '#clefthoof' },
  { label: 'Core Hound', href: '#core-hound' },
  { label: 'Devilsaur', href: '#devilsaur' },
  { label: 'Hyena', href: '#hyena' },
  { label: 'Stone Hound', href: '#stone-hound' },
];

const petRoutes: HunterPetSpot[] = [
  {
    id: 'clefthoof',
    name: 'Clefthoof',
    zone: 'Stormheim',
    description:
      'Two timerunner-ready Clefthooves graze on Stormheim ridges. They are exotic pets, so you’ll need Beast Mastery to tame them.',
    coordinates: [
      { label: 'Storm’s Reach cliff', value: '/way Stormheim 58.0 30.0' },
      { label: 'Bilgefin Shore isle', value: '/way Stormheim 80.7 55.0' },
    ],
    tips: [
      'Use the Storm’s Reach flight point, then glide or Goblin Glider Kit across to the ridge.',
      'Bilgefin Shore requires flying; land on the rock shelf and clear nearby murlocs before taming.',
    ],
    image: legionImages.hunterPetClefthoofStormsReach,
    alt: 'Clefthoof standing on the cliffs of Stormheim',
    gallery: [
      { src: legionImages.hunterPetClefthoofBilgefin, alt: 'Clefthoof on Bilgefin Shore' },
    ],
  },
  {
    id: 'core-hound',
    name: 'Core Hound',
    zone: 'Azsuna',
    description:
      'A fel-infused hound patrols Illidari Perch above the Felblaze Ingress portal. Any hunter can tame it thanks to Legion Remix rules.',
    coordinates: [
      { label: 'Illidari Perch ledge', value: '/way Azsuna 33.0 47.0' },
    ],
    tips: [
      'Start at Felblaze Ingress, then scale the cliff via grappling hooks or a Goblin Glider from the adjacent rise.',
      'The hound respawns quickly; dismiss existing pets before starting the tame to avoid combat resets.',
    ],
    image: legionImages.hunterPetFelhound,
    alt: 'Felhound standing atop Illidari Perch',
  },
  {
    id: 'devilsaur',
    name: 'Devilsaur',
    zone: 'Suramar',
    description:
      'A young devilsaur prowls The Menagerie inside Suramar City, perfect for Beast Mastery timers chasing a thunder-lizard aesthetic.',
    coordinates: [
      { label: 'The Menagerie', value: '/way Suramar 49.0 52.0' },
    ],
    tips: [
      'Approach while disguised via the Masquerade buff; attacking guards will break your cover and slow the tame.',
      'Clear the neutral menagerie beasts first so they do not leash the devilsaur during the channel.',
    ],
    image: legionImages.hunterPetDevilsaur,
    alt: 'Devilsaur inside The Menagerie in Suramar City',
  },
  {
    id: 'hyena',
    name: 'Hyena',
    zone: 'Broken Isles',
    description:
      'Margoss’s Retreat, the fishing island off Dalaran, hosts a pack of hyenas that have adopted Timerunners as their new masters.',
    coordinates: [
      { label: 'Margoss’s Retreat', value: '/way Broken Isles 44.6 61.4' },
    ],
    tips: [
      'Take the teleport from Dalaran’s Violet Citadel or glider from the city wall directly onto the island.',
      'Hyenas are not exotic—Marksmanship and Survival hunters can tame them without spec swaps.',
    ],
    image: legionImages.hunterPetHyena,
    alt: 'Hyenas roaming Margoss’s Retreat',
  },
  {
    id: 'stone-hound',
    name: 'Stone Hound',
    zone: 'Azsuna',
    description:
      'Stone Guardians lurk under the Llothien highlands. Three hidden cave entrances lead to the same chamber, making this the trickiest tame.',
    coordinates: [
      { label: 'Llothien waterfall', value: '/way Azsuna 55.5 23.2' },
      { label: 'Ley-Ruins of Zarkhenar', value: '/way Azsuna 55.6 19.9' },
      { label: 'Farondale grove', value: '/way Azsuna 57.9 21.6' },
    ],
    tips: [
      'Look for tree roots masking the cave entrances—track Beast stealth via the Hunter’s pet tracking to spot them.',
      'Drop a flare before taming; the guardians blend into the stone and can ambush you mid-channel.',
    ],
    image: legionImages.hunterPetStoneGuardian,
    alt: 'Stone Guardians inside the Azsuna caves',
    gallery: [
      { src: legionImages.hunterPetStoneGuardianLlothien, alt: 'Llothien cave entrance' },
      { src: legionImages.hunterPetStoneGuardianLeyRuins, alt: 'Ley-Ruins cave entrance' },
      { src: legionImages.hunterPetStoneGuardianFarondale, alt: 'Farondale cave entrance' },
    ],
  },
];

export default function HunterPetsGuidePage() {
  const articleSchema = createArticleSchema({
    headline: 'New Hunter Pet Locations – Legion Remix 2025',
    description: pageDescription,
    url: buildCanonicalUrl('/guides/hunter-pets'),
    imageUrl: legionImages.hunterPetFelhound,
    datePublished: publishedDate,
    dateModified: new Date().toISOString(),
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Hunter Pet Locations', path: '/guides/hunter-pets' },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 text-gray-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-6">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200">
            ← Back to guides hub
          </Link>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Hunter Utility
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white">Legion Remix Hunter Pet Locations</h1>
            <p className="mt-3 text-gray-300">
              Track the remix-exclusive beasts Blizzard highlighted for Legion Remix. Every entry includes /way coordinates, taming notes, and screenshots pulled from the latest reference pack.
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

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Using This Checklist</h2>
          <p className="text-sm text-gray-300">
            The pets below spawn instantly in Legion Remix and do not require pre-quests. Hunter’s Mark reveals each beast if you struggle to spot it. Exotic families (Clefthoof, Stone Hound, Devilsaur) still require Beast Mastery to tame.
          </p>
        </section>

        <div className="space-y-10">
          {petRoutes.map((pet) => (
            <article
              key={pet.id}
              id={pet.id}
              className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 space-y-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-300">{pet.zone}</p>
                  <h3 className="text-3xl font-semibold text-white mt-1">{pet.name}</h3>
                  <p className="text-sm text-gray-300 mt-2">{pet.description}</p>
                </div>
                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-gray-200 md:w-[260px]">
                  <p className="text-xs uppercase tracking-wide text-emerald-200 mb-2">Coordinates</p>
                  <ul className="space-y-1">
                    {pet.coordinates.map((coord) => (
                      <li key={coord.value}>
                        <span className="text-gray-400">{coord.label}:</span> <code className="text-emerald-200">{coord.value}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
                  {pet.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
                <div className="relative h-48 overflow-hidden rounded-2xl border border-gray-800">
                  <Image
                    src={pet.image}
                    alt={pet.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {pet.gallery ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {pet.gallery.map((shot) => (
                    <div key={shot.src} className="relative h-36 overflow-hidden rounded-xl border border-gray-800">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
