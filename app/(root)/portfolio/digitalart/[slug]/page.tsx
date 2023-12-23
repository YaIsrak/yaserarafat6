import CustomImage from '@/components/CustomImage';
import Loading from '@/components/Loading';
import sanityClient from '@/lib/client';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const res = await getData(params.slug[0]);
	const data: SketchBook = res.res;
	if (!data)
		return {
			title: 'Not found',
			description: 'This page is not found',
		};

	return {
		title: data.title,
		description: data.body,
		alternates: {
			canonical: `https://yaserisrak.vercel.app/portfolio/digitalart/${params.slug}`,
		},
	};
}

export default async function pages({ params }: { params: { slug: string } }) {
	const res = await getData(params.slug);
	const datas: SketchBook = res.res;
	console.log(datas);

	return (
		<div className='tw-grid tw-gap-3 tw-grid-cols-1 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
			{datas ? (
				<>
					{datas.imageUrl?.map((image: { url: string }, i: any) => (
						<div className='tw-relative tw-w-full tw-h-full ' key={i}>
							<CustomImage
								src={image.url}
								alt={datas.title + ' ' + datas.body}
								className='tw-rounded-lg tw-object-contain tw-h-auto tw-w-full'
								local={false}
							/>
						</div>
					))}
				</>
			) : (
				<Loading />
			)}
		</div>
	);
}

async function getData(slug: string) {
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
