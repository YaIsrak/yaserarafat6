import Image from 'next/image';

export default function CImage({ src, alt, local, ...rest }) {
	return (
		<>
			{local ? (
				<Image
					src={src}
					alt={`${alt} | MD Yaser Arafat Israk`}
					placeholder='blur'
					style={{ objectFit: 'contain' }}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					{...rest}
				/>
			) : (
				<Image
					src={src}
					alt={`${alt} | MD Yaser Arafat Israk`}
					fill
					style={{ objectFit: 'contain' }}
					placeholder='blur'
					blurDataURL='/images/loading.png'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					{...rest}
				/>
			)}
		</>
	);
}
