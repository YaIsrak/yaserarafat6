import SanityClient from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const data = await SanityClient.fetch(`*[_type == 'blog']{
        ...,
        "imageUrl": mainImage.asset->{ url}
    }`);
	return NextResponse.json(data);
}
