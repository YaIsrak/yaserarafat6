'use client';

// Art
import Art6 from '@/public/image/art6.jpg';
import Sketch6 from '@/public/image/sketch6.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section5() {
	return (
		<section className='section'>
			<div className='container'>
				<RevealList
					delay={200}
					interval={200}
					className='grid grid-cols-1 md:grid-cols-3 gap-7'
				>
					<div className='img-wrapper'>
						<h1 className='!font-bold lg:text-7xl md:!text-4xl mb-6'>
							Nandita Mahamud
							<br />
							<span className='font-normal'>from</span>
							<br />
							Darale Duaarey
						</h1>
						<RevealWrapper
							className='aspect-square mx-auto'
							reset
							delay={300}
							rotate={{ x: 12, y: 40, z: 0 }}
						>
							<Image
								src={Sketch6}
								alt={'Nandita Mahamud'}
								fill
								style={{ objectFit: 'cover' }}
								placeholder='blur'
							/>
						</RevealWrapper>
					</div>

					<div className='my-auto'>
						<p>
							This portrait of <span className='text-primary'>Nandita Mahamud</span>{' '}
							from the <span className='text-primary'>Darale Duare</span> song is a
							beautiful and striking work of art. Nandita is depicted in a close-up
							shot, her face turned slightly to the side.
							<br /> <br /> Darale Duare is a beautiful love. poem by{' '}
							<span className='text-primary'>Kazi Nazrul Islam</span>, our National
							Poet. Most famously known as the &quot;REBEL POET&quot; in Bangladesh,
							the marks of the poet&apos;s talent can be found in many genres including
							Ghazals. His Ghazals are rich in expressions that pierces the heart with
							love. This song is the woe of two love birds who have fallen madly in
							love with each other. The spirit of love flows through them, around them
							and encircles their world.
						</p>
					</div>
					<RevealWrapper
						reset
						className='img-wrapper'
						rotate={{ x: 12, y: 40, z: 0 }}
						delay={200}
					>
						<div className='aspect-square mx-auto'>
							<Image
								src={Art6}
								alt={'Nandita Mahamud Darale Duaarey'}
								fill
								style={{ objectFit: 'contain' }}
								placeholder='blur'
							/>
						</div>
					</RevealWrapper>
				</RevealList>
			</div>
		</section>
	);
}
