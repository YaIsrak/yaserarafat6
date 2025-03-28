'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function BottomAnimation({
	className,
	children,
	isActive,
}: {
	className?: string;
	isActive?: boolean;
	children?: React.ReactNode;
}) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className='relative'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{children}
			<motion.div
				className={cn(
					'absolute left-0 -bottom-1 h-0.5 bg-dark w-full',
					className,
				)}
				initial={{ scaleX: 0, transformOrigin: 'left' }}
				animate={{
					scaleX: isActive || isHovered ? 1 : 0,
					transformOrigin: isHovered ? 'left' : 'right',
				}}
				transition={{
					duration: 0.5,
					ease: [1, 0, 0, 1],
				}}
			/>
		</div>
	);
}
