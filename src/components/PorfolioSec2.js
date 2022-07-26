export default function PorfolioSec2() {
	const links = [
		{ name: 'Main Website', link: 'https://yaserisrak.netlify.app' },
		{ name: 'React Quiz App', link: 'https://israkreact-app.netlify.app' },
		{ name: 'Others', link: 'https://sma-hamid.netlify.app' },
	];

	return (
		<section className='sec3' id=''>
			<div className='container'>
				<div className='row'>
					{links.map((link, index) => (
						<div className='col-md-6 p-2' key={index}>
							<h2 className='h2 card-title pt-3'>{link.name}</h2>
							<button className='px-3 py-2.5 my-1 bg-blue-500 rounded-lg hover:bg-indigo-500'>
								<a href={link.link} className='text-white hover:text-white'>
									View Website
								</a>
							</button>
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
