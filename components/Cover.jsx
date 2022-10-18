import { motion } from 'framer-motion';

export default function Cover({ name }) {
	return (
		<motion.div
			className='flex justify-center items-center bg-dark absolute z-50 w-full overflow-hidden'
			initial={{ height: '100vh' }}
			animate={{ height: '0vh' }}
			transition={{ duration: 1, delay: 0.7, ease: 'easeIn' }}
		>
			<h1 className='display-1 fw-bold'>{name}</h1>
		</motion.div>
	);
}
