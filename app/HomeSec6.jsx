import Portrait1 from '../public/images/Portrait1.jpg';
import Portrait2 from '../public/images/Portrait2.jpg';
import Portrait3 from '../public/images/Portrait3.jpg';
import Portrait4 from '../public/images/Portrait4.jpg';
import CImage from './CImage';

export default function HomeSec6() {
	const array = [Portrait1, Portrait2, Portrait3, Portrait4];
	return (
		<section className='container'>
			<h2 className='display-3 tw-text-center !tw-font-bold'>
				Portraits I&apos;m proud of
			</h2>
			<div className='tw-grid tw-grid-cols-4 tw-gap-3'>
				{array.map((img, i) => (
					<div className='tw-relative tw-w-full tw-h-96' key={i}>
						<CImage src={img} alt={'Portraits'} local key={i} fill />
					</div>
				))}
			</div>
		</section>
	);
}
