import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '../../client';

export const metadata = {
	title: 'Blogs',
	description: 'Read my all blogs',
};

export default async function Blogs() {
	const data = (await getData()).res;
	return (
		<section className='container'>
			{/* Blog */}
			<div className='blogs tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3'>
				{data?.map((blog, i) =>
					blog.title && blog.description && blog.publishedAt && blog.mainImage ? (
						<Blog key={blog._id} data={blog} />
					) : (
						<h1 key={i} className='text-danger'>
							There is a problem in blog
						</h1>
					)
				)}
			</div>
		</section>
	);
}

function Blog({ data }) {
	return (
		<div className='blog tw-relative tw-scale-100 hover:tw-scale-105'>
			<Link
				href={`blog/${data.slug.current}`}
				className='tw-text-light tw-no-underline hover:tw-text-light'
			>
				<div className='tw-relative tw-h-40 md:tw-h-56 tw-w-full'>
					<Image
						src={data.imageUrl.url}
						alt={`${data.title} | MD Yaser Arafat Israk`}
						fill
						style={{ objectFit: 'contain' }}
						placeholder='blur'
						blurDataURL='/images/loading.png'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='tw-rounded-xl'
					/>
				</div>

				{/* info */}
				<h2 className='display-6 tw-font-bold tw-text-primary'>{data.title}</h2>
				<p className='md:tw-text-base tw-text-sm'>
					{data.description}
					<p className='tw-text-light/50'>{data.publishedAt}</p>
				</p>
			</Link>
		</div>
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
