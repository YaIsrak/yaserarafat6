import React from 'react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function NavBars() {
	return (
		<motion.button
			className='navbar-toggler text-gray-900 shadow-none border-0'
			type='button'
			data-bs-toggle='collapse'
			data-bs-target='#navbarNav'
			aria-controls='navbarNav'
			aria-expanded='false'
			aria-label='Toggle navigation'
			initial={{ scale: 1 }}
			whileTap={{ scale: 0.8 }}
		>
			<Bars3BottomRightIcon className='h-8 w-8 text-gray-400 hover:text-gray-50' />
			{/* <span className='navbar-toggler-icon'></span> */}
		</motion.button>
	);
}
