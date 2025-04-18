import { TextAnimate } from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
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
				<TextAnimate
					animation='blurInUp'
					by='word'
					as={'h1'}
					className='text-[clamp(3rem,12vw,13rem)] text-center font-bold tracking-tight break-words'>
					Selected Works
				</TextAnimate>

				<Suspense
					fallback={
						<div className='mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4'>
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
					className='flex justify-end'>
					<Button
						className='mt-8 rounded-2xl border-black shadow-none hover:bg-black hover:text-white ease-in-out duration-300'
						variant='outline'
						asChild>
						<Link href='/projects'>View All Project</Link>
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
		<div className='mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-5 gap-4'>
			{data.map((project: FEATURED_WEB_QUERYResult[0], i: number) => (
				<ProjectCard
					key={project._id}
					i={i}
					project={project}
				/>
			))}
		</div>
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

	const isEvenRow = Math.floor(i / 2) % 2 === 0;
	const colSpanClass = isEvenRow
		? i % 2 === 0
			? 'md:col-span-3'
			: 'md:col-span-2'
		: i % 2 === 0
			? 'md:col-span-2'
			: 'md:col-span-3';

	return (
		<BlurFade
			delay={i * 0.1}
			className={`col-span-1 ${colSpanClass}`}>
			<Link
				href={project.url!}
				target='_blank'>
				<div className='relative'>
					<Image
						src={project.mainImageUrl?.url ?? ''}
						placeholder='blur'
						blurDataURL={blur_url}
						alt={project.title!}
						width={800}
						height={800}
						className='w-full h-full object-cover border rounded-lg border-muted-foreground/50'
					/>
				</div>
				<div className='mt-2 flex justify-between'>
					<p className='text-sm'>{project.title!}</p>

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
