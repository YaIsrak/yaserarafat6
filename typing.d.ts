interface Base {
	_id: string;
	_type: string;
	_rev: string;
	_createdAt: string;
	_updatedAt: string;
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
