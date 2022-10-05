/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ['media2.giphy.com'],
	},
};

module.exports = nextConfig;
