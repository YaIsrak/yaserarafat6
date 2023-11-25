import Image from 'next/image';
import Link from 'next/link';

interface CustomImage {
	src: any;
	alt: string;
	local?: boolean;
	className?: string;
}

export default function CustomImage({
	src,
	alt,
	local,
	className,
	...props
}: CustomImage) {
	return (
		<>
			{local ? (
				<Link href={src.src} target='_blank'>
					<Image
						src={src}
						alt={`${alt} | MD Yaser Arafat Israk`}
						placeholder='blur'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className={className}
						{...props}
					/>
				</Link>
			) : (
				<Link href={src}>
					<Image
						src={src}
						alt={`${alt} | MD Yaser Arafat Israk`}
						width={1}
						height={1}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className={className}
						{...props}
					/>
				</Link>
			)}
		</>
	);
}
