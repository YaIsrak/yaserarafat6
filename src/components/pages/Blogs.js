import useBlogPost from '../../Hooks/useBlogPost';
import Blog from '../Blog';

export default function Blogs() {
	const { Blogs } = useBlogPost();

	// const note1 = {
	// 	text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	// };
	// const Blogs = [
	// 	{ title: 'test 1', content: note1.text },
	// 	{ title: 'test 2', content: note1.text },
	// ];

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
					<div className='row'>
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
