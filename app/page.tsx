import About from "./about/AboutClient";
import ExperienceJob from "./experience-job/ExperienceJobClient";
import Experience from "./experience/ExperienceClient";
import HeroSection from "./home/page";
import Projects from "./project/ProjectClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gilang Aditia | Frontend Developer & UI/UX Designer Portfolio",
  description: "Official portfolio of Gilang Aditia, a professional Frontend Developer based in Jakarta, Indonesia. Specializing in high-performance web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Gilang Aditia",
    "Gilang Aditia Portfolio",
    "Frontend Developer",
    "Web Developer Indonesia",
    "Gilang Aditia Varnion",
    "Next.js Developer",
    "React Developer",
    "UI/UX Designer Portfolio",
    "Full-Stack Developer Jakarta"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gilang Aditia | Frontend Developer & UI/UX Designer Portfolio",
    description: "Official portfolio of Gilang Aditia, a professional Frontend Developer based in Jakarta, Indonesia. Specializing in high-performance web applications using React, Next.js, and TypeScript.",
    url: "https://gilang-aditia.vercel.app/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <About />
      <ExperienceJob />
      <Projects />
    </main>
  );
}

