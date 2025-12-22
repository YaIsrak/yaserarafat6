import { BlurFade } from '@/components/ui/blur-fade';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import Elegance from '@/public/art/elegance.png';
import Image from 'next/image';

export default function EleganceSection() {
	return (
		<section className='mx-auto container px-2 md:px-0 min-h-screen relative py-20'>
			<div className='grid md:grid-cols-2 gap-8'>
				<BlurFade>
					<Image
						src={Elegance}
						alt='Ethereak Artwork'
						width={1000}
						height={1000}
						className='w-full mx-auto'
						placeholder='blur'
					/>
				</BlurFade>

				<div className='relative'>
					<div className='absolute top-0 md:bottom-0'>
						<TextRevealByMask
							as={'p'}
							delay={0.3}
							isMask={false}
							className='font-semibold text-xs md:text-lg text-right'>
							An atmospheric study dedicated to the celebration of light,
							texture, and serene personal moments. This work represents
							a commitment to capturing the feeling of peaceful solitude
							and reflective inner life. The illustration is
							intentionally composed to evoke a sense of warmth and quiet
							escape within a vibrant cultural context.
						</TextRevealByMask>
						<TextRevealByMask
							as={'h1'}
							isMask={false}
							delay={0}
							by='words'
							stagger={0.1}
							className='font-thunder text-9xl md:text-[16rem] uppercase font-black text-right'>
							<span className='relative'>
								Elegance
								<span className='font-playground font-extralight text-6xl md:text-9xl absolute bottom-5 right-0 text-violet-500 normal-case  text-right'>
									joty
								</span>
							</span>
						</TextRevealByMask>
					</div>
				</div>
			</div>
		</section>
	);
}
