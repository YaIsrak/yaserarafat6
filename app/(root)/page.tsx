import GridLines from '@/components/ui/GridLines';
import { Suspense } from 'react';
import AboutSection from './_components/about-section';
import HeroSection from './_components/hero-section';
import Projects from './_components/Projects';
import WhatICanDo from './_components/what-i-can-do';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<Suspense>
				<Projects />
			</Suspense>
			<WhatICanDo />
			<GridLines />
		</div>
	);
}
