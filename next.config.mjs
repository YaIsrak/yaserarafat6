/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdninstagram.com',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
			},
		],
	},
};

export default nextConfig;
