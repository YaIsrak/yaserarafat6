export default function loading() {
	return (
		<section>
			<header className=''>
				<div className='container'>
					{/* Navigation */}
					<a className='fs-3 txt-primary'>Back</a>
					{/* Text */}
					<h1 className='display-2'>
						<div role='status' className='tw-w-full tw-animate-pulse'>
							<div className='tw-h-2.5 tw-bg-light/20 tw-rounded-full tw-mb-4'></div>
							<div className='tw-h-2.5 tw-bg-light/20 tw-rounded-full tw-mb-4'></div>
						</div>
					</h1>
				</div>
			</header>
			<div role='status'>
				<div className='container tw-grid tw-grid-cols-2 tw-gap-3 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-animate-pulse'>
					<div className='tw-flex tw-items-center tw-justify-center tw-w-full tw-h-96 tw-bg-light/20 tw-rounded'>
						<svg
							className='tw-w-10 tw-h-10 tw-text-gray-200'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 18'
						>
							<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
						</svg>
					</div>
					<div className='tw-flex tw-items-center tw-justify-center tw-w-full tw-h-96 tw-bg-light/20 tw-rounded'>
						<svg
							className='tw-w-10 tw-h-10 tw-text-gray-200'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 18'
						>
							<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}
