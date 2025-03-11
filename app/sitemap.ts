import type { MetadataRoute } from 'next';

const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://yaserisrak.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/artworks`,
			lastModified: new Date(),
		},
	];
}
