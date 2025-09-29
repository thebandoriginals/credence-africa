
import { getInsights } from '@/lib/insights';
import { Header } from './header';

export async function SiteHeader() {
  const insights = await getInsights();
  return <Header insights={insights} />;
}
