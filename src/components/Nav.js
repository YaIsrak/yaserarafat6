import '../scss/nav.css';
import Navlink from './Navlink';

export default function Navbar() {
	const navLinks = [
		{ name: 'Home 🏘️', path: '/' },
		{ name: 'About 😄', path: '/about' },
		{ name: 'Portfolio 🎨', path: '/portfolio' },
		{ name: 'Notes 📔', path: '/blog' },
	];

	return (
		<nav className='navbar navbar-expand-lg navbar-light fixed-top' id='navbar'>
			<div className='container'>
				<a className='navbar-brand fw-bold' href='/'>
					Israk
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='mx-auto'></div>
					<ul className='navbar-nav'>
						{navLinks.map((navLink, index) => (
							<Navlink name={navLink.name} path={navLink.path} key={index} />
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
