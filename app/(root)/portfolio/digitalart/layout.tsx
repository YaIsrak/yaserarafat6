import SectionHeader from '@/components/Section/SectionHeader';
import React from 'react';

export default function Digitallayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='container'>
			<SectionHeader href='/portfolio' heading='Digital art & concepts'>
				A collection of idea on painting and drawings 🎨
			</SectionHeader>
			<hr />
			{children}
		</section>
	);
}
