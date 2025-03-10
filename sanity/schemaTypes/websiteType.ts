import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'web',
	title: 'Websites',
	type: 'document',
	icon: () => '🌐',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
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
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'github',
			title: 'Github',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'technology',
			title: 'Technology',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'technology' } }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		}),
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage',
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
