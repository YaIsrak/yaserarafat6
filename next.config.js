/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: false,
	swcMinify: true,
	experimental: {
		serverActions: true,
		isrMemoryCacheSize: 0,
	},
	images: {
		domains: [
			'media2.giphy.com',
			'media1.giphy.com',
			'media.giphy.com',
			'cdn.sanity.io',
			'scontent.cdninstagram.com',
			'api.slingacademy.com',
		],
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
