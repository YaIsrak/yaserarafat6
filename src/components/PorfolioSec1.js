import PorfolioProjectImage from './PorfolioProjectImage';
import PorfolioProjectLink from './PorfolioProjectLink';

export default function HomeSec2() {
	let links = [
		{
			name: 'Personal Art',
			link: 'https://mdyaserarafatisrak.artstation.com/albums/2824156',
		},
		{
			name: 'Portrait',
			link: 'https://mdyaserarafatisrak.artstation.com/albums/2815097',
		},
		{
			name: 'Character Design',
			link: 'https://mdyaserarafatisrak.artstation.com/albums/2855151',
		},
	];
	return (
		<section className='sec2' id='portfolio'>
			<div className='container'>
				<h1 className='title text-center sec-h1'>Portfolio</h1>
				<div className='row'>
					<div className='col-md-6 info' data-aos='fade-up'>
						<div className='art-info'>
							<h1>Digital Art</h1>
							<p>
								I like to draw dynamic and traditional characters, which is
								sometimes gives me more inspiration. I begin pursuing art more
								seriously at 16. I enjoy learning new things. My force is
								drawing female characters, traditional concept art and portrait.
							</p>
							<ul>
								{links.map((link, index) => (
									<PorfolioProjectLink
										name={link.name}
										link={link.link}
										key={index}
									/>
								))}
							</ul>
						</div>
					</div>
					<div className='col-md-6 photo' data-aos='fade-up'>
						<div className='row'>
							<PorfolioProjectImage
								link={
									'https://cdnb.artstation.com/p/assets/images/images/035/980/149/large/md-yaser-arafat-israk-asset.jpg?1616427147'
								}
							/>
							<PorfolioProjectImage
								link={
									'https://cdna.artstation.com/p/assets/images/images/034/627/124/large/md-yaser-arafat-israk-asset.jpg?1612801914'
								}
							/>
							<PorfolioProjectImage
								link={
									'https://cdna.artstation.com/p/assets/images/images/032/560/824/large/md-yaser-arafat-israk-asset.jpg?1606810395'
								}
							/>

							<PorfolioProjectImage
								link={
									'https://cdnb.artstation.com/p/assets/images/images/032/498/081/large/md-yaser-arafat-israk-122451896-956995214797369-7909265820938984027-o.jpg?1606635440'
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
