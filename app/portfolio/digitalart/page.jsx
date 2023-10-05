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
			<div className='tw-py-4'>
				<h1 className='display-3 tw-text-center'>Sketchbooks tour</h1>
				<Sketchbooks />
			</div>
		</section>
	);
}
