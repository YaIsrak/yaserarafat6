import { BlurFade } from '@/components/ui/blur-fade';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import BG1 from '@/public/art/bgsketch1.png';
import BG2 from '@/public/art/bgsketch2.png';
import BG3 from '@/public/art/bgsketch3.png';
import BG4 from '@/public/art/bgsketch4.png';
import BG5 from '@/public/art/bgsketch5.png';
import BG6 from '@/public/art/bgsketch6.png';
import BG7 from '@/public/art/bgsketch7.png';
import BG8 from '@/public/art/bgsketch8.png';
import Image from 'next/image';

export default function BgSection() {
	return (
		<section className='mx-auto container px-2 md:px-0 min-h-screen relative py-20'>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
				<TextRevealByMask
					as={'h1'}
					isMask={false}
					delay={0}
					by='words'
					stagger={0.1}
					className='font-thunder text-7xl md:text-[16rem] uppercase font-black text-right'>
					<span className='relative'>
						BACKGROUND
						<span className='font-playground font-extralight text-6xl md:text-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet-500 normal-case  text-right'>
							practice
						</span>
					</span>
				</TextRevealByMask>
			</div>
			<BlurFade className='grid grid-cols-2 md:grid-cols-4'>
				<div className='hidden md:block'>
					<Image
						src={BG1}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div className='hidden md:block'>
					<Image
						src={BG2}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div className='hidden md:block'>
					<Image
						src={BG3}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div>
					<Image
						src={BG4}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div className='hidden md:block'>
					<Image
						src={BG5}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div>
					<Image
						src={BG6}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div>
					<Image
						src={BG7}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
				<div>
					<Image
						src={BG8}
						alt='bg'
						width={500}
						height={500}
						placeholder='blur'
					/>
				</div>
			</BlurFade>
		</section>
	);
}
