import sanityClient from '../../../../client';

export async function GET(req, { params }) {
	const slug = params.slug;

	const res = await sanityClient.fetch(
		`*[_type == 'blog' && slug.current == "${slug}"]{
			...,
			"imageUrl": mainImage.asset->{ url},
		}`
	);
	return Response.json(res);
}
