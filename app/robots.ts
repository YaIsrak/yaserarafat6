import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/nsfw/',
		},
		sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yaserisrak.vercel.app'}/sitemap.xml`,
	};
}
