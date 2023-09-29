import Link from 'next/link';

export default function Navlink({ name, path, className }) {
	return (
		<li className='nav-item'>
			<Link href={path} className={`nav-link ${className}`}>
				{name}
			</Link>
		</li>
	);
}
