import sanityClient from '../../../client';

export async function GET() {
	const res = await sanityClient.fetch(
		`*[_type == 'blog']{
			...,
			"imageUrl": mainImage.asset->{ url},
		} | order(title desc)`
	);

	return Response.json(res);
}
