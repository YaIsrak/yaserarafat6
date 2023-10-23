import sanityClient from '../../../../client';
import CImage from '../../../CImage';
import Loading from '../../../loading';
import SectionHeader from '../../../SectionHeader';

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
		description: data.body,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/portfolio/digitalart/${params.slug[0]}`,
		},
	};
	// const datas = info.props.datas;
}

export default async function pages({ params }) {
	const res = await getData(params.slug[0]);
	const datas = res.res;

	return (
		<section className='container'>
			<SectionHeader
				href={'/portfolio/digitalart'}
				heading={datas.title}
				body={datas.body}
			/>

			<hr />

			<div className='tw-grid tw-gap-3 tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
				{datas ? (
					<>
						{datas.imageUrl?.map((image, i) => (
							<div className='tw-relative tw-w-full tw-h-full ' key={i}>
								<CImage
									src={image.url}
									alt={datas.title + ' ' + datas.body}
									className='tw-rounded-lg tw-object-contain tw-h-auto tw-w-full'
									priority
								/>
							</div>
						))}
					</>
				) : (
					<Loading />
				)}
			</div>
		</section>
	);
}

async function getData(slug) {
	const res = await sanityClient.fetch(
		`*[_type == "sketchbook" && slug.current == $slug][0]{
			        ...,
					"imageUrl" : imagesGallery[].asset->{url}
			      }`,
		{ slug }
	);
	return {
		res,
		revalidate: 10,
	};
}
