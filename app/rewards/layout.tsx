import type { Metadata } from 'next';
import { buildCanonicalUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Legion Remix Rewards & Bronze Tracker 2025',
  description: 'Track Legion Remix rewards, Bronze costs, and unlocks with our 2025 tracker so Timerunners plan mounts, transmogs, pets, and ensembles before farming sessions.',
  alternates: {
    canonical: buildCanonicalUrl('/rewards'),
  },
};

export default function RewardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
