import fbpp from '../Photos/facebookpp.jpg';
import OFK from '../Photos/ofk.png';
import originative360 from '../Photos/originative 360.png';

export default function AboutSec4() {
	return (
		<section className='sec4'>
			<div className='container'>
				<h1 className=''>I'm working with</h1>
				<div className='row'>
					<div className='col-3'>
						<img src={fbpp} alt='' className='img-fluid' />
						<p className='text-center'>
							<a
								href='https://www.facebook.com/i.m.israk'
								className='link-light'>
								ইসরাক
							</a>
						</p>
					</div>
					<div className='col-3'>
						<img src={originative360} alt='' className='img-fluid' />
						<p className='text-center'>
							<a href='https://originative360.com' className='link-light'>
								Originative 360
							</a>
						</p>
					</div>
					<div className='col-3'>
						<img src={OFK} alt='' className='img-fluid' />
						<p className='text-center'>
							<a href='https://ofkbd.com' className='link-light'>
								Oppurtunity For Kids
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
