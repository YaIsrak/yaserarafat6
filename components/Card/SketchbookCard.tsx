import Image from 'next/image';
import Link from 'next/link';

export default function Card({
	data,
	homepage,
}: {
	data: SketchBook;
	homepage: boolean;
}) {
	return (
		<div className='tw-relative'>
			<Link
				className=' tw-text-light tw-no-underline hover:tw-text-light'
				href={
					homepage
						? `portfolio/digitalart/${data.slug.current}`
						: `digitalart/${data.slug.current}`
				}
			>
				<div className='wrapper'>
					<div className='blur-overlay tw-bg-dark tw-absolute tw-z-10 tw-h-full tw-w-full tw-opacity-30 hover:tw-opacity-5'></div>
					<div className='img tw-relative'>
						<Image
							src={data.mainImageUrl.url}
							alt={`Sketchbook-cover | MD Yaser Arafat Israk`}
							width={400}
							height={400}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='tw-object-cover tw-h-80'
						/>
					</div>
					<div className=' tw-ps-3 tw-z-20'>
						<h1 className='fs-1 tw-text-primary tw-font-semibold'>{data.title}</h1>
						<p className=''>{data.body}</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
