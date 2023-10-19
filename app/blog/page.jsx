import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '../../client';

export default async function Blogs() {
	const data = (await getData()).res;
	return (
		<section className='container'>
			{/* Blog */}
			<div className='blogs tw-grid tw-grid-cols-2 tw-gap-3'>
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
		<Link
			href={`blog/${data.slug.current}`}
			className='tw-text-light tw-no-underline hover:tw-text-light'
		>
			<div className='blog'>
				<div className='tw-relative tw-h-60 tw-w-full'>
					<Image
						src={data.imageUrl.url}
						alt={`${data.title} | MD Yaser Arafat Israk`}
						fill
						style={{ objectFit: 'cover' }}
						placeholder='blur'
						blurDataURL='/images/loading.png'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='tw-rounded-xl'
					/>
				</div>

				{/* info */}
				<h1 className=''>{data.title}</h1>
				<p>
					{data.description}
					<p className='tw-text-light/50'>{data.publishedAt}</p>
				</p>
			</div>
		</Link>
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
		// revalidate: 10,
	};
}
