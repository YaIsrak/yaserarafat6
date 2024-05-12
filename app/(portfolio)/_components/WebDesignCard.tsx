import { WebDesignProps } from '@/type.typing';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



export default function WebDesignCard({ data }: { data: WebDesignProps }) {
	return (
		<div className='group '>
			<div className='rounded-2xl overflow-hidden border border-foreground/20 p-4 group-hover:border-foreground/50 duration-300 bg-gradient-to-b from-primary/0 to-transparent group-hover:from-primary/50 transition'>
				<div className='flex items-center justify-between'>
					<p className='font3 text-3xl'>{data.title}</p>
					<ArrowRight className='h-6 w-6 text-primary' />
				</div>
				<Image src={data.mainImageUrl.url} width={1000} height={1000} alt={data.title} className='rounded-lg mt-8 group-hover:mt-4 transition-all' />
				<div className='flex items-center gap-2 mt-4'>
					<Link href={data.url} target='_blank' className='flex gap-1 items-center underline text-primary'>
						View
					</Link>
					{data.github && (

						<Link href={data.github} target='_blank' className='flex gap-1 items-center underline text-primary'>
							Github
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
