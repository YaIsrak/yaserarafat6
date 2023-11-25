import BlogCard from '@/components/Card/BlogCard';
import sanityClient from '@/lib/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs',
};

export default async function Blogs() {
	const data: Blog[] = (await getData()).res;
	return (
		<section className='container'>
			{/* Blog */}
			<div className='blogs tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3'>
				{data?.map((blog: Blog, i: number) =>
					blog.title && blog.description && blog.publishedAt && blog.mainImage ? (
						<BlogCard key={blog._id} data={blog} />
					) : (
						<p key={i} className='text-danger'>
							There is a problem in blog
						</p>
					)
				)}
			</div>
		</section>
	);
}

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'blog']{
			...,
			"imageUrl": mainImage.asset->{ url}
		}`
	);
	return {
		res,
		revalidate: 10,
	};
}
