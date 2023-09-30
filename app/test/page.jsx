import Sketchbooks from '../sketchbooks';
import sanityClient from '../../client';

export default async function page() {
	const info = await getData();
	const datas = info.props.datas;

	return (
		<div>
			<Sketchbooks datas={datas} />
		</div>
	);
}

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
