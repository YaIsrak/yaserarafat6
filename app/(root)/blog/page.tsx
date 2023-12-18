import BlogCard from '@/components/Card/BlogCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs',
};

export default async function Blogs() {
	const data = (await getData()).res;

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

export async function getData() {
	const res = await fetch(process.env.baseURL + '/api/blog').then((data) =>
		data.json()
	);
	return {
		res,
		revalidate: 1,
	};
}
