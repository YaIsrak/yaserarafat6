import ButtonEffect from '@/components/ButtonEffect';
import BlurFade from '@/components/magicui/blur-fade';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Hero() {
	return (
		<section className='section flex h-screen items-center justify-center relative'>
			<div className='space-y-4 text-center md:space-x-6'>
				<DotPattern
					className='absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
					pattern='dots'
				/>

				{/* Available for new projects */}
				<BlurFade
					inView
					delay={0.5}
					className='text-sm text-muted-foreground border w-fit mx-auto px-6 py-1 rounded-full flex items-center gap-2 bg-black cursor-pointer'>
					<div className='size-2 bg-primary rounded-full animate-pulse' />
					Avalible for new projects
				</BlurFade>

				{/* Welcome text */}
				<BlurFade
					inView
					delay={0.1}>
					<h2 className='text-xl md:text-4xl'>
						Designing, <span className='text-primary'>Development,</span>{' '}
						<br />
						Experience, Reality
					</h2>
				</BlurFade>

				{/* description */}
				<BlurFade
					className='text-sm md:text-lg max-w-lg mx-auto md:max-w-2xl'
					inView
					delay={0.2}>
					Hi, I&apos;m{' '}
					<span className='font-chaney text-primary'>Israk</span> a{' '}
					<span className='text-primary'>web developer</span> with a
					passion for creating beautiful and functional designs. Explore my
					works and get to know me.
				</BlurFade>

				{/* Button */}
				<BlurFade
					inView
					delay={0.3}>
					<ButtonEffect>
						<Button
							asChild
							size={'sm'}>
							<Link href='#projects'>See my works</Link>
						</Button>
					</ButtonEffect>
				</BlurFade>
			</div>
		</section>
	);
}
