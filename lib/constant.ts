export const navlinks: {
	name: string;
	href: string;
	dropDownContent?: {
		name: string;
		href: string;
	}[];
}[] = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Porfolio',
		href: '/',
		dropDownContent: [
			{
				name: 'Digital Art',
				href: '/digital-art',
			},
			{
				name: 'Web Design',
				href: '/web-design',
			},
		],
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

export const SocialLinks: { name: string; link: string }[] = [
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/yaser.arafat.israk',
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/y_israk',
	},
];

export const experiences: {
	name: string;
	post: string;
	location: string;
	time: string;
	link: string;
}[] = [
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
