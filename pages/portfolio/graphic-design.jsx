import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import sanityClient from '../../client';

export default function GraphicDesign() {
	const [categories, setCategories] = useState([]);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(`*[_type ==  "desginCategory"]`)
			.then((data) => setCategories(data));
		sanityClient
			.fetch(
				`*[_type ==  "designs"]{...,
					category -> {
			  			title
					},
					'mainImageUrl':mainImage.asset ->url,
					'imageUrl': imagesGallery[].asset ->{url}
				}`
			)
			.then((data) => setPosts(data));
	}, []);

	return (
		<Layout>
			<section className='graphic-design'>
				<div className='container'>
					<h1 className='fw-bold'>All my design</h1>
					{/* category */}
					<div className='categories d-flex gap-2'>
						<Ctag title={'All'} />
						{categories.map((category) => (
							<div className='c-box' key={category._id}>
								<Ctag title={category.title} />
							</div>
						))}
					</div>
					<div className='posts py-12 row'>
						{posts.map((post) => (
							<span key={post._id} className='col-md-6'>
								<Post post={post} />
							</span>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

function Ctag({ title }) {
	return <Button className={''}>{title}</Button>;
}

function Post({ post }) {
	return (
		<div className='post'>
			<h1>{post.title}</h1>
			<div className='d-flex gap-2 pb-2'>
				<p className='py-1 px-2 rounded-lg bg-primary'>{post.category.title}</p>
			</div>
			<img src={post.mainImageUrl} alt='Post-images' className='img-fluid' />
			<Button
				className={'mt-2'}
				link={`/portfolio/graphic-design/${post.slug.current}`}
			>
				View Full Post
			</Button>
		</div>
	);
}
