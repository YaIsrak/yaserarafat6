import BlurFade from '@/components/magicui/blur-fade';

export default function About_Skills() {
	return (
		<section className='container py-[5vmin]'>
			<BlurFade
				delay={0.2}
				inView>
				<h5 className='text-primary'>Skills</h5>
			</BlurFade>
			<BlurFade
				inView
				delay={0.2}
				className='md:grid-col-4 grid grid-cols-3 gap-4'>
				<div>
					<p>Illustration</p>
					<p>Frontend</p>
					<p>UI design</p>
				</div>

				<div>
					<p>React</p>
					<p>Next.js</p>
					<p>Node.js</p>
					<p>Typescript</p>
					<p>Python</p>
				</div>

				<div>
					<p>Photoshop</p>
					<p>Illustrator</p>
					<p>Blender</p>
					<p>Figma</p>
					<p>Premiere pro</p>
				</div>
			</BlurFade>
		</section>
	);
}
