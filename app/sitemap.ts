import SanityClient from '@/lib/client';
import { navLinks } from '@/lib/constantData';
import { MetadataRoute } from 'next';

const baseUrl = process.env.baseURL
	? `https://${process.env.baseURL}`
	: 'https://yaserisrak.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const blogs: Blog[] = await SanityClient.fetch(`*[_type == 'blog']`);
	const sketches: SketchBook[] = await SanityClient.fetch(
		`*[_type == 'sketchbook']`
	);

	const routemap = navLinks.map((item) => ({
		url: `${baseUrl}${item.path}`,
		lastModified: new Date().toISOString(),
	}));
	const blogmap = blogs.map((blog: Blog) => ({
		url: `${baseUrl}/blog/${blog.slug.current}`,
		lastModified: new Date().toISOString(),
	}));
	const sketchbookMap = sketches.map((sketch: SketchBook) => ({
		url: `${baseUrl}/portfolio/digitalart/${sketch.slug.current}`,
		lastModified: new Date().toISOString(),
	}));

	const extramap = [
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${baseUrl}/portfolio/digitalart`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${baseUrl}/portfolio/web-design`,
			lastModified: new Date().toISOString(),
		},
	];

	return [...routemap, ...blogmap, ...sketchbookMap, ...extramap];
}
