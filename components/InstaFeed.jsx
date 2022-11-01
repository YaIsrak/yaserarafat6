import { useState } from 'react';
import usePosts from '../hooks/usePosts';
import Loading from './Loading';
import Button from './Button';
import Image from 'next/image';

export default function InstaFeed() {
	const [url, setUrl] = useState(
		`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_API}`
	);

	const { posts, loading, error } = usePosts(url);
	return (
		<div className='feed'>
			{/* error handaling */}
			{loading && <Loading />}
			{error && (
				<p className='tw-text-red-500 fs-3 tw-text-center'>
					There is an Error 📢! <br /> Please Refesh!
				</p>
			)}

			{/* Paginantion */}
			{!loading && !error && <Pagination posts={posts} setUrl={setUrl} />}

			{/* Displaying feed */}
			<div className='tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-2'>
				{!loading &&
					!error &&
					posts.data?.map(
						(post) =>
							post.media_type !== 'VIDEO' && <SinglePost post={post} key={post.id} />
					)}
			</div>
		</div>
	);
}

function SinglePost({ post }) {
	return (
		// eslint-disable-next-line react/jsx-no-target-blank
		<a href={post.permalink} className='' target={'_blank'}>
			<div className='tw-relative tw-w-auto tw-h-60 lg:tw-h-80'>
				<Image src={post.media_url} alt='' layout='fill' objectFit='cover' />
			</div>
			{/* <img src={post.media_url} alt='' className='tw-object-contain' /> */}
		</a>
	);
}

function Pagination({ posts, setUrl }) {
	return (
		<nav className='tw-flex tw-justify-between tw-py-4'>
			<Button onClick={() => setUrl(posts.paging.previous)}>Previous</Button>

			<Button onClick={() => setUrl(posts.paging.next)}>Next</Button>
		</nav>
	);
}
