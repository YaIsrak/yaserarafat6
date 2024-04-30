import Logo from '@/public/image/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarBrand() {
	return (
		<Link href={'/'}>
			<Image src={Logo} width={100} alt={'logo'} placeholder='blur' />
		</Link>
	);
}
