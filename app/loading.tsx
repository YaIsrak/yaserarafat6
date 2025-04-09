import { BreathingText } from '@/components/ui/breathing-text';

export default function Loading() {
	return (
		<div className='w-full h-screen bg-dark flex items-center justify-center text-white'>
			<BreathingText
				label='ISRAK'
				staggerDuration={0.1}
				toFontVariationSettings="'wght' 100, 'slnt' 0"
				fromFontVariationSettings="'wght' 800, 'slnt' -10"
				className='text-8xl font-bold'
			/>
		</div>
	);
}
