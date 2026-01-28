import { BlurFade } from '@/components/ui/blur-fade';
import { basicSkills, techSkills, toolSkills } from '@/lib/skill-data';

export default function SkillSection() {
	return (
		<section className='pt-[20vmin]'>
			<div className='container mx-auto px-2 md:px-0'>
				<div className='w-full h-px bg-muted-foreground/50 mb-8' />
				<BlurFade className='text-4xl font-instrument italic'>
					Skills & Tool
				</BlurFade>
				<div className='grid grid-cols-4 mt-8 text-sm'>
					<div />
					<BlurFade delay={0.1}>
						{basicSkills.map((skill) => (
							<p key={skill}>{skill}</p>
						))}
					</BlurFade>
					<BlurFade delay={0.2}>
						{techSkills.map((skill) => (
							<p key={skill}>{skill}</p>
						))}
					</BlurFade>
					<BlurFade delay={0.3}>
						{toolSkills.map((skill) => (
							<p key={skill}>{skill}</p>
						))}
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
