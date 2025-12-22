'use client';

import { easeNumber } from '@/lib/constants';
import Fanart from '@/public/art/fanart.png';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { SplitText } from 'gsap/dist/SplitText';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';

export default function ArtworkHero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLDivElement>(null);
	const heroBGRef = useRef<HTMLDivElement>(null);
	const heroBGImageRef = useRef<HTMLImageElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(CustomEase, SplitText);

		CustomEase.create('hop', '0.9, 0, 0.1, 1');
		CustomEase.create('myEase', easeNumber);

		const ctx = gsap.context(() => {
			const headerSplit = new SplitText('.header h1', {
				type: 'chars',
				charsClass: 'char',
			});

			gsap.set(headerSplit.chars, {
				y: 100,
				opacity: 0,
				filter: 'blur(10px)',
			});

			const tl = gsap.timeline();

			tl.to(heroBGRef.current, {
				clipPath: 'polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)',
				duration: 1.5,
				ease: 'hop',
			}).to(
				heroBGImageRef.current,
				{
					scale: 1.5,
					duration: 1.5,
					ease: 'hop',
				},
				'<',
			);

			tl.to(
				heroBGRef.current,
				{
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					duration: 1.5,
					ease: 'hop',
				},
				'+=0.2',
			).to(
				heroBGImageRef.current,
				{
					scale: 1,
					duration: 2,
					ease: 'hop',
				},
				'<',
			);

			tl.to(
				headerSplit.chars,
				{
					x: 0,
					y: 0,
					opacity: 1,
					filter: 'blur(0px)',
					duration: 0.5,
					ease: 'myEase',
					stagger: 0.05,
				},
				'-=1',
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef}>
			<section
				ref={heroRef}
				className='relative w-full min-h-screen h-screen overflow-hidden bg-black'>
				{/* overlay */}
				<div className='absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black to-black/0 z-5' />
				{/* Hero BG */}
				<div
					ref={heroBGRef}
					className='absolute top-0 left-0 w-full h-full [clip-path:polygon(50%_50%,50%_50%,50%_50%,50%_50%)] will-change-transform'>
					<Image
						src={Fanart}
						alt='bg'
						ref={heroBGImageRef}
						sizes='2000vw'
						priority
						quality={100}
						fill
						className='object-cover scale-200 will-change-transform'
						placeholder='blur'
					/>
				</div>

				<div
					ref={headerRef}
					className='header absolute bottom-[unset] top-[50svh] md:top-[unset] flex md:block justify-center md:justify-start -translate-y-1/2 md:bottom-16 w-full p-8 z-10'>
					<h1 className='font-thunder text-[clamp(8rem,18.5vw,20rem)] uppercase font-black text-white'>
						Artwork
					</h1>
				</div>
			</section>
		</div>
	);
}
