import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout/MainLayout";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gilangaditia.my.id"),
  title: {
    default: "Gilang Aditia | Frontend Developer & UI/UX Designer Portfolio",
    template: "%s | Gilang Aditia",
  },
  description:
    "Official portfolio of Gilang Aditia, a professional Frontend Developer based in Jakarta, Indonesia. Specializing in high-performance web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Gilang Aditia",
    "Gilang Aditia Portfolio",
    "Frontend Developer",
    "Web Developer Indonesia",
    "React Developer",
    "Next.js Portfolio",
    "UI/UX Designer Portfolio",
    "Full-Stack Developer Jakarta",
  ],
  openGraph: {
    title: "Gilang Aditia | Frontend Developer & UI/UX Designer Portfolio",
    description:
      "Official portfolio of Gilang Aditia, a professional Frontend Developer based in Jakarta, Indonesia. Specializing in high-performance web applications using React, Next.js, and TypeScript.",
    url: "https://gilangaditia.my.id",
    siteName: "Gilang Aditia Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/myFolio/ai.jpg",
        width: 1200,
        height: 630,
        alt: "Gilang Aditia Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilang Aditia | Frontend Developer & UI/UX Designer Portfolio",
    description:
      "Official portfolio of Gilang Aditia, a professional Frontend Developer based in Jakarta, Indonesia. Specializing in high-performance web applications using React, Next.js, and TypeScript.",
    images: ["/assets/myFolio/ai.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gilang Aditia",
  url: "https://gilangaditia.my.id/",
  jobTitle: "Frontend Developer",
  sameAs: [
    "https://www.linkedin.com/in/gilang-aditia/",
    "https://github.com/gilang-aditia",
  ],
  email: "gaditia744@gmail.com",
  telephone: "+6287732886254",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta Selatan",
    addressRegion: "Jakarta",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
