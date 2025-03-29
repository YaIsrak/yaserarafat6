import AboutInfo from './_components/about-info';
import ExperineceSection from './_components/experience-section';
import SkillSection from './_components/skill-section';

export default function page() {
	return (
		<>
			<AboutInfo />
			<SkillSection />
			<ExperineceSection />

			<section className='py-[45vmin] md:py-[30vmin]'></section>
		</>
	);
}
