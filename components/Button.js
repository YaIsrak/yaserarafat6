'use client';

import { motion } from 'framer-motion';
// import style from '../styles/button.module.scss';

export default function Button({ children, className, link, ...rest }) {
	return (
		<a href={link}>
			<motion.button
				className={`${className} tw-text-xs lg:tw-text-base tw-rounded-2xl tw-text-center tw-text-light tw-border tw-border-primary tw-border-dashed tw-px-5 tw-py-3 hover:tw-bg-primary`}
				whileHover={{ y: -5 }}
				transition={{ duration: 0.03 }}
				{...rest}
			>
				{children}
			</motion.button>
		</a>
	);
}
