import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "stock-management",
    title: "Stock & Sales Management App",
    context:
      "Built to replace manual notebook-based stock and sales tracking for a small business. The goal was to digitize daily operations and give the owner real-time visibility over inventory and revenue.",
    contribution:
      "Designed and developed the full application end-to-end — data model, REST API, and Angular frontend. Delivered a complete management solution from scratch.",
    result:
      "Eliminated manual tracking errors, reduced reconciliation time, and gave the business owner a clear daily overview of stock levels and sales performance.",
    stack: ["Java", "Spring Boot", "Angular", "REST API", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "web",
  },
  {
    id: "flutter-mobile",
    title: "Flutter Mobile App with Backend API",
    context:
      "Full-stack mobile project involving a Flutter frontend connected to a Node.js/Express backend. Focused on real-world app architecture, authentication, and deployment.",
    contribution:
      "Built Flutter UI screens, integrated API endpoints, implemented JWT authentication flow, wrote unit and integration tests, and containerized the backend with Docker.",
    result:
      "Delivered a working cross-platform mobile app with secure auth, clean API integration, and a Dockerized backend ready for deployment.",
    stack: ["Flutter", "Dart", "Node.js", "Express", "JWT", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "mobile",
  },
  {
    id: "sports-management",
    title: "Sports Activities Management App",
    context:
      "Academic team project to manage sports activities, registrations, and scheduling. Required clear API design and solid backend logic under time constraints.",
    contribution:
      "Led backend development: designed the API structure, implemented business logic for reservations and scheduling, coordinated team delivery across the sprint.",
    result:
      "Delivered a functioning backend on time, with a clean REST API that the frontend team could integrate without friction.",
    stack: ["Python", "Flask", "REST API", "SQLite", "Pytest"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "backend",
  },
  {
    id: "emotion-detection",
    title: "Emotion Detection & Health Recommendation App",
    context:
      "Project integrating a trained emotion-detection model into a web application to power personalized health and wellness recommendations.",
    contribution:
      "Integrated the AI model into the application pipeline, built the processing layer between model output and recommendation logic, and deployed the web application.",
    result:
      "Delivered a working AI-powered web app with real-time emotion inference and a recommendation engine serving context-aware wellness content.",
    stack: ["Python", "Flask", "TensorFlow", "OpenCV", "Docker", "Nginx"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "ai",
  },
];
