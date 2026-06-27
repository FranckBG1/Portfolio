import type { TechGroup } from "@/types";

export const techGroups: TechGroup[] = [
  {
    label: "Languages",
    icon: "Monitor",
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "Dart", "C", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    icon: "Server",
    technologies: ["Flutter", "Angular", "Spring Boot", "Flask", "Node.js", "Express", "REST APIs"],
  },
  {
    label: "DevOps & Cloud",
    icon: "Wrench",
    technologies: ["Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "Vertex AI", "Google Cloud", "Jenkins", "Git", "GitLab", "Prometheus", "Grafana"],
  },
  {
    label: "Databases & Data",
    icon: "Link",
    technologies: ["PostgreSQL", "MongoDB", "Neo4j", "SQLite", "SQL", "Firebase", "JWT", "JMeter"],
  },
];

/* ── Marquee rows — 3 copies used in component, -33.33% = 1 copy ── */
export const marqueeRows = [
  {
    label:     "Languages",
    direction: "left"  as const,
    duration:  60,
    items: ["JavaScript", "TypeScript", "Python", "Java", "Dart", "Flutter", "C", "HTML", "CSS"],
  },
  {
    label:     "Frameworks",
    direction: "right" as const,
    duration:  54,
    items: ["Angular", "Spring Boot", "Flask", "Node.js", "Express", "REST APIs", "JWT", "Scrum", "Agile"],
  },
  {
    label:     "DevOps · Cloud",
    direction: "left"  as const,
    duration:  68,
    items: ["Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "Google Cloud", "Jenkins", "Git", "GitLab", "Grafana", "Vertex AI"],
  },
  {
    label:     "BDD · DATA",
    direction: "right" as const,
    duration:  58,
    items: ["PostgreSQL", "MongoDB", "Neo4j", "SQLite", "SQL", "Firebase", "Prometheus", "JMeter", "Jira"],
  },
];

/* ── All technologies flat list for "view all" mode ── */
export const allTechs = [
  "JavaScript", "TypeScript", "Python", "Java", "Dart", "C", "HTML", "CSS",
  "Flutter", "Angular", "Spring Boot", "Flask", "Node.js", "Express", "REST APIs",
  "Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "Google Cloud", "Jenkins", "Git", "GitLab", "Prometheus", "Grafana",
  "PostgreSQL", "MongoDB", "Neo4j", "SQLite", "SQL", "Firebase", "JWT", "JMeter", "Jira",
];
