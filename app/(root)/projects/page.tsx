import GridLines from '@/components/ui/GridLines';
import { sanityFetch } from '@/sanity/lib/live';
import { WEB_DESIGN_QUERY } from '@/sanity/lib/queries';
import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Projects',
};

export default async function ProjectsPage() {
	const { data } = await sanityFetch({
		query: WEB_DESIGN_QUERY,
	});

	return (
		<>
			<section className='py-[15vmin] z-40 relative'>
				<div className='container mx-auto px-2 md:px-0'>
					<h1 className='text-5xl font-instrument italic'>Projects</h1>
					<div className='mt-8 divide-y'>
						{data.map((project) => (
							<Link
								href={project.url!}
								key={project._id}
								className='flex justify-between items-center py-7 group'>
								<h2 className='flex-1 text-sm group-hover:font-bold transition-all'>
									{project.title}
								</h2>
								<div className='flex-2 text-muted-foreground text-sm font-light flex flex-wrap'>
									{project.technology && (
										<p>
											{project.technology
												.map((tech) => tech.name)
												.join(', ')}
										</p>
									)}
								</div>

								<div className='flex-1 absolute w-56 left-1/2 -translate-x-1/2'>
									<div className='relative'>
										<Image
											src={project?.mainImageUrl?.url ?? ''}
											width={500}
											height={500}
											alt={project.title!}
											className='absolute -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 [transition-timing-function:cubic-bezier(1,0,0,1)] border rounded-lg border-muted-foreground/50'
										/>
									</div>
								</div>
								<div className='flex-1 flex justify-end'>
									<ArrowRight className='text-muted-foreground/50' />
								</div>
							</Link>
						))}
					</div>
				</div>
				<GridLines className='-z-10' />
			</section>

			<section className='py-[35vmin] md:py-[20vmin]'></section>
		</>
	);
}
