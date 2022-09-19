import { motion } from 'framer-motion';
import style from '../styles/button.module.scss';

export default function Button({ children, className, link, ...rest }) {
	return (
		<a href={link}>
			<motion.button
				className={`${className} ${style.button}`}
				{...rest}
				whileHover={{ scale: 0.9 }}
				transition={{ duration: 0.03 }}
			>
				{children}
			</motion.button>
		</a>
	);
}
