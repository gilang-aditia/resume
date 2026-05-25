import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Gilang Aditia | Hire Frontend Developer",
  description: "Get in touch with Gilang Aditia for collaboration opportunities, job openings, or inquiries. Reach out via email, WhatsApp, or LinkedIn.",
  keywords: [
    "Contact Gilang Aditia",
    "Hire Gilang Aditia",
    "Gilang Aditia Email",
    "Gilang Aditia WhatsApp",
    "Gilang Aditia LinkedIn",
    "Frontend Developer Jakarta Contact"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Gilang Aditia | Hire Frontend Developer",
    description: "Get in touch with Gilang Aditia for collaboration opportunities, job openings, or inquiries. Reach out via email, WhatsApp, or LinkedIn.",
    url: "https://gilang-aditia.vercel.app/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
