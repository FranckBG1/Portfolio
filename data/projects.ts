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
    id: "securevault",
    title: "SecureVault — Gestionnaire de Mots de Passe Chiffré",
    context:
      "Application desktop de gestion de mots de passe répondant au besoin de stocker des comptes en ligne de manière sécurisée, sans dépendance à un cloud tiers. Conçue pour être accessible aux utilisateurs non experts tout en respectant les standards de sécurité modernes.",
    contribution:
      "Développement complet de l'application : interface desktop PySide6 (login, dashboard, settings, générateur), backend Flask, base de données SQLite chiffrée avec SQLCipher et hashage PBKDF2 (aucune donnée en clair). Implémentation du chiffrement AES-256 avec mot de passe maître, verrouillage automatique après inactivité, analyse de robustesse des mots de passe, copie sécurisée avec effacement automatique. Conteneurisation complète avec Docker et docker-compose.",
    result:
      "Prototype fonctionnel livré avec chiffrement bout-en-bout, ouverture en moins de 2 secondes, et zéro donnée stockée en clair. Tests backend couvrant les flux d'authentification et de chiffrement.",
    stack: ["Python", "Flask", "PySide6", "SQLite", "SQLCipher", "Docker", "HTML", "CSS"],
    demoUrl: "https://github.com/FranckBG1/SecureVault",
    githubUrl: "https://github.com/FranckBG1/SecureVault",
    featured: true,
    category: "backend",
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
    id: "zenflow",
    title: "Zenflow — Chatbot Santé Mentale Multi-Agents",
    context:
      "Projet réalisé lors du GCPU Agentic AI Hackathon Google Cloud 2025 (thème Healthcare & Life Sciences). Objectif : concevoir un chatbot capable d'orienter des patients en détresse psychologique, de gérer leurs rendez-vous et de détecter les situations d'urgence psychiatrique en temps réel. Le projet intègre également un module de détection d'émotions par caméra (Emotion App), conçu pour être embarqué comme frame dans la partie mobile.",
    contribution:
      "Architecture complète d'un orchestrateur central pilotant 7 agents spécialisés : EmergencyAgent (protocole 3114 — bannière persistante), CollectionAgent (extraction de 5 paramètres psychologiques : émotion, causes, durée, symptômes, intensité), AnalysisAgent (score de sévérité 0-10), CalendarAgent (analyse et allègement de l'agenda Google si surcharge > 8h/jour), BookingAgent (génération de 3 créneaux adaptés), RecommendationAgent (exercices de respiration, méditation, yoga) et ConversationAgent (fluidité). Machine à 6 états : ROUTING → EMERGENCY → COLLECTING → CONFIRMATION → ANALYZING → FINAL_RESPONSE. Prompts Gemini à température contrôlée (0.1 extraction précise, 0.7 créativité conversationnelle).",
    result:
      "Système multi-agents opérationnel : détection de crise sans rupture conversationnelle, intégration réelle Google Calendar via Apps Script, taux de complétion de collecte mesurable. Top 5 national — GCPU Agentic AI Hackathon Google Cloud 2025, parmi 50 équipes issues de 25 écoles.",
    stack: ["Python", "Flask", "Gemini API", "Google Calendar API", "Vertex AI", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://github.com/FranckBG1/agentic-ia-agent",
    videoUrl: "/videos/20-Zenflow-Pitch+Demo.mp4",
    githubUrl: "https://github.com/FranckBG1/agentic-ia-agent",
    featured: true,
    category: "ai",
  },
  {
    id: "emotion-detection",
    title: "Emotion App — Détection d'Émotions en Temps Réel",
    context:
      "Module complémentaire du projet Zenflow, conçu pour être intégré comme frame embarquée dans l'interface mobile du chatbot. Objectif : capturer l'état émotionnel de l'utilisateur via la caméra du navigateur et alimenter le CollectionAgent de Zenflow avec le paramètre 'émotion', sans action manuelle de la part de l'utilisateur.",
    contribution:
      "Développement d'une application web 100% front-end utilisant un modèle de deep learning chargé directement dans le navigateur. Intégration de la capture caméra en temps réel, inférence locale sur les frames vidéo, et exposition du résultat d'émotion détectée pour consommation par le système Zenflow. Architecture sans backend : le modèle tourne entièrement côté client pour minimiser la latence.",
    result:
      "Application fonctionnelle de détection d'émotions en temps réel via webcam, embarquable comme iframe dans n'importe quelle interface mobile ou web. Composant autonome et réutilisable au sein de l'écosystème Zenflow.",
    stack: ["HTML", "JavaScript", "TensorFlow.js", "Python", "Flask", "OpenCV", "Docker"],
    demoUrl: "https://github.com/FranckBG1/emotion-app",
    githubUrl: "https://github.com/FranckBG1/emotion-app",
    featured: true,
    category: "ai",
  },
  {
    id: "portfolio",
    title: "Portfolio — Franck NKOMA BAYEMA",
    context:
      "Portfolio personnel conçu pour présenter mon parcours, mes projets et mes expériences de façon dynamique et moderne. Objectif : créer une expérience de navigation fluide qui reflète à la fois mes compétences techniques et mon sens du détail.",
    contribution:
      "Design et développement complets from scratch — architecture Next.js App Router, système de sections animées (About, Stack, Projects, News, Highlights), composants sur-mesure : slider crossfade avec lightbox photo/vidéo, compteurs animés en boucle, highlight de résultats en texte, filtres d'événements par catégorie. Conteneurisation Docker pour le déploiement.",
    result:
      "Portfolio entièrement responsive et déployable, avec plus de 10 événements documentés, 5 projets détaillés et des animations Framer Motion optimisées. Ce que vous lisez en ce moment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker"],
    demoUrl: "https://github.com/FranckBG1/Portfolio",
    githubUrl: "https://github.com/FranckBG1/Portfolio",
    featured: true,
    category: "web",
  },
];
