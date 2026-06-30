export interface Certification {
  id:        string;
  name:      string;
  issuer:    string;
  status:    "active" | "in-progress";
  badge:     string;     /* devicon or emoji fallback */
  href:      string;     /* official cert page — replace with Credly badge URL when available */
  detail?:   string;     /* extra info e.g. score, level */
}

export const certifications: Certification[] = [
  {
    id:     "gcp-ace",
    name:   "Associate Cloud Engineer",
    issuer: "Google Cloud",
    status: "active",
    badge:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    href:   "https://www.credly.com/badges/0b62eba5-9623-434f-8ef3-985f99454d3e/linked_in?t=tav35m",
  },
  {
    id:     "aws-cp",
    name:   "Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "in-progress",
    badge:  "",
    href:   "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    id:     "istqb",
    name:   "CTFL — Foundation Level",
    issuer: "ISTQB",
    status: "active",
    badge:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    href:   "https://app.skillsclub.com/credential/257552-ad85e853583a51effda2083eb2265c89e4643ce75f8f7cd51c9d860cfaac1b95",
  },
  {
    id:     "toeic",
    name:   "TOEIC — English B2",
    issuer: "ETS Global",
    status: "active",
    badge:  "",
    href:   "https://www.etsglobal.org/fr/en/digital-score-report/34C8530C664CFEBCA8DF7D7B9C22396E3D4E45DC1A96D59867AAC69C0BB89446VzJMVWFBazBOTkI3YXl6UXI1U0JJc3RVQ2tQbW9KUDlBa2tWYis5MlNVeFlENVhH",
    detail: "Score 835 / 990",
  },
  {
    id:     "flutter-essentials",
    name:   "L'essentiel de Flutter",
    issuer: "LinkedIn Learning",
    status: "active",
    badge:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    href:   "https://www.linkedin.com/learning/certificates/120289bd2428239a471915665648121bcfe98c5dd7f5fb0012a843c054d2accc?trk=share_certificate",
  },
  {
    id:     "inr",
    name:   "Responsible Design of Digital Services",
    issuer: "Institut du Numérique Responsable",
    status: "active",
    badge:  "",
    href:   "https://www.linkedin.com/in/franck-nkoma/details/certifications/",
  },
];
