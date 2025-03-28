import { Button } from '@/components/ui/button';
import { WEB_DESIGN_QUERYResult } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/live';
import { WEB_DESIGN_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
	const { data } = await sanityFetch({
		query: WEB_DESIGN_QUERY,
	});

	return (
		<section
			className='relative z-10 py-[10vmin]'
			id='projects'>
			<div className='container mx-auto px-2 md:px-0'>
				<h1 className='text-[clamp(3rem,12vw,13rem)] text-center font-bold tracking-tight break-words'>
					Selected Works
				</h1>

				<div className='mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-5 gap-4'>
					{data.map((project, i) => (
						<ProjectCard
							key={project._id}
							i={i}
							project={project}
						/>
					))}
				</div>

				<div className='flex justify-end'>
					<Button
						className='mt-8 rounded-2xl border-black shadow-none hover:bg-black hover:text-white ease-in-out duration-300'
						variant='outline'
						asChild>
						<Link href='/projects'>View All Project</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

function ProjectCard({
	project,
	i,
}: {
	project: WEB_DESIGN_QUERYResult[0];
	i: number;
}) {
	const isEvenRow = Math.floor(i / 2) % 2 === 0;
	const colSpanClass = isEvenRow
		? i % 2 === 0
			? 'md:col-span-3'
			: 'md:col-span-2'
		: i % 2 === 0
			? 'md:col-span-2'
			: 'md:col-span-3';

	return (
		<Link
			href={project.url!}
			target='_blank'
			className={`col-span-1 ${colSpanClass}`}>
			<div className='relative'>
				<Image
					src={project.mainImageUrl?.url ?? ''}
					alt={project.title!}
					width={500}
					height={500}
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
	);
}
