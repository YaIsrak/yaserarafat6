interface Base {
	_id: string;
	_type: string;
	_rev: string;
	_createdAt: string;
	_updatedAt: string;
}

interface SketchBook extends Base {
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

interface WebDesign extends Base {
	title: string;
	url: string;
	mainImageUrl: { url: string };
	body: any;
	slug: { current: string; _type: string };
}

interface Blog extends Base {
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
