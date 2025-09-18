import PageTransitionLink from '@/components/PageTransitionLink';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import { getBlurDataUrl } from '@/lib/getBlurDataUrl';
import { FEATURED_WEB_QUERYResult } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/live';
import { FEATURED_WEB_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Projects() {
	return (
		<section
			className='relative z-10 py-[10vmin]'
			id='projects'>
			<div className='container mx-auto px-2 md:px-0'>
				<TextRevealByMask
					by='chars'
					as={'h1'}
					stagger={0.05}
					className='text-7xl md:text-9xl uppercase tracking-tighter font-bold text-[#0e0e0e]'>
					Works
				</TextRevealByMask>

				<Suspense
					fallback={
						<div className='mt-4 md:mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
							<SkeletonCard />
						</div>
					}>
					<ProjectList />
				</Suspense>

				<BlurFade
					delay={0.5}
					className='flex justify-center'>
					<Button
						className='mt-8 rounded-2xl border-black shadow-none hover:bg-black hover:text-white ease-in-out duration-300'
						// variant='outline'
						size='lg'
						asChild>
						<PageTransitionLink href='/projects'>
							View All Project
						</PageTransitionLink>
					</Button>
				</BlurFade>
			</div>

			<div className='absolute top-0 w-full h-1/5 bg-gradient-to-r from-purple-600 to-pink-600 -z-50'>
				<div className='absolute inset-0 bg-gradient-to-b from-transparent  to-white'></div>
			</div>
		</section>
	);
}

export async function ProjectList() {
	const { data } = await sanityFetch({
		query: FEATURED_WEB_QUERY,
	});

	return (
		<BlurFade
			delay={0.5}
			className='mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
			{data.map((project: FEATURED_WEB_QUERYResult[0], i: number) => (
				<ProjectCard
					key={project._id}
					i={i}
					project={project}
				/>
			))}
		</BlurFade>
	);
}

async function ProjectCard({
	project,
	i,
}: {
	project: FEATURED_WEB_QUERYResult[0];
	i: number;
}) {
	const blur_url = await getBlurDataUrl(project.mainImageUrl?.url ?? '');

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
						placeholder='blur'
						blurDataURL={blur_url}
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

function SkeletonCard() {
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
