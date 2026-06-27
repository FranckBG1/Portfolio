export interface Project {
  id: string;
  title: string;
  context: string;
  contribution: string;
  result: string;
  stack: string[];
  demoUrl?: string;
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
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  photos: string[];
  label: "meetup" | "conference" | "hackathon" | "certification" | "milestone";
}

export type NavItem = {
  label: string;
  href: string;
};
