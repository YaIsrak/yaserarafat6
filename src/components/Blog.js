export default function Blog({ id, title, content, date }) {
	return (
		<div className='my-3 card border-none bg-indigo-100/0 text-white' id={id}>
			<div className='px-4 card-body bg-indigo-500'>
				<h2 className='h2 card-title pt-4'> {title} </h2>
				<p className='text-indigo-300 font2'>
					{new Date(date).toLocaleString()}
				</p>
				<hr />
				<p className='text-indigo-300 font2 fs-5'>
					{`// This note was imported from Firebase`}
				</p>
				<p className='lh-base pb-4' style={{ textAlign: 'justify' }}>
					{' '}
					{content}{' '}
				</p>
			</div>
		</div>
	);
}
