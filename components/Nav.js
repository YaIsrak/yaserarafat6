// import style from '../styles/nav.scss';
import { useRouter } from 'next/router';
import Navlink from './Navlink';

export default function Navbar() {
	const router = useRouter();
	const navLinks = [
		{ name: 'Home 🏘️', path: '/' },
		{ name: 'About 😄', path: '/about' },
		{ name: 'Portfolio 🎨', path: '/portfolio' },
	];

	return (
		<nav
			className='navbar navbar-expand-lg navbar-light fixed-top bg-gray-100 lg:bg-gray-100/0'
			id='navbar'
		>
			<div className='bg-red-900 bg-gray-100'></div>
			<div className='container'>
				{/* Nav brand */}
				<a
					className='navbar-brand fw-bold font2 fs-2 !text-indigo-500'
					href='/'
				>
					Israk
				</a>
				{/* Menu opening Button */}
				<button
					className='navbar-toggler text-gray-900'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='mx-auto'></div>
					<ul className='navbar-nav'>
						{/* Navlink */}
						{navLinks.map((navLink, index) => (
							<Navlink
								name={navLink.name}
								path={navLink.path}
								key={index}
								className={`
								${router.pathname === navLink.path && 'active'}
								`}
							/>
						))}
						<li className='nav-item'>
							<a
								className="nav-link text-'gray-100 after:bg-gray-100 hover:text-indigo-500"
								href='mailto:yaserarafatisrak@gmail.com'
							>
								Contact 📧
							</a>
						</li>
						{/* Navlink end */}
					</ul>
				</div>
			</div>
		</nav>
	);
}
