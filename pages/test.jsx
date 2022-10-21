import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';

export default function Test() {
	const [posts, setposts] = useState([]);

	useEffect(() => {
		const fetchdata = async () => {
			const res = await fetch('http://localhost:3000/api/web');
			const data = await res.json();
			setposts(data.data);
		};
		fetchdata();
	}, []);

	return (
		<section>
			<div className='container'>
				{posts &&
					posts.map((post) => (
						<div key={post._id}>
							<h1>{post.title}</h1>
							LINK: <a href={post.url}>{post.url}</a>
							<PortableText value={post.body} />
						</div>
					))}
			</div>
		</section>
	);
}
