/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yisrak.work',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	exclude: ['/nsfw', '/404'],
	generateIndexSitemap: true,
	// 👇 tell it to scan your built app directory
	outDir: 'public',
	transform: async (config, path) => {
		return {
			loc: path, // the URL
			changefreq: 'daily',
			priority: path === '/' ? 1.0 : 0.8,
			lastmod: new Date().toISOString(),
		};
	},
};
