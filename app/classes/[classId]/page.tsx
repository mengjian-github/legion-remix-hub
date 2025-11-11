import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { classes } from '@/data/classes';
import { legionImages, classMountImages } from '@/data/images';
import { buildCanonicalUrl, buildPageMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { getClassSpecs } from '@/data/specs';
import { getClassLore } from '@/data/classLore';

export async function generateStaticParams() {
  return classes.map((cls) => ({
    classId: cls.id,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ classId: string }> },
): Promise<Metadata> {
  const { classId } = await params;
  const classData = classes.find((c) => c.id === classId);

  if (!classData) {
    return {
      title: 'Class Not Found',
      alternates: {
        canonical: buildCanonicalUrl(`/classes/${classId}`),
      },
    };
  }

  const canonicalPath = `/classes/${classId}`;
  const title = formatMetaTitle(`${classData.name} Legion Remix Class Playbook 2025`);
  const description = formatMetaDescription(
    `Plan Legion Remix ${classData.name} gameplay with spec roles, artifact paths, Fel mount perks, gearing priorities, and quick links into builds made for 2025 Timerunners.`,
  );
  return {
    ...buildPageMetadata({ path: canonicalPath, title, description, type: 'website' }),
  };
}

export default async function ClassPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params;
  const classData = classes.find((c) => c.id === classId);
  const classSpecs = getClassSpecs(classId);
  const classLore = getClassLore(classId);

  if (!classData) {
    notFound();
  }

  const referenceHighlights = [
    {
      title: 'The Best Classes for Legion Remix',
      summary: 'Tier recommendations for solo, group, and heroic world tier play—the same strengths summarized in the spec cards below.'
    },
    {
      title: 'Timerunner Character Guide',
      summary: 'Covers class campaign progression and artifact unlocks; revisit it before swapping specs.'
    },
    {
      title: 'Infinite Artifact Weapon Traits & Leveling',
      summary: 'Explains how Fel, Storm, Arcane, Nature, and Holy Light paths impact your class when spending Artifactum Sand.'
    },
    {
      title: 'Trueshot Lodge Floor Guide',
      summary: 'Highlights the Dalaran portal, bartender buffs, and training range inside the hunter order hall so you move efficiently between missions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/classes"
            className="text-green-400 hover:text-green-300 mb-4 inline-block"
          >
            ← Back to Classes
          </Link>
          <div className="rounded-lg mb-6 overflow-hidden border-2" style={{ borderColor: classData.iconColor }}>
            <div className="relative h-56">
              <img
                src={classMountImages[classData.id] ?? legionImages.felClassMounts}
                alt={`${classData.name} Felscorched Mount`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3"
                  style={{
                    backgroundColor: `${classData.iconColor}33`,
                    border: `1px solid ${classData.iconColor}66`,
                    color: classData.iconColor
                  }}
                >
                  {classData.name}
                </span>
                {classLore?.tagline && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80 text-gray-200 border border-gray-700 mb-2">
                    {classLore.tagline}
                  </span>
                )}
                <h1 className="text-4xl font-bold text-white mb-2">{classData.name}</h1>
                <p className="text-lg text-gray-200 max-w-3xl">{classData.description}</p>
                {classLore?.summary && (
                  <p className="text-sm text-gray-300 max-w-3xl mt-3">
                    {classLore.summary}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Specs */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Specializations</h2>
              <div className="space-y-4">
                {classData.specs.map((spec) => {
                  const specSlug = spec.name.toLowerCase().replace(/\s+/g, '-');
                  const hasDetailedGuide = classSpecs.some(s => s.specName === spec.name);

                  return (
                    <div
                      key={spec.name}
                      className="bg-gray-750 border border-gray-600 rounded-lg p-4 hover:border-green-500 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-white">{spec.name}</h3>
                          {hasDetailedGuide && (
                            <span className="px-2 py-0.5 bg-green-600 text-white text-xs rounded font-semibold">
                              Detailed Guide Available
                            </span>
                          )}
                        </div>
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          spec.role === 'Tank' ? 'bg-blue-600 text-white' :
                          spec.role === 'Healer' ? 'bg-green-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {spec.role}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{spec.description}</p>
                      {hasDetailedGuide && (
                        <Link
                          href={`/classes/${classId}/${specSlug}`}
                          className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-semibold"
                        >
                          View {spec.name} Guide
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Class Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Primary Stat</div>
                  <div className="text-lg font-semibold text-white">{classData.primaryStat}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Armor Type</div>
                  <div className="text-lg font-semibold text-white">{classData.armorType}</div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Legion Remix Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Level to 80 to unlock your exclusive Felscorched mount
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Tanks and Healers have instant dungeon queues for efficient Bronze farming
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Use Heroic World Tier for 500% bonus XP when soloing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">
                    Complete Infinite Research daily quests for Warband XP bonuses
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Spec Highlights</h2>
              <div className="space-y-4 text-sm leading-7 text-gray-300">
                {classSpecs.map((spec) => (
                  <div key={spec.specName}>
                    <h3 className="text-lg font-semibold text-white mb-1">{spec.specName}</h3>
                    <p>{spec.metaDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            {classLore?.sections.map((section, index) => {
              const hasImage = Boolean(section.image);
              const imageFirst = hasImage && index % 2 === 1;

              const figure = hasImage ? (
                <figure
                  className={`md:col-span-2 ${imageFirst ? 'order-2 md:order-1' : 'order-2'}`}
                >
                  <div className="overflow-hidden rounded-lg border border-gray-700">
                    <img
                      src={section.image?.src}
                      alt={section.image?.alt ?? `${classData.name} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {section.image?.caption && (
                    <figcaption className="text-xs text-gray-400 mt-2">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              ) : null;

              return (
                <section
                  key={`${section.title}-${index}`}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6"
                >
                  <div
                    className={`grid gap-6 ${hasImage ? 'md:grid-cols-5 items-center' : ''}`}
                  >
                    {hasImage && imageFirst && figure}
                    <div
                      className={`${hasImage ? 'md:col-span-3' : ''} ${
                        hasImage && imageFirst ? 'order-1 md:order-2' : 'order-1'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                      <p className="text-sm text-gray-300">{section.description}</p>
                      {section.bullets && (
                        <ul className="mt-4 space-y-2 text-sm text-gray-300">
                          {section.bullets.map((bullet, bulletIdx) => (
                            <li key={`${section.title}-bullet-${bulletIdx}`} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {hasImage && !imageFirst && figure}
                  </div>
                </section>
              );
            })}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Fel Mount */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Felscorched Mount</h3>
                <div className="relative w-full h-36 rounded-lg overflow-hidden mb-4 border border-green-700/30">
                  <img
                    src={classMountImages[classData.id] ?? legionImages.felClassMounts}
                    alt={`${classData.name} Felscorched Mount preview`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  {classData.felMount.name}
                </h4>
                <div className="space-y-2 mb-4 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>First Unlock</span>
                    <span className="text-yellow-500 font-bold">
                      {classData.felMount.cost === 0 ? 'FREE at level 80' : `${classData.felMount.cost.toLocaleString()} Bronze`}
                    </span>
                  </div>
                  {classData.felMount.altCost && (
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Alternate Characters</span>
                      <span>{classData.felMount.altCost.toLocaleString()} Bronze via Grandmaster Jakkus</span>
                    </div>
                  )}
                </div>
              </div>


              {/* Quick Links */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Related Guides</h3>
                <div className="space-y-2">
                  <Link
                    href="/guides/leveling"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Leveling Guide
                  </Link>
                  <Link
                    href="/guides/bronze-farming"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Bronze Farming
                  </Link>
                  <Link
                    href="/calculator"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Bronze Calculator
                  </Link>
                  <Link
                    href="/guides/hunter-pets"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → Hunter Pet Finder
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Reference Highlights</h2>
              <p className="text-sm text-gray-300 mb-4">
                Build choices across every spec lean on these core Legion Remix articles—keep them nearby as you experiment.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {referenceHighlights.map((item) => (
                  <li key={item.title} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p>{item.summary}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                Review them after each hotfix so your artifact paths, Bronze priorities, and talent builds stay current for Legion Remix 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
