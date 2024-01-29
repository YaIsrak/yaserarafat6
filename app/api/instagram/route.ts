import { NextResponse } from 'next/server';

export async function GET() {
	const data = await fetch(
		`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{id,media_url,thumbnail_url,media_type}&access_token=${process.env.INSTAGRAM_API_TOKEN}`
	).then((data) => data.json());

	return NextResponse.json(data);
}
