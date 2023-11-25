import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: process.env.PROJECT_ID,
	dataset: 'production',
	useCdn: 'true',
	apiVersion: '2022-02-03',
});
