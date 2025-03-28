import { experiences } from '@/lib/constants';

export default function ExperineceSection() {
	return (
		<section className='pt-[20vmin]'>
			<div className='container mx-auto px-2 md:px-0'>
				<div className='w-full h-px bg-muted-foreground/50 mb-8' />
				<h1 className='text-4xl font-instrument italic'>Experiences</h1>
				<div className='grid grid-cols-4 mt-8 text-sm'>
					<div className='col-span-1 md:col-span-2' />
					<div className='col-span-3 md:col-span-2 divide-y'>
						{experiences.map((experience, index) => (
							<div
								key={index}
								className='flex justify-between items-center py-4'>
								<div>
									<p className='text-base font-medium'>
										{experience.name}
									</p>
									<p className='text-xs text-muted-foreground'>
										{experience.post}
									</p>
								</div>
								<p>{experience.time}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
