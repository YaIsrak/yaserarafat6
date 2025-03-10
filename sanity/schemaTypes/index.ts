import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import nsfwType from './nsfwType';
import technologyType from './technologyType';
import websiteType from './websiteType';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, technologyType, websiteType, nsfwType],
};
