import ProjectClient from "./ProjectClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Web Projects | Gilang Aditia Portfolio",
  description: "Browse the featured web development and design projects built by Gilang Aditia. Includes client work like Varnion Bali, Keponet, PT. Boga, and React applications.",
  keywords: [
    "Gilang Aditia Web Projects",
    "Varnion Bali Website",
    "Keponet Company Website",
    "React Movie Chill App",
    "PT Boga Eterna Sentosa Web",
    "Frontend Developer Portfolio Projects"
  ],
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "Featured Web Projects | Gilang Aditia Portfolio",
    description: "Browse the featured web development and design projects built by Gilang Aditia. Includes client work like Varnion Bali, Keponet, PT. Boga, and React applications.",
    url: "https://gilang-aditia.vercel.app/project",
    type: "website",
  },
};

export default function ProjectPage() {
  return <ProjectClient />;
}
