import AboutSec1 from '@/components/Section/About/Section1';
import AboutSec2 from '@/components/Section/About/Section2';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About me',
};

export default function About() {
	return (
		<>
			<AboutSec1 />
			<AboutSec2 />
		</>
	);
}
