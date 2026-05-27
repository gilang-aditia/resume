"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCodeEasterEgg() {
  const sequenceRef = useRef<string[]>([]);
  const [showLegend, setShowLegend] = useState(false);
  const [isRetro, setIsRetro] = useState(false);
  const tapCountRef = useRef<number>(0);
  const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      sequenceRef.current.push(key);

      if (sequenceRef.current.length > KONAMI_CODE.length) {
        sequenceRef.current.shift();
      }

      const isMatch = sequenceRef.current.every(
        (key, index) => key === KONAMI_CODE[index],
      );

      if (isMatch && sequenceRef.current.length === KONAMI_CODE.length) {
        triggerEasterEgg();
        sequenceRef.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const handleTouchEnd = () => {
      tapCountRef.current += 1;

      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }

      if (tapCountRef.current === 7) {
        triggerEasterEgg();
        tapCountRef.current = 0;
      } else {
        tapTimeoutRef.current = setTimeout(() => {
          tapCountRef.current = 0;
        }, 2000);
      }
    };

    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchend", handleTouchEnd);
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
    };
  }, []);

  const triggerEasterEgg = () => {
    setShowLegend(true);
    setIsRetro(true);

    createConfetti();

    setTimeout(() => {
      setIsRetro(false);
    }, 2000);

    setTimeout(() => {
      setShowLegend(false);
    }, 5000);
  };

  const createConfetti = () => {
    const confettiPieces = 50;
    const container = document.body;

    for (let i = 0; i < confettiPieces; i++) {
      const confetti = document.createElement("div");
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 0.5;
      const x = Math.random() * 100;
      const rotation = Math.random() * 360;

      confetti.style.cssText = `
        position: fixed;
        left: ${x}%;
        top: -20px;
        width: ${size}px;
        height: ${size}px;
        background: ${getRandomColor()};
        pointer-events: none;
        z-index: 9999;
        animation: fall ${duration}s linear ${delay}s forwards;
        transform: rotate(${rotation}deg);
      `;

      container.appendChild(confetti);

      setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }

    if (!document.getElementById("confetti-style")) {
      const style = document.createElement("style");
      style.id = "confetti-style";
      style.textContent = `
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  const getRandomColor = () => {
    const colors = [
      "#FF1493",
      "#00FF00",
      "#FFD700",
      "#00CED1",
      "#FF69B4",
      "#32CD32",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      {/* Pocong Image Full Screen */}
      <AnimatePresence>
        {isRetro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pointer-events-none z-9998 flex items-center justify-center bg-black/80"
          >
            <motion.img
              src="/assets/image/Pocong.png"
              alt="Pocong"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* "You're a legend!" message */}
      <AnimatePresence>
        {showLegend && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9999"
          ></motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </>
  );
}
