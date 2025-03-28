import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
	return (
		<section
			className='relative z-10 py-[10vmin]'
			id='projects'>
			<div className='container mx-auto px-2 md:px-0'>
				<h1 className='text-8xl md:text-9xl font-bold tracking-tight break-words'>
					About me
				</h1>

				<div className='grid grid-cols-4 mt-8'>
					<div></div>

					<div className='col-span-3 md:col-span-2 space-y-2'>
						<h1 className='font-bold text-3xl'>
							MD Yaser Arafat <br />
							<span className='font-instrument italic font-normal text-5xl'>
								Israk
							</span>
						</h1>

						<p className='pr-8 text-sm md:text-base font-medium'>
							A Bangladesh-based web developer specializing in modern,
							high-performance websites. I focus on building sleek,
							interactive, and user-friendly web experiences using
							Next.js, React, and Tailwind CSS. Passionate about clean
							code, seamless UX, and innovative web solutions.
						</p>

						<Button
							size='sm'
							className='mt-4 rounded-xl'
							asChild>
							<Link href='/about'>More about me</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
