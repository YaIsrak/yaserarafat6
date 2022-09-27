import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { useEffect, useState } from 'react';
import sanityClient from '../../client';

export default function GraphicDesign() {
	const [groq, setGroq] = useState('_type ==  "designs"');
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(`*[_type ==  "desginCategory"]`)
			.then((data) => setCategories(data))
			.catch(alert('Couldnt find any data'));
		sanityClient
			.fetch(
				`*[${groq}]{...,
					category -> {
			  			title
					},
					'mainImageUrl':mainImage.asset ->url,
					'imageUrl': imagesGallery[].asset ->{url}
				}`
			)
			.then((data) => setPosts(data));
		setLoading(false);
	}, [groq]);

	return (
		<Layout>
			<section className='graphic-design'>
				<div className='container'>
					<h1 className='fw-bold'>All my design ( {posts.length} )</h1>
					{/* category */}
					<div className='categories d-flex gap-2'>
						<Ctag title={'All'} setGroq={setGroq} />
						{loading && <Loading />}
						{categories.map((category) => (
							<div className='c-box' key={category._id}>
								<Ctag title={category.title} setGroq={setGroq} />
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
					{!loading && posts.length == 0 && <h1>OPS! No data !</h1>}
					{loading && <Loading />}
				</div>
			</section>
		</Layout>
	);
}

function Ctag({ title, setGroq }) {
	return (
		<Button
			className={''}
			onClick={() =>
				title !== 'All'
					? setGroq(`_type ==  "designs" && category->title == "${title}"`)
					: setGroq(`_type ==  "designs"`)
			}
		>
			{title}
		</Button>
	);
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
