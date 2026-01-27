import { BlurFade } from '@/components/ui/blur-fade';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import Ethereak from '@/public/art/ethereak.png';
import Image from 'next/image';

export default function EthereakSection() {
	return (
		<section className='mx-auto container px-2 md:px-0 min-h-screen relative py-20'>
			<div className='grid md:grid-cols-2 gap-8'>
				<div className='relative'>
					<TextRevealByMask
						as={'h1'}
						isMask={false}
						delay={0}
						by='words'
						stagger={0.1}
						className='font-thunder text-9xl md:text-[16rem] uppercase font-black'>
						<span className='relative'>
							Ethereak
							<span className='font-playground font-extralight text-6xl md:text-9xl absolute bottom-5 left-2 text-violet-500 normal-case'>
								repose
							</span>
						</span>
					</TextRevealByMask>

					<TextRevealByMask
						as={'p'}
						delay={0.3}
						isMask={false}
						className='font-semibold text-sm md:text-base max-w-lg'>
						A testament to the precision of digital craftsmanship combined
						with the enduring grace of classical subjects. The work is
						designed to hold a quiet narrative, allowing its subtlety to
						resonate deeply. It forms part of a series dedicated to
						celebrating cultural elegance and contemplative character
						studies, establishing a standard for refined, emotionally rich
						artistry.
					</TextRevealByMask>
				</div>
				<BlurFade>
					<Image
						src={Ethereak}
						alt='Ethereak Artwork'
						width={1000}
						height={1000}
						className='w-full mx-auto'
						placeholder='blur'
					/>
				</BlurFade>
			</div>
		</section>
	);
}
