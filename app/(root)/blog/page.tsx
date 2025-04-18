import GridLines from '@/components/ui/GridLines';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Blog',
};

export async function generateStaticParams() {
	const { data: blogs } = await sanityFetch({
		query: BLOGS_QUERY,
	});

	return blogs
		.map((blog: any) => ({
			slug: blog.slug.current,
		}))
		.flat();
}

export default async function BlogsPage() {
	const { data: blogs } = await sanityFetch({
		query: BLOGS_QUERY,
	});

	return (
		<section className='w-full relative z-40 py-[15vmin]'>
			<div className='container mx-auto px-2 md:px-0 '>
				<h1 className='text-5xl font-bold'>Blogs</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4'>
					{blogs.map((blog: any) => (
						<Link
							key={blog._id}
							href={`/blog/${blog.slug.current}`}
							className='group h-fit'>
							<div className=' overflow-hidden'>
								<Image
									src={urlFor(blog.image).url()}
									placeholder='blur'
									blurDataURL={urlFor(blog.image).blur(10).url()}
									alt={blog.title}
									width={500}
									height={300}
									className='w-full h-auto object-cover group-hover:scale-105 transition-all duration-300 ease-in-out'
								/>
							</div>
							<h2 className='text-2xl mt-4 group-hover:font-bold transition-all duration-300 ease-in-out'>
								{blog.title}
							</h2>
						</Link>
					))}
				</div>
			</div>

			<GridLines className='-z-10' />
		</section>
	);
}
