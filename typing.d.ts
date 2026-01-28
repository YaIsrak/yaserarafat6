interface Base {
	_id: string;
	_type: string;
	_rev: string;
	_system: {
		base: {
			id: string;
			rev: string;
		};
	};
	_createdAt: string;
	_updatedAt: string;
}

interface PortableTextSpan {
	_key: string;
	_type: 'span';
	text: string;
	marks: string[];
}

interface PortableTextBlock {
	_key: string;
	_type: 'block';
	style: string;
	children: PortableTextSpan[];
	markDefs: any[];
}

/* ---------- Image ---------- */
interface SanityImage {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
	crop?: {
		_type: 'sanity.imageCrop';
		top: number;
		bottom: number;
		left: number;
		right: number;
	};
	hotspot?: {
		_type: 'sanity.imageHotspot';
		x: number;
		y: number;
		width: number;
		height: number;
	};
}

/* ---------- Technology ---------- */
interface Technology extends Base {
	name: string;
	image: SanityImage;
}

/* ---------- Slug ---------- */
interface Slug {
	_type: 'slug';
	current: string;
}

/* ---------- Main Document ---------- */
interface WebProject extends Base {
	title: string;
	description: PortableTextBlock[];
	featured: boolean;
	github: string;
	url: string;

	slug: Slug;

	mainImage: SanityImage;
	mainImageUrl: {
		url: string;
	};

	technology: Technology[];
}
