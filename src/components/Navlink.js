import { NavLink as NavigationLink } from 'react-router-dom';

export default function Navlink({ name, path, className }) {
	return (
		<li className='nav-item'>
			<NavigationLink
				className={`nav-link ${className}`}
				to={path}
				data-background='red'>
				{name}
			</NavigationLink>
		</li>
	);
}
