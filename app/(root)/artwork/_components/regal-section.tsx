import { BlurFade } from '@/components/ui/blur-fade';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import Regal from '@/public/art/regal.png';
import Image from 'next/image';

export default function RegalSection() {
	return (
		<div
			style={{
				backgroundImage: "url('/art/regal-bg.png')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			<section className='mx-auto container px-2 md:px-0 min-h-screen relative py-20'>
				<div className='grid md:grid-cols-2 gap-8'>
					<BlurFade>
						<Image
							src={Regal}
							alt='Regal Artwork'
							width={1000}
							height={1000}
							className='w-full mx-auto'
							placeholder='blur'
						/>
					</BlurFade>

					<div className='relative'>
						<div className='absolute top-0 md:bottom-0'>
							<TextRevealByMask
								as={'h1'}
								isMask={false}
								delay={0}
								by='words'
								stagger={0.1}
								className='font-thunder text-9xl md:text-[25rem] uppercase font-black text-white leading-tigher'>
								<span className='relative'>
									Regal
									<span className='font-playground font-extralight text-6xl md:text-[15rem] absolute bottom-5 left-2 text-[#e04e29] normal-case'>
										warmth
									</span>
								</span>
							</TextRevealByMask>
							<TextRevealByMask
								as={'p'}
								delay={0.3}
								isMask={false}
								className='font-semibold text-xs md:text-lg text-white '>
								An immersive work focused on cultural richness and
								detailed ornamentation. This illustration explores the
								powerful connection between attire, jewelry, and
								identity. It is a dedicated study in digital technique,
								utilizing high-contrast color palettes and intricate
								pattern work to establish a feeling of opulence and
								heritage within the portrait genre.
							</TextRevealByMask>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
