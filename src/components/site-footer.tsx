
import { headers } from 'next/headers';
import { Footer } from './footer';

export async function SiteFooter() {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAdminPage = pathname.startsWith('/admin');

  return <Footer isAdminPage={isAdminPage} />;
}
