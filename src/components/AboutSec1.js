import BackPP from '../Photos/2.jpg';

export default function AboutSec1() {
	return (
		<section className='sec1'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 avater'>
						<img src={BackPP} alt='' className='img-fluid' />
					</div>
					<div className='col-md-6 info'>
						<div className='intro'>
							<h1>MD Yaser Arafat Israk</h1>
							<p>
								I am Israk. I am an illustrator, concept artist, creative
								designer located in Chittagong, Bangladesh. 🇧🇩
								<br />
								<br />
								<br />
								I like to draw dynamic and traditional characters, which is
								sometimes gives me more inspiration. I begin pursuing art more
								seriously at 16. I enjoy learning new things.
								<br />
								My force is drawing female characters, traditional concept art
								and portrait.
								<br />
								<br />
								<br />I am also a web and graphic designer. I started work at
								web designing at 15.
							</p>
							<button className='btn btn-dark'>
								<a
									className='link-light'
									href='mailto:yaserarafatisrak@gmail.com'>
									Mail me
								</a>
							</button>
							<button className='btn btn-dark'>
								<a
									className='link-light'
									href='https://www.facebook.com/yaser.arafat.israk'>
									<i className='fab fa-facebook-f'></i>
								</a>
							</button>
							<button className='btn btn-dark'>
								<a
									className='link-light'
									href='https://www.instagram.com/_yaser.israk_'>
									<i className='fab fa-instagram'></i>
								</a>
							</button>
							<button className='btn btn-dark'>
								<a
									className='link-light'
									href='https://www.linkedin.com/in/israk'>
									<i className='fab fa-linkedin-in'></i>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
