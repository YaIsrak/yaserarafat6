import Link from 'next/link';

// images
import cover from '@/public/images/art-bg.jpg';
import cover3 from '@/public/images/bg-cover2.png';
import cover2 from '@/public/images/cover2.jpg';
import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';

export const metadata: Metadata = {
	title: 'Work',
};

export default function page() {
	return (
		<div className='work tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-4'>
			<Item
				src={cover}
				name={'Digital'}
				name2={'Art'}
				link={'/portfolio/digitalart'}
			/>
			<Item
				src={cover2}
				name={'Graphic'}
				name2={'Design'}
				link={'https://www.behance.net/israk'}
			/>
			<Item
				src={cover3}
				name={'Web'}
				name2={'Develpoment'}
				link={'/portfolio/web-design'}
			/>
		</div>
	);
}

function Item({
	src,
	name,
	name2,
	link,
}: {
	src: StaticImageData;
	name: string;
	name2: string;
	link: string;
}) {
	return (
		<div>
			<Link
				href={link}
				className='tw-flex tw-justify-center tw-items-center tw-gap-2 hover:tw-gap-x-0 hover:md:tw-gap-x-10 tw-no-underline tw-w-full tw-text-primary hover:tw-text-light hover:tw-bg-primary/25'
			>
				<h1 className='display-2 !tw-font-bold'>{name}</h1>
				<span className='tw-relative tw-w-40 '>
					<Image
						src={src}
						alt={` | MD Yaser Arafat Israk`}
						placeholder='blur'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</span>
				<h1 className='display-2 !tw-font-bold'>{name2}</h1>
			</Link>
		</div>
	);
}
