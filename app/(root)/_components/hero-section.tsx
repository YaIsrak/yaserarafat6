import { BlurFade } from '@/components/ui/blur-fade';
import BottomAnimation from '@/components/ui/BottomAnimation';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className='bg-dark text-white relative overflow-hidden'>
			<div className='w-full h-screen relative z-10 py-36 flex flex-col justify-between container mx-auto px-2 md:px-0'>
				<BlurFade>
					<TextRevealByMask
						duration={1.5}
						blur={0}
						className='text-[clamp(4rem,11vw,15rem)] font-bold uppercase tracking-tight leading-[0.85] break-words'>
						Yaser Arafat Israk
					</TextRevealByMask>
				</BlurFade>

				{/* <Test /> */}
				<BlurFade className='grid grid-cols-4 space-y-8'>
					<div className='col-span-4 md:col-span-2 space-y-2'>
						<TextRevealByMask
							duration={1.5}
							delay={0.25}
							blur={0}
							className='md:text-5xl text-3xl  font-medium'>
							From{' '}
							<span className='font-instrument italic !font-normal'>
								Sketch
							</span>{' '}
							to Screen - I Build Digital Wonders.
						</TextRevealByMask>

						<TextRevealByMask
							duration={1.5}
							delay={0.4}
							as={'div'}>
							<div className='flex text-xs justify-between'>
								<span>@2025</span>
								<span>Based on Bangladesh</span>
								<span>Full Stack Developer</span>
							</div>
						</TextRevealByMask>
					</div>

					<TextRevealByMask
						as={'div'}
						duration={1.5}
						delay={0.5}
						blur={0}
						className='flex md:justify-end md:col-span-2 items-end'>
						<BottomAnimation className='bg-white'>
							<Link
								href='#projects'
								className='text-sm flex items-center gap-1'>
								<ArrowDown className='size-4' />
								Scroll down
							</Link>
						</BottomAnimation>
					</TextRevealByMask>
				</BlurFade>
			</div>

			<div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-r from-purple-600 to-pink-600'>
				<div className='absolute inset-0 bg-gradient-to-t from-transparent  to-[#0e0e0e]'></div>
			</div>
		</section>
	);
}
