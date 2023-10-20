import Image from 'next/image';
import Link from 'next/link';
import PortableText from 'react-portable-text';
import sanityClient from '../../../client';

export async function generateMetadata({ params }) {
	const res = await getData(params.slug[0]);
	const data = res.res;
	if (!data)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: data.title,
		description: data.description,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/blogs/${params.slug[0]}`,
		},
	};
	// const datas = info.props.datas;
}

export default async function page({ params }) {
	const res = await getData(params.slug[0]);
	const data = res.res;
	return (
		<section className='container'>
			{/* header */}
			<header className='text-center'>
				<h1 className='display-3 tw-font-bold'>{data.title}</h1>
				<p>
					<p className='tw-text-light/50'>{data.publishedAt}</p>
				</p>
			</header>

			{/* Image section */}
			<div className='tw-relative tw-w-full tw-h-56 md:tw-h-96'>
				<Image
					src={data.imageUrl.url}
					alt={data.title}
					className='tw-rounded-xl !tw-object-contain'
					fill
					placeholder='blur'
					blurDataURL='/images/loading.png'
					sizes='(max-width: 1080px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			<br />
			<br />

			{/* Body */}
			<div className='tw-mx-0 md:tw-mx-12 lg:tw-mx-44 '>
				<PortableText
					content={data.body}
					serializers={{
						h1: (props) => <h1 className='display-3' {...props} />,
						h2: (props) => <h1 className='display-4' {...props} />,
						h3: (props) => <h1 className='display-5' {...props} />,
						h4: (props) => <h1 className='display-6' {...props} />,
						a: (props) => <h1 className='tw-text-primary' {...props} />,
						li: ({ children }) => <li className='tw-list-item'>{children}</li>,
					}}
				/>
			</div>

			{/* Footer */}
			<Link
				href={'/blog'}
				className='tw-text-primary hover:tw-text-primary tw-no-underline '
			>
				<p className='tw-text-center tw-text-2xl tw-py-8'>See all blog</p>
			</Link>
		</section>
	);
}

async function getData(slug) {
	const res = await sanityClient.fetch(
		`*[_type == "blog" && slug.current == $slug][0]{
			        ...,
					"imageUrl" : mainImage.asset->{url}
			      }`,
		{ slug }
	);
	return {
		res,
		revalidate: 10,
	};
}
