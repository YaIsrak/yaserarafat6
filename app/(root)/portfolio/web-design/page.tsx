import WebPost from '@/components/Card/WebPost';
import sanityClient from '@/lib/client';

export default async function Webdesign() {
	const info = await getData();
	const datas = info.props.datas;

	return (
		<>
			{datas ? (
				<div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3'>
					{datas?.map((data: WebDesign) => (
						<WebPost key={data._id} data={data} />
					))}
				</div>
			) : (
				<h1>nai</h1>
			)}
		</>
	);
}

async function getData() {
	const res = await sanityClient.fetch(
		`*[_type == 'web']{
			...,
			"mainImageUrl": mainImage.asset->{url},
			technology[]->
		}`
	);
	return {
		props: {
			datas: res,
		},
	};
}
