import type { Metadata } from 'next';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Rewards Tracker',
  description: 'Browse Legion Remix mounts, transmogs, pets, and track Bronze costs for every reward.',
  alternates: {
    canonical: buildCanonicalUrl('/rewards'),
  },
};

export default function RewardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
