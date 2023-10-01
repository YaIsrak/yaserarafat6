import Link from 'next/link';
import React from 'react';

export default function SectionHeader({ href, heading, body }) {
	return (
		<header>
			{/* Navigation */}
			<Link href={href} className='fs-3 txt-primary'>
				Back
			</Link>
			{/* Text */}
			<h1 className='display-2 fw-bold'>{heading}</h1>
			<p className='text-muted'>{body}</p>
		</header>
	);
}
