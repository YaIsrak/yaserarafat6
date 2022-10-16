import { motion } from 'framer-motion';
import style from '../styles/button.module.scss';

export default function Button({ children, className, link, ...rest }) {
	return (
		<a href={link}>
			<motion.button
				className={`${className} ${style.button} text-xs lg:text-base rounded-2xl`}
				{...rest}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ y: -5 }}
				transition={{ duration: 0.03 }}
			>
				{children}
			</motion.button>
		</a>
	);
}
