import PageTransitionLink from '@/components/PageTransitionLink';
import ProjectCard, { SkeletonCard } from '@/components/ProjectCard';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import TextRevealByMask from '@/components/ui/TextRevealByMask';
import { FEATURED_WEB_QUERYResult } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/live';
import { FEATURED_WEB_QUERY } from '@/sanity/lib/queries';
import { Suspense } from 'react';

export default async function Projects() {
	return (
		<section
			className='relative z-10 py-[10vmin] pt-[20vmin]'
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
						<div className='mt-4 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
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
						variant='outline'
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
