import gsap from 'gsap';
import { useEffect } from 'react';

export default function HeroSec() {
	useEffect(() => {
		let tl = gsap.timeline();
		tl.to('.box', {
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
					<div className='img left w-1/4 h-auto'></div>
					<div className='img right w-1/4 h-auto'></div>
				</div>
			</div>
			<div className='hero_img'>
				<div className='wrapper_img'>
					<div className='box'></div>
					<div>
						<img src='/images/art1.webp' alt='' className='img-fluid' />
					</div>
				</div>
			</div>
			<div className='header text-center'>
				<h1 className='title display-1 fw-bold font3'>Israk</h1>
				<p className='font3 text-white text-xs lg:text-base'>
					Digital Artist - Graphic Designer - Web Developer
				</p>
			</div>
		</div>
	);
}
