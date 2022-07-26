import cp from '../images/cp-min.jpg';

export default function AboutSec1() {
	const links = [
		{
			iconClass: 'fab fa-facebook-f',
			link: 'https://www.facebook.com/yaser.arafat.israk',
		},
		{
			iconClass: 'fab fa-instagram',
			link: 'https://www.facebook.com/y_israk',
		},
	];

	return (
		<section className='sec1 p-0'>
			<div className='row w-full'>
				<div
					className='col-md-6 bg-cover bg-center h-screen'
					style={{ backgroundImage: `url(${cp})` }}></div>
				<div className='col-md-6 m-auto' style={{ padding: '15vmin' }}>
					<div className='container'>
						<h1 className='h1 fw-bold'>
							MD Yaser Arafat <span className='text-primary'>Israk</span>
						</h1>
						<div className='d-flex gap-2'>
							{links.map((link, index) => (
								<a class='fs-5' href={link.link}>
									<button
										class='px-3 py-2 bg-blue-400 border-2 tracking-wider border-black mb-2 hover:bg-teal-400'
										key={index}>
										<i class={link.iconClass} />
									</button>
								</a>
							))}
						</div>
						<p className='text-muted'>
							I am a creative frontend developer, designer and illustrator from
							Bangladesh. 🇧🇩
						</p>
						<p className='font2 text-muted fs-4'>{`// 2+ years of experience`}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
