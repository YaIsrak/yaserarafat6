'use client';

import Image from 'next/image';
import Button from './Button';

export default function PorfolioIntro({ link, photos, name, left }) {
	return (
		<section className='container'>
			<div className='tw-flex'>
				{!left && (
					<div className='col-7'>
						<Image placeholder='blur' src={photos} alt='cover' />
					</div>
				)}
				<div className='col-5 d-flex align-items-center justify-content-center'>
					<Button link={link}>{name}</Button>
				</div>
				{left && (
					<div className='col-7'>
						<Image placeholder='blur' src={photos} alt='cover' />
					</div>
				)}
			</div>
		</section>
	);
}
