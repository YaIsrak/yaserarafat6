// import groq from 'groq';
import sanityClient from '../../client';

const feedQuery = `*[_type == 'web']{
    ...,
    "imageUrl": mainImage.asset->{ url}
  }`;

export default async function handler(req, res) {
	const data = await sanityClient.fetch(feedQuery);
	res.status(200).json({ data });
}
