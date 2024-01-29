import client from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const res = await client.fetch(
		`*[_type == 'blog']{
            ...,
            "imageUrl": mainImage.asset->{ url}
        }`
	);

	return NextResponse.json(res);
}
