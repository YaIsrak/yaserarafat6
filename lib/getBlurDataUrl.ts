import { getPlaiceholder } from 'plaiceholder';

export async function getBlurDataUrl(imageSrc: string) {
	const buffer = await fetch(imageSrc).then(async (res) =>
		Buffer.from(await res.arrayBuffer()),
	);

	const { base64 } = await getPlaiceholder(buffer);

	return base64;
}
