import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';

export default function NavBrand() {
	return (
		<Link href={'/'}>
			<a className='navbar-brand fw-bold fs-2 font3'>
				{/* Israk */}
				<div className='w-20 md:w-32'>
					<Image
						src={Logo}
						placeholder='blur'
						alt='Logo'
						className=''
						priority
					/>
				</div>
			</a>
		</Link>
	);
}
