'use client';
import CustomImage from '@/components/CustomImage';
import Portrait1 from '@/public/images/Portrait1.jpg';
import Portrait2 from '@/public/images/Portrait2.jpg';
import Portrait3 from '@/public/images/Portrait3.jpg';
import Portrait4 from '@/public/images/Portrait4.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';

export default function HomeSec6() {
	const array = [Portrait1, Portrait2, Portrait3, Portrait4];
	return (
		<section className='container'>
			<RevealWrapper
				reset
				delay={200}
				className='h1 display-3 tw-text-center !tw-font-bold'
			>
				Portraits I&apos;m proud of
			</RevealWrapper>
			<RevealList
				interval={100}
				delay={200}
				reset
				className='tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-3'
			>
				{array.map((img, i) => (
					<div className='tw-relative tw-w-full' key={i}>
						<CustomImage src={img} alt={'Portraits'} local key={i} />
					</div>
				))}
			</RevealList>
		</section>
	);
}
