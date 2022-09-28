import Link from 'next/link';
import { useEffect, useState } from 'react';
import sanityClient from '../../client';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

export default function Webdesign() {
	const [datas, setDatas] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'web']{
            ...,
            "imageUrl": mainImage.asset->{ url}
          }`
			)
			.then((res) => setDatas([res]));
	});
	return (
		<Layout>
			<section>
				<div className='container'>
					<Link href={'/portfolio'}>
						<a className='fs-3'>Back</a>
					</Link>
					<h1 className='fw-bold'>My Web Development Portfolio</h1>
					<div className='row'>
						{datas[0]?.map((data) => (
							<div key={data._id} className=' col-md-3'>
								<div className='card bg-transparent'>
									<img src={data.imageUrl.url} class='card-img-top' alt='...' />
									<div className='card-body'>
										<h2>{data.title}</h2>
										<Button link={data.url}>View</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}
