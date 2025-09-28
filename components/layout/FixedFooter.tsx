import { Suspense } from 'react';
import Clock from '../Clock';

export default function FixedFooter() {
	return (
		<div className='fixed bottom-5 w-full text-white z-[50] mix-blend-exclusion'>
			<div className='container mx-auto px-2 md:px-0'>
				<div className='grid grid-cols-4'>
					<div className='col-span-2' />

					<div className='flex text-xs items-center justify-between col-span-2'>
						<p>Bangladesh</p>
						<Suspense>
							<Clock />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}
