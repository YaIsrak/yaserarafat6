import PorfolioProjectImage from '../components/PorfolioProjectImage';
import PorfolioProjectLink from './PorfolioProjectLink';

export default function PorfolioSec2() {
	let links = [
		'https://yaserisrak.netlify.app',
		'https://sma-hamid.netlify.app',
		'http://forecomerce.epizy.com',
	];

	return (
		<section className='sec3' id=''>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 photo' data-aos='fade-up'>
						<div className='row'>
							<PorfolioProjectImage link={'/'} />
							<PorfolioProjectImage link={'/'} />
							<PorfolioProjectImage link={'/'} />
							<PorfolioProjectImage link={'/'} />
						</div>
					</div>
					<div className='col-md-6 info' data-aos='fade-up'>
						<div className='graph-info'>
							<h1>Creative Designer</h1>
							<p>
								I'm also a <b>Web Designer</b> and <b>Graphic Designer</b>. I
								started work at designing at 15.
							</p>
							<div className='sec3-link'>
								<ul>
									{links.map((link, index) => (
										<PorfolioProjectLink name={link} link={link} key={index} />
									))}
								</ul>
							</div>
							<button className='more-btn btn btn-light'>
								<a className='link-dark' href='https://www.behance.net/israk'>
									Some of my project
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
