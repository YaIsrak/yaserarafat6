import Image from 'next/image';
import Button from './Button';

import Art1 from '../public/images/art1.jpg';
import Art2 from '../public/images/art2.jpg';
import Art3 from '../public/images/art3.jpg';

export default function PortfolioSec1() {
	return (
		<section className='sec2' id='portfolio'>
			<div className='container'>
				<h1 className='h1 fw-bold'>Digital art and art concepts</h1>
				<p className='text-muted'>
					A collection of idea on painting and drawings 🎨
				</p>
				<div className='row art-gallery my-6'>
					<div className='col-4'>
						<Image
							src={Art1}
							alt='artwork'
							className='col-4 img-fluid'
							// placeholder='blur'
							width={Art1.width}
							height={Art1.height}
						/>
					</div>
					<div className='col-4'>
						<Image src={Art2} alt='artwork' className='col-4 img-fluid' />
					</div>
					<div className='col-4'>
						<Image src={Art3} alt='artwork' className='col-4 img-fluid' />
					</div>
				</div>
				<Button link='https://www.instagram.com/y_israk'>More Art? </Button>
			</div>
		</section>
	);
}
