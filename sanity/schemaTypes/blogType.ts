import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'blog',
	title: 'Blog',
	type: 'document',
	icon: () => '🔧',
	fields: [
		defineField({
			name: 'title',
			title: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
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
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }, { type: 'image' }],
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: 'title',
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
