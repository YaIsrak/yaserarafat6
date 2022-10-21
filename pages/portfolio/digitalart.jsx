import React from 'react';
import InstagramFeed from 'react-ig-feed';
import Layout from '../../components/Layout';

export default function art() {
	return (
		<Layout>
			<section className='ig-feed'>
				<div className='container'>
					<h1 className='display-2 fw-bold'>My Art</h1>
					<InstagramFeed token={process.env.NEXT_PUBLIC_INSTAGRAM_API} />
				</div>
			</section>
		</Layout>
	);
}
