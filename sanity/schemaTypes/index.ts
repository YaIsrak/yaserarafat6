import { type SchemaTypeDefinition } from 'sanity';

import artType from './artType';
import { blockContentType } from './blockContentType';
import blogType from './blogType';
import categoryType from './categoryType';
import technologyType from './technologyType';
import websiteType from './websiteType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		technologyType,
		websiteType,
		categoryType,
		artType,
		blogType,
	],
};
