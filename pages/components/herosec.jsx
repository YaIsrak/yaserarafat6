import PP from '../../public/images/pp.jpg';

import Image from 'next/image';

export default function HeroSec() {
	return (
		<section className='sec1' id='home'>
			<div className='container text-center'>
				<div className='row'>
					<div className='col-md-6 md:m-auto py-5'>
						<h1 className='h1 fw-bold fs-1'>
							Hey,
							<br /> I&apos;m <span className='text-indigo-500'>Israk</span> 👋
						</h1>
						<p className='text-muted fw-light'>
							An Illustrator, developer and Designer located📍 in Bangladesh 🇧🇩
							and I love sharing my process online. 💙
						</p>
					</div>
					<div className='col-md-6'>
						<Image
							className='img-fluid transform rotate-3 scale-100 hover:scale-105 mx-auto'
							style={{ width: '70%' }}
							alt='ProfilePicture'
							src={PP}
						/>
					</div>
				</div>
				<div className='fs-5'>
					<p className='fw-light mx-auto py-5 my-5 w-4/5 md:w-1/2'>
						&quot;Welcome to the home of my notes, resources, experiments,
						findings and <span className='fw-bold'>art, learning</span>&quot;
					</p>
				</div>
			</div>
		</section>
	);
}
