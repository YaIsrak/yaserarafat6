import SectionHeader from '@/components/Section/SectionHeader';
import React from 'react';

export default function Digitallayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='container'>
			<SectionHeader href='/portfolio' heading='My Web Development Portfolio'>
				lorem
			</SectionHeader>
			<hr />
			{children}
		</section>
	);
}
