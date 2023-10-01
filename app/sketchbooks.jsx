import Link from 'next/link';
import sanityClient from '../client';
import CImage from './CImage';

export default async function Sketchbooks() {
	const info = await getData();
	const datas = info.props.datas;

	return (
		<div className=''>
			<div className='tw-grid tw-grid-cols-2 tw-gap-4 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
				{datas?.map((data) => (
					<Card key={data._id} data={data} />
				))}
			</div>
		</div>
	);
}

function Card({ data }) {
	return (
		<div className='tw-relative'>
			<Link
				className=' tw-text-light tw-no-underline hover:tw-text-light'
				href={`digitalart/${data.slug.current}`}
			>
				<div className='wrapper'>
					<div className='blur-overlay tw-bg-dark tw-absolute tw-z-10 tw-h-full tw-w-full tw-opacity-30 hover:tw-opacity-5'></div>
					<div className='img tw-relative tw-h-80'>
						<CImage src={data.imageUrl.url} alt='Sketchbooks-cover' />
					</div>
					<div className='tw-absolute tw-bottom-0 tw-ps-3 tw-z-20'>
						<h1 className='fs-1'>{data.title}</h1>
						<p className=''>{data.body}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'sketchbook']{
			...,
					"imageUrl": mainImage.asset->{ url},
		  		}`
	);
	return {
		props: {
			datas: res,
		},
		revalidate: 10,
	};
}