'use client';

import { cn, getFormattedTime } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { SlidingNumber } from './sliding-number';

export default function Clock({ className }: { className?: string }) {
	const [time, setTime] = useState(getFormattedTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getFormattedTime());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const [hours, minutes, seconds] = time
		.split(' ')
		.map((num) => parseInt(num));

	return (
		<div className={cn('flex gap-0.5', className)}>
			<SlidingNumber
				value={hours}
				padStart
			/>
			<span>:</span>
			<SlidingNumber
				value={minutes}
				padStart
			/>
			<span>:</span>
			<SlidingNumber
				value={seconds}
				padStart
			/>
			<span>GMT-5</span>
		</div>
	);
}
