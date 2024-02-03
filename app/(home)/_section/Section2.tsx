'use client';

// Art
import Art1 from '@/public/image/art1.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section2() {
	return (
		<section className='relative section'>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<div className='text-left md:text-right my-auto'>
						<RevealList
							interval={200}
							delay={200}
							reset
							origin='bottom'
							className='space-y-2'
						>
							<h1 className='!font-bold lg:text-7xl'>Grace and Beauty</h1>
							<p>
								A vision of grace and beauty, a woman in a traditional Indian sari
								stands before us. Her long, flowing hair cascades over her shoulders,
								and her serene eyes meet ours. The sari she wears is a masterpiece of
								color and pattern, its vibrant hues echoing the vibrant colors of India
								itself
							</p>
						</RevealList>
					</div>

					<RevealWrapper
						delay={300}
						className=''
						rotate={{ x: 12, y: 40, z: 0 }}
						reset
						origin='bottom'
					>
						<div className='aspect-[4/3] mx-auto'>
							<Image
								src={Art1}
								alt={'Grace and Beauty'}
								fill
								style={{ objectFit: 'contain' }}
								placeholder='blur'
							/>
						</div>
					</RevealWrapper>
				</div>
			</div>

			{/* bg-images */}
			<div className='hidden md:block'>
				<div className='absolute h-96 w-1/3 top-96 -left-40 -z-50 opacity-50'>
					<Image
						src={Art1}
						alt=''
						fill
						style={{ objectFit: 'contain' }}
						className='grayscale'
					/>
				</div>
				<div className='absolute h-96 w-1/3 -top-40 left-1/3 -z-50 opacity-50'>
					<Image
						src={Art1}
						alt=''
						fill
						style={{ objectFit: 'contain' }}
						className='grayscale'
					/>
				</div>
			</div>
		</section>
	);
}
