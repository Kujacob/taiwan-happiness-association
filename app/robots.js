const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.org';
export default function robots(){ return {rules:{userAgent:'*',allow:'/'},sitemap:`${base}/sitemap.xml`}; }
