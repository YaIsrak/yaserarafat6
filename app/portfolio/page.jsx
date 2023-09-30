import Image from 'next/image';
import Link from 'next/link';

// images
import cover from '../../public/images/art-bg.jpg';
import cover2 from '../../public/images/cover2.jpg';
import cover3 from '../../public/images/bg-cover2.png';

export default function page() {
	return (
		<div className='work tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-4'>
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
			className='group tw-flex tw-justify-center tw-items-center tw-gap-2 hover:tw-gap-10 tw-no-underline tw-w-full tw-text-light hover:tw-text-primary'
		>
			<h1>{name}</h1>
			<div className='tw-relative tw-w-40 tw-h-20 group-hover:tw-w-44'>
				<Image
					src={src}
					alt=''
					fill
					sizes='100'
					style={{ objectFit: 'cover' }}
					placeholder='blur'
				/>
			</div>
			<h1>{name2}</h1>
		</Link>
	);
}
