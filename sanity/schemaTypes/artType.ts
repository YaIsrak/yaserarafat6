import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'art',
	title: 'Artwork',
	type: 'document',
	icon: () => '🎨',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: { type: 'category' },
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: 'title',
			media: 'image',
			category: 'category',
		},
		prepare(selection) {
			const { media } = selection;
			return {
				title: selection.title,
				media,
				subtitle: selection.category.name,
			};
		},
	},
});
