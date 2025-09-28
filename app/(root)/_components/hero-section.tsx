'use client';

import { easeNumber } from '@/lib/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase, SplitText } from 'gsap/all';
import { useRef } from 'react';

export default function HeroSection() {
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const titleSplit = new SplitText(titleRef.current, { type: 'chars' });
		CustomEase.create('myEase', easeNumber);

		gsap.from(titleSplit.chars, {
			yPercent: 100,
			opacity: 0,
			delay: 0.1,
			filter: 'blur(10px)',
			duration: 0.9,
			stagger: 0.02,
			ease: 'myEase',
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top top',
				end: '80% bottom',
				toggleActions: 'play restart play reverse',
				scrub: true,
			},
		});
	});

	return (
		<section
			ref={containerRef}
			className='min-h-screen w-full relative bg-dark text-white py-[20vmin] flex items-center justify-center'>
			<div className='container mx-auto px-2 md:px-0 relative z-20'>
				<div
					ref={titleRef}
					className='text-center font-black text-[9rem] md:text-[20rem] font-thunder leading-[0.75] uppercase flex flex-col'>
					<span className='relative inline-block'>
						SKETCH{' '}
						<span className='font-playground font-extralight text-6xl md:text-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-500 lowercase'>
							desining
						</span>
					</span>

					<span className='relative'>
						to Screen
						<span className='font-playground font-extralight text-6xl md:text-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-500 lowercase'>
							web - mobile
						</span>
					</span>
					<span className='relative'>
						I Build
						<span className='font-playground font-extralight text-6xl md:text-[10rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-500 lowercase'>
							premium
						</span>
					</span>
					<span className='relative'>
						Digital Wonders
						<span className='font-playground font-extralight text-6xl md:text-[10rem] absolute bottom-1 md:bottom-4  -translate-y-1/2 left-1/2 -translate-x-1/2  text-pink-500 lowercase'>
							luxury
						</span>
					</span>
				</div>
			</div>

			<div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-r from-purple-600 to-pink-600'>
				<div className='absolute inset-0 bg-gradient-to-t from-transparent  to-[#0e0e0e]'></div>
			</div>
		</section>
	);
}
