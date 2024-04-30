import client from '@/lib/client';
import { navlinks } from '@/lib/constant';
import { baseUrl } from '@/lib/utils';

import { BlogProps, SketchBookProps } from '@/type.typing';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const blogs: BlogProps[] = await client.fetch(`*[_type == 'blog']`);
	const sketches: SketchBookProps[] = await client.fetch(
		`*[_type == 'sketchbook']`
	);

	const routemap = navlinks.map((item) => ({
		url: `${baseUrl}${item.href}`,
		lastModified: new Date().toISOString(),
	}));
	const blogmap = blogs.map((blog: BlogProps) => ({
		url: `${baseUrl}/blog/${blog.slug.current}`,
		lastModified: new Date().toISOString(),
	}));
	const sketchbookMap = sketches.map((sketch: SketchBookProps) => ({
		url: `${baseUrl}/digital-art/sketchbook/${sketch.slug.current}`,
		lastModified: new Date().toISOString(),
	}));

	const extramap = [
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${baseUrl}/digital-art`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${baseUrl}/web-design`,
			lastModified: new Date().toISOString(),
		},
	];

	return [...routemap, ...extramap, ...blogmap, ...sketchbookMap];
}
