import { Button } from '@/components/ui/button';
import GridLines from '@/components/ui/GridLines';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const { data: blog } = await sanityFetch({
		query: BLOG_QUERY,
		params: { slug },
	});

	if (!blog) notFound();

	return (
		<section className='w-full relative z-40 pb-[15vmin]'>
			<article className='container mx-auto px-2 md:px-0 '>
				<Image
					src={urlFor(blog.image).url()}
					placeholder='blur'
					blurDataURL={urlFor(blog.image).blur(10).url()}
					alt={blog.title}
					width={1000}
					height={1000}
					className='w-full h-[500px] object-cover group-hover:scale-105 transition-all duration-300 ease-in-out'
				/>
				<div className='mt-12'>
					{/* Header */}
					<div className='text-center'>
						<h1 className='text-5xl font-bold text-center'>
							{blog.title}
						</h1>
						<p className='text-gray-500 mt-2'>
							Created: {new Date(blog._createdAt).toDateString()}
						</p>
					</div>

					{/* Content */}
					<div className='mt-8 space-y-4'>
						<PortableText
							value={blog.content}
							components={{
								types: {
									image: ({ value }) => (
										<Image
											src={urlFor(value).url()}
											alt={blog.title}
											width={500}
											height={500}
											className='w-auto h-[500px] object-cover'
											placeholder='blur'
											blurDataURL={urlFor(value).blur(10).url()}
										/>
									),
								},
							}}
						/>
					</div>

					<div className='mt-16 flex justify-center'>
						<Link href='/blog'>
							<Button className='rounded-xl'>Return to all blogs</Button>
						</Link>
					</div>
				</div>
			</article>

			<GridLines className='-z-10' />
		</section>
	);
}
