'use client';

import { Canvas } from '@react-three/fiber';
import Model from './Model';

export default function Scene() {
	return (
		<div className='relative h-screen w-full border'>
			<Canvas>
				<Model />
			</Canvas>
		</div>
	);
}
