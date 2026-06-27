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
  title: "Franck BG — Junior Full-Stack Software Engineer",
  description:
    "Junior full-stack software engineer based in Paris. Building web apps, mobile solutions, APIs, and deployment pipelines. Open to junior engineering roles.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "junior developer",
    "Paris",
    "Next.js",
    "Flutter",
    "Node.js",
    "Spring Boot",
  ],
  authors: [{ name: "Franck " }],
  openGraph: {
    title: "Franck BG — Junior Full-Stack Software Engineer",
    description:
      "Junior full-stack software engineer based in Paris. Building web apps, mobile solutions, APIs, and deployment pipelines.",
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
