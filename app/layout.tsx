import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franck NKOMA BAYEMA — Ingénieur Full-Stack",
  description:
    "Ingénieur full-stack en alternance — Java, Spring Boot, Flutter, Angular, Python, Docker, Cloud. Basé à Poitiers, mobilité nationale.",
  keywords: [
    "ingénieur full-stack",
    "développeur full-stack",
    "Flutter",
    "Spring Boot",
    "Angular",
    "Python",
    "Docker",
    "Poitiers",
    "Next.js",
  ],
  authors: [{ name: "Franck NKOMA BAYEMA" }],
  openGraph: {
    title: "Franck NKOMA BAYEMA — Ingénieur Full-Stack",
    description:
      "Ingénieur full-stack en alternance — Java, Spring Boot, Flutter, Angular, Python, Docker, Cloud. Basé à Poitiers, mobilité nationale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
