import client from '@/lib/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const res = await client.fetch(
		`*[_type == 'web']{
			...,
			"mainImageUrl": mainImage.asset->{url},
			technology[]->
		}`
	);
	return NextResponse.json(res);
}
