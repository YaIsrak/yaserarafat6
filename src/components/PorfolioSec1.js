import { useContext } from 'react';
import { ThemeContext } from '../App';
import Button from './Button';

import Art1 from '../images/art1.jpg';
import Art2 from '../images/art2.jpg';
import Art3 from '../images/art3.jpg';

export default function PortfolioSec1() {
	const { theme } = useContext(ThemeContext);

	return (
		<section
			className={`sec2 bg-${theme.bg} text-${theme.text}`}
			id='portfolio'>
			<div className='container'>
				<h1 className='h1 fw-bold'>Digital art and art concepts</h1>
				<p className='text-muted'>
					A collection of idea on painting and drawings 🎨
				</p>
				<div className='row art-gallery my-6'>
					<img src={Art1} alt='artwork' className='col-4 img-fluid' />
					<img src={Art2} alt='artwork' className='col-4 img-fluid' />
					<img src={Art3} alt='artwork' className='col-4 img-fluid' />
				</div>
				<Button link='https://www.instagram.com/y_israk'>More Art? </Button>
			</div>
		</section>
	);
}
