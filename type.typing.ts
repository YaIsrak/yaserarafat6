export interface NavLinkProps {
	name: string;
	href: string;
	dropDownContent?: NavLinkProps[];
}

export interface InstagramMediaProps {
	id: string;
	media_type: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
	media_url: string;
	trumbnail_url: string;
	permalink: string;
	timestamp: string;
	caption: string;
	children: {
		data: InstagramMediaProps[];
	};
}

export interface InstagramPostProps {
	data: InstagramMediaProps[];
	paging: {
		cursor: {
			before: string;
			after: string;
		};
		next: string;
		previous: string;
	};
}

interface Base {
	_id: string;
	_type: string;
	_rev: string;
	_createdAt: string;
	_updatedAt: string;
}

export interface SketchBookProps extends Base {
	title: string;
	body: string;
	imageUrl: { url: string }[];
	slug: { current: string; _type: string };
	mainImage: {
		asset: {
			_rev: string;
			_type: string;
		};
	};
	mainImageUrl: { url: string };
}
export interface WebDesignProps extends Base {
	title: string;
	url: string;
	github: string;
	mainImageUrl: { url: string };
	technology: Technology[];
	slug: { current: string; _type: string };
}

export interface Technology extends Base {
	name: string;
}

export interface BlogProps extends Base {
	title: string;
	description: string;
	slug: { current: string; _type: string };
	body: any;
	mainImage: {
		asset: {
			_rev: string;
			_type: string;
		};
	};
	imageUrl: { url: string };
	publishedAt: string;
}
