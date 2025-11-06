import type { Metadata } from 'next';
import { buildCanonicalUrl, buildOpenGraphMetadata, buildTwitterMetadata, formatMetaDescription, formatMetaTitle } from '@/lib/seo';

const layoutTitle = formatMetaTitle('Legion Remix Rewards & Bronze Tracker 2025');
const layoutDescription = formatMetaDescription(
  'Track Legion Remix rewards, Bronze costs, and unlocks with our 2025 tracker so Timerunners plan mounts, transmogs, pets, and ensembles before farming sessions.'
);

export const metadata: Metadata = {
  title: layoutTitle,
  description: layoutDescription,
  alternates: {
    canonical: buildCanonicalUrl('/rewards'),
  },
  openGraph: buildOpenGraphMetadata('/rewards', layoutTitle, layoutDescription),
  twitter: buildTwitterMetadata(layoutTitle, layoutDescription),
};

export default function RewardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
