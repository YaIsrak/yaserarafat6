'use client';

import MainPhoto from '@/public/image/mainPhoto.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section1() {
	return (
		<section className=' min-h-screen'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{/* Right Side */}
				<div className='overflow-hidden justify-center flex'>
					<RevealWrapper
						reset
						origin='bottom'
						className='relative w-full mx-11 mt-24 md:m-0'
					>
						<Image
							src={MainPhoto}
							alt='Main Image'
							className='w-full'
							placeholder='blur'
						/>
					</RevealWrapper>
				</div>

				{/* Lefty Side */}
				<div className='mx-auto my-12 p-[3vmin]'>
					<RevealList
						interval={50}
						delay={50}
						reset
						origin='bottom'
						className='display-1 flex flex-col font3'
					>
						<span className='ml-12'>Let‘s</span>
						<span className='ml-24'>create</span>
						<span className='ml-6'>something</span>
						<span>together.</span>
					</RevealList>
				</div>
			</div>

			<RevealList
				interval={200}
				delay={400}
				reset
				origin='bottom'
				className='container'
			>
				<h1 className='display-1 md:text-[16rem] lg:text-[25rem] text-[12rem] text-end'>
					Hi! I’m
				</h1>
				<h1 className='display-1 md:text-[16rem] lg:text-[25rem] text-[12rem] text-primary'>
					Israk
				</h1>

				<div className='container'>
					<RevealWrapper reset origin='bottom' className='container'>
						<p className='w-[em] text-lg'>
							A BANGLADESH BASED ARTIST, WEB DEVELOPER & ILLUSTRATOR SPECIALIZING IN
							BRANDING AND ILLUSTRATION. I LOVE CREATING BOLD CREATIVE WORKS AND ENJOY
							ILLUSTRATING COLORFUL EDITORIAL VISUALS AND DRAWINGS WHICH ARE FUN TO
							LOOK AT BUT AT THE SAME TIME SPREAD AWARENESS.
						</p>
					</RevealWrapper>
				</div>
			</RevealList>
		</section>
	);
}
