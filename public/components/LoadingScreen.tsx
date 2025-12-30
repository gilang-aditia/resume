"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function LoadingScreenSimple({
  onComplete,
  duration = 2500,
}: LoadingScreenProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center space-y-6">
        <BlurFade delay={0.25} inView>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
            Hello Friends 👋
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            Nice to meet you
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
