import ExperienceJobClient from "./ExperienceJobClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Projects & Experience | Gilang Aditia",
  description: "Detailed list of professional projects built by Gilang Aditia, including Hi Varnion, Nexus Reward, Nexus Ads, Nexus Tune, Megalos, ssayomart, and supply chain systems.",
  keywords: [
    "Gilang Aditia Projects",
    "Hi Varnion Dashboard",
    "Nexus Reward System",
    "Nexus Ads Platform",
    "ssayomart E-Commerce",
    "Frontend Developer Projects",
    "React Projects Portfolio"
  ],
  alternates: {
    canonical: "/experience-job",
  },
  openGraph: {
    title: "Professional Projects & Experience | Gilang Aditia",
    description: "Detailed list of professional projects built by Gilang Aditia, including Hi Varnion, Nexus Reward, Nexus Ads, Nexus Tune, Megalos, ssayomart, and supply chain systems.",
    url: "https://gilang-aditia.vercel.app/experience-job",
    type: "website",
  },
};

export default function ExperienceJobPage() {
  return <ExperienceJobClient />;
}
