'use client';

import Scene from './Scene';
import SmoothProvider from './SmoothProvider';

export default function TestPage() {
	return (
		<SmoothProvider>
			<div>
				<div className='h-[50vh]' />
				<Scene />
				<div className='h-[50vh]' />
			</div>
		</SmoothProvider>
	);
}
