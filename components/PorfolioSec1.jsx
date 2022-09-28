import Button from './Button';

export default function PortfolioSec1() {
	return (
		<div>
			<section className='sec2' id='portfolio'>
				<div className='container'>
					<h1 className='h1 fw-bold'>Digital art and art concepts</h1>
					<p className='text-muted'>
						A collection of idea on painting and drawings 🎨
					</p>
					<div className='row my-6 gallery'>
						<div className='col-md-4 art art-1'>
							<img
								src='https://media2.giphy.com/media/JovoDX7y0ijQ08JlJw/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div className='col-md-4 art art-2'>
							<img
								src='https://media2.giphy.com/media/DM0MOTH1lFk52z0vrT/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div className='col-md-4 art art-3'>
							<img
								src='https://media1.giphy.com/media/xnR4wTJZGNGF01oNHs/giphy.gif'
								alt=''
								className='img-fluid'
							/>
						</div>
					</div>
					<Button link={'https://www.instagram.com/_is.rak_/'}>See more</Button>
				</div>
			</section>
		</div>
	);
}
