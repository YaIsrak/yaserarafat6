import { createClient as sanityClient } from '@sanity/client';

export default sanityClient({
	projectId: process.env.PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: '2022-02-03',
});
