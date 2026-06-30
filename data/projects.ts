import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "wave-up-health",
    title: "Application Mobile — Wave Up Health",
    context:
      "Projet d'alternance au sein de Wave Up Health (Poitiers) — startup spécialisée dans la santé connectée. Objectif : développer une application mobile permettant la visualisation et l'interaction avec des données géospatiales et des environnements 3D, destinée aux professionnels de santé et aux patients.",
    contribution:
      "Développement mobile Flutter de bout en bout : intégration de cartographie interactive, rendu 3D, consommation d'APIs JavaScript via bridges natifs, et pipeline de livraison via TestFlight. Conteneurisation des services associés avec Docker. Participation aux cycles de sprints, code reviews et livraisons continues en environnement professionnel.",
    result:
      "Application mobile fonctionnelle en production, livrée en continu sur TestFlight. Montée en compétence rapide sur un stack mobile avancé (Flutter, 3D, géospatial) dans un contexte d'entreprise réel avec des contraintes de qualité et de délais.",
    stack: ["Flutter", "Dart", "JavaScript", "Docker", "TestFlight", "REST API"],
    period: "Sept. 2024 – présent",
    featured: true,
    category: "mobile",
  },
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
    period: "Mars 2026",
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
    period: "Nov. 2025",
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
    period: "Nov. 2025",
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
    period: "Oct. 2025",
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
    period: "Oct. 2025",
    demoUrl: "https://github.com/FranckBG1/emotion-app",
    githubUrl: "https://github.com/FranckBG1/emotion-app",
    featured: true,
    category: "ai",
  },
  {
    id: "greenai",
    title: "GreenAI — Classification d'Images Frugale · ALTEN",
    context:
      "Hackathon organisé par ALTEN sur le thème « Passer de l'IA de performance à l'IA de pertinence ». Objectif : concevoir le classifieur d'images le plus frugal possible, applicable à des secteurs critiques (médecine, industrie, environnement), en maîtrisant l'empreinte carbone du modèle comme contrainte centrale — pas seulement la précision.",
    contribution:
      "Développement en équipe d'un pipeline de classification d'images basé sur le dataset VISA, avec tracking de l'empreinte carbone en temps réel via CodeCarbon à chaque run d'entraînement. Conception d'une architecture scalable permettant de switcher entre frameworks ML. Déploiement d'une interface de démo interactive via Streamlit pour tester le modèle en live.",
    result:
      "2ème place du hackathon — solution reconnue pour son équilibre optimal entre précision du modèle et sobriété computationnelle. Approche Green AI appliquée concrètement : calcul du coût carbone intégré au workflow, pas en post-traitement.",
    stack: ["Python", "Streamlit", "CodeCarbon", "Deep Learning", "Candle"],
    period: "Fév. 2025",
    videoUrl: "/videos/demo-groupe2_.mp4",
    githubUrl: "https://github.com/FranckBG1/GreenAI_Groupe2",
    featured: true,
    category: "ai",
  },
  {
    id: "fossball",
    title: "Fossball — Gestion de Tournois de Baby-Foot",
    context:
      "Un des premiers projets fullstack réalisés dans le cadre de ma formation. Objectif : concevoir une application web complète de gestion de tournois de baby-foot — utilisateurs, matchs, classements et statistiques en temps réel. Un projet d'apprentissage qui posait les premières briques d'une architecture MVC avec Flask.",
    contribution:
      "Développement fullstack de l'application : modèle de données SQLite, backend Flask avec authentification par session, controllers pour la logique métier (tournois, matchs, classements), et templates HTML/CSS/JS pour l'interface. Architecture organisée en models / controllers / templates / static.",
    result:
      "Application fonctionnelle de gestion de tournois avec authentification, suivi des statistiques joueurs et leaderboard. L'un de mes tout premiers projets fullstack — quelques erreurs de débutant subsistent, mais il reflète le point de départ d'une progression visible à travers les projets suivants.",
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    period: "2024",
    githubUrl: "https://github.com/FranckBG1/Projet_conception_sites_web_fossball_pour_gestion_babyfoot",
    featured: true,
    category: "web",
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
    period: "2026",
    demoUrl: "https://github.com/FranckBG1/Portfolio",
    githubUrl: "https://github.com/FranckBG1/Portfolio",
    featured: true,
    category: "web",
  },
];
