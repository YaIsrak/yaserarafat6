import Image from 'next/image';
import Link from 'next/link';

export default function CImage({ src, alt, local, ...rest }) {
	return (
		<>
			{local ? (
				<Link href={src.src} target='_blank'>
					<Image
						src={src}
						alt={`${alt} | MD Yaser Arafat Israk`}
						placeholder='blur'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						{...rest}
					/>
				</Link>
			) : (
				<Link href={src}>
					<Image
						src={src}
						alt={`${alt} | MD Yaser Arafat Israk`}
						width={1}
						height={1}
						placeholder='blur'
						blurDataURL='/images/loading.png'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						{...rest}
					/>
				</Link>
			)}
		</>
	);
}
