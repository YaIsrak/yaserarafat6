/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import CImage from './CImage';

// Art
import Art6 from '../public/images/art6.jpg';
import Sketch6 from '../public/images/sketch6.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';

export default function HomeSec5() {
	return (
		<section className='container'>
			<RevealList
				delay={200}
				interval={200}
				className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-7'
			>
				<div className='img-wrapper'>
					<h1 className='!tw-font-bold tw-whitespace-nowrap'>
						Nandita Mahamud
						<br />
						<span className='tw-font-normal'>from</span>
						<br />
						Darale Duaarey
					</h1>
					<RevealWrapper
						className='img tw-h-auto tw-w-full tw-mx-auto'
						reset
						delay={300}
						rotate={{ x: 12, y: 40 }}
					>
						<CImage src={Sketch6} alt={'Nandita Mahamud'} local />
					</RevealWrapper>
				</div>

				<div className='tw-my-auto'>
					<p>
						This portrait of <span className='tw-text-primary'>Nandita Mahamud</span>{' '}
						from the <span className='tw-text-primary'>Darale Duare</span> song is a
						beautiful and striking work of art. Nandita is depicted in a close-up
						shot, her face turned slightly to the side.
						<br /> <br /> Darale Duare is a beautiful love. poem by{' '}
						<span className='tw-text-primary'>Kazi Nazrul Islam</span>, our National
						Poet. Most famously known as the "REBEL POET" in Bangladesh, the marks of
						the poet's talent can be found in many genres including Ghazals. His
						Ghazals are rich in expressions that pierces the heart with love. This
						song is the woe of two love birds who have fallen madly in love with each
						other. The spirit of love flows through them, around them and encircles
						their world.
					</p>
				</div>
				<RevealWrapper
					reset
					className='img-wrapper'
					rotate={{ x: 12, y: 40, z: 0 }}
					delay={200}
				>
					<div className='img tw-h-auto tw-w-full tw-mx-auto'>
						<CImage src={Art6} alt={'Nandita Mahamud Darale Duaarey'} local />
					</div>
				</RevealWrapper>
			</RevealList>
		</section>
	);
}
