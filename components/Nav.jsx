import { useRouter } from 'next/router';
import NavBrand from './NavBrand';
import Navlink from './Navlink';
import { Bars3BottomRightIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

export default function Navbar() {
	const router = useRouter();
	const navLinks = [
		{ name: 'Home 🏘️', path: '/' },
		{ name: 'About 😄', path: '/about' },
		{ name: 'Portfolio 🎨', path: '/portfolio' },
	];

	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top tw-bg-stone-900/60 lg:tw-bg-gray-100/0 tw-backdrop-blur-lg lg:tw-backdrop-blur-none'>
			<div className='container'>
				<NavBrand />

				{/* Bars */}
				<motion.button
					className='navbar-toggler text-gray-900 shadow-none border-0'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
					initial={{ scale: 1 }}
					whileTap={{ scale: 0.8 }}
				>
					<span className='navbar-toggler-icon !tw-bg-none'>
						<Bars3BottomRightIcon className='h-8 w-8 text-gray-400 hover:text-gray-50' />
					</span>
				</motion.button>

				{/* Menu */}
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<div className='mx-auto'></div>
					<ul className='navbar-nav'>
						{/* Navlink */}
						{navLinks.map((navLink, index) => (
							<Navlink
								name={navLink.name}
								path={navLink.path}
								key={index}
								className={`${router.pathname === navLink.path && 'active'}`}
							/>
						))}
						<li className='nav-item'>
							<a className='nav-link' href='mailto:yaserarafatisrak@gmail.com'>
								Contact 📧
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
