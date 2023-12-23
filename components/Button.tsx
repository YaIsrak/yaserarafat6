'use client';

import { motion } from 'framer-motion';
import React from 'react';
interface Button {
	children: React.ReactNode;
	className?: string;
	link: string;
}

export default function Button({
	children,
	className,
	link,
	...props
}: Button) {
	return (
		<a href={link}>
			<motion.button
				className={`${className} tw-text- lg:tw-text-base tw-rounded-2xl tw-text-center tw-text-light tw-border tw-border-primary tw-border-dashed tw-px-5 tw-py-3 hover:tw-bg-primary`}
				whileHover={{ y: -5 }}
				transition={{ duration: 0.03 }}
				{...props}
			>
				{children}
			</motion.button>
		</a>
	);
}
