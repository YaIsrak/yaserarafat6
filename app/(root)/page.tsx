import GridLines from '@/components/ui/GridLines';
import AboutSection from './_components/about-section';
import HeroSection from './_components/hero-section';
import WhatICanDo from './_components/what-i-can-do';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			{/* <Projects /> */}
			<WhatICanDo />
			<GridLines />
		</div>
	);
}
