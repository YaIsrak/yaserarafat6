import { SocialLinks } from '@/lib/constants';
import Link from 'next/link';
import Clock from '../Clock';
import BottomAnimation from '../ui/BottomAnimation';
import GredientMeshImage from '../ui/GredientMeshImage';
import GridLines from '../ui/GridLines';

export default function Footer() {
	return (
		<>
			<footer className='relative bg-dark text-white'>
				<GredientMeshImage className='-translate-y-1/2  z-[10]' />
				<div className='container mx-auto px-2 md:px-0 py-[10vmin] relative z-20'>
					<h1 className=' text-center font-bold text-[clamp(3rem,15vw,15rem)] whitespace-nowrap'>
						Get in Touch
					</h1>

					<div className='mt-20 mb-20'>
						<div className='w-full h-0.5 bg-white/20 mb-8' />

						<div className='grid grid-cols-1 md:grid-cols-4'>
							<h1 className='text-8xl font-bold col-span-2 mb-8'>
								ISRAK
							</h1>

							<ul className='space-y-2'>
								{SocialLinks.map(({ name, link }) => (
									<li
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
									</li>
								))}
							</ul>

							<div className='flex justify-end'>
								<div>
									<BottomAnimation className='bg-white h-px'>
										<Link
											href='mailto:yaserarafatisrak@gmail.com'
											className='text-sm flex items-center gap-1'>
											yaserarafatisrak@gmail.com
										</Link>
									</BottomAnimation>
								</div>
							</div>
						</div>
					</div>
				</div>
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
			<GridLines />
		</>
	);
}
