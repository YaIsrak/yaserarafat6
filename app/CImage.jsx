import Image from 'next/image';

export default function CImage({
	src,
	alt,
	className,
	local,
	priority,
	sizes,
}) {
	return (
		<>
			{local ? (
				<Image
					src={src}
					alt={`${alt} | MD Yaser Arafat Israk`}
					placeholder='blur'
					className={className}
					style={{ objectFit: 'cover' }}
					priority={priority}
					sizes={sizes}
				/>
			) : (
				<Image
					src={src}
					alt={`${alt} | MD Yaser Arafat Israk`}
					fill
					style={{ objectFit: 'cover' }}
					placeholder='blur'
					blurDataURL='/images/loading.png'
					className={className}
					priority={priority}
					sizes={sizes}
				/>
			)}
		</>
	);
}
