import GridLines from '@/components/ui/GridLines';
import { Metadata } from 'next';
import AboutInfo from './_components/about-info';
import ExperineceSection from './_components/experience-section';
import SkillSection from './_components/skill-section';

export const metadata: Metadata = {
	title: 'About',
};

export default function page() {
	return (
		<>
			<AboutInfo />
			<SkillSection />
			<ExperineceSection />
			<GridLines className='-z-10' />
		</>
	);
}
