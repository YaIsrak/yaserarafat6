import React from 'react';

export default function loading() {
	return (
		<section>
			<header className=''>
				<div className='container'>
					{/* Navigation */}
					<a className='fs-3 txt-primary'>Back</a>
					{/* Text */}
					<h1 className='display-2'>
						<div role='status' class='tw-w-full tw-animate-pulse'>
							<div class='tw-h-2.5 tw-bg-primary/30 tw-rounded-full tw-w-48 tw-mb-4'></div>
							<div class='tw-h-2.5 tw-bg-primary/30 tw-rounded-full tw-w-48 tw-mb-4'></div>
							<div class='tw-h-2.5 tw-bg-primary/30 tw-rounded-full tw-w-48 tw-mb-4'></div>
						</div>
					</h1>
				</div>
			</header>
		</section>
	);
}
