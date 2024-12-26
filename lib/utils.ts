import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const env = {
  baseUrl: process.env.BASE_URL,
  PROJECT_ID: process.env.PROJECT_ID,
};
