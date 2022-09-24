import Link from 'next/link';

export default function Error() {
	return (
		<div>
			<div className='text-center absolute top-50 start-50 translate-middle'>
				<h1 className='fw-bold display-1'>404 error</h1>
				<Link href='/'>
					<a className='text-primary'>Back to home</a>
				</Link>
			</div>
		</div>
	);
}
