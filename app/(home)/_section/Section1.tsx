'use client';

import { RevealList } from 'next-reveal';

export default function Section1() {
	return (
		<section className='section'>
			<div className='container'>
				{/* title */}
				<RevealList
					interval={200}
					delay={200}
					origin='bottom'
					className='flex flex-col justify-center text-center text-7xl lg:text-9xl font3'
				>
					<p>
						Welcome to the <br /> playground{' '}
					</p>
					<div className='flex justify-center items-center gap-8'>
						<p>of</p>
						<div className='text-base hidden md:block max-w-[20em] mt-10 text-muted-foreground font4'>
							Hi! I’m MD Yaser Arafat Israk, Web developer and Illustrator from
							Bangladesh, located in Chattogram
						</div>
					</div>
					<p>Israk</p>

					{/* description */}
				</RevealList>
				<RevealList
					interval={200}
					delay={200}
					origin='bottom'
					className='flex justify-center gap-6   items-center mt-16 font-light text-center'
				>
					<h1 className='mt-2 font-light text-sm md:text-4xl'>Web developer</h1>
					<h1>&</h1>
					<h1 className='mt-2 font-light text-sm  md:text-4xl'>Illustrator</h1>
				</RevealList>
			</div>
		</section>
	);
}
