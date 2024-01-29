import client from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const res = await client.fetch(
		`*[_type == 'sketchbook']{
			...,
			"mainImageUrl": mainImage.asset->{url},
		} | order(title desc)`
	);
	return NextResponse.json(res);
}
