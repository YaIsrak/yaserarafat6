export default function SkillSection() {
	return (
		<section className='pt-[20vmin]'>
			<div className='container mx-auto px-2 md:px-0'>
				<div className='w-full h-px bg-muted-foreground/50 mb-8' />
				<h1 className='text-4xl font-instrument italic'>Skills & Tool</h1>
				<div className='grid grid-cols-4 mt-8 text-sm'>
					<div />
					<div>
						<p>Digital Art</p>
						<p>Frontend</p>
						<p>UI design</p>
					</div>
					<div>
						<p>Next.js(React)</p>
						<p>Express(Node.js)</p>
						<p>Mongodb | Supabase</p>
						<p>Zustand</p>
						<p>Typescript</p>
						<p>Prisma(ORM)</p>
						<p>Auth.js | Clerk</p>
						<p>Python</p>
					</div>
					<div>
						<p>Vs Code</p>
						<p>Photoshop</p>
						<p>Clip Studio</p>
						<p>Blender</p>
						<p>Figma</p>
					</div>
				</div>
			</div>
		</section>
	);
}
