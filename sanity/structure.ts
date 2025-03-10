import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('web')
		.items([
			S.documentTypeListItem('technology').title('Technologies'),
			S.documentTypeListItem('web').title('Websites'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() && !['technology', 'web'].includes(item.getId()!),
			),
		]);
