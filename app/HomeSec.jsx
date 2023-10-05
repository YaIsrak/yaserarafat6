'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';

import Art1 from '../public/images/art1.jpg';
import Art2 from '../public/images/art2.jpg';
import Art3 from '../public/images/art3.jpg';

export default function HomeSec() {
	// Animation
	useEffect(() => {
		let tl = gsap.timeline();
		tl
			.to('.box', {
				duration: 1,
				y: '-100%',
				ease: 'power4.inOut',
				delay: 0.5,
			})
			.to('.header', {
				duration: 2,
				opacity: 1,
				ease: 'power4.inOut',
			})
			.to(
				'.wrapper_img',
				{
					duration: 2,
					width: '40%',
					ease: 'power4.inOut',
				},
				'-=2'
			)
			.to(
				'.left',
				{
					duration: 2,
					x: '-100%',
					opacity: 1,
					rotate: -10,
					ease: 'power4.inOut',
				},
				'-=2'
			)
			.to(
				'.right',
				{
					duration: 2,
					x: '100%',
					opacity: 1,
					rotate: 10,
					ease: 'power4.inOut',
				},
				'-=2'
			);
	}, []);

	return (
		<div className='hero'>
			<div className='img_container'>
				<div className='images'>
					<div className='img left tw-w-1/4 tw-h-auto'>
						<Image src={Art2} alt='Hero Image 2' placeholder='blur' priority />
					</div>
					<div className='img right tw-w-1/4 tw-h-auto'>
						<Image src={Art3} alt='Hero Image 3' placeholder='blur' priority />
					</div>
				</div>
			</div>
			<div className='hero_img'>
				<div className='wrapper_img'>
					<div className='box'></div>
					<div>
						<Image src={Art1} placeholder='blur' alt='Hero Image 1' priority />
					</div>
				</div>
			</div>
			<div className='header text-center'>
				<h1 className='title display-1 fw-bold font3'>Israk</h1>
				<p className='font3 text-white tw-text-xs lg:tw-text-base'>
					Digital Artist - Graphic Designer - Web Developer
				</p>
			</div>
		</div>
	);
}
