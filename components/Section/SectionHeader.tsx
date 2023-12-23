import Link from 'next/link';
import React from 'react';

export default function SectionHeader({
	href,
	heading,
	children,
}: {
	href: string;
	heading: string;
	children: React.ReactNode;
}) {
	return (
		<header>
			{/* Navigation */}
			<Link href={href} className='fs-3 txt-primary'>
				Back
			</Link>
			{/* Text */}
			<h1 className='display-2 fw-bold'>{heading}</h1>
			<p className='text-muted'>{children}</p>
		</header>
	);
}
