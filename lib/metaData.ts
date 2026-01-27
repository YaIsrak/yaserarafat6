import { Metadata } from 'next';

const metaData: Metadata = {
	title: {
		default: 'MD Yaser Arafat Israk | Web Developer & Illustrator',
		template: `%s | Israk`,
	},
	description:
		'A Bangladesh-based web developer specializing in modern, high-performance websites. I focus on building sleek, interactive, and user-friendly web experiences using Next.js, React, and Tailwind CSS. Passionate about clean code, seamless UX, and innovative web solutions.',
	robots: {
		follow: true,
		index: true,
	},
	keywords: [
		'Israk',
		'MD Yaser Arafat Israk',
		'Web Developer Bangladesh',
		'Next.js Developer',
		'React Developer',
		'Frontend Developer',
		'Tailwind CSS',
		'Portfolio Website',
	],
	authors: [
		{
			name: 'MD Yaser Arafat Israk',
			url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
		},
	],
	openGraph: {
		title: 'MD Yaser Arafat Israk | Web Developer & Illustrator',
		description:
			'Explore the portfolio of MD Yaser Arafat Israk — a creative developer crafting modern web experiences with Next.js, React, and Tailwind CSS.',
		url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
		siteName: 'Israk',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_SITE_URL}/israkpp.jpeg`,
				width: 1200,
				height: 630,
				alt: 'Preview image of MD Yaser Arafat Israk portfolio website',
			},
		],
	},
	verification: {
		google: 'Z0ydVQraZub253Z0jV38rIHnzAfPndzwJ5VfHn_BnrQ',
	},
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
	},
};

export default metaData;
