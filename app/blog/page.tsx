import { baseUrl } from '@/lib/utils';
import { BlogProps } from '@/type.typing';
import { Metadata } from 'next';
import BlogCard from './BlogCard';

export const metadata: Metadata = {
	title: 'Blog',
};

export default async function page() {
	const { res } = await getBlog();
	const datas: BlogProps[] = res;

	return (
		<section className='section'>
			<div className='container'>
				{/* Blog */}
				<div className='blogs grid grid-cols-1 md:grid-cols-2 gap-2'>
					{datas?.map((blog: BlogProps, i: number) =>
						blog.title && blog.description && blog.publishedAt && blog.mainImage ? (
							<BlogCard key={blog._id} data={blog} />
						) : (
							<p key={i} className='text-rose-500'>
								There is a problem in blog
							</p>
						)
					)}
				</div>
			</div>
		</section>
	);
}

export async function getBlog() {
	const res = await fetch(`${baseUrl}/api/blog`)
		.then((res) => res.json())
		.catch((error) => {
			throw new Error(`failed to fetch data: ${error.message}`);
		});
	return {
		res,
		revalidate: 86400,
		caches: 'no-store',
	};
}

export const dynamic = 'force-dynamic';
