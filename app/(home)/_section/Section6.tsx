'use client';
import Portrait1 from '@/public/image/Portrait1.jpg';
import Portrait2 from '@/public/image/Portrait2.jpg';
import Portrait3 from '@/public/image/Portrait3.jpg';
import Portrait4 from '@/public/image/Portrait4.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section6() {
	const array = [Portrait1, Portrait2, Portrait3, Portrait4];
	return (
		<section className='section'>
			<div className='container'>
				<RevealWrapper reset delay={200} origin='bottom'>
					<h1 className='lg:text-7xl text-center !font-bold mb-4'>
						Portraits I&apos;m proud of
					</h1>
				</RevealWrapper>
				<RevealList
					interval={100}
					delay={200}
					reset
					className='grid grid-cols-2 md:grid-cols-4 gap-3'
					origin='bottom'
				>
					{array.map((img, i) => (
						<div className='w-full !aspect-[3/4] mx-auto' key={i}>
							<Image
								src={img}
								alt={'Portraits'}
								fill
								style={{ objectFit: 'cover' }}
								placeholder='blur'
							/>
						</div>
					))}
				</RevealList>
			</div>
		</section>
	);
}
