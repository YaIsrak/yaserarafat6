'use client';

import {
	Environment,
	Float,
	MeshTransmissionMaterial,
	Text,
	useGLTF,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

export default function Scene() {
	return (
		<Canvas
			orthographic
			style={{ background: 'black' }}
			camera={{ position: [0, 0, 1], zoom: 800 }}>
			<Model />
			<directionalLight
				intensity={3}
				position={[0, 0.1, 1]}
			/>
			<Environment preset='city' />
		</Canvas>
	);
}

function Model() {
	const { viewport } = useThree();
	const { nodes } = useGLTF('/media/shards.glb');
	return (
		<group scale={viewport.width / 1.5}>
			{nodes.Scene.children.map((mesh, i) => {
				return (
					<Mesh
						data={mesh}
						key={i}
					/>
				);
			})}
			<Font />
		</group>
	);
}

function Font() {
	return (
		<group>
			<Text
				// font={src}
				position={[0, 0, -0.1]}
				fontSize={0.4}
				color='white'
				anchorX='center'
				anchorY='middle'>
				404
			</Text>
			<Text
				// font={src}
				position={[0, -0.2, -0.1]}
				fontSize={0.03}
				color='white'
				anchorX='center'
				anchorY='middle'>
				The link is broken
			</Text>
		</group>
	);
}

function Mesh({ data }: { data: any }) {
	// const materialProps = useControls({
	// 	thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
	// 	ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
	// 	chromaticAberration: { value: 0.75, min: 0, max: 1 },
	// 	resolution: { value: 300 },
	// });

	return (
		<Float>
			<mesh {...data}>
				<MeshTransmissionMaterial
					roughness={0}
					transmission={0.99}
					thickness={0.28}
					ior={1.8}
					chromaticAberration={0.75}
					resolution={300}
				/>
			</mesh>
		</Float>
	);
}
