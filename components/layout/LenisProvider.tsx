// components/LenisProvider.tsx
'use client';

import Lenis from 'lenis';
import { ReactNode, useEffect } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			lerp: 0.1,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
