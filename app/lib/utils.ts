import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animationDelay = (delay: number): string => {
  return `animation-delay: ${delay}ms`;
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

// Utility to generate random ID for elements
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
};