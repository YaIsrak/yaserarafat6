'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function ButtonEffect({
	children,
	className,
	hoverEffect = -3,
	scale = 0.95,
}: {
	children: React.ReactNode;
	className?: string;
	hoverEffect?: number;
	scale?: number;
}) {
	return (
		<motion.div
			initial={{ y: 0 }}
			whileHover={{ y: hoverEffect }}
			whileTap={{ scale: scale }}
			className={className}>
			{children}
		</motion.div>
	);
}
