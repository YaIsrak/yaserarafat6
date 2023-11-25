import sanityClient from '@/lib/client';
import Card from '../Card/SketchbookCard';

export default async function Sketchbooks({ homepage }: { homepage: boolean }) {
	const res = await getData();
	const datas: SketchBook[] = res.res;

	return (
		<div className=''>
			<div className='tw-grid tw-grid-cols-2 tw-gap-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
				{datas?.map((data: SketchBook) => (
					<Card key={data._id} data={data} homepage={homepage} />
				))}
			</div>
		</div>
	);
}

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'sketchbook']{
			...,
			"mainImageUrl": mainImage.asset->{url},
		} | order(title desc)`
	);
	return { res, revalidate: 10 };
}
