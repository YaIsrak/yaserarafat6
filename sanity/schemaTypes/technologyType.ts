import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'technology',
	title: 'Technology',
	type: 'document',
	icon: () => '🔧',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
		prepare(selection) {
			const { media } = selection;
			return {
				title: selection.title,
				media,
			};
		},
	},
});
