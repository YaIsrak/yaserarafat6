import Image from 'next/image';
import Link from 'next/link';

// images
import cover from '../../public/images/art-bg.jpg';
import cover2 from '../../public/images/cover2.jpg';
import cover3 from '../../public/images/bg-cover2.png';
import CImage from '../CImage';

export default function page() {
	return (
		<div className='work tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-4'>
			<Item
				src={cover}
				name={'Digital'}
				name2={'Art'}
				link={'/portfolio/digitalart'}
				className={''}
			/>
			<Item
				src={cover2}
				name={'Graphic'}
				name2={'Design'}
				link={'https://www.behance.net/israk'}
				className={''}
			/>
			<Item
				src={cover3}
				name={'Web'}
				name2={'Develpoment'}
				link={'/portfolio/web-design'}
				className={''}
			/>
		</div>
	);
}

function Item({ src, name, name2, link }) {
	return (
		<Link
			href={link}
			className='tw-flex tw-justify-center tw-items-center tw-gap-2 hover:tw-gap-x-0 hover:md:tw-gap-x-10 tw-no-underline tw-w-full tw-text-primary hover:tw-text-light hover:tw-bg-primary/25'
		>
			<h1 className='display-2 !tw-font-bold'>{name}</h1>
			<div className='tw-relative tw-w-40 '>
				<CImage src={src} alt='' local priority />
			</div>
			<h1 className='display-2 !tw-font-bold'>{name2}</h1>
		</Link>
	);
}
