import { BlurFade } from '@/components/ui/blur-fade';
import {
	default as TextRevealAnimation,
	default as TextRevealByMask,
} from '@/components/ui/TextRevealByMask';
import Mili1 from '@/public/art/mili-1.png';
import Mili2 from '@/public/art/mili-2.png';
import Mili3 from '@/public/art/mili-3.png';
import Mili4 from '@/public/art/mili-4.png';
import Mili5 from '@/public/art/mili-5.png';
import Image from 'next/image';

export default function MiliSection() {
	return (
		<section className='mx-auto container px-2 md:px-0 min-h-screen relative  py-10'>
			<div className='grid grid-cols-1 md:grid-cols-4 h-full'>
				{/* Left */}
				<BlurFade className='order-last md:order-none'>
					<Image
						src={Mili1}
						alt='Mili Artwork'
						width={800}
						height={800}
						className='w-45 md:w-full mx-auto'
						placeholder='blur'
					/>
				</BlurFade>

				{/* Right */}
				<div className='md:col-span-3 my-12 order-1 md:order-none'>
					{/* Up */}
					<div className='grid grid-cols-1 md:grid-cols-3'>
						<div className='col-span-1 md:col-span-2 px-8 md:ps-0 my-auto'>
							{/* Text */}
							<TextRevealByMask
								as={'h1'}
								isMask={false}
								delay={0}
								by='words'
								stagger={0.1}
								className='font-thunder text-9xl md:text-[16rem] uppercase font-black leading-[0.75]'>
								<span className='relative'>
									Mili
									<span className='font-playground font-extralight text-6xl md:text-9xl absolute bottom-5 left-2 text-[#9c313b] normal-case'>
										rahman
									</span>
								</span>
							</TextRevealByMask>

							<TextRevealAnimation
								delay={0.3}
								isMask={false}
								className='font-semibold text-xs md:text-lg'>
								A quiet but confident girl who grew up in Chattogram and
								now studies in Dhaka. She's the type who doesn't talk
								too much at first, but once she trusts someone, her
								whole personality comes out funny, warm, a little
								stubborn, and very protective of the people she cares
								about. She's a student in a reputed private University
								and a freelance graphic designer.
							</TextRevealAnimation>
						</div>

						<BlurFade>
							<Image
								src={Mili2}
								alt='Mili Artwork'
								className='w-45 md:w-full mx-auto mt-8'
								width={800}
								height={800}
								placeholder='blur'
							/>
						</BlurFade>
					</div>

					{/* Down */}
					<div className='grid grid-cols-3 mt-8 md:gap-4'>
						<BlurFade inView>
							<Image
								src={Mili5}
								alt='Mili Artwork'
								width={800}
								height={800}
								placeholder='blur'
							/>
						</BlurFade>
						<BlurFade inView>
							<Image
								src={Mili3}
								alt='Mili Artwork'
								width={800}
								height={800}
								placeholder='blur'
							/>
						</BlurFade>
						<BlurFade inView>
							<Image
								src={Mili4}
								alt='Mili Artwork'
								width={800}
								height={800}
								placeholder='blur'
							/>
						</BlurFade>
					</div>
				</div>
			</div>
		</section>
	);
}
