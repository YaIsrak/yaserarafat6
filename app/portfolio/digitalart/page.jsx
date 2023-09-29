import Link from 'next/link';
import sanityClient from '../../../client';
import Image from 'next/image';

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'sketchbook']{
					...,
					"imageUrl": mainImage.asset->{ url}
		  		}`
	);
	return {
		props: {
			datas: res,
		},
		revalidate: 10,
	};
}

export default async function art() {
	const info = await getData();
	const datas = info.props.datas;

	return (
		<section className='container'>
			<header>
				{/* Navigation */}
				<Link href={'/portfolio'} className='fs-3 txt-primary'>
					Back
				</Link>
				{/* Text */}
				<h1 className='display-2 fw-bold'>Digital art & concepts</h1>
				<p className='text-muted'>
					A collection of idea on painting and drawings 🎨
				</p>
			</header>
			<hr />
			<div className='sketchbook '>
				<h1>Sketchbook Tour</h1>
				{datas ? (
					<div className='tw-grid tw-gap-3 tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
						{datas?.map((data) => (
							<Card key={data._id} data={data} />
						))}
					</div>
				) : (
					// eslint-disable-next-line react/no-unescaped-entities
					<h1 className='text-danger'>Sorry! can't fatch data</h1>
				)}
			</div>
		</section>
	);
}

function Card({ data }) {
	return (
		<Link className='' href={`portfolio/digitalart/${data.slug.current}`}>
			<div className='class-header'>
				<div className='tw-relative'>
					<div className='tw-absolute tw-z-10 tw-top-0 tw-p-3 txt-light'>
						<h2>{data.title}</h2>
						<p>{data.body}</p>
					</div>
				</div>
			</div>
			<div className='tw-relative tw-w-full tw-h-80'>
				<Image
					className='tw-rounded-lg tw-brightness-50'
					alt='sketchbook-cover'
					src={data.imageUrl.url}
					fill
					sizes='100'
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</Link>
	);
}
