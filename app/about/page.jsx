import AboutSec1 from './AboutSec1';
import AboutSec3 from './AboutSec3';

export const metadata = {
	title: 'About me',
	description:
		'I am a Digital Artist, designer and Web Developer from Bangladesh. 🇧🇩',
};
export default function About() {
	return (
		<>
			<AboutSec1 />
			<AboutSec3 />
		</>
	);
}
