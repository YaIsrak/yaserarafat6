import { useEffect, useState } from 'react';
import sanityClient from '../client';

export default function Test() {
	const [posts, setposts] = useState([]);

	useEffect(() => {
		sanityClient.fetch(`*[_type ==  "post"]`).then((data) => setposts(data));
	}, []);

	return (
		<section>
			<div className='container'>
				{posts?.map((post) => (
					<div key={post.id}>
						<img src={post.mainImage.asset.url} alt='' />
						<h1>{post.title}</h1>
						<p>{post.slug.current}</p>
					</div>
				))}
			</div>
		</section>
	);
}
