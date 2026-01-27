import GridLines from '@/components/ui/GridLines';
import gsap from 'gsap';
import { CustomEase, ScrollTrigger, SplitText } from 'gsap/all';
import { Metadata } from 'next';
import ArtworkHero from './_components/artwork-hero';
import BgSection from './_components/bg-section';
import EleganceSection from './_components/elegance-section';
import EthereakSection from './_components/ethereak-section';
import FanartSection from './_components/fanart-section';
import MiliSection from './_components/mili-section';
import RegalSection from './_components/regal-section';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

export const metadata: Metadata = {
	title: 'Artwork',
};

export default async function ArtworkPage() {
	return (
		<>
			<ArtworkHero />
			<MiliSection />
			<FanartSection />
			<EthereakSection />
			<EleganceSection />
			<RegalSection />
			<BgSection />
			<GridLines className='-z-10' />
		</>
	);
}
