import Link from 'next/link';
import Sketchbooks from '../../sketchbooks';

export default async function art() {
	return (
		<section className='container'>
			<header>
				{/* Navigation */}
				<Link href={'/portfolio'} className='fs-3 txt-primary'>
					Back
				</Link>
				{/* Text */}
				<h1 className='display-2 fw-bold'>Digital art & concepts</h1>
				<p className='text-muted'>
					A collection of idea on painting and drawings 🎨
				</p>
			</header>
			<hr />
			<Sketchbooks />
		</section>
	);
}
