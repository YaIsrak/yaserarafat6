import { FEATURED_WEB_QUERYResult } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from './ui/blur-fade';
import { Skeleton } from './ui/skeleton';

interface ProjectCardProps {
	project: FEATURED_WEB_QUERYResult[0];
	i: number;
}

export default function ProjectCard({ project, i }: ProjectCardProps) {
	// const blur_url = await getBlurDataUrl(project.mainImageUrl?.url ?? '');

	return (
		<BlurFade
			delay={i * 0.1}
			className={`col-span-2 group md:col-span-1 bg-dark p-4 rounded-4xl`}>
			<Link
				href={project.url!}
				target='_blank'>
				<div className='relative overflow-hidden  border rounded-2xl border-muted-foreground/50'>
					<Image
						src={project.mainImageUrl?.url ?? ''}
						alt={project.title!}
						width={800}
						height={800}
						className='w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-300 ease-out'
						// placeholder='blur'
						// blurDataURL={blur_url}
					/>
				</div>
				<div className='my-2 space-y-2'>
					<div className='flex items-center gap-2'>
						<div className='bg-white size-8 rounded-full'></div>
						<p className='text-3xl font-semibold text-white uppercase tracking-tighter'>
							{project.title!}
						</p>
					</div>

					<div className='flex flex-wrap justify-end divide-x divide-muted-foreground/50 items-center'>
						{project.technology &&
							project.technology.map((technology) => (
								<p
									key={technology.name}
									className='text-xs px-2 text-muted-foreground'>
									{technology.name}
								</p>
							))}
					</div>
				</div>
			</Link>
		</BlurFade>
	);
}

export function SkeletonCard() {
	return (
		<div>
			<Skeleton className='w-full h-96' />
			<div className='flex mt-6 gap-4'>
				<Skeleton className='h-4 w-full' />
				<Skeleton className='h-4 w-full' />
			</div>
		</div>
	);
}
