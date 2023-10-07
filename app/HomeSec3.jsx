/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import CImage from './CImage';

// Art
import Art2 from '../public/images/art2.jpg';
import { RevealWrapper, RevealList } from 'next-reveal';

export default function HomeSec3() {
	return (
		<section
			className='tw-bg-contain tw-bg-no-repeat tw-bg-center'
			style={{
				backgroundImage:
					'linear-gradient(to bottom, rgba(14, 14, 14, 0.8) 0%, rgba(14, 14, 14, 0.8) 100%), url("/images/art2_bg.png")',
			}}
		>
			<div className='container'>
				<RevealList
					delay={200}
					interval={200}
					reset
					className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3'
				>
					{/* column 1 */}
					<div className=' tw-my-auto'>
						<p>
							This portrait of Kohotobyo is done in the style of Jamini Roy, one of
							India's most celebrated artists. Roy was known for his bold, minimalist
							style and his focus on painting everyday people. This portrait is a
							perfect example of Roy's work. Kohotobyo is depicted with a serious
							expression on her face, her large, dark eyes meeting the viewer's gaze.
							Her long black hair is pulled back into a simple bun, and .she is wearing
							a simple black dress
						</p>
					</div>

					{/* Column 2 */}
					<div>
						<h1 className='display-3 !tw-font-bold tw-text-center'>Kohotobyo</h1>
						<RevealWrapper
							reset
							delay={200}
							rotate={{ x: 12, y: 40 }}
							className='img tw-h-auto tw-w-3/4 tw-mx-auto'
						>
							<CImage src={Art2} alt={'Grace and Beauty'} local />
						</RevealWrapper>
					</div>

					{/* Column 3 */}
					<div className='tw-mt-6 md:tw-my-auto'>
						<p>
							The use of bold colors and simple shapes is characteristic of Roy's
							style. The black of Kohotobyo's hair and dress contrasts sharply with the
							light brown of her skin and the white of the background. The artist has
							used simple lines to create a sense of depth and perspective in the
							portrait, and the use of light and shadow high- lights Kohotobyo's
							features
						</p>
					</div>
				</RevealList>
			</div>
		</section>
	);
}
