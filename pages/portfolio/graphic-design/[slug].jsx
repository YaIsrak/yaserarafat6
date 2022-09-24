import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import sanityClient from '../../../client';
import Button from '../../../components/Button';
import Layout from '../../../components/Layout';
import { PortableText } from '@portabletext/react';

export default function Designs() {
	const slug = useRouter().query;
	const [post, setPost] = useState({});

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'designs' && slug.current == '${slug.slug}'][0]
                {...,
                category -> {
                      title
                },
                'mainImageUrl':mainImage.asset ->url,
                'imageUrl': imagesGallery[].asset ->{url}
            }`
			)
			.then((data) => setPost(data));
	}, [slug]);

	return (
		<Layout>
			<section>
				{post.title && (
					<div className='container'>
						<Link href={'/portfolio/graphic-design'}>
							<a className='fs-3 text-primary'>Back</a>
						</Link>
						<h1 className='fw-bold'>{post.title}</h1>
						<Button>{post.category.title}</Button>
						<div className='row py-12'>
							{post.imageUrl.map((url) => (
								<div key={url.url} className='col-md-4'>
									<img src={url.url} alt='' />
								</div>
							))}
						</div>
						<div className='body'>
							<PortableText value={post.body} />
						</div>
					</div>
				)}
			</section>
		</Layout>
	);
}
