import Image from 'next/image';
import Button from './Button';

export default function PorfolioIntro({ link, photos, name, left }) {
	return (
		<section className=''>
			<div className='d-flex'>
				{!left && (
					<div className='col-6'>
						<Image src={photos} alt='cover' />
					</div>
				)}
				<div className='col-6 d-flex align-items-center justify-content-center'>
					<Button link={link}>{name}</Button>
				</div>
				{left && (
					<div className='col-6'>
						<Image src={photos} alt='cover' />
					</div>
				)}
			</div>
		</section>
	);
}
