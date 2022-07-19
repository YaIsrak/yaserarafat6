import '../scss/nav.css';
import Navlink from './Navlink';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='navbar'>
			<div className='container'>
				<a className='navbar-brand' href='index.html'>
					ISRAK
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
						<Navlink name='Home' path='/' />
						<Navlink name='About' path='/about' />
						<Navlink name='Portfolio' path='/portfolio' />
						<Navlink name='Contact' path='mailto:yaserarafatisrak@gmail.com' />
					</ul>
				</div>
			</div>
		</nav>
	);
}
