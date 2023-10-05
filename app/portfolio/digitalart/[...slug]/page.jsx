import Link from 'next/link';
import sanityClient from '../../../../client';
import CImage from '../../../CImage';
import Loading from '../../../loading';

export default async function pages({ params }) {
	const info = await getData(params.slug[0]);
	const datas = info.props.datas;

	return (
		<section className=''>
			<header className=''>
				<div className='container'>
					{/* Navigation */}
					<Link href={'/portfolio/digitalart'} className='fs-3 txt-primary'>
						Back
					</Link>
					{/* Text */}
					<h1 className='display-2 fw-bold'>{datas.title}</h1>
				</div>
			</header>
			{/* <hr /> */}

			<div className='container'>
				<div className='tw-grid tw-gap-3 tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
					{datas ? (
						<>
							{datas.imageUrl?.map((image, i) => (
								<div className='tw-relative tw-w-full tw-h-96' key={i}>
									<CImage
										src={image.url}
										alt={''}
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
