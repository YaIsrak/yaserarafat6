import Sketchbooks from '../../sketchbooks';
import SectionHeader from '../../SectionHeader';

export default async function art() {
	return (
		<section className='container'>
			<SectionHeader
				href='/portfolio'
				heading='Digital art & concepts'
				body='A collection of idea on painting and drawings 🎨'
			/>
			<hr />
			<h1 className='display-3'>Sketchbooks tour</h1>
			<Sketchbooks />
		</section>
	);
}
