import { Button } from '@/components/ui/button';
import { SocialLinks } from '@/lib/constant';
import MainPhoto from '@/public/image/mainPhoto.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Section1() {
	return (
		<section className='overflow-x-hidden min-h-screen'>
			<div className='grid grid-cols-1 md:grid-cols-2'>
				{/* Right Side */}
				<div className='overflow-hidden justify-center flex'>
					<div className='relative w-full mx-11 mt-24 md:m-0'>
						<Image
							src={MainPhoto}
							alt='Main Image'
							className='w-full'
							placeholder='blur'
						/>
					</div>
				</div>

				{/* Lefty Side */}
				<div className='m-auto p-[15vmin]'>
					<div className='space-y-4'>
						<h1 className='font-bold text-5xl'>
							MD Yaser Arafat <span className='text-primary'>Israk</span>
						</h1>
						<div className='flex gap-2'>
							{SocialLinks.map((link, index) => (
								<Button key={index} className='mb-2' size={'lg'} asChild>
									<Link href={link.link} target={'_blank'}>
										{link.name}
									</Link>
								</Button>
							))}
						</div>
						<p className='text-muted-foreground text-sm lg:text-base'>
							I am a Digital Artist, designer and Web Developer from Bangladesh. 🇧🇩
						</p>
						<p className='font-mono text-muted-foreground'>{`// 2+ years of experience`}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
