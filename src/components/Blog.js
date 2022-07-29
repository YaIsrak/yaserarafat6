export default function Blog({ id, title, content, date }) {
	return (
		<div
			className='col-md-6 my-3 card border-none bg-indigo-100/0 text-white w-1/2'
			id={id}>
			<div className='px-5 card-body bg-indigo-500'>
				<h2 className='h2 card-title pt-4'> {title} </h2>
				<p className='text-indigo-300 font2'>
					{new Date(date).toLocaleString()}
				</p>
				<hr />
				<p className='text-indigo-300 font2 fs-5'>
					{`// This note was imported from Firebase`}
				</p>
				<p className='pb-4'> {content} </p>
			</div>
		</div>
	);
}
