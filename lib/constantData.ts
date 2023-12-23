// For Framer Motion
export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 0.1,
		},
	},
};
export const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

// For Navigation
export const navLinks = [
	{ name: 'Home 🏘️', path: '/' },
	{ name: 'About 😄', path: '/about' },
	{ name: 'Work 🎨', path: '/portfolio' },
];

// For Footer
export const songLists = [
	{
		name: 'E hawa',
		link:
			'https://open.spotify.com/track/5VIyjOoXddMARgRTtKVqXc?si=e776c9afbbc24e59',
	},
	{
		name: 'Loki green theme',
		link:
			'https://open.spotify.com/track/5T7DUEeAj0hkMLTzIlDCRz?si=045eedd5c76d4c05',
	},
	{
		name: 'Marry go round of Life',
		link:
			'https://open.spotify.com/track/3cIKojC2JBVIno9b35MJWn?si=9f4e0db3811e4ed1',
	},
	{
		name: 'Katware Doki',
		link:
			'https://open.spotify.com/track/4WedBZTeFawYCBCgfj36iK?si=68aa41933c7f4183',
	},
	{
		name: 'Utshorgo',
		link:
			'https://open.spotify.com/track/7tcHBMra1AZ3QWIHX3hX0r?si=7756f09bc62e4dff',
	},
	{
		name: 'Blinding Light',
		link:
			'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=44ada2d436d34fac',
	},
];

// About
export const SocialLinks = [
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/yaser.arafat.israk',
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/y_israk',
	},
];

export const experiences = [
	{
		name: 'Opputunity for Kids',
		post: 'Assosiate of Graphic Designer',
		location: 'Chittagong - Bangladesh',
		time: '2020 - now',
		link: 'https://www.ofkbd.com',
	},
	{
		name: 'Originative 360',
		post: 'Assosiate of Graphic Designer',
		location: 'Chittagong - Bangladesh',
		time: '2020 - 2022',
		link: 'http://originative360.com',
	},
];
