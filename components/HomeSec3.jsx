export default function HomSec3() {
	const time = new Date();

	return (
		<section className='container'>
			<h1 className='fw-bold'>My Journey</h1>
			<div className='menu space-y-20'>
				<div className='menu_item'>
					<h1>Started at 2019 ...</h1>
					<img className='menu_img' src='/images/old-art1.png' alt='' />
				</div>
				<div className='menu_item'>
					<h1 className='text-end'>On going at {time.toDateString()} ...</h1>
					<img className='menu_img' src='/images/art4.png' alt='' />
				</div>
			</div>
		</section>
	);
}
