import sanityClient from '../../../../client';
import CImage from '../../../CImage';
import Loading from '../../../loading';
import SectionHeader from '../../../SectionHeader';

export async function generateMetadata({ params }) {
	const info = await getData(params.slug[0]);
	if (!info)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: info.props.datas.title,
		description: info.props.datas.body,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/portfolio/digitalart/${params.slug[0]}`,
		},
	};
	// const datas = info.props.datas;
}

export default async function pages({ params }) {
	const info = await getData(params.slug[0]);
	const datas = info.props.datas;

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
							<div className='tw-relative tw-w-full tw-h-[100vh] md:tw-h-96' key={i}>
								<CImage
									src={image.url}
									alt={datas.title + ' ' + datas.body}
									className={'tw-rounded-lg'}
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
		props: {
			datas: res,
		},
	};
}
