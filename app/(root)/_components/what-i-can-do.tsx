'use client';

import { easeNumber } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase, SplitText } from 'gsap/all';
import { useRef } from 'react';

export default function WhatICanDo() {
	const titleRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const infoRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
		CustomEase.create('myEase', easeNumber);

		gsap.from(titleSplit.chars, {
			yPercent: 100,
			opacity: 0,
			filter: 'blur(10px)',
			duration: 0.9,
			stagger: 0.02,
			ease: 'myEase',
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top bottom',
				end: 'bottom 50%',
				toggleActions: 'play restart play reverse',
				scrub: true,
			},
		});

		gsap.from(infoRef.current, {
			yPercent: 100,
			opacity: 0,
			duration: 1,
			ease: 'myEase',
			stagger: 0.02,
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top bottom',
				end: '50% 50%',
				toggleActions: 'play restart play reverse',
				scrub: true,
			},
		});
	});

	return (
		<section
			ref={containerRef}
			className='relative z-20 overflow-y-hidden'>
			{/* another content */}
			<div className='container mx-auto px-2 md:px-0 py-[15vmin] relative'>
				<div
					className='flex justify-between font-playground text-7xl md:text-9xl text-rose-300 absolute  top-48 w-full z-20'
					ref={infoRef}>
					<div>Services</div>
					<div>Provide</div>
				</div>

				<div
					ref={titleRef}
					className='text-center font-black text-8xl md:text-[20rem] font-thunder leading-[0.75] uppercase flex flex-col'>
					<span>Branding</span>
					<span>Web-Design</span>
					<span>Development</span>
					<span>Assets</span>
				</div>
			</div>
		</section>
	);
}
