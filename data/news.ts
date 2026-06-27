import type { NewsEvent } from "@/types";

export const newsEvents: NewsEvent[] = [
  {
    id: "event-1",
    title: "Tech Meetup Paris — Web & Cloud",
    date: "2024-03-15",
    location: "Paris, France",
    description:
      "Attended a local tech meetup focused on modern web architecture and cloud-native development. Great opportunity to connect with engineers from the Paris tech scene and share experiences around API design and deployment patterns.",
    photos: ["/images/events/placeholder-1.jpg"],
    label: "meetup",
  },
  {
    id: "event-2",
    title: "Hackathon — 48h Innovation Challenge",
    date: "2024-01-20",
    location: "Paris, France",
    description:
      "Participated in a 48-hour hackathon building a real-time collaboration tool. Led the backend team, designed the API layer, and coordinated integration with the frontend team under tight time pressure.",
    photos: ["/images/events/placeholder-2.jpg"],
    label: "hackathon",
  },
  {
    id: "event-3",
    title: "Docker & Kubernetes Workshop",
    date: "2023-11-10",
    location: "Paris, France",
    description:
      "Hands-on workshop covering container orchestration fundamentals with Docker Compose and Kubernetes. Applied concepts directly to ongoing projects and improved containerization practices.",
    photos: ["/images/events/placeholder-3.jpg"],
    label: "conference",
  },
];
