import { Metadata } from 'next';
import Section1 from './_section/section1';
import Section2 from './_section/section2';

export const metadata: Metadata = {
	title: 'About me',
};

export default function page() {
	return (
		<>
			<Section1 />
			<Section2 />
		</>
	);
}
