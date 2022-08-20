import { useContext } from 'react';
import { ThemeContext } from '../App';
import Button from './Button';
export default function PorfolioSec2() {
	const { theme } = useContext(ThemeContext);

	const links = [
		{ name: 'React Quiz App', link: 'https://israkreact-app.netlify.app' },
		{ name: 'Others', link: 'https://sma-hamid.netlify.app' },
	];

	return (
		<section className={`sec3 bg-${theme.bg} text-${theme.text}`} id=''>
			<div className='container'>
				<h1 className='h1 fw-bold'>Web Design</h1>
				<div className='row'>
					{links.map((link, index) => (
						<div className='col-6 p-2' key={index}>
							<h2 className='h2 card-title pt-3'>{link.name}</h2>
							<Button link={link.link}>View Website</Button>
							<iframe
								className='card-img-top'
								style={{ height: '20rem', width: '100%' }}
								src={link.link}
								title={link.name}></iframe>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
