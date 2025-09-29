
import { getInsights } from '@/lib/insights';
import { Header } from './header';

// Revalidate every hour
export const revalidate = 3600;

export async function SiteHeader() {
  const insights = await getInsights();
  return <Header insights={insights} />;
}
