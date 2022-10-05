import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'nr6l3kvx',
	dataset: 'production',
	useCdn: 'true',
	apiVersion: '2022-02-03',
});
