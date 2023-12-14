import SanityClient from '@/lib/client';
import { ImageResponse } from 'next/og';

export default async function Image({ params }: { params: { slug: string } }) {
	const res = await getData(params.slug);
	const data: Blog = res.res;

	return new ImageResponse(
		(
			<div
				style={{
					height: '100vh',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: `url("${data.imageUrl.url}")`,
					backgroundPositionX: 'center',
					fontSize: 32,
					fontWeight: 900,
				}}
			>
				<h2 style={{ color: 'white', fontSize: '6rem', fontWeight: 'bolder' }}>
					{data.title}
				</h2>
			</div>
		)
	);
}

async function getData(slug: string) {
	const res = await SanityClient.fetch(
		`*[_type == "blog" && slug.current == $slug][0]{
			        ...,
					"imageUrl" : mainImage.asset->{url}
			      }`,
		{ slug }
	);
	return {
		res,
		revalidate: 10,
	};
}
