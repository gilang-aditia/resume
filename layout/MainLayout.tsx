"use client";

import Navbar from "@/public/components/Header";
import LoadingScreenSimple from "@/public/components/LoadingScreen";
import { ThemeToggle } from "@/public/components/ThemeTonggle";
import { useState, useEffect } from "react";
import AIChatButton from "@/components/AIChatButton";
import KonamiCodeEasterEgg from "@/components/KonamiCodeEasterEgg";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <KonamiCodeEasterEgg />
      {isLoading && (
        <LoadingScreenSimple
          onComplete={() => setIsLoading(false)}
          duration={2000}
        />
      )}

      <div
        className={`min-h-screen bg-background ${
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-700"
        }`}
      >
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        {!isLoading && <AIChatButton />}
      </div>
    </>
  );
}
