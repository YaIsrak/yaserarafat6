import Image from 'next/image';
import Link from 'next/link';
import sanityClient from '../../client';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

export default function Webdesign({ datas }) {
	return (
		<Layout>
			<section>
				<div className='container'>
					<Link href={'/portfolio'}>
						<a className='fs-3'>Back</a>
					</Link>
					<h1 className='fw-bold'>My Web Development Portfolio</h1>
					{datas ? <Posts datas={datas} /> : <h1>nai</h1>}
				</div>
			</section>
		</Layout>
	);
}
function Posts({ datas }) {
	return (
		<div className='row'>
			{datas.map((data) => (
				<Post key={data._id} data={data} />
			))}
		</div>
	);
}

function Post({ data }) {
	return (
		<div className=' col-md-3'>
			<div className='card bg-transparent'>
				<div className='position-relative w-full h-80'>
					<Image
						src={`${data.imageUrl.url}`}
						// className='card-img-top'
						alt='...'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='card-body'>
					<h2>{data.title}</h2>
					<Button link={data.url}>View</Button>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await sanityClient.fetch(
		`*[_type == 'web']{
			...,
			"imageUrl": mainImage.asset->{ url}
  		}`
	);

	return {
		props: {
			datas: res,
		},
		revalidate: 10,
	};
}
