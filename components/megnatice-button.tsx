'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function MagneticButton({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLButtonElement | null>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: any) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX, y: middleY });
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;

	return (
		<motion.button
			className={cn('relative', className)}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.1 }}>
			{children}
		</motion.button>
	);
}
