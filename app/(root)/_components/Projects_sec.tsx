import ButtonEffect from '@/components/ButtonEffect';
import { Button } from '@/components/ui/button';
import { WebDesignProps } from '@/global.t';
import { client } from '@/sanity/lib/client';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Projects_sec() {
	const data: WebDesignProps[] = await client.fetch(
		`*[_type == 'web']{
          ...,
          "mainImageUrl": mainImage.asset->{url},
          technology[]->
        }`,
	);

	return (
		<section
			className='section'
			id='projects'>
			<div className='container'>
				<div className='text-center mb-6'>
					<h3>
						Featured <span className='text-primary'>Projects</span>
					</h3>
					<p className='text-sm'>
						See how I transformed concept into engaging digital
						expreirences
					</p>
				</div>

				{/* projects */}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{data.map((item) => (
						<Suspense
							key={item._id}
							fallback={<div>Loading...</div>}>
							<ProjectCard
								key={item._id}
								item={item}
							/>
						</Suspense>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ item }: { item: WebDesignProps }) {
	return (
		<ButtonEffect
			hoverEffect={-6}
			scale={0.98}
			className='p-4 bg-secondary/5 rounded-2xl flex flex-col border border-primary/0 gap-2 hover:border-secondary/20 transition-colors'>
			{/* Image */}
			<div className='relative aspect-square'>
				<Image
					src={item.mainImageUrl.url}
					alt={item.title}
					width={400}
					height={400}
					className='object-cover aspect-square rounded-lg'
				/>
			</div>

			{/* Title and description */}
			<div className='flex gap-2 mt-2'>
				<div className='flex-1'>
					{/* title */}
					<Link
						href={item.url}
						target='_blank'>
						<p className='text-xl mb-2 hover:underline hover:text-primary transition-colors'>
							{item.title}
						</p>
					</Link>

					{/* tags */}
					<div className='flex gap-2 flex-wrap'>
						{item.technology.map((tech) => (
							<p
								key={tech._id}
								className='text-xs text-muted-foreground bg-secondary/10 px-2 py-1 rounded-lg'>
								{tech.name}
							</p>
						))}
					</div>
				</div>

				{/* Button */}
				<Button
					size={'icon'}
					className='rounded-lg group hover:rotate-12 transition-all'>
					<Link
						href={item.url}
						target='_blank'>
						<ArrowUpRight className='' />
					</Link>
				</Button>
			</div>
		</ButtonEffect>
	);
}
