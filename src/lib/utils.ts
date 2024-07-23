import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createEnum<T extends readonly [string, ...string[]]>(values: T) {
  return z.enum(values);
}