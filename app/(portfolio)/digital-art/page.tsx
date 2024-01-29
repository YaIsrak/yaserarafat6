import InstagramFeed from '../_components/InstagramFeed';
import SectionHeader from '../_components/SectionHeader';
import Sketchbook from '../_components/Sketchbook';

export default function page() {
	return (
		<section className='section'>
			<SectionHeader
				header='Digital art & concepts'
				description='A collection of idea on painting and drawings 🎨'
			/>
			<div className='container'>
				{/* Instagram feed */}
				<div className='my-6'>
					<InstagramFeed />
				</div>

				{/* SketchBook tour */}
				<div className='pt-6'>
					<h1 className='font-light text-center lg:text-7xl'>Sketchbooks tour</h1>
					<Sketchbook />
				</div>
			</div>
		</section>
	);
}
