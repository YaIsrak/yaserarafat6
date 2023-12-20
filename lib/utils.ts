import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function dateFormatter(date: string) {
	const newDate = new Date(date);
	const res = newDate.toLocaleString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

	return res;
}
