import { defineQuery } from 'next-sanity';

export const WEB_DESIGN_QUERY = defineQuery(`*[_type == 'web']{
          ...,
          "mainImageUrl": mainImage.asset->{url},
          technology[]->
        }`);
