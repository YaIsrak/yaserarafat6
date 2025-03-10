import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'nsfw',
	title: 'NSFW Art',
	type: 'document',
	icon: () => '🔞',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
		},
	},
});
