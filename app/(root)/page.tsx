import GridLines from '@/components/ui/GridLines';
import HeroSection from './_components/hero-section';
import Projects from './_components/Projects';

export default function Home() {
	return (
		<>
			<HeroSection />
			<Projects />

			<GridLines />
		</>
	);
}
