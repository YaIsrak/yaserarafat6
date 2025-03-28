import BottomAnimation from '@/components/ui/BottomAnimation';
import GredientMeshImage from '@/components/ui/GredientMeshImage';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className='bg-dark text-white'>
			<div className='w-full h-screen relative z-10 py-36 flex flex-col justify-between container mx-auto px-2 md:px-0'>
				<h1 className='text-[clamp(4rem,11vw,15rem)] font-bold uppercase tracking-tight leading-[0.85] break-words'>
					Yaser Arafat <br /> Israk
				</h1>
				<div className='grid grid-cols-4 space-y-8'>
					<div className='col-span-4 md:col-span-2 space-y-2'>
						<h3 className='md:text-5xl text-3xl  font-medium'>
							From{' '}
							<span className='font-instrument italic !font-normal'>
								Sketch
							</span>{' '}
							to Screen - I Build Digital Wonders.
						</h3>

						<div className='flex text-xs justify-between'>
							<p>@2025</p>
							<p>Based on Bangladesh</p>
							<p>Full Stack Developer</p>
						</div>
					</div>

					<div className='flex md:justify-end md:col-span-2 items-end'>
						<BottomAnimation className='bg-white'>
							<Link
								href='#projects'
								className='text-sm flex items-center gap-1'>
								<ArrowDown className='size-4' />
								Scroll down
							</Link>
						</BottomAnimation>
					</div>
				</div>
				<GredientMeshImage />
			</div>
		</section>
	);
}
