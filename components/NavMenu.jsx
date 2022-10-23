import React from 'react';
import Navlink from './Navlink';
import { useRouter } from 'next/router';

export default function NavMenu() {
	const router = useRouter();
	const navLinks = [
		{ name: 'Home 🏘️', path: '/' },
		{ name: 'About 😄', path: '/about' },
		{ name: 'Portfolio 🎨', path: '/portfolio' },
	];

	return (
		<div className='collapse navbar-collapse' id='navbarNav '>
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
	);
}
