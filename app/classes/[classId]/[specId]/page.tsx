import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { classes } from '@/data/classes';
import type { WowClass } from '@/data/classes';
import { specGuides, getSpecGuide } from '@/data/specs';
import type { SpecGuide } from '@/data/specs';
import { artifactPaths } from '@/data/artifact-paths';
import type { ArtifactPath } from '@/data/artifact-paths';
import { buildCanonicalUrl, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { classMountImages, legionImages } from '@/data/images';
import { createArticleSchema, createBreadcrumbSchema, createFAQSchema, JsonLd } from '@/lib/schema';
import { buildKeywordRichParagraphs } from '@/lib/seo-content';

const normalizeSpaces = (value: string) => value.replace(/\s+/g, ' ').trim();
const buildSpecNarrative = (
  specGuide: SpecGuide,
  classData: WowClass,
  artifactPath?: ArtifactPath,
  alternatePaths?: Array<{ path?: ArtifactPath; reason: string }>,
) => {
  const paragraphs: string[] = [];

  const primaryStat = specGuide.statPriority[0] ?? 'core stats';
  const artifactFocus = artifactPath?.name ?? 'artifact path';
  const focusKeyword = specGuide.seoFocusKeyword ?? `${specGuide.specName} ${classData.name}`;

  paragraphs.push(
    normalizeSpaces(
      `${focusKeyword} players open Legion Remix by focusing on ${primaryStat}. ${focusKeyword} gear upgrades should pair with the class campaign so cooldowns stay aligned with the event roadmap.`,
    ),
  );

  const levelingSummary = specGuide.levelingTips
    .map((tip, index) => `Leveling focus ${index + 1}: ${tip}`)
    .join(' ');
  if (levelingSummary) {
    paragraphs.push(
      normalizeSpaces(
        `Leveling priorities for ${focusKeyword} include ${levelingSummary}. ${focusKeyword} Timerunners should blend daily quests, keystone pushes, and open-world loops to keep Infinite Knowledge flowing to the artifact.`,
      ),
    );
  }

  if (artifactPath) {
    paragraphs.push(
      normalizeSpaces(
        `Recommended ${focusKeyword} artifact path: ${artifactPath.name}. Its signature ability, ${artifactPath.activeAbility}, focuses on ${artifactPath.focus}. ${focusKeyword} players gain consistency because ${artifactPath.description}`,
      ),
    );
  }

  if (alternatePaths?.length) {
    const alternates = alternatePaths
      .filter((alt) => alt.path)
      .map((alt) => `${alt.path?.name}: ${alt.reason}`)
      .join(' ');
    if (alternates) {
      paragraphs.push(
        normalizeSpaces(
          `Alternate ${focusKeyword} artifact routes worth testing — ${alternates}. Swap based on whether you queue for keystones, raids, or open-world Bronze farming to keep ${focusKeyword} uptime high.`,
        ),
      );
    }
  }

  if (specGuide.recommendedTraits.length) {
    paragraphs.push(
      normalizeSpaces(
        `Recommended ${focusKeyword} jewelry traits: ${specGuide.recommendedTraits.join(', ')}. Mix them for reliable burst and survivability during Heroic World Tier pulls so ${focusKeyword} damage windows stay lethal.`,
      ),
    );
  }

  if (specGuide.rotationOverview?.priority?.length) {
    const rotationSummary = specGuide.rotationOverview.priority.join(' ');
    paragraphs.push(
      normalizeSpaces(
        `Rotation snapshot for ${focusKeyword}: ${rotationSummary}. Practice the opener on heroic dummy targets so ${focusKeyword} cooldowns line up with Turbo Boost timers.`,
      ),
    );
  }

  if (specGuide.bronzePriority.length) {
    paragraphs.push(
      normalizeSpaces(
        `Bronze priorities for ${focusKeyword}: ${specGuide.bronzePriority.join(' ')}. Knock these out first so ${focusKeyword} damage, mitigation, and cosmetic unlocks stay on schedule.`,
      ),
    );
  }

  const buildSummaries = Object.entries(specGuide.builds)
    .filter(([, value]) => Boolean(value))
    .map(([mode, value]) => `${mode} focus: ${value}`);
  if (buildSummaries.length) {
    paragraphs.push(
      normalizeSpaces(
        `Build notes for ${focusKeyword} — ${buildSummaries.join(' ')}. Swap talents to match dungeon speed runs, open-world loops, or raid burn phases without dropping ${focusKeyword} shard flow.`,
      ),
    );
  }

  if (specGuide.statPriority.length) {
    paragraphs.push(
      normalizeSpaces(
        `Stat priority for ${focusKeyword}: ${specGuide.statPriority.join(', ')}. Spend Bronze and choose drops with this order in mind so ${focusKeyword} gear lines up with burst expectations.`,
      ),
    );
  }

  if (specGuide.seoFocusKeyword) {
    const keywordParagraphs = buildKeywordRichParagraphs(
      specGuide.seoFocusKeyword,
      specGuide.seoTopics?.length ? specGuide.seoTopics : [`${specGuide.specName} ${classData.name} planning`],
      specGuide.seoSupportingConcepts?.length
        ? specGuide.seoSupportingConcepts
        : [`${artifactFocus} value`, `${primaryStat} stacking`],
      { minWords: 640, targetDensity: 0.04, minParagraphKeywordOccurrences: 5 },
    );
    paragraphs.push(...keywordParagraphs);
  }

  const weeklyIntro = specGuide.seoFocusKeyword
    ? `${specGuide.seoFocusKeyword} weekly checklist`
    : 'Weekly checklist';
  paragraphs.push(
    normalizeSpaces(
      `${weeklyIntro}: review Infinite Knowledge quests, refresh Bronze vendor priorities, and plan raid lockouts so the spec stays ready as phases rotate.`,
    ),
  );

  return paragraphs;
};
// Generate static params for all spec pages
export async function generateStaticParams() {
  const params: Array<{ classId: string; specId: string }> = [];

  specGuides.forEach((guide) => {
    params.push({
      classId: guide.classId,
      specId: guide.specName.toLowerCase().replace(/\s+/g, '-'),
    });
  });

  return params;
}

export async function generateMetadata(
  { params }: { params: Promise<{ classId: string; specId: string }> }
): Promise<Metadata> {
  const { classId, specId } = await params;
  const specName = specId.replace(/-/g, ' ');
  const specGuide = getSpecGuide(classId, specName);
  const classData = classes.find((c) => c.id === classId);

  if (!specGuide || !classData) {
    return {
      title: 'Spec Not Found',
      alternates: {
        canonical: buildCanonicalUrl(`/classes/${classId}/${specId}`),
      },
    };
  }

  const canonicalPath = `/classes/${classId}/${specId}`;
  const title = formatMetaTitle(
    specGuide.serpTitle ?? `${specGuide.specName} ${classData.name} Legion Remix Guide Tips`
  );
  const descriptionSource = specGuide.serpDescription ?? specGuide.metaDescription;
  const description = formatMetaDescription(descriptionSource);
  const keywords = Array.from(new Set([
    `${specGuide.specName} ${classData.name}`,
    `${classData.name} ${specGuide.specName} legion remix`,
    `${specGuide.specName} ${classData.name} guide`,
    'legion remix guide',
    'artifact path',
    'best talents',
    'stat priority',
    'leveling guide',
    'wow legion remix 2025',
    ...(specGuide.seoSecondaryKeywords ?? []),
    ...(specGuide.seoFocusKeyword ? [specGuide.seoFocusKeyword] : []),
  ]));
  const ogImage = classMountImages[classId] ?? legionImages.felClassMounts;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: 'Legion Remix Hub',
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${specGuide.specName} ${classData.name} Legion Remix Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SpecPage({ params }: { params: Promise<{ classId: string; specId: string }> }) {
  const { classId, specId } = await params;
  const specName = specId.replace(/-/g, ' ');
  const specGuide = getSpecGuide(classId, specName);
  const classData = classes.find((c) => c.id === classId);

  if (!specGuide || !classData) {
    notFound();
  }

  const artifactPath = artifactPaths.find(p => p.id === specGuide.bestArtifactPath);
  const alternatePathsData = specGuide.alternateArtifactPaths.map(alt => ({
    ...alt,
    path: artifactPaths.find(p => p.id === alt.pathId)
  }));
  const focusKeyword = specGuide.seoFocusKeyword ?? `${specGuide.specName} ${classData.name}`;
  const narrativeParagraphs = buildSpecNarrative(specGuide, classData, artifactPath, alternatePathsData);
  const engagementActions = specGuide.engagementActions ?? [];
  const pageUrl = buildCanonicalUrl(`/classes/${classId}/${specId}`);
  const heroDescription = specGuide.serpDescription ?? specGuide.metaDescription;
  const articleSchema = createArticleSchema({
    headline: `${specGuide.specName} ${classData.name} Legion Remix Guide`,
    description: heroDescription,
    url: pageUrl,
    imageUrl: classMountImages[classId] ?? legionImages.felClassMounts,
    datePublished: '2025-10-07',
    dateModified: new Date().toISOString(),
  });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: classData.name, path: `/classes/${classId}` },
    { name: specGuide.specName, path: `/classes/${classId}/${specId}` },
  ]);
  const faqSchema = specGuide.faq?.length ? createFAQSchema(specGuide.faq) : null;

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-green-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/classes" className="hover:text-green-400">Classes</Link>
          <span className="mx-2">/</span>
          <Link href={`/classes/${classId}`} className="hover:text-green-400">{classData.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{specGuide.specName}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/classes/${classId}`}
            className="text-green-400 hover:text-green-300 mb-4 inline-block"
          >
            ← Back to {classData.name}
          </Link>

          <div className="rounded-lg overflow-hidden border-2 mb-6" style={{ borderColor: classData.iconColor }}>
            <div className="relative h-64">
              <img
                src={classMountImages[classId] ?? legionImages.felClassMounts}
                alt={`${specGuide.specName} ${classData.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: `${classData.iconColor}33`,
                      border: `1px solid ${classData.iconColor}66`,
                      color: classData.iconColor
                    }}
                  >
                    {classData.name}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    specGuide.role === 'Tank' ? 'bg-blue-600 text-white' :
                    specGuide.role === 'Healer' ? 'bg-green-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    {specGuide.role}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {specGuide.specName} {classData.name} Legion Remix Guide
                </h1>
                <p className="text-lg text-gray-200">{heroDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {engagementActions.length ? (
              <div className="bg-gradient-to-br from-red-900/40 via-red-800/40 to-emerald-900/40 border border-red-700/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {focusKeyword} priorities
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  Kick off your session with focused checkpoints so every {focusKeyword} plan translates into Bronze, loot, and smooth runs. Revisit these {focusKeyword} checkpoints whenever phases rotate.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {engagementActions.map((action, idx) => (
                    <div key={idx} className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                        <p className="text-sm text-gray-300">{action.description}</p>
                      </div>
                      <Link
                        href={action.href}
                        className="mt-4 inline-flex items-center justify-center rounded-md bg-green-500/20 border border-green-500/40 px-3 py-2 text-sm font-semibold text-green-200 hover:bg-green-500/30"
                      >
                        {action.actionLabel}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Best Artifact Path */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {specGuide.seoFocusKeyword ? `Best ${focusKeyword} Artifact Path` : 'Best Artifact Path'}: {artifactPath?.name}
              </h2>
              {specGuide.seoFocusKeyword && (
                <p className="text-sm text-gray-400 mb-4">
                  Anchor your {focusKeyword} burst windows around this artifact roadmap so every Infernal cycle stays lethal.
                </p>
              )}
              {artifactPath && (
                <div className="bg-gray-750 border border-gray-600 rounded-lg p-4 mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">{artifactPath.activeAbility}</h3>
                      <p className="text-sm text-gray-400">{artifactPath.focus}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{artifactPath.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Mechanics:</h4>
                      <ul className="space-y-1">
                        {artifactPath.mechanics.map((mechanic, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {mechanic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {artifactPath.bestFor.map((use, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Alternate Paths */}
              {alternatePathsData.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Alternate Artifact Paths</h3>
                  <div className="space-y-2">
                    {alternatePathsData.map((alt, idx) => (
                      alt.path && (
                        <div key={idx} className="bg-gray-750 border border-gray-600 rounded p-3">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-200">{alt.path.name}</span>
                            <span className="text-xs text-gray-400">Alternative</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{alt.reason}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stat Priority */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {specGuide.seoFocusKeyword ? `${focusKeyword} Stat Priority` : 'Stat Priority'}
              </h2>
              {specGuide.seoFocusKeyword && (
                <p className="text-sm text-gray-400 mb-3">
                  Follow this spread whenever you socket upgrades so {focusKeyword} shard flow keeps Chaos Bolt at the front of every pull.
                </p>
              )}
              <ol className="space-y-2">
                {specGuide.statPriority.map((stat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold mr-3">
                      {idx + 1}
                    </span>
                    <span className="text-gray-200">{stat}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Rotation */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{specGuide.rotationOverview.title}</h2>
              {specGuide.seoFocusKeyword && (
                <p className="text-sm text-gray-400 mb-3">
                  Drill this order until muscle memory locks in; smooth execution keeps {focusKeyword} Infernal resets and Havoc windows synced.
                </p>
              )}
              <ol className="space-y-3">
                {specGuide.rotationOverview.priority.map((ability, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex items-center justify-center min-w-8 h-8 rounded-full bg-gray-700 text-green-400 font-bold mr-3 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-gray-300 pt-1">{ability}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Leveling Tips */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Leveling Tips</h2>
              {specGuide.seoFocusKeyword && (
                <p className="text-sm text-gray-400 mb-3">
                  Apply these loops whenever you hop on an alt to keep {focusKeyword} characters flush with Bronze, gear tokens, and Infinite Knowledge.
                </p>
              )}
              <ul className="space-y-3">
                {specGuide.levelingTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 mr-2 mt-1">✓</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bronze Priority */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Bronze Spending Priority</h2>
              {specGuide.seoFocusKeyword && (
                <p className="text-sm text-gray-400 mb-3">
                  Spend with intent so every {focusKeyword} upgrade lands before the next phase rolls out.
                </p>
              )}
              <ul className="space-y-2">
                {specGuide.bronzePriority.map((priority, idx) => (
                  <li key={idx} className="text-gray-300">{priority}</li>
                ))}
              </ul>
            </div>

            {/* SEO Narrative */}
            <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {specGuide.specName} {classData.name} Legion Remix Deep Dive
              </h2>
              <div className="space-y-4 text-sm leading-7 text-gray-300">
                {narrativeParagraphs.map((paragraph, idx) => (
                  <p key={`seo-paragraph-${idx}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            {specGuide.faq?.length ? (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6" id="faq">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {specGuide.specName} Legion Remix FAQ
                </h2>
                <div className="space-y-4 text-gray-300">
                  {specGuide.faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.question}</h3>
                      <p className="text-sm leading-6">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Role:</span>
                    <span className="font-semibold text-white">{specGuide.role}</span>
                  </div>
                  {specGuide.seoFocusKeyword && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Keyword Focus:</span>
                      <span className="font-semibold text-white">{focusKeyword}</span>
                    </div>
                  )}
                  {specGuide.groupTier && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Group Tier:</span>
                      <span className={`font-bold ${
                        specGuide.groupTier === 'S' ? 'text-yellow-400' :
                        specGuide.groupTier === 'A' ? 'text-green-400' :
                        specGuide.groupTier === 'B' ? 'text-blue-400' :
                        'text-gray-400'
                      }`}>{specGuide.groupTier}-Tier</span>
                    </div>
                  )}
                  {specGuide.soloTier && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Solo Tier:</span>
                      <span className={`font-bold ${
                        specGuide.soloTier === 'S' ? 'text-yellow-400' :
                        specGuide.soloTier === 'A' ? 'text-green-400' :
                        specGuide.soloTier === 'B' ? 'text-blue-400' :
                        'text-gray-400'
                      }`}>{specGuide.soloTier}-Tier</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-300">Heroic World Tier:</span>
                    <span className={`font-semibold ${specGuide.heroicWorldTier ? 'text-green-400' : 'text-red-400'}`}>
                      {specGuide.heroicWorldTier ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommended Traits */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recommended Traits</h3>
                <div className="space-y-2">
                  {specGuide.recommendedTraits.map((trait, idx) => (
                    <div key={idx} className="bg-gray-750 border border-gray-600 rounded px-3 py-2">
                      <span className="text-sm text-gray-200">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Specs */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Other {classData.name} Specs</h3>
                <div className="space-y-2">
                  {classData.specs.map((spec) => {
                    const specSlug = spec.name.toLowerCase().replace(/\s+/g, '-');
                    const isCurrentSpec = spec.name === specGuide.specName;

                    return (
                      <Link
                        key={spec.name}
                        href={`/classes/${classId}/${specSlug}`}
                        className={`block px-3 py-2 rounded ${
                          isCurrentSpec
                            ? 'bg-green-600 text-white font-semibold'
                            : 'bg-gray-750 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {spec.name}
                        <span className="text-xs ml-2">({spec.role})</span>
                      </Link>
                    );
                  })}
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
                    href="/rewards"
                    className="block text-green-400 hover:text-green-300 text-sm"
                  >
                    → All Rewards
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
