'use client';
import CImage from './CImage';

// Art
import Art1 from '../public/images/art1.jpg';

import { RevealWrapper, RevealList } from 'next-reveal';
import Image from 'next/image';

export default function HomeSec2() {
	return (
		<section className='tw-relative tw-overflow-hidden'>
			<div className='container'>
				<div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5'>
					<div className='tw-text-left md:tw-text-right tw-my-auto'>
						<RevealList interval={200} delay={200} reset origin='left'>
							<h1 className='display-3 !tw-font-bold '>Grace and Beauty</h1>
							<p>
								A vision of grace and beauty, a woman in a traditional Indian sari
								stands before us. Her long, flowing hair cascades over her shoulders,
								and her serene eyes meet ours. The sari she wears is a masterpiece of
								color and pattern, its vibrant hues echoing the vibrant colors of India
								itself.
							</p>
						</RevealList>
					</div>

					<RevealWrapper delay={300} className='' rotate={{ x: 12, y: 40 }} reset>
						<div className=' tw-h-auto tw-w-3/4 tw-mx-auto'>
							<CImage src={Art1} alt={'Grace and Beauty'} local />
						</div>
					</RevealWrapper>
				</div>
			</div>

			{/* bg-images */}
			<div className='tw-hidden md:tw-block'>
				<div className='tw-absolute tw-h-96 tw-w-1/3 tw-top-96 -tw-left-40 -tw-z-50 tw-opacity-50'>
					<Image
						src={Art1}
						alt=''
						fill
						style={{ objectFit: 'contain' }}
						className='tw-grayscale'
					/>
				</div>
				<div className='tw-absolute tw-h-96 tw-w-1/3 -tw-top-40 tw-left-1/3 -tw-z-50 tw-opacity-50'>
					<Image
						src={Art1}
						alt=''
						fill
						style={{ objectFit: 'contain' }}
						className='tw-grayscale'
					/>
				</div>
			</div>
		</section>
	);
}
