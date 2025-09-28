import { cn } from '@/lib/utils';

interface GridLinesProps {
	className?: string;
	containerClassName?: string;
}

export default function GridLines({
	className,
	containerClassName,
}: GridLinesProps) {
	return (
		<div className={cn('h-full top-0 w-full absolute z-5', className)}>
			<div
				className={cn(
					'container mx-auto px-2 md:px-0 h-full w-full',
					containerClassName,
				)}>
				<div className='grid grid-cols-4 h-full divide-x divide-muted-foreground/20 border-x border-muted-foreground/20'>
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		</div>
	);
}
