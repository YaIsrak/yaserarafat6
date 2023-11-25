import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ data }: { data: Blog }) {
	return (
		<div className='blog tw-relative tw-scale-100 hover:tw-scale-105'>
			<Link
				href={`blog/${data.slug.current}`}
				className='tw-text-light tw-no-underline hover:tw-text-light'
			>
				<div className='tw-relative tw-h-40 md:tw-h-56 tw-w-full'>
					<Image
						src={data.imageUrl.url}
						alt={`${data.title} | MD Yaser Arafat Israk`}
						fill
						style={{ objectFit: 'contain' }}
						placeholder='blur'
						blurDataURL='/images/loading.png'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='tw-rounded-xl'
					/>
				</div>

				{/* info */}
				<h2 className='display-6 tw-font-bold tw-text-primary'>{data.title}</h2>
				<span className='md:tw-text-base tw-text-sm'>
					{data.description} <br />
					<span className='tw-text-light/50'>{data.publishedAt}</span>
				</span>
			</Link>
		</div>
	);
}
