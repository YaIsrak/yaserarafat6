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
			<section className='py-[35vmin] md:py-[20vmin]'>
				<div className='absolute bottom-0 w-full h-1/3 bg-gradient-to-r from-purple-600 to-pink-600 -z-50'>
					<div className='absolute inset-0 bg-gradient-to-t from-transparent  to-white'></div>
				</div>
			</section>
		</>
	);
}
