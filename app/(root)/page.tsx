import GridLines from '@/components/ui/GridLines';
import AboutSection from './_components/about-section';
import HeroSection from './_components/hero-section';
import Projects from './_components/Projects';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Projects />
			<AboutSection />

			<GridLines />
		</>
	);
}
