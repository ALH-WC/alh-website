import type { Metadata } from 'next';
import RentingView from '../renting/RentingView';
import { shareMeta } from '../../lib/og';

// Comparison page: /renting in design blend 3. Temporary, noindex, and not in
// the sitemap; it disappears once a direction is chosen.
export const metadata: Metadata = {
  ...shareMeta('renting'),
  title: 'Renting 2 (design comparison) | Amsterdam Life Homes',
  robots: { index: false, follow: false },
};

export default function Renting2Page() {
  return <RentingView variant="blend3" />;
}
