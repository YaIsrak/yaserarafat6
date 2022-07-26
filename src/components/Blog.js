export default function Blog({ id, title, content }) {
	return (
		<div className='my-3 card border-none bg-indigo-500 text-white ' id={id}>
			<div className='px-5'>
				<h2 className='h2 card-title pt-4'> {title} </h2>
				<p className='text-indigo-300'>{new Date().toLocaleString()}</p>
				<hr />
				<div className='card-body'>
					<p className='text-indigo-300 font2 fs-5'>
						{`// This note was imported from Firebase`}
					</p>
					<p className='pb-4'> {content} </p>
				</div>
			</div>
		</div>
	);
}
