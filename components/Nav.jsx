import NavBars from './NavBars';
import NavBrand from './NavBrand';
import NavMenu from './NavMenu';

export default function Navbar() {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-dark fixed-top bg-stone-900/60 lg:bg-gray-100/0 backdrop-blur-lg lg:backdrop-blur-none'
			id='navbar'
		>
			<div className='container'>
				<NavBrand />
				<NavBars />
				<NavMenu />
			</div>
		</nav>
	);
}
