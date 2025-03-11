import { IconType } from 'react-icons';
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaSquareFacebook,
} from 'react-icons/fa6';

export const navlinks: {
	name: string;
	href: string;
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
		name: 'Artworks',
		href: '/artworks',
	},
	{
		name: 'Contact',
		href: 'https://bento.me/israk',
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
	image?: string;
	name: string;
	post: string;
	location: string;
	time: string;
	link: string;
}[] = [
	{
		name: 'Volunteer For Bangladesh',
		post: 'Cartoonist',
		location: 'Chittagong - Bangladesh',
		time: '2023 - now',
		link: 'https://vbd.com.bd',
		image: 'https://cdn-kglbn.nitrocdn.com/oOhrYApIszkdlZdjSPGZIeZCLeFOFrfa/assets/images/optimized/rev-e4bf454/vbd.com.bd/wp-content/uploads/2023/08/VBD_logo.png',
	},
	{
		name: 'Opputunity for Kids',
		post: 'Assosiate of Graphic Designer',
		location: 'Chittagong - Bangladesh',
		time: '2020 - 2023',
		link: 'https://www.ofkbd.com',
		image: 'https://www.ofkbd.com/wp-content/uploads/2023/08/OFK-New-Logo-DT@4x-e1693072540315-768x518.png',
	},
	{
		name: 'Originative 360',
		post: 'Assosiate of Graphic Designer',
		location: 'Chittagong - Bangladesh',
		time: '2020 - 2022',
		link: 'http://originative360.com',
		image: '',
	},
];

export const contactList: { name: string; link: string; icon: IconType }[] = [
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/yaser.arafat.israk',
		icon: FaSquareFacebook,
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/y_israk',
		icon: FaInstagram,
	},
	{
		name: 'GitHub',
		link: 'https://github.com/YaIsrak',
		icon: FaGithub,
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/israk',
		icon: FaLinkedin,
	},
];

export const educations: {
	image?: string;
	institute: string;
	degree: string;
	time: string;
	location: string;
}[] = [
	{
		institute: 'Chittagong Polytechnic Insitute',
		degree: 'Diploma in Mechanical Engineering',
		time: '2020- 2024',
		location: 'Chittagong, Bangladesh',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDYx9b0l07onPO0L8EKbzDiU9rOXwt0osEg&s',
	},
	{
		institute: 'Saraipara City Corporation High School',
		degree: 'SSC',
		time: '2014-2020',
		location: 'Chittagong, Bangladesh',
		image: 'https://sccc.eduworlderp.com/img/site/1699848045.png',
	},
];
