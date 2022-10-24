import Link from 'next/link';
import InstagramFeed from 'react-ig-feed';
import Layout from '../../components/Layout';

export default function art() {
	return (
		<Layout>
			<section>
				<div className='container'>
					<Link href={'/portfolio'}>
						<a className='fs-3'>Back</a>
					</Link>
					<h1 className='display-2 fw-bold'>My Art</h1>

					{/* feed */}
					<div className='ig-feed'>
						<InstagramFeed token={process.env.NEXT_PUBLIC_INSTAGRAM_API} />
					</div>
				</div>
			</section>
		</Layout>
	);
}
