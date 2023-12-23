import SanityClient from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const data = await SanityClient.fetch(
		`*[_type == 'web']{
			...,
			"mainImageUrl": mainImage.asset->{url},
			technology[]->
		}`
	);
	return NextResponse.json(data);
}
