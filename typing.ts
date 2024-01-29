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
