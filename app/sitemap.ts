import { navLinks } from '@/lib/constantData';
import { MetadataRoute } from 'next';

const baseUrl = process.env.baseURL
	? `https://${process.env.baseURL}`
	: 'https://yaserisrak.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	const routemap = navLinks.map((item) => ({
		url: `${baseUrl}${item.path}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routemap];
}
