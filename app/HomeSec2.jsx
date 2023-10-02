'use client';
import React, { useEffect } from 'react';
import CImage from './CImage';

// Art
import Art1 from '../public/images/art1.jpg';
import Sketch1 from '../public/images/sketch6.jpg';

import { RevealWrapper, RevealList } from 'next-reveal';

export default function HomeSec2() {
	return (
		<section className='container'>
			<div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5'>
				<div className='tw-text-left md:tw-text-right tw-my-auto'>
					<RevealList interval={200} delay={200} reset origin='left'>
						<h1 className='display-3 !tw-font-bold '>Grace and Beauty</h1>
						<p>
							A vision of grace and beauty, a woman in a traditional Indian sari stands
							before us. Her long, flowing hair cascades over her shoulders, and her
							serene eyes meet ours. The sari she wears is a masterpiece of color and
							pattern, its vibrant hues echoing the vibrant colors of India itself.
						</p>
					</RevealList>
				</div>

				<RevealWrapper delay={300} className='' rotate={{ x: 12, y: 40 }} reset>
					<div className=' tw-h-auto tw-w-3/4 tw-mx-auto'>
						<CImage src={Art1} alt={'Grace and Beauty'} local />
					</div>
				</RevealWrapper>
			</div>
		</section>
	);
}
