'use client';
import useDimension from '@/hooks/useDimension';
import useMouse from '@/hooks/useMouse';
import { useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMotionValue, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { fragment, vertex } from './Shader';

export default function Model() {
	const dimension = useDimension();
	const mouse = useMouse();
	const { viewport } = useThree();
	const texture = useTexture('/art/Illustration42.png');
	const smoothMouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const uniforms = useRef({
		uTexture: { value: texture },
	});
	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	useFrame(() => {
		const { x, y } = mouse;
		smoothMouse.x.set(lerp(smoothMouse.x.get(), x.get(), 0.1));
		smoothMouse.y.set(lerp(smoothMouse.y.get(), y.get(), 0.1));
	});

	const x = useTransform(
		smoothMouse.x,
		[0, dimension.width],
		[(-1 * viewport.width) / 2, viewport.width / 2],
	);
	const y = useTransform(
		smoothMouse.y,
		[0, dimension.height],
		[viewport.height / 2, (-1 * viewport.height) / 2],
	);

	return (
		<motion.mesh
			position-x={x}
			position-y={y}>
			<planeGeometry args={[2, 3, 55, 55]} />
			{/* <meshBasicMaterial
				wireframe
				color={'green'}
			/> */}

			<shaderMaterial
				vertexShader={vertex}
				fragmentShader={fragment}
				uniforms={uniforms.current}
				// transparent={true}
				// wireframe
			/>
		</motion.mesh>
	);
}
