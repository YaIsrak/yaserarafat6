import { cn } from '@/lib/utils';
import GradientMesh from '@/public/gradient_mesh.png';
import Image from 'next/image';

export default function GredientMeshImage({
	className,
	imageClassName,
}: {
	className?: string;
	imageClassName?: string;
}) {
	return (
		<div
			className={cn(
				'absolute top-0 translate-y-1/2 w-full h-screen -z-10',
				className,
			)}>
			<Image
				src={GradientMesh}
				alt='hero'
				placeholder='blur'
				className={cn(
					'w-full h-full object-cover blur-[80px] scale-x-200 scale-y-80',
					imageClassName,
				)}
			/>
		</div>
	);
}
