import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Cubic-bezier typé pour Framer Motion (évite l'erreur number[] vs Easing)
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const labelColors: Record<string, string> = {
  meetup: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  conference: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  hackathon: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  certification: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  milestone: "bg-green-500/10 text-green-400 border-green-500/20",
};
