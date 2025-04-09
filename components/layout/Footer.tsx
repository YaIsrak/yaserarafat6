import { SocialLinks } from '@/lib/constants';
import Link from 'next/link';
import { Suspense } from 'react';
import Clock from '../Clock';
import BottomAnimation from '../ui/BottomAnimation';
import GridLines from '../ui/GridLines';
import { BlurFade } from '../ui/blur-fade';

export default function Footer() {
	return (
		<>
			<footer
				className='relative bg-dark text-white overflow-hidden'
				id='contact'>
				<div className='absolute top-0 w-full h-1/2 bg-gradient-to-r from-purple-600 to-pink-600'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent  to-[#0e0e0e]'></div>
				</div>
				<div className='container mx-auto px-2 md:px-0 py-[5vmin] md:py-[10vmin] relative z-20'>
					<BlurFade className=' text-center font-bold text-[clamp(3rem,14vw,15rem)] whitespace-nowrap tracking-tight break-words hidden md:block'>
						{/* className='text-[clamp(3rem,12vw,13rem)] '> */}
						Get in Touch
					</BlurFade>

					<div className='md:mt-20 mt-8 mb-20'>
						<div className='w-full h-0.5 bg-white/20 mb-8 hidden md:block' />

						<div className='grid grid-cols-1 md:grid-cols-4'>
							<BlurFade
								delay={0.1}
								className='text-8xl font-bold col-span-2 mb-8 hidden md:block'>
								ISRAK
							</BlurFade>

							<BlurFade
								delay={0.2}
								className='space-y-2'>
								{SocialLinks.map(({ name, link }) => (
									<div
										key={name}
										className='w-fit'>
										<BottomAnimation className='bg-white h-px'>
											<Link
												key={name}
												href={link}
												target='_blank'
												className='text-sm flex items-center gap-1'>
												{name}
											</Link>
										</BottomAnimation>
									</div>
								))}

								<div className='w-fit'>
									<BottomAnimation className='bg-white h-px'>
										<Link
											href={'/blog'}
											className='text-sm flex items-center gap-1'>
											Blogs
										</Link>
									</BottomAnimation>
								</div>
							</BlurFade>

							<BlurFade
								delay={0.3}
								className='flex justify-end'>
								<div>
									<BottomAnimation className='bg-white h-px'>
										<Link
											href='mailto:yaserarafatisrak@gmail.com'
											className='text-sm flex items-center gap-1'>
											yaserarafatisrak@gmail.com
										</Link>
									</BottomAnimation>
								</div>
							</BlurFade>
						</div>
					</div>
				</div>
				<GridLines className='z-10' />
			</footer>

			<footer className='fixed bottom-5 w-full text-white z-[50] mix-blend-exclusion'>
				<div className='container mx-auto px-2 md:px-0'>
					<div className='grid grid-cols-4'>
						<div className='col-span-2' />

						<div className='flex text-xs items-center justify-between col-span-2'>
							<p>Bangladesh</p>
							<Suspense>
								<Clock />
							</Suspense>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
