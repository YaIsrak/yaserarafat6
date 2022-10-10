/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ['media2.giphy.com', 'media1.giphy.com', 'cdn.sanity.io'],
	},
};

module.exports = nextConfig;
