import ExperienceClient from "./ExperienceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Gilang Aditia - Frontend Developer",
  description: "Explore the professional journey of Gilang Aditia. See details of his software engineering roles at PT. Varnion Technology Semesta, PT. Aneka Dasuib Jaya, Telkom Indonesia, and Binar Academy.",
  keywords: [
    "Gilang Aditia Experience",
    "Frontend Developer Experience",
    "Gilang Aditia Varnion",
    "Gilang Aditia Aneka Dasuib Jaya",
    "Telkom Indonesia Intern",
    "Binar Academy Intern",
    "Web Developer Experience"
  ],
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Work Experience | Gilang Aditia - Frontend Developer",
    description: "Explore the professional journey of Gilang Aditia. See details of his software engineering roles at PT. Varnion Technology Semesta, PT. Aneka Dasuib Jaya, Telkom Indonesia, and Binar Academy.",
    url: "https://gilang-aditia.vercel.app/experience",
    type: "website",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
