export const dynamic = 'force-static';

const base =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://taiwan-happiness-association.vercel.app';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/programs',
    '/knowledge',
    '/harm-reduction',
    '/resources',
    '/contact',
    '/en',
    '/en/about',
    '/en/programs',
    '/en/knowledge',
    '/en/harm-reduction',
    '/en/resources',
    '/en/contact',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date('2026-10-05'),
    changeFrequency:
      route.includes('knowledge') || route.includes('harm-reduction')
        ? 'monthly'
        : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}