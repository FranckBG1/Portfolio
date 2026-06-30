export interface Project {
  id: string;
  title: string;
  context: string;
  contribution: string;
  result: string;
  stack: string[];
  period?: string;
  demoUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  previewImage?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "ai";
}

export interface TechGroup {
  label: string;
  icon: string;
  technologies: string[];
}

export interface Highlight {
  label: string;
  value: string | number;
  suffix?: string;
  description: string;
  icon: string;
  loop?: boolean;
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  result?: string;
  photos: string[];
  videos?: string[];
  label: "hackathon" | "forum" | "challenge" | "meetup" | "conference" | "certification" | "milestone";
}

export type NavItem = {
  label: string;
  href: string;
};
