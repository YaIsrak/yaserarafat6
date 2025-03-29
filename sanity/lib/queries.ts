import { defineQuery } from 'next-sanity';

export const WEB_DESIGN_QUERY = defineQuery(`*[_type == 'web' ]{
          ...,
          "mainImageUrl": mainImage.asset->{url},
          technology[]->
        }`);

export const FEATURED_WEB_QUERY =
	defineQuery(`*[_type == 'web' && featured == true]{
                ...,
                "mainImageUrl": mainImage.asset->{url},
                technology[]->
              }`);
