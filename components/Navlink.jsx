import Link from 'next/link';

export default function Navlink({ name, path, className }) {
	return (
		<li className='nav-item'>
			<Link href={path}>
				<a className={`nav-link ${className}`}>{name}</a>
			</Link>
		</li>
	);
}
