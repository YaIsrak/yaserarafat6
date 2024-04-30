import { dateFormatter } from '@/lib/utils';
import { BlogProps } from '@/type.typing';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ data }: { data: BlogProps }) {
	return (
		<div className='bg-transparent hover:bg-primary/10 transition-all rounded-lg p-2'>
			<Link
				href={`blog/${data.slug.current}`}
				className='text-light no-underline hover:text-light'
			>
				<div className='relative  w-full aspect-video'>
					<Image
						src={data.imageUrl.url}
						alt={`${data.title} | MD Yaser Arafat Israk`}
						fill
						style={{ objectFit: 'cover' }}
						placeholder='blur'
						blurDataURL='/images/loading.png'
						className='rounded-xl'
					/>
				</div>

				{/* info */}
				<div className='pt-2'>
					<h2 className='font1 text-primary'>{data.title}</h2>
					<span className='md:text-base text-sm'>
						{data.description} <br />
						<span className='text-muted-foreground'>
							{dateFormatter(data.publishedAt)}
						</span>
					</span>
				</div>
			</Link>
		</div>
	);
}
