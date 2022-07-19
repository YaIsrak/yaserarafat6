export default function PorfolioProjectImage({ link }) {
	return (
		<div className='col-6' data-aos='fade-up'>
			<img src={link} alt='' className='img-fluid' />
		</div>
	);
}
