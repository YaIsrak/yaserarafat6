import { useContext } from 'react';
import { ThemeContext } from '../App';
import Button from './Button';

export default function PortfolioSec3() {
	const { theme } = useContext(ThemeContext);
	const designPhotos = [
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cf9d73150161831.62f4bcf33a994.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa3bc2150161881.62f4bd3984d06.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5f10dd150161463.62f4bb623da36.jpg',
	];

	return (
		<section
			className={`sec2 bg-${theme.bg} text-${theme.text}`}
			id='portfolio'>
			<div className='container'>
				<h1 className='h1 fw-bold'>Graphic Design</h1>
				<div className='row art-gallery my-6'>
					{designPhotos.map((designPhoto) => (
						<img
							key={designPhoto}
							src={designPhoto}
							alt='desgin'
							className='col-4 img-fluid'
						/>
					))}
				</div>
				<Button link='https://www.instagram.com/y_israk'>More Art? </Button>
			</div>
		</section>
	);
}
