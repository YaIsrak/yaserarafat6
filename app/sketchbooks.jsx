import Link from 'next/link';
import Image from 'next/image';
import '../styles/slider.scss';

export default function Sketchbooks({ datas }) {
	return (
		<div className='sketchbook tw-h-screen tw-w-full'>
			<div>
				<div className='items tw-h-screen tw-whitespace-nowrap tw-divide-x '>
					{datas?.map((data, i) => (
						<Card key={data._id} data={data} i={i} />
					))}
				</div>
			</div>
		</div>
	);
}

function Card({ data, i }) {
	return (
		<Link
			className='item tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-inline-block tw-relative tw-h-screen tw-overflow-hidden '
			href={`digitalart/${data.slug.current}`}
		>
			<div className='item-wrapper'>
				<div className='item-copy tw-flex tw-flex-col tw-items-center tw-w-full tw-h-full'>
					<h1 className='item-name display-5'>{data.title}</h1>
					<div className='id tw-font-bold display-1'>{i + 1}</div>
				</div>
				<div className='img tw-relative tw-h-screen'>
					<Image
						className='img'
						alt='sketchbook-cover'
						src={data.imageUrl.url}
						fill
						sizes='100'
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className='img-overlay tw-absolute tw-h-full tw-w-full tw-top-0 tw-left-0'></div>
			</div>
		</Link>
	);
}
