import PageTransitionLink from '@/components/PageTransitionLink';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section
			className='relative z-20'
			id='about'>
			{/* Gradient */}
			<div className='absolute top-0 w-full h-1/5 bg-gradient-to-r from-purple-600 to-pink-600 '>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent  to-white' />
			</div>

			{/* Content */}
			<div className='container mx-auto px-2 md:px-0 py-[10vmin] pt-[30vmin]'>
				<TextRevealByMask
					blur={40}
					by='chars'
					as={'h1'}
					className='font-extrabold text-9xl md:text-[4em] mt-12 font-thunder uppercase'>
					About me
				</TextRevealByMask>

				<div className='grid grid-cols-4 mt-'>
					<div></div>

					<div className='col-span-3 md:col-span-2 space-y-2'>
						<TextRevealByMask
							delay={0.1}
							className='font-bold text-3xl'>
							MD Yaser Arafat <br />
							<span className='font-instrument italic font-normal text-5xl'>
								Israk
							</span>
						</TextRevealByMask>

						<TextRevealByMask
							as={'p'}
							isMask={false}
							delay={0.2}
							className='pr-8 text-sm md:text-base font-medium'>
							A Bangladesh-based{' '}
							<span className='italic'>web developer</span> specializing
							in modern, high-performance websites. I focus on building
							sleek, interactive, and user-friendly web experiences using
							Next.js, React, and Tailwind CSS. Passionate about clean
							code, seamless UX, and innovative web solutions.
						</TextRevealByMask>

						<BlurFade
							delay={0.6}
							className='flex'>
							<Button
								size='sm'
								className='mt-4 rounded-xl'
								asChild>
								<PageTransitionLink href='/about'>
									More about me
								</PageTransitionLink>
							</Button>

							{}
							<Image
								src='/arrow-right.png'
								alt='arrow'
								width={100}
								height={100}
								className='relative -top-6'
							/>
						</BlurFade>
					</div>
				</div>
			</div>

			{/* another content */}
			<div className='container mx-auto px-2 md:px-0 py-[10vmin] pb-[20vmin] space-y-12'>
				{/* header */}
				<div className='flex justify-between'>
					<div></div>
					<TextRevealByMask
						as={'h1'}
						isMask={false}
						delay={0}
						by='words'
						stagger={0.1}
						className='font-thunder text-9xl md:text-[14rem] uppercase font-black leading-[0.75] text-end '>
						<span className='relative'>
							CRAFTING
							<span className='font-playground font-extralight text-6xl md:text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 lowercase'>
								visionary
							</span>
						</span>{' '}
						<br />
						<span className='relative'>
							LEGACIES
							<span className='font-playground font-extralight text-6xl md:text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 lowercase'>
								brands
							</span>
						</span>
					</TextRevealByMask>
				</div>

				{/* description */}
				<div className='max-w-md md:max-w-lg space-y-8 relative md:bottom-32'>
					<TextRevealByMask
						as={'h1'}
						isMask={false}
						delay={0}
						className='text-center text-sm font-semibold uppercase'>
						[ What I do ]
					</TextRevealByMask>

					<TextRevealByMask
						as={'p'}
						isMask={false}
						delay={0.2}
						className='font-instrument font-extralight text-4xl md:text-6xl  text-center'>
						I combine timeless design principles with <br /> cutting-edge
						technology to craft websites that resonate with a global
						audience
					</TextRevealByMask>
				</div>
			</div>
		</section>
	);
}
