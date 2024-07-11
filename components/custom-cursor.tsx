'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	const [cursonVariant, setCursonVariant] = useState('default');

	useEffect(() => {
		const mouseMove = (e: any) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
		},
		text: {
			x: mousePosition.x - 10,
			y: mousePosition.y - 10,
			backgroundColor: 'red',
		},
	};
	return (
		<motion.div
			className='bg-primary/50 size-8 rounded-full fixed top-0 left-0 cursor-none z-[10000000]'
			variants={variants}
			animate={cursonVariant}
			whileTap={{
				scale: 0.5,
			}}
			transition={{
				duration: 0,
			}}></motion.div>
	);
}
