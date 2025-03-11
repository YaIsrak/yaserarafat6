import BlurFade from '@/components/magicui/blur-fade';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import pp from '@/public/images/pp.jpg';
import { DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About_Sec1({ className }: { className?: string }) {
	return (
		<section className={cn('py-[15vmin]', className)}>
			<div className='container'>
				<BlurFade
					className='flex gap-4 md:gap-12'
					inView>
					<div className='flex-1 space-y-4'>
						<h3 className='text-secondary'>
							MD Yaser Arafat <span className='text-primary'>Israk</span>
						</h3>
						<p className='text-xs tracking-widest text-muted-foreground md:text-sm'>
							A Bangladesh-based web developer specializing in modern,
							high-performance websites. I focus on building sleek,
							interactive, and user-friendly web experiences using
							Next.js, React, and Tailwind CSS. Passionate about clean
							code, seamless UX, and innovative web solutions.
						</p>

						<Button
							variant='secondary'
							size='sm'
							asChild>
							<Link
								target='_blank'
								href={'/assets/cv.pdf'}>
								CV <DownloadIcon className='ml-2 size-4' />
							</Link>
						</Button>
					</div>

					<BlurFade inView>
						<Image
							src={pp}
							alt='art1'
							className='size-36 rounded-full md:size-56'
							placeholder='blur'
							width={200}
							height={200}
						/>
					</BlurFade>
				</BlurFade>
			</div>
		</section>
	);
}
