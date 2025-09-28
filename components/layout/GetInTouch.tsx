'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function GetInTouch() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.to(textRef.current, {
				xPercent: -50,
				duration: 5,
				ease: 'none',
				repeat: -1,
			});
		},
		{ scope: containerRef },
	);

	return (
		<div
			ref={containerRef}
			className='overflow-hidden whitespace-nowrap mt-20'>
			<div
				ref={textRef}
				className='text-[10rem] md:text-[18rem] leading-[1] flex gap-12 font-thunder uppercase font-black'>
				<span className='marquee-text'>GET IN TOUCH</span>
				<span className='marquee-text'>GET IN TOUCH</span>
				<span className='marquee-text'>GET IN TOUCH</span>
				<span className='marquee-text'>GET IN TOUCH</span>
			</div>
		</div>
	);
}
