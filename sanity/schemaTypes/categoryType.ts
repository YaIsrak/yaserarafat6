import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	icon: () => '🐛',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'show',
			title: 'Show',
			type: 'boolean',
		}),
	],

	initialValue: {
		show: true,
	},
	preview: {
		select: {
			title: 'name',
			show: 'show',
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: selection.show ? 'Show' : 'Hide',
			};
		},
	},
});
