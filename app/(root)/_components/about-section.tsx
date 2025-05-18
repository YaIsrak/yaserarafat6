import PageTransitionLink from '@/components/PageTransitionLink';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import TextRevealByMask from '@/components/ui/TextRevealByMask';

export default function AboutSection() {
	return (
		<section
			className='relative z-20'
			id='projects'>
			<div className='container mx-auto px-2 md:px-0 py-[10vmin] pb-[20vmin]'>
				<TextRevealByMask
					// animation='blurInUp'
					by='lines'
					as={'h1'}
					className='text-[clamp(3rem,18vw,20rem)] font-bold text-center tracking-tight break-words'>
					About me
				</TextRevealByMask>

				<div className='grid grid-cols-4 mt-8'>
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
							// start='top bottom'
							as={'p'}
							isMask={false}
							// duration={1.5}
							delay={0.2}
							className='pr-8 text-sm md:text-base font-medium'>
							A Bangladesh-based web developer specializing in modern,
							high-performance websites. I focus on building sleek,
							interactive, and user-friendly web experiences using
							Next.js, React, and Tailwind CSS. Passionate about clean
							code, seamless UX, and innovative web solutions.
						</TextRevealByMask>

						<BlurFade delay={0.3}>
							<Button
								size='sm'
								className='mt-4 rounded-xl'
								asChild>
								<PageTransitionLink href='/about'>
									More about me
								</PageTransitionLink>
							</Button>
						</BlurFade>
					</div>
				</div>
			</div>

			<div className='absolute bottom-0 w-full h-1/3 bg-gradient-to-r from-purple-600 to-pink-600 -z-50'>
				<div className='absolute inset-0 bg-gradient-to-t from-transparent  to-white'></div>
			</div>
		</section>
	);
}
