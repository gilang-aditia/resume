"use client";

import Navbar from "@/public/components/Header";
import LoadingScreenSimple from "@/public/components/LoadingScreen";
import { useState, useEffect } from "react";

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
        <main className="pt-16 md:pt-20"> {children}</main>
      </div>
    </>
  );
}
