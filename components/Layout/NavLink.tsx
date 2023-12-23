import Link from 'next/link';
interface Props {
	name: string;
	path: string;
	className?: string;
}

export default function Navlink({ name, path, className }: Props) {
	return (
		<li className='nav-item'>
			<Link
				href={path}
				className={`nav-link text-white/50 no-underline ${className}`}
			>
				{name}
			</Link>
		</li>
	);
}
