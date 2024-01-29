import { SketchBookProps } from '@/type.typing';
import Image from 'next/image';
import Link from 'next/link';

export default function SketchbookCard({ data }: { data: SketchBookProps }) {
	return (
		<div className='group/sketchbook relative'>
			<Link href={`digital-art/sketchbook/${data.slug.current}`}>
				<div>
					{/* TODO:Overlay */}
					<div className='bg-background absolute z-10 h-full w-full opacity-30 group-hover/sketchbook:opacity-5'></div>
					<div className='relative'>
						<Image
							src={data.mainImageUrl.url}
							alt={`Sketchbook-cover | MD Yaser Arafat Israk`}
							width={400}
							height={400}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='object-cover h-80'
						/>
					</div>
					<div className='ps-3 z-20'>
						<h2 className='text-primary '>{data.title}</h2>
						<p className=''>{data.body}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
