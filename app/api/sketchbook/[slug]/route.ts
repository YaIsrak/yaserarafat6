import client from '@/lib/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	request: NextRequest,
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
