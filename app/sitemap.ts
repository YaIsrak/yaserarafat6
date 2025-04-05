import { sanityFetch } from '@/sanity/lib/live';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import type { MetadataRoute } from 'next';

const baseUrl =
	process.env.NEXT_PUBLIC_SITE_URL || 'https://yaserisrak.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { data } = await sanityFetch({
		query: BLOGS_QUERY,
	});

	const blogsData = data.map((blog: any) => ({
		url: `${baseUrl}/blog/${blog.slug.current}`,
		lastModified: new Date(),
	}));

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
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
		},

		...blogsData,
	];
}
