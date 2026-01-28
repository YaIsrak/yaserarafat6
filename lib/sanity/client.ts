import { createClient } from 'next-sanity';
import { projectId } from './env';

export const client = createClient({
	projectId,
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: true,
});
