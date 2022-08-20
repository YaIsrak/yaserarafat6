import useBlogPost from '../../Hooks/useBlogPost';
import Blog from '../Blog';

export default function Blogs() {
	const { Blogs } = useBlogPost();

	return (
		<>
			<div
				className='h-screen bg-cover'
				style={{
					backgroundImage:
						"url('https://media3.giphy.com/media/9TYOxSLqBIrK0/giphy.gif')",
				}}></div>
			<section className='blog' style={{ marginTop: '-30rem' }}>
				<div className='container'>
					<h1 className='h1 text-white'> Note page ✏️ </h1>
					<div className=''>
						{Blogs.map((blog, index) =>
							blog.title === '' ? null : (
								<Blog
									id={index}
									title={blog.title}
									content={blog.content}
									date={blog.date}
									key={index}
								/>
							)
						)}
					</div>
					<p className='text-muted font2 fs-5'>
						{"//This page can't reload dark mode"}
					</p>
				</div>
			</section>
		</>
	);
}
