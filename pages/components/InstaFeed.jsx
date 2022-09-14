import { useEffect, useState } from 'react';
import InstaPost from './InstaPost';

export default function InstaFeed() {
	const [posts, setPosts] = useState([]);
	const [selectedPhotos, setselectedPhotos] = useState(null);

	const token = `https://graph.instagram.com/me/media?fields=media_type,caption,media_url,children{media_type,media_url,thumbnail_url},username&access_token=IGQVJXWncyVUZAtOWtCSjNiYlJvb1htMVRLLXgweTIzRUdYMk1Kd0ZAsWlF2UFU2a2xQcWVVMVp5WEJ6alE0MzVjY2lfdGlqQ3F3Q1RVRHZATVmpJUGpnWk8yck9IR0F1X0lkT0JLZA0lIT3B0OVQ5VGJGSgZDZD`;

	useEffect(() => {
		async function fatchData() {
			try {
				const res = await fetch(token);
				const posts = await res.json();
				setPosts([posts.data]);
			} catch (error) {
				alert(error);
			}
		}
		fatchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className='instafeed'>
			<div className='container-sm'>
				<h1>My Art Gallery</h1>
				<div className='row'>
					{posts[0]?.map((post) => (
						<>
							{post.media_type !== 'VIDEO' && (
								<InstaPost
									key={post.id}
									post={post}
									setselectedPhotos={setselectedPhotos}
								/>
							)}
						</>
					))}
				</div>

				{/* modal */}
				{selectedPhotos && (
					<div className='model position-fixed top-50 start-50 translate-middle  z-50'>
						<div
							className='backdrop h-screen w-screen position-absolute top-50 start-50 translate-middle bg-gray-900/70 -z-10'
							onClick={() => setselectedPhotos(null)}
						></div>
						<div className='model_container bg-light p-1 rounded-lg'>
							<a href={selectedPhotos.media_url}>
								<img
									src={selectedPhotos.media_url}
									alt=''
									className='img-fluid'
									style={{ height: '90vh' }}
								/>
							</a>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
