import Image from 'next/image';

export default function CImage({ src, alt, className, local }) {
	return (
		<>
			{local ? (
				<Image src={src} alt={alt} placeholder='blur' className={className} />
			) : (
				<Image
					src={src}
					alt={alt}
					fill
					objectFit='cover'
					placeholder='blur'
					blurDataURL='/images/loading.png'
					className={className}
				/>
			)}
		</>
	);
}
