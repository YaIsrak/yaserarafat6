// import ProjectCard from '@/components/ProjectCard';
import ProjectCard from '@/components/ProjectCard';
import GridLines from '@/components/ui/GridLines';
import { client } from '@/lib/sanity/client';
import { WEB_DESIGN_QUERY } from '@/lib/sanity/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
};

export default async function ProjectsPage() {
	const data: WebProject[] = await client.fetch(WEB_DESIGN_QUERY);

	return (
		<>
			<section className='py-[15vmin] z-40 relative'>
				<div className='container mx-auto px-2 md:px-0'>
					<h1 className='text-5xl font-instrument italic'>Projects</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4'>
						{data.map((project, i) => (
							<ProjectCard
								key={project._id}
								project={project}
								i={i}
							/>
						))}
					</div>
				</div>
				<GridLines className='-z-10' />
			</section>

			<section className='py-[35vmin] md:py-[20vmin]'></section>
		</>
	);
}
