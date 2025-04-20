'use client';

import BottomAnimation from '@/components/ui/BottomAnimation';
import { CATEGORY_QUERYResult } from '@/sanity.types';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CategoryList({
	q,
	categories,
}: {
	q?: string;
	categories: CATEGORY_QUERYResult;
}) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClick = (category: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('q', category);

		router.push(`?${params.toString().toLocaleLowerCase()}`);
	};

	const clearQuery = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete('q');

		router.push(`?${params.toString()}`);
	};

	return (
		<>
			<BottomAnimation isActive={q == undefined}>
				<p
					className='cursor-pointer'
					onClick={clearQuery}>
					All
				</p>
			</BottomAnimation>
			{categories.map((category) => (
				<BottomAnimation
					key={category._id}
					isActive={
						q?.toLocaleLowerCase() == category.name?.toLocaleLowerCase()
					}>
					<p
						key={category._id}
						onClick={() => handleClick(category.name!)}
						className='cursor-pointer'>
						{category.name}
					</p>
				</BottomAnimation>
			))}
		</>
	);
}
