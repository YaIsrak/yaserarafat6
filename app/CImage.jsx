import Image from 'next/image';

export default function CImage({ src, alt, className }) {
	return (
		<>
			<Image
				src={src}
				alt={alt}
				fill
				objectFit='cover'
				placeholder='blur'
				blurDataURL='/images/loading.png'
				className={className}
			/>
		</>
	);
}
