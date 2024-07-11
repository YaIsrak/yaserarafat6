import { WebDesignProps } from '@/type.typing';
import Image from 'next/image';
import Link from 'next/link';

export default function WebDesignCard({ data }: { data: WebDesignProps }) {
	return (
		<Link
			href={data.url}
			className='group'>
			<div className='relative w-full pb-[100%] overflow-hidden rounded-xl'>
				<Image
					src={data.mainImageUrl.url}
					alt={data.title}
					width={400}
					height={400}
					className='absolute w-full h-full object-cover'
				/>
				<div className='absolute bg-background/50 top-0 left-0 w-full h-full backdrop-blur-md hidden group-hover:block'>
					<h2 className='flex items-center justify-center h-full font-thin text-center'>
						{data.title}
					</h2>
				</div>
			</div>
		</Link>
	);
}
