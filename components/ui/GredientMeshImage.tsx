import GradientMesh from '@/public/gradient_mesh.png';
import Image from 'next/image';

export default function GredientMeshImage() {
	return (
		<div className='absolute top-0 translate-y-1/2 w-full h-screen -z-10'>
			<Image
				src={GradientMesh}
				alt='hero'
				placeholder='blur'
				className='w-full h-full object-cover blur-[80px] scale-x-200 scale-y-80'
			/>
		</div>
	);
}
