import { SocialLinks } from '@/lib/constants';
import Link from 'next/link';
import { BlurFade } from '../ui/blur-fade';
import BottomAnimation from '../ui/BottomAnimation';
import GridLines from '../ui/GridLines';
import GetInTouch from './GetInTouch';

export default function Footer() {
	return (
		<footer
			id='contact'
			className='relative bg-dark text-white overflow-hidden'>
			<div className='container mx-auto px-2 md:px-0 py-[5vmin] md:py-[5vmin] relative z-20'>
				<BlurFade delay={0.1}>
					<GetInTouch />
				</BlurFade>

				<div className='mt-8 mb-20'>
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
	);
}
