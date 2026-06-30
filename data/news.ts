import type { NewsEvent } from "@/types";

export const newsEvents: NewsEvent[] = [
  /* ── HACKATHONS (4) ─────────────────────────────────── */
  {
    id: "hack-1",
    title: "GCPU Agentic AI Hackathon — Google Cloud",
    date: "2025-10-31",
    location: "Siège Google, Paris · France",
    description:
      "Compétition nationale d'un mois organisée par Google Cloud — 25 écoles, 50 équipes, 29 projets soumis, 11 finalistes. " +
      "Thème : IA agentique (Healthcare, Education, Energy, Data Intelligence, Disability). " +
      "Notre équipe a conçu Zenflow, un chatbot santé mentale multi-agents avec orchestrateur central, protocole d'urgence 3114 et intégration Google Calendar. " +
      "Deux équipes ESIGELEC Poitiers dans le Top 5 à la finale au siège de Google Paris; La vidéo présente notre pitch avec demo d'utilisation de la solution zenflow qu'on a proposée",
    result: "Top 5 · Nationale",
    photos: [],
    videos: ["/videos/20-Zenflow-Pitch+Demo.mp4"],
    label: "hackathon",
  },
  {
    id: "hack-2",
    title: "GCPU Generative AI Hackathon — Google Cloud",
    date: "2024-10-31",
    location: "Siège Google, Paris · France",
    description:
      "Édition 2024 du hackathon GCPU Google Cloud, axée sur l'IA Générative. " +
      "Notre équipe a atteint la finale et donné un speech de présentation au siège de Google à Paris devant un jury d'experts Google Cloud et de partenaires. " +
      "Une expérience de pitch et de prototypage intensif sur des problématiques réelles avec les outils Gemini et Google Cloud.",
    result: "Finaliste · Siège Google",
    photos: [
      "/images/events/Image_hack_gcp1.jpg",
      "/images/events/Image_hack_gcp1_.jpg",
      "/images/events/Image_hack_gcp1_2.jpg",
    ],
    videos: ["/videos/video_hack_gcp1.mp4"],
    label: "hackathon",
  },
  {
    id: "hack-3",
    title: "GreenHathon — IA Frugale · ALTEN",
    date: "2025-02-20",
    location: "ESIGELEC, Poitiers · France",
    description:
      "Challenge organisé par ALTEN sur le thème « Passer de l'IA de performance à l'IA de pertinence » — une occasion concrète d'apprendre à utiliser l'IA de façon responsable. " +
      "L'objectif : concevoir le classifieur d'images le plus frugal possible, applicable à des secteurs critiques (médecine, industrie, environnement, marketing, sécurité). " +
      "Contrainte centrale : l'empreinte environnementale du modèle ne devait pas dépasser celle de l'aviation. " +
      "Un accent fort a été mis sur le calcul de l'impact carbone de notre solution et du modèle retenu. " +
      "Notre équipe a terminé 2ème en optimisant un modèle de deep learning alliant précision et sobriété computationnelle. " +
      "La vidéo présente la démo de notre solution.",
    result: "🥈 2ème place",
    photos: [],
    videos: ["/videos/demo-groupe2_.mp4"],
    label: "hackathon",
  },
  {
    id: "hack-4",
    title: "Hackathon Hutchinson — IA pour la Supervision Industrielle",
    date: "2025-09-26",
    location: "ESIGELEC, Poitiers · France",
    description:
      "Challenge de 38 heures organisé par Hutchinson autour d'une problématique industrielle concrète : dans le cadre d'une supervision vérifiant l'état de plusieurs services, étudier l'apport de l'IA pour prévenir les incidents et détecter les anomalies. " +
      "Près de 500 Go de données réelles ont été fournis pour entraîner les modèles — un volume qui a mis à rude épreuve les ressources disponibles et nécessité des stratégies d'optimisation sur des machines sous pression. " +
      "Le format 38h a imposé une gestion rigoureuse de l'énergie : lutte contre la fatigue, itérations rapides, décisions sous contrainte de temps face à la complexité des solutions à concevoir. " +
      "Des activités de détente et de yoga étaient au programme pour maintenir la cohésion et la concentration des équipes tout au long de l'événement.",
    photos: [
      "/images/events/DSC03475.jpg",
      "/images/events/DSC03741 2.jpg",
      "/images/events/DSC03971.jpg",
      "/images/events/DSC03998.jpg",
      "/images/events/C0876T01.JPG",
      "/images/events/C0894T01.JPG",
      "/images/events/C0898T01.JPG",
    ],
    videos: ["/videos/hack4.MP4"],
    label: "hackathon",
  },

  /* ── FORUMS (4) ──────────────────────────────────────── */
  {
    id: "forum-1",
    title: "VivaTech 2026 — 10e Édition Anniversaire",
    date: "2026-06-17",
    location: "Paris Expo Porte de Versailles · France",
    description:
      "10e anniversaire de VivaTech, du 17 au 20 juin 2026, sous le fil conducteur « Artificial Intelligence : impact, not illusion ». " +
      "15 000 startups, 4 000 investisseurs, 60 pavillons nationaux, une surface agrandie de 30 % — difficile d'absorber l'événement en une seule journée. " +
      "Parcourir les allées, c'est mesurer en direct jusqu'où l'IA est en train de remodeler chaque secteur : healthtech, deeptech, cybersécurité, énergie. " +
      "Temps fort : le VivaTech Festival du samedi, pensé pour les 18–35 ans, entre talks IA & société, creator economy et carrières dans la tech. " +
      "Pour un étudiant en ingénierie, ce type d'événement met les idées en mouvement — on repart avec des connexions, des projets à challenger et une vision plus nette de ce que « construire avec l'IA » signifie concrètement.",
    photos: [
      "/images/events/Image_viva_2026.jpg",
      "/images/events/Image_viva_2026_1.jpg",
      "/images/events/Image_viva_2026_2.jpg",
      "/images/events/Image_viva_2026_3.jpg",
    ],
    label: "forum",
  },
  {
    id: "forum-2",
    title: "VivaTech 2025 — Quand l'Europe s'affirme dans la course à l'IA",
    date: "2025-06-11",
    location: "Paris Expo Porte de Versailles · France",
    description:
      "9e édition de VivaTech, du 11 au 14 juin 2025 : 165 000 participants, 13 500 startups, 3 500 exposants, 3 200 investisseurs. " +
      "Les chiffres donnent le vertige, mais c'est l'ambiance sur le floor qui marque vraiment. " +
      "L'annonce qui a électrisé la salle : le partenariat historique Mistral AI × Nvidia, salué par Emmanuel Macron venu rappeler les ambitions de la France dans la course mondiale à l'IA. " +
      "Entre keynotes, pitchs et démos live sur l'IA, la cybersécurité, la santé numérique et les technologies durables, l'édition 2025 a confirmé que l'Europe s'impose comme un acteur sérieux — et que les opportunités pour les développeurs et ingénieurs dans cet écosystème n'ont jamais été aussi ouvertes.",
    photos: [
      "/images/events/IMG_2023.jpeg",
      "/images/events/IMG_1954.jpeg",
      "/images/events/IMG_1995.jpeg",
      "/images/events/IMG_1970.jpeg",
    ],
    videos: ["/videos/IMG_2020.MOV"],
    label: "forum",
  },
  {
    id: "forum-3",
    title: "Visite Immersive SAP Paris — Entreprise & IA Joule",
    date: "2026-06-15",
    location: "SAP France, Paris · France",
    description:
      "Visite immersive dans les bureaux parisiens de SAP — l'occasion de plonger dans l'univers d'un des leaders mondiaux du logiciel d'entreprise. " +
      "Au programme : comprendre ce que SAP propose concrètement, des ERP aux solutions Cloud, en passant par la supply chain, la finance et la gestion des relations clients. " +
      "Un temps fort : la démonstration du cycle de vie d'une commande client de bout en bout — de la saisie à la livraison — pour voir comment des milliers d'entreprises pilotent leurs opérations en temps réel. " +
      "Découverte de Joule, le copilote IA génératif de SAP intégré à l'ensemble de sa suite : capable de répondre en langage naturel, d'anticiper des actions métier et d'accélérer des processus complexes. " +
      "Une visite qui donne une autre perspective sur ce que signifie « l'IA en entreprise » — pas un chatbot gadget, mais un levier profondément ancré dans les flux opérationnels réels.",
    photos: ["/images/events/Image.jpg"],
    videos: [],
    label: "forum",
  },

  {
    id: "forum-4",
    title: "Ambassadeur ESIGELEC — Salons Studyrama · Figaro · L'Étudiant",
    date: "2025-10-01",
    location: "France · Itinérant",
    description:
      "Rôle d'ambassadeur de l'école lors des grands salons d'orientation de poursuite d'études supérieures — Studyrama, Le Figaro Étudiant, L'Étudiant. " +
      "Représenter ESIGELEC face à des centaines de lycéens et étudiants, c'est avant tout un exercice de communication : écouter, reformuler, adapter son discours à chaque interlocuteur, qu'il hésite encore ou cherche une école d'ingénieurs ciblée. " +
      "Une expérience qui a profondément développé ma communication — capacité à vulgariser des sujets techniques, convaincre avec authenticité et trouver les bons mots face à des profils très différents. " +
      "Au-delà de la représentation de l'école, l'objectif était d'inspirer les générations suivantes à oser la poursuite d'études supérieures, et d'apporter des conseils concrets de parcours à ceux attirés par l'informatique et l'IA. " +
      "Plus d'une dizaine de salons au cours de mon cursus — une expérience récurrente qui a autant façonné mes soft skills que ma vision de l'écosystème éducatif.",
    result: "10+ Salons · Ambassadeur",
    photos: [
      "/images/events/ambassadeur/11d32b34-1e76-4d81-84a9-8fb8b3aa4948.JPG",
      "/images/events/ambassadeur/3bb36206-cb0c-40e8-ba36-2a9ec98273d3.JPG",
      "/images/events/ambassadeur/IMG_1223.jpeg",
      "/images/events/ambassadeur/IMG_1326.jpeg",
      "/images/events/ambassadeur/IMG_1336.JPG",
      "/images/events/ambassadeur/IMG_2597.jpeg",
      "/images/events/ambassadeur/IMG_2716.jpeg",
      "/images/events/ambassadeur/IMG_2718.jpeg",
      "/images/events/ambassadeur/IMG_4136.jpeg",
    ],
   
    label: "forum",
  },

  /* ── CHALLENGES (3) ──────────────────────────────────── */
  {
    id: "challenge-1",
    title: "C0D1NG UP 2026 — 12e Édition",
    date: "2026-03-22",
    location: "Université de Poitiers · France",
    description:
      "12e édition de C0D1NG UP — le 22 mars 2026 à la bibliothèque universitaire de Sciences de l'Université de Poitiers, dans le cadre de la Semaine des mathématiques (thème « Égalités »). " +
      "Le principe : des énigmes algorithmiques et problèmes d'optimisation à résoudre en équipe de deux, sous contrainte de temps, mêlant modélisation mathématique, créativité et efficacité du code. " +
      "Le niveau monte chaque année — participants venus en présentiel ou à distance de toute la France, entre étudiants, développeurs et passionnés. " +
      "Notre équipe a terminé 3ème — une progression significative par rapport à l'édition précédente, fruit d'un meilleur sens de la compétition et d'une approche plus structurée face aux problèmes d'optimisation.",
    result: "🥉 4ème place",
    photos: ["/images/events/Image (5).jpg"],
    label: "challenge",
  },
  {
    id: "challenge-2",
    title: "C0D1NG UP 2025 — 11e Édition",
    date: "2025-03-16",
    location: "Université de Poitiers · France",
    description:
      "11e édition de C0D1NG UP — le 16 mars 2025 à la bibliothèque universitaire de Sciences de l'Université de Poitiers. " +
      "Environ 140 participants cette année, dont 91 sur place (un record de présence), venus d'horizons variés : étudiants, professionnels, passionnés de programmation. " +
      "Défi central : concevoir l'algorithme le plus efficace possible pour guider un robot planteur de graines dans un potager — un problème d'optimisation combinatoire nécessitant une bonne modélisation et un code robuste sur plusieurs jeux de données. " +
      "Première participation pour moi : 11e au classement final. Une découverte du format compétition, un premier repère pour mesurer où j'en suis — et une bonne raison de revenir l'année suivante.",
    photos: ["/images/events/Image (4).jpg"],
    videos: ["/videos/codingup.MP4"],
    label: "challenge",
  },
  {
    id: "challenge-3",
    title: "AWS Community GameDay Europe 2026",
    date: "2026-03-17",
    location: "Poitiers · France",
    description:
      "Événement pan-européen synchronisé rassemblant 53 AWS User Groups dans 23 pays et plus de 50 villes — le 17 mars 2026, toutes les équipes s'affrontent avec les mêmes défis, la même horloge, et un classement unique. " +
      "Le format est radical : 2 heures de compétition directement dans la console AWS, sans slides, sans tutoriels, sans instructions étape par étape. " +
      "Les équipes incarnent des nouvelles recrues confrontées à des problèmes réels de production — cloud natif, IA, sécurité, observabilité — et doivent trouver leur chemin face à des énoncés intentionnellement ambigus. " +
      "42 équipes engagées au niveau international. Notre équipe a terminé 1ère à Poitiers et 2e en France — récompensée d'une médaille officielle AWS Community GameDay.",
    result: "🥈 2e France · 🥇 1er Poitiers",
    photos: [
      "/images/events/Image (1).jpg",
      "/images/events/Image (2).jpg",
      "/images/events/Image (3).jpg",
    ],
    label: "challenge",
  },
];
