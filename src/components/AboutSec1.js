import { useContext } from 'react';
import { ThemeContext } from '../App';
import cp from '../images/cp-min.jpg';
import Button from './Button';

export default function AboutSec1() {
	const { theme } = useContext(ThemeContext);
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
		<section className={`sec1 p-0 bg-${theme.bg} text-${theme.text}`}>
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
								<Button link={link.link} key={index}>
									<i className={link.iconClass} />
								</Button>
							))}
						</div>
						<p className='text-muted text-xl'>
							I am a creative frontend developer, designer and illustrator from
							Bangladesh. 🇧🇩
						</p>
						<p className='font2 text-muted text-xl'>{`// 2+ years of experience`}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
