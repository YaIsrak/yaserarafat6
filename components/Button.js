import { motion } from 'framer-motion';
import style from '../styles/button.module.scss';

export default function Button({ children, className, link, ...rest }) {
	return (
		<a href={link}>
			<motion.button
				className={`${className} ${style.button} tw-text-xs lg:tw-text-base tw-rounded-2xl`}
				{...rest}
				whileHover={{ y: -5 }}
				transition={{ duration: 0.03 }}
			>
				{children}
			</motion.button>
		</a>
	);
}
