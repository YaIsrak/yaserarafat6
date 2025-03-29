// GradientTransition.tsx

interface GradientTransitionProps {
	height?: number;
	className?: string;
}

const GradientTransition = ({
	height = 100,
	className = '',
}: GradientTransitionProps) => {
	return (
		<svg
			width='100%'
			height={height}
			viewBox={`0 0 100 ${height}`}
			preserveAspectRatio='none'
			style={{
				position: 'absolute',
				top: -1, // Overlap sections by 1px
				left: 0,
				zIndex: 1,
			}}
			className={className}>
			<defs>
				<linearGradient
					id='sectionTransition'
					x1='0%'
					y1='0%'
					x2='0%'
					y2='100%'>
					<stop
						offset='0%'
						stopColor='black'
						stopOpacity='1'
					/>
					<stop
						offset='50%'
						stopColor='black'
						stopOpacity='0'
					/>
					<stop
						offset='50%'
						stopColor='white'
						stopOpacity='0'
					/>
					<stop
						offset='100%'
						stopColor='white'
						stopOpacity='1'
					/>
				</linearGradient>
			</defs>
			<rect
				width='100%'
				height='100%'
				fill='url(#sectionTransition)'
			/>
		</svg>
	);
};

export default GradientTransition;
