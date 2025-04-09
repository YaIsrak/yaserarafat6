import { TextAnimate } from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { resumeLink } from '@/lib/constants';
import PP from '@/public/israkpp.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutInfo() {
	return (
		<section className='min-h-screen w-full relative z-40 border-b border-muted-foreground/20'>
			<div className='container mx-auto px-2 md:px-0 '>
				<div className='grid md:grid-cols-2 grid-cols-1 items-center min-h-screen'>
					<div className='flex justify-center h-[50vh] md:h-full'>
						<BlurFade className='relative w-full h-full'>
							<Image
								src={PP}
								alt='Md Yaser Arafat Israk'
								className='grayscale h-full w-full object-contain p-12'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								placeholder='blur'
							/>
						</BlurFade>
					</div>

					{/* rigth side */}
					<BlurFade
						delay={0.1}
						className='max-w-xl space-y-4'>
						<p className='text-sm font-light uppercase'>* About me</p>

						<BlurFade
							delay={0.2}
							className='text-5xl md:text-6xl font-bold'>
							Md Yaser Arafat <br />
							<span className='font-instrument italic font-medium'>
								Israk
							</span>
						</BlurFade>
						<TextAnimate
							delay={0.3}
							by='word'
							as={'p'}
							animation='blurInUp'
							className='text-sm font-semibold'>
							A passionate web developer and illustrator from Chittagong,
							Bangladesh. I have a deep love for creativity and
							problem-solving, whether it's through coding or visual
							storytelling. With a curious mind and a drive to keep
							learning, I enjoy exploring new ideas and turning them into
							reality. My journey has been shaped by dedication,
							discipline, and a constant pursuit of growth. Beyond work,
							I appreciate the simple joys of life—good conversations,
							meaningful experiences, and the endless possibilities that
							technology and art bring.
						</TextAnimate>

						<BlurFade delay={0.4}>
							<Link
								href={resumeLink}
								target='_blank'>
								<Button
									size='sm'
									className='rounded-xl'>
									Get Resume
								</Button>
							</Link>
						</BlurFade>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}
