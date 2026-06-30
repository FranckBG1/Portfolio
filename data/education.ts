export interface Education {
  id: string;
  school: string;
  degree: string;
  specialization?: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

export const education: Education[] = [
  {
    id: "esigelec",
    school: "ESIGELEC",
    degree: "Diplôme d'Ingénieur Généraliste",
    specialization: "Développement logiciel, test et qualité",
    period: "2023 – 2026",
    location: "Poitiers, France",
    current: true,
    highlights: [
      "Développement logiciel : DevOps, programmation orientée objet (POO), TDD et assurance qualité",
      "Qualité logicielle : assurance, performance, stabilité et tests logiciels",
      "Architecture des systèmes d'information et cybersécurité",
      "Cloud & DevOps : Infrastructure as Code (IaC), déploiement et cloud computing",
      "Management et suivi de projet",
    ],
  },
  {
    id: "saint-jean",
    school: "Institut Saint Jean Ingénieur",
    degree: "Diplôme d'Ingénieur en Génie Logiciel et Système d'Information",
    period: "2022 – 2023",
    location: "Yaoundé, Cameroun",
    highlights: [
      "Formation en développement web Java",
      "Conception et gestion de bases de données",
      "Fondamentaux du génie logiciel et des systèmes d'information",
    ],
  },
  {
    id: "esprit",
    school: "ESPRIT",
    degree: "Classe Préparatoire CPGE MPSI / MP",
    period: "2020 – 2022",
    location: "Tunis, Tunisie",
    highlights: [
      "Formation scientifique intensive en mathématiques, physique et informatique",
      "Initiation à la programmation Python et aux bases de données avec SQLite",
    ],
  },
];
