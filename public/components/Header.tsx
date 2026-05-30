"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeTonggle";
import { motion, AnimatePresence } from "framer-motion";

const easterEggQuotes = [
  "Gilang bikin ini pakai ☕ dan 🧠",
  "Dibikin pas deadline, tapi santai aja",
  "Kalau error, namanya fitur spesial dari Gilang",
  "Powered by ✨ dan kopi tubruk",
  "Dibuat dengan cinta dan 100+ tab Chrome",
  "Gilang udah cek 3 kali, insyaallah aman",
  "0 bug serius. 1 developer waras.",
  "Ini portofolio, bukan proyek kampus",
  "Dibikin jam 2 malem, hasilnya gini-gini aja",
  "Still better than my first React app",
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 7) {
      const randomQuote =
        easterEggQuotes[Math.floor(Math.random() * easterEggQuotes.length)];
      setEasterEggMessage(randomQuote);
      setShowEasterEgg(true);
      setLogoClickCount(0);

      setTimeout(() => {
        setShowEasterEgg(false);
      }, 4000);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-semibold text-foreground hover:opacity-80 transition-opacity"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleLogoClick();
            }}
          >
            Glng .<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.slice(0).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title={link.description}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Theme Toggle di Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:bg-accent/10 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            {NAVIGATION.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-accent/10 text-foreground"
                    : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div>{link.name}</div>
                {link.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {link.description}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Easter Egg Bubble */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-linear-to-r from-emerald-400 to-blue-400 text-black rounded-full shadow-lg font-medium text-sm md:text-base max-w-xs text-center"
          >
            {easterEggMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
