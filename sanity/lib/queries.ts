import { defineQuery } from 'next-sanity';

export const WEB_DESIGN_QUERY =
	defineQuery(`*[_type == 'web'] | order(_createdAt desc) {
          ...,
          "mainImageUrl": mainImage.asset->{url},
          technology[]->
        }`);

export const FEATURED_WEB_QUERY =
	defineQuery(`*[_type == 'web' && featured == true] | order(_createdAt desc){
                ...,
                "mainImageUrl": mainImage.asset->{url},
                technology[]->
              }`);

export const BLOGS_QUERY = defineQuery(
	`*[_type == 'blog' ] | order(_createdAt desc)`,
);

export const BLOG_QUERY = defineQuery(
	`*[_type == 'blog' && slug.current == $slug][0]`,
);
