import type { Metadata } from 'next';
import RewardsClient from './RewardsClient';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';
import { createBreadcrumbSchema, createFAQSchema, JsonLd } from '@/lib/schema';

const pageTitle = formatMetaTitle('Legion Remix Reward Tracker - Bronze Costs & Cosmetics');
const pageDescription = formatMetaDescription(
  'Search Legion Remix rewards by mount, transmog, pet, toy, housing, Bronze cost, vendor source, and priority order, then jump into the calculator.'
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: buildCanonicalUrl('/rewards') },
  openGraph: buildOpenGraphMetadata('/rewards', pageTitle, pageDescription),
  twitter: buildTwitterMetadata(pageTitle, pageDescription),
};

const rewardFaq = [
  {
    question: 'What should I buy first in the Legion Remix rewards tracker?',
    answer: 'Prioritize class mounts and limited-time cosmetics first, then high-cost toys, pets, transmog ensembles, and housing decor after your weekly Bronze income is known.',
  },
  {
    question: 'How should I budget Bronze across mounts, transmog, pets, and housing?',
    answer: 'Use the tracker to isolate one category at a time, copy the subtotal into the Bronze calculator, and keep a reserve for hotfixed vendor additions before spending on optional decor.',
  },
  {
    question: 'Are Legion Remix reward prices final?',
    answer: 'No. Legion Remix Hub is a fan-made planning tool, so you should verify prices in game after Blizzard hotfixes before buying expensive rewards.',
  },
  {
    question: 'Why are some rewards listed without Bronze costs?',
    answer: 'Some rewards come from achievements, reputation, quests, or unlock chains instead of vendors. The tracker keeps them visible so completion plans do not miss non-vendor items.',
  },
];

const rewardsHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use the Legion Remix Reward Tracker',
  description: 'Plan Legion Remix rewards by searching, filtering, budgeting Bronze, and prioritizing purchases before vendor visits.',
  step: [
    { '@type': 'HowToStep', name: 'Search rewards', text: 'Search by reward name, source, achievement, faction, or category.' },
    { '@type': 'HowToStep', name: 'Filter by category', text: 'Choose mounts, transmogs, pets, toys, reputation, class sets, housing, or Bronze-only items.' },
    { '@type': 'HowToStep', name: 'Budget Bronze', text: 'Copy category totals into the Bronze calculator and compare farm hours before buying.' },
    { '@type': 'HowToStep', name: 'Verify in game', text: 'Check current vendor stock and hotfix notes before spending large Bronze amounts.' },
  ],
};

export default function RewardsPage() {
  const faqSchema = createFAQSchema(rewardFaq);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Rewards', path: '/rewards' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={rewardsHowToSchema} />
      <RewardsClient />
    </>
  );
}
