import Logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBrand() {
	return (
		<Link href={'/'} className='navbar-brand fw-bold fs-2 font3'>
			{/* Israk */}
			<div className='tw-w-20 md:tw-w-32'>
				<Image src={Logo} placeholder='blur' alt='Logo' className='' priority />
			</div>
		</Link>
	);
}
