import Button from './Button';

export default function PorfolioIntro({ link, url }) {
	return (
		<div>
			<section
				className='h-screen bg-center bg-no-repeat bg-cover'
				style={{
					backgroundImage: `url(${url})`,
					backgroundAttachment: 'fixed',
				}}
			>
				<div className='h-screen w-full bg-stone-900/80 absolute top-50 start-50 translate-middle'></div>
				<div className='container absolute top-50 start-50 translate-middle w-auto'>
					<Button link={link}>View Art Portfolio</Button>
				</div>
			</section>
		</div>
	);
}
