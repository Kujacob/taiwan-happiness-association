export const dynamic = 'force-static';

const base =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://taiwan-happiness-association-neon.vercel.app';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}