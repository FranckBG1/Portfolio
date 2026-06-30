import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "wave-up-health",
    title: "Application Mobile — Wave Up Health",
    context:
      "Projet d'alternance au sein de Wave Up Health (Poitiers) — startup spécialisée dans la santé connectée. Objectif : développer une application mobile permettant la visualisation et l'interaction avec des données géospatiales et des environnements 3D, destinée aux professionnels de santé et aux patients.",
    contribution:
      "Face au besoin d'étendre la solution mobile à des partenaires externes, j'ai d'abord développé l'application Flutter de bout en bout — cartographie interactive, rendu 3D, consommation d'APIs JavaScript via ponts natifs — puis conçu et déployé une API robuste associée, hébergée et déployée on-premise, pour rendre la solution interopérable et disponible à l'échelle. J'ai rédigé la documentation technique complète de l'API. En parallèle, j'ai contribué activement aux cycles de développement en environnement professionnel : méthodologies Scrum et Agile au quotidien, cycle en V pour les phases de qualification, revues de code, livraisons continues via TestFlight et conteneurisation Docker. Résultat : une application mobile en production, une API documentée et opérationnelle, et une montée en compétence rapide sur un stack avancé dans un contexte startup réel.",
    result:
      "Application mobile fonctionnelle en production, livrée en continu sur TestFlight. Montée en compétence rapide sur un stack mobile avancé (Flutter, 3D, géospatial) dans un contexte d'entreprise réel avec des contraintes de qualité et de délais.",
    stack: ["Flutter", "Dart", "JavaScript", "Docker", "TestFlight", "REST API"],
    period: "Sept. 2024 – présent",
    professional: true,
    featured: true,
    category: "mobile",
  },
  {
    id: "stock-management",
    title: "Stock & Sales Management App",
    context:
      "Développé pour remplacer un suivi manuel des ventes et du stock pour une petite entreprise. L'objectif : numériser les opérations quotidiennes et offrir au gérant une visibilité en temps réel sur ses stocks et ses revenus. Livré au client sous version desktop.",
    contribution:
      "Conception et développement de l'application de bout en bout — modèle de données, API REST et interface Angular. Système de rôles : le vendeur accède uniquement aux opérations de vente et de stock du jour, tandis que l'administrateur dispose d'une vue globale — chiffre d'affaires, historique complet des événements, gestion des utilisateurs. Les captures présentées en démo utilisent des données de test.",
    result:
      "Suppression des erreurs de suivi manuel, réduction du temps de réconciliation, et visibilité quotidienne claire sur les niveaux de stock et les performances de vente. Produit livré et déployé chez le client.",
    stack: ["Java", "Spring Boot", "Angular", "REST API", "PostgreSQL"],
    period: "Mars 2026",
    screenshots: [
      "/images/events/Capture d'écran 2026-06-30 182519.png",
      "/images/events/Capture d'écran 2026-06-30 182701.png",
      "/images/events/Capture d'écran 2026-06-30 182743.png",
      "/images/events/Capture d'écran 2026-06-30 182837.png",
      "/images/events/Capture d'écran 2026-06-30 182914.png",
      "/images/events/Capture d'écran 2026-06-30 183007.png",
      "/images/events/Capture d'écran 2026-06-30 183027.png",
      "/images/events/Capture d'écran 2026-06-30 183101.png",
      "/images/events/Capture d'écran 2026-06-30 183133.png",
    ],
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
      "Projet réalisé en équipe — contribution sur plusieurs fonctionnalités clés : interface desktop PySide6 (écrans de connexion, tableau de bord, paramètres, générateur de mots de passe), intégration du backend Flask, base de données SQLite chiffrée avec SQLCipher et hashage PBKDF2 (aucune donnée en clair). Implémentation du chiffrement AES-256 avec mot de passe maître, verrouillage automatique après inactivité, analyse de robustesse des mots de passe et copie sécurisée avec effacement automatique. Conteneurisation avec Docker et docker-compose.",
    result:
      "Prototype fonctionnel livré avec chiffrement bout-en-bout, ouverture en moins de 2 secondes, et zéro donnée stockée en clair. Tests backend couvrant les flux d'authentification et de chiffrement.",
    stack: ["Python", "Flask", "PySide6", "SQLite", "SQLCipher", "Docker", "HTML", "CSS"],
    period: "Nov. 2025",
    demoUrl: "https://secure-vault-76dx7dwc2-franck-nkoma.vercel.app",
    githubUrl: "https://github.com/FranckBG1/SecureVault",
    featured: true,
    category: "backend",
  },
  {
    id: "sports-management",
    title: "Sports Activities Management App",
    context:
      "Projet académique en équipe pour gérer des activités sportives, les inscriptions et la planification. Nécessitait une conception d'API claire et une logique backend solide dans des délais contraints.",
    contribution:
      "Pilotage du développement backend : conception de l'architecture API, implémentation de la logique métier pour les réservations et la planification des activités, coordination de l'équipe tout au long du sprint.",
    result:
      "Backend fonctionnel livré dans les délais, avec une API REST propre que l'équipe frontend a pu intégrer sans friction.",
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
    videoUrl: "https://res.cloudinary.com/dppbwwgv/video/upload/v1782838050/20-zenflow-pitch-demo_37o5sj66_gegrz6.mp4",
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
    demoUrl: "https://emotion-du7eumwa1-franck-nkoma.vercel.app",
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
      "Développement en équipe d'un pipeline de classification d'images basé sur le dataset VISA, avec suivi de l'empreinte carbone en temps réel via CodeCarbon à chaque cycle d'entraînement. Conception d'une architecture évolutive permettant de changer de framework ML. Déploiement d'une interface de démonstration interactive via Streamlit pour tester le modèle en direct.",
    result:
      "2ème place du hackathon — solution reconnue pour son équilibre optimal entre précision du modèle et sobriété computationnelle. Approche Green AI appliquée concrètement : calcul du coût carbone intégré au workflow, pas en post-traitement.",
    stack: ["Python", "Streamlit", "CodeCarbon", "Deep Learning", "Candle"],
    period: "Fév. 2025",
    videoUrl: "https://res.cloudinary.com/dppbwwgv/video/upload/v1782835405/demo-groupe2__bhmfbb.mp4",
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
      "Développement fullstack de l'application : modèle de données SQLite, backend Flask avec authentification par session, contrôleurs pour la logique métier (tournois, matchs, classements), et gabarits HTML/CSS/JS pour l'interface. Architecture organisée en modèles / contrôleurs / gabarits / statiques.",
    result:
      "Application fonctionnelle de gestion de tournois avec authentification, suivi des statistiques joueurs et leaderboard. L'un de mes tout premiers projets fullstack — quelques erreurs de débutant subsistent, mais il reflète le point de départ d'une progression visible à travers les projets suivants.",
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    period: "2024",
    demoUrl: "https://projet-conception-sites-web-fossball-pour-gestion-76uf4oo48.vercel.app",
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
      "Conception et développement complets from scratch — architecture Next.js App Router, système de sections animées, composants sur-mesure : diaporama avec galerie photo/vidéo, compteurs animés en boucle, mise en valeur des résultats en texte, filtres d'événements par catégorie. Conteneurisation Docker pour le déploiement.",
    result:
      "Portfolio entièrement responsive et déployable, avec plus de 10 événements documentés, 5 projets détaillés et des animations Framer Motion optimisées. Ce que vous lisez en ce moment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker"],
    period: "2026",
    githubUrl: "https://github.com/FranckBG1/Portfolio",
    featured: true,
    category: "web",
  },
];
