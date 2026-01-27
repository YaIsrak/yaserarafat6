import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getFormattedTime() {
	return new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZone: 'Asia/Dhaka',
	})
		.format(new Date())
		.replace(/:/g, ' ');
}
