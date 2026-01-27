'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/not-found/Scene'), {
	ssr: false,
});

export default function NotFound() {
	return (
		<main className='relative h-screen'>
			<Scene />
		</main>
	);
}
