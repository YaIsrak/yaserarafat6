import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '../../../../client';

export default async function pages({ params }) {
	const datas = await getData(params.slug[0]);

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
					{datas.imageUrl?.map((image, i) => (
						<div className='tw-relative tw-w-full tw-h-96' key={i}>
							<h1>hello</h1>
							<Image
								className='tw-rounded-lg'
								alt='Sketch'
								src={image.url}
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

async function getData(slug) {
	return sanityClient.fetch(
		`*[_type == "sketchbook" && slug.current == $slug][0]{
        ...,
		"imageUrl" : imagesGallery[].asset->{url}
      }`,
		{ slug }
	);
}
