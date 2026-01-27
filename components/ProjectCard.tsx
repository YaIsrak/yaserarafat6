import { FEATURED_WEB_QUERYResult } from '@/sanity.types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from './ui/blur-fade';
import { Skeleton } from './ui/skeleton';

interface ProjectCardProps {
	project: FEATURED_WEB_QUERYResult[0];
	i: number;
}

export default function ProjectCard({ project, i }: ProjectCardProps) {
	return (
		<BlurFade
			delay={i * 0.1}
			className='col-span-2 group md:col-span-1 bg-dark p-2'>
			<Link
				href={project.url!}
				target='_blank'
				className='relative'>
				<div className='bg-rose-100 size-42 rounded-full absolute z-10 bottom-4 right-4 flex items-center justify-center scale-0 -rotate-90 group-hover:scale-100 group-hover:-rotate-0 transition-transform duration-150 ease-out'>
					<ArrowUpRight className='size-12 text-rose-600' />
				</div>
				<div className='relative overflow-hidden  border border-muted-foreground/50'>
					<Image
						src={project.mainImageUrl?.url ?? ''}
						alt={project.title!}
						width={800}
						height={800}
						className='w-full h-[500px] object-cover scale-105 group-hover:scale-100 transition-transform duration-300 ease-out'
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
