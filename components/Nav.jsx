import Logo from '../public/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navlink from './Navlink';
import Link from 'next/link';

export default function Navbar() {
	const router = useRouter();
	const navLinks = [
		{ name: 'Home 🏘️', path: '/' },
		{ name: 'About 😄', path: '/about' },
		{ name: 'Portfolio 🎨', path: '/portfolio' },
	];

	return (
		<nav
			className='navbar navbar-expand-lg navbar-dark fixed-top bg-stone-900/60 lg:bg-gray-100/0 backdrop-blur-lg lg:backdrop-blur-none'
			id='navbar'
		>
			<div className='container'>
				{/* Nav brand */}
				<Link href={'/'}>
					<a className='navbar-brand fw-bold fs-2 font3'>
						{/* Israk */}
						<div className='w-20 md:w-32'>
							<Image src={Logo} placeholder='blur' alt='Logo' className='' />
						</div>
					</a>
				</Link>
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
					{/* <label for='check navbar-toogler-icon'>
						<input type='checkbox' id='check' />
						<span></span>
						<span></span>
						<span></span>
					</label> */}
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

						{/* Drop down */}
						{/* <li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Porfolio
							</a>
							<ul className='dropdown-menu !bg-stone-900/60 lg:bg-gray-100/0 !backdrop-blur'>
								<li>
									<a className='dropdown-item text-secondary' href='#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item text-secondary' href='#'>
										Another action
									</a>
								</li>
							</ul>
						</li> */}
						{/* Drop End */}
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
