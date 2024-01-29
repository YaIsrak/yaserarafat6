'use client';

import Art5 from '@/public/image/art5.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section4() {
	return (
		<section
			className='section bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage:
					'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url("/image/art5_bg.png")',
			}}
		>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
					<RevealWrapper
						reset
						delay={200}
						className=''
						rotate={{ x: 12, y: 40, z: 0 }}
					>
						<div className='aspect-square mx-auto'>
							<Image
								src={Art5}
								alt={'Grace and Beauty'}
								fill
								style={{ objectFit: 'contain' }}
								placeholder='blur'
							/>
						</div>
					</RevealWrapper>
					<div className='my-auto'>
						<RevealList interval={300} delay={200} reset>
							<h1 className='lg:text-7xl !font-bold'>Spirited Away: Chihiro</h1>
							<p className='mt-4'>
								This fanart of <span className='text-primary'>Chihiro</span> from{' '}
								<span className='text-primary'>Spirited Away</span> depicts the
								character in her red worker&apos;s uniform, standing in front of the
								iconic bathhouse from the film. She is looking up at the sky with a
								determined expres- sion on her face, her long, dark hair pulled back
								into a ponytail.
								<br />
								<br />
								The soft and gentle style of the drawing perfectly captures
								Chihiro&apos;s innocence and hope. The delicate linework and muted
								colors create a sense of calm and tranquility, which is in stark
								contrast to the challenges that Chihiro faces in the film.
							</p>
						</RevealList>
					</div>
				</div>
			</div>
		</section>
	);
}
