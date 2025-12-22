import { BlurFade } from '@/components/ui/blur-fade';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import Fanart from '@/public/art/fanart.png';
import Fanart2 from '@/public/art/fanart2.png';
import Image from 'next/image';

export default function FanartSection() {
	return (
		<section className='mx-auto container px-2 md:px-0 h-screen relative'>
			<BlurFade className='h-full'>
				<Image
					src={Fanart}
					className='absolute md:top-10 left-0 top-1/6'
					alt='Fanart'
					width={1000}
					height={1000}
					placeholder='blur'
				/>
				<Image
					className='absolute md:bottom-10 right-0 bottom-1/6'
					src={Fanart2}
					alt='Fanart'
					width={1000}
					height={1000}
					placeholder='blur'
				/>

				<div className='absolute md:top-15 md:right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:translate-y-0 text-center md:text-right'>
					<TextRevealByMask
						as={'h1'}
						isMask={false}
						delay={0}
						by='words'
						stagger={0.1}
						className='font-thunder text-9xl md:text-[14rem] uppercase font-black leading-[0.75] text-end '>
						<span className='relative'>
							Fanart
							<span className='font-playground font-extralight text-6xl md:text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 normal-case'>
								Anime
							</span>
						</span>
					</TextRevealByMask>
				</div>
			</BlurFade>
		</section>
	);
}
