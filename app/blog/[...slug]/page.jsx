import Link from 'next/link';
import PortableText from 'react-portable-text';
import sanityClient from '../../../client';
import CImage from '../../CImage';

export default async function page({ params }) {
	const res = await getData(params.slug[0]);
	const data = res.res;
	return (
		<section className='container'>
			{/* header */}
			<header className='text-center'>
				<h1 className='t'>{data.title}</h1>
				<p>
					<p className='tw-text-light/50'>{data.publishedAt}</p>
				</p>
			</header>

			{/* Image section */}
			<div className='tw-relative tw-w-full tw-h-96'>
				<CImage
					src={data.imageUrl.url}
					alt={data.title}
					className='tw-rounded-xl'
				/>
			</div>

			<br />
			<br />

			{/* Body */}
			<PortableText content={data.body} />

			<Link
				href={'/blog'}
				className='tw-text-primary hover:tw-text-primary tw-no-underline'
			>
				<h3 className='tw-text-center'>See all blog</h3>
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
	};
}
