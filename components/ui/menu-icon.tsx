import { cn } from '@/lib/utils';

export default function MenuIcon({ className }: { className?: string }) {
	return (
		<svg
			className={cn('pointer-events-none', className)}
			width={16}
			height={16}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4 12L20 12'
				className='origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(1,0,0,1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
			/>
			<path
				d='M4 12H20'
				className='origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(1,0,0,1)] group-aria-expanded:rotate-45'
			/>
			<path
				d='M4 12H20'
				className='origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(1,0,0,1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
			/>
		</svg>
	);
}
