import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefer relative '/api' to leverage Vite dev proxy; falls back to env when building
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';