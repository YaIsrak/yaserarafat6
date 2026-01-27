import { BlurFade } from '@/components/ui/blur-fade';

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
						<p>Digital Art</p>
						<p>Frontend</p>
						<p>UI design</p>
					</BlurFade>
					<BlurFade delay={0.2}>
						<p>Next.js(React)</p>
						<p>Express(Node.js)</p>
						<p>Mongodb | Supabase</p>
						<p>Zustand</p>
						<p>Typescript</p>
						<p>Prisma(ORM)</p>
						<p>Auth.js | Clerk</p>
						<p>Python</p>
					</BlurFade>
					<BlurFade delay={0.3}>
						<p>Vs Code</p>
						<p>Photoshop</p>
						<p>Clip Studio</p>
						<p>Blender</p>
						<p>Figma</p>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
