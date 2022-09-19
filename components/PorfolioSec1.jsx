// import Image from 'next/image';
// import Button from './Button';

// import Art1 from '../public/images/art1.jpg';
// import Art2 from '../public/images/art2.jpg';
// import Art3 from '../public/images/art3.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { useEffect, useRef } from 'react';

export default function PortfolioSec1() {
	const container = useRef(null);
	const gallery = useRef(null);
	const art1 = useRef(null);
	const art2 = useRef(null);
	const art3 = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: gallery.current,
				start: 'top 100px',
				end: 'bottom top',
				pin: gallery.current,
				scrub: true,
			},
		});

		tl.to(art1.current, { opacity: 1 })
			.to(art1.current, { opacity: 0 })
			.to(art2.current, { opacity: 1 })
			.to(art2.current, { opacity: 0 })
			.to(art3.current, { opacity: 1 })
			.to(art3.current, { opacity: 0 });
	}, []);

	return (
		<div>
			<section className='sec2' id='portfolio' ref={container}>
				<div className='container'>
					<h1 className='h1 fw-bold'>Digital art and art concepts</h1>
					<p className='text-muted'>
						A collection of idea on painting and drawings 🎨
					</p>
					<div className='row my-6 gallery' ref={gallery}>
						<div className='col-4 art art-1' ref={art1} style={{ opacity: 0 }}>
							<img
								src='https://media2.giphy.com/media/JovoDX7y0ijQ08JlJw/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div className='col-4 art art-2' ref={art2} style={{ opacity: 0 }}>
							<img
								src='https://media2.giphy.com/media/DM0MOTH1lFk52z0vrT/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div className='col-4 art art-3' ref={art3} style={{ opacity: 0 }}>
							<img
								src='https://media1.giphy.com/media/xnR4wTJZGNGF01oNHs/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
