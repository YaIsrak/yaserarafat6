import client from "./client";

export async function getWeb() {
  const res = await client.fetch(
    `*[_type == 'web']{
      ...,
      "mainImageUrl": mainImage.asset->{url},
      technology[]->
    }`,
  );

  return res;
}

export async function getNSFW() {
  const res = await client.fetch(
    `*[_type == 'nsfw'] | order(_createdAt desc)
    {
        "id": _id,
        title,
        'imageUrl': mainImage.asset->url
    } `,
  );
  return res;
}
