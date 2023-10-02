/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import CImage from './CImage';

// Art
import Art5 from '../public/images/art5.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';

export default function HomeSec4() {
	return (
		<section className='container'>
			<div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5'>
				<RevealWrapper reset delay={200} className='' rotate={{ x: 12, y: 40 }}>
					<div className=' tw-h-auto tw-w-3/4 tw-mx-auto'>
						<CImage src={Art5} alt={'Grace and Beauty'} local />
					</div>
				</RevealWrapper>
				<div className='tw-my-auto'>
					<RevealList interval={300} delay={200} reset>
						<h1 className='display-3 !tw-font-bold tw-whitespace-nowrap'>
							Spirited Away: Chihiro
						</h1>
						<p>
							This fanart of <span className='tw-text-primary'>Chihiro</span> from{' '}
							<span className='tw-text-primary'>Spirited Away</span> depicts the
							character in her red worker's uniform, standing in front of the iconic
							bathhouse from the film. She is looking up at the sky with a determined
							expres- sion on her face, her long, dark hair pulled back into a
							ponytail.
							<br />
							<br />
							The soft and gentle style of the drawing perfectly captures Chihiro's
							innocence and hope. The delicate linework and muted colors create a sense
							of calm and tranquility, which is in stark contrast to the challenges
							that Chihiro faces in the film.
						</p>
					</RevealList>
				</div>
			</div>
		</section>
	);
}
