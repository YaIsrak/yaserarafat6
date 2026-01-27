import { IconType } from 'react-icons';
import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaSquareFacebook,
} from 'react-icons/fa6';

export const resumeLink: string =
	'https://drive.google.com/file/d/1eDxor0G3YJUaAmY02If0VgXDuel9LYg3/view?usp=sharing';

export const navlinks: {
	name: string;
	href: string;
}[] = [
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Artwork',
		href: '/artwork',
	},
	{
		name: 'Resume',
		href: resumeLink,
	},
];

export const SocialLinks: { name: string; link: string }[] = [
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/israk',
	},
	{
		name: 'Github',
		link: 'https://www.github.com/yaisrak',
	},
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
		name: 'Altux Studio',
		post: 'Frontend Developer',
		location: 'Remote - Bangladesh',
		time: '2025',
		link: 'https://www.altuxstudio.com',
	},
	{
		name: 'Volunteer For Bangladesh',
		post: 'Cartoonist',
		location: 'Chittagong - Bangladesh',
		time: '2023 - 2024',
		link: 'https://vbd.com.bd',
	},
	{
		name: 'Opputunity for Kids',
		post: 'Assosiate of Graphic Designer',
		location: 'Chittagong - Bangladesh',
		time: '2020 - 2023',
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

export const easeNumber = 'M0,0 C1,0 0,1 1,1';
