import { BlurFade } from '@/components/ui/blur-fade';
import { experiences } from '@/lib/constants';

export default function ExperineceSection() {
	return (
		<section className='pt-[20vmin] pb-[20vmin] relative'>
			<div className='container mx-auto px-2 md:px-0'>
				<div className='w-full h-px bg-muted-foreground/50 mb-8' />
				<BlurFade>
					<h1 className='text-4xl font-instrument italic'>Experiences</h1>
				</BlurFade>
				<div className='grid grid-cols-4 mt-8 text-sm'>
					<div className='col-span-1 md:col-span-2' />
					<div className='col-span-3 md:col-span-2 divide-y'>
						{experiences.map((experience, index) => (
							<BlurFade
								delay={index * 0.1}
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
							</BlurFade>
						))}
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 w-full h-1/3 bg-gradient-to-r from-purple-600 to-pink-600 -z-50'>
				<div className='absolute inset-0 bg-gradient-to-t from-transparent  to-white'></div>
			</div>
		</section>
	);
}
