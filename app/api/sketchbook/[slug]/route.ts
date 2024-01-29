import client from '@/lib/client';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(
	request: NextApiRequest,
	{ params }: { params: { slug: string } }
) {
	const { slug } = params;
	const res = await client.fetch(
		`*[_type == "sketchbook" && slug.current == $slug][0]{
            ...,
            "imageUrl" : imagesGallery[].asset->{url}
          }`,
		{ slug }
	);

	return NextResponse.json(res);
}
