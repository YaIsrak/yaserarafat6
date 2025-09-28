import GridLines from '@/components/ui/GridLines';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger, SplitText } from 'gsap/all';
import { Metadata } from 'next';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export const metadata: Metadata = {
	title: 'Artwork',
};

export default async function ArtworkPage() {
	return (
		<>
			<GridLines className='-z-10' />
		</>
	);
}
