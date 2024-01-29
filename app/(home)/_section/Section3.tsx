'use client';
import Art2 from '@/public/image/art2.jpg';
import { RevealList, RevealWrapper } from 'next-reveal';
import Image from 'next/image';

export default function Section3() {
	return (
		<section
			className='section bg-contain bg-no-repeat bg-center'
			style={{
				backgroundImage:
					'linear-gradient(to bottom, rgba(14, 14, 14, 0.8) 0%, rgba(14, 14, 14, 0.8) 100%), url("/image/art2_bg.png")',
			}}
		>
			<div className='container'>
				<RevealList
					delay={200}
					interval={200}
					reset
					className='grid grid-cols-1 md:grid-cols-3'
				>
					{/* column 1 */}
					<div className='my-auto'>
						<p>
							This portrait of Kohotobyo is done in the style of Jamini Roy, one of
							India&apos;s most celebrated artists. Roy was known for his bold,
							minimalist style and his focus on painting everyday people. This portrait
							is a perfect example of Roy&apos;s work. Kohotobyo is depicted with a
							serious expression on her face, her large, dark eyes meeting the
							viewer&apos;s gaze. Her long black hair is pulled back into a simple bun,
							and .she is wearing a simple black dress
						</p>
					</div>

					{/* Column 2 */}
					<div>
						<h1 className='lg:text-7xl mb-2 !font-bold text-center'>Kohotobyo</h1>
						<RevealWrapper
							reset
							delay={200}
							rotate={{ x: 12, y: 40, z: 0 }}
							className='aspect-square mx-auto'
						>
							<Image
								src={Art2}
								alt={'Grace and Beauty'}
								fill
								style={{ objectFit: 'contain' }}
								placeholder='blur'
							/>
						</RevealWrapper>
					</div>

					{/* Column 3 */}
					<div className='mt-6 md:my-auto'>
						<p>
							The use of bold colors and simple shapes is characteristic of Roy&apos;s
							style. The black of Kohotobyo&apos;s hair and dress contrasts sharply
							with the light brown of her skin and the white of the background. The
							artist has used simple lines to create a sense of depth and perspective
							in the portrait, and the use of light and shadow high- lights
							Kohotobyo&apos;s features
						</p>
					</div>
				</RevealList>
			</div>
		</section>
	);
}
