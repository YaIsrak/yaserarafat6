import { SocialLinks } from '@/lib/constants';
import Link from 'next/link';
import Clock from '../Clock';
import BottomAnimation from '../ui/BottomAnimation';
import GredientMeshImage from '../ui/GredientMeshImage';
import GridLines from '../ui/GridLines';
import { BlurFade } from '../ui/blur-fade';

export default function Footer() {
	return (
		<>
			<footer
				className='relative bg-dark text-white overflow-hidden'
				id='contact'>
				<GredientMeshImage
					className='-translate-y-3/5 z-[10]'
					imageClassName='scale-y-50 md:scale-y-70'
				/>
				<div className='container mx-auto px-2 md:px-0 py-[5vmin] md:py-[10vmin] relative z-20'>
					<BlurFade className=' text-center font-bold text-[clamp(3rem,15vw,15rem)] whitespace-nowrap hidden md:block'>
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
							<Clock />
						</div>
					</div>
				</div>
			</footer>

			{/* */}
		</>
	);
}
