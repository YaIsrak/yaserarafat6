import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function NotFound() {
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className='flex flex-col items-center'>
				<h2>Page Not Found</h2>
				<p>Could not find requested resource</p>
				<Image src={'/image/empty-dark.png'} alt='empty' width={300} height={300} />
				<Button asChild>
					<Link href='/'>Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
