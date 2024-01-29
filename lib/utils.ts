import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const baseUrl = process.env.baseURL
	? `https://${process.env.baseURL}`
	: 'http://localhost:3000';
