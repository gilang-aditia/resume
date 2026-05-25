import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gilang Aditia | Frontend Developer Portfolio",
  description: "Learn more about Gilang Aditia, a professional Frontend Developer and UI/UX designer. Read about his journey, skills (React, Next.js, TypeScript), and experience at Varnion, Telkom, and Binar Academy.",
  keywords: [
    "About Gilang Aditia",
    "Gilang Aditia",
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer Indonesia",
    "Gilang Aditia Skills",
    "Next.js Developer"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gilang Aditia | Frontend Developer Portfolio",
    description: "Learn more about Gilang Aditia, a professional Frontend Developer and UI/UX designer. Read about his journey, skills, and experience.",
    url: "https://gilang-aditia.vercel.app/about",
    type: "profile",
    firstName: "Gilang",
    lastName: "Aditia",
    username: "gilang-aditia",
    gender: "male",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
