'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import NavBrand from './NavBrand';

export default function NavigationBar() {
	const router = usePathname();

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
						<Menu className='h-8 w-8 text-gray-400 hover:text-gray-50' />
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
								className={`${router === navLink.path && 'active'}`}
							/>
						))}
						<li className='nav-item'>
							<a
								target={'_blank'}
								className='nav-link'
								href='https://linktr.ee/yaserisrak'
							>
								Contact 📧
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

import { navLinks } from '@/lib/constantData';
import Link from 'next/link';

export function Navlink({
	name,
	path,
	className,
}: {
	name: string;
	path: string;
	className?: string;
}) {
	return (
		<li className='nav-item'>
			<Link href={path} className={`nav-link ${className}`}>
				{name}
			</Link>
		</li>
	);
}
