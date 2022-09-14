import { motion } from 'framer-motion';

export default function InstaPost({ post, setselectedPhotos }) {
	return (
		<div className='col-4 my-2'>
			<div
				className='img-container'
				style={{
					width: '100%',
					aspectRatio: '4 / 5',
					overflow: 'hidden',
				}}
				onClick={() => setselectedPhotos(post)}
			>
				<div className='img-inner'>
					<motion.img
						src={post.media_url}
						alt=''
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.01 }}
						// transition={{ type: 'spring', damping: 10 }}
					/>
				</div>
			</div>
		</div>
	);
}
