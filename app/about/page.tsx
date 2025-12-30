"use client";

import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <section id="about" className="min-h-screen overflow-hidden relative py-20">
      {/* Background grids - sama dengan Experience section */}
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d4d4d4 1px, transparent 1px),
        linear-gradient(to bottom, #d4d4d4 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 80%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #333333 1px, transparent 1px),
        linear-gradient(to bottom, #333333 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Container dengan padding sama seperti Experience */}
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        {/* Header dengan styling sama seperti Experience */}
        <motion.div
          className="mb-10 md:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="w-8 h-1 bg-black dark:bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <span className="text-sm font-bold text-black dark:text-white uppercase tracking-widest">
              Personal Info
            </span>
          </div>

          <h2
            className={cn(
              oswald.className,
              "text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white tracking-tight md:tracking-[-2px] xl:tracking-[-3px]"
            )}
          >
            ABOUT ME
          </h2>
        </motion.div>

        {/* Konten About - dalam container yang sama seperti Experience */}
        <div className="relative">
          <div className="flex w-full flex-col items-end">
            <WavePath className="mb-10" />

            <div className="flex w-full flex-col items-end">
              <motion.div className="ml-8 font-mono space-y-6 text-md text-foreground/80 md:text-lg bg-white dark:bg-black  rounded-2xl p-6 md:p-8 ">
                <p>
                  I am a Full-Stack Developer with a primary focus on Front-End
                  Development and a strong interest in UI/UX Design. I have
                  experience building modern, responsive, and well-structured
                  web applications with a strong attention to detail and user
                  experience.
                </p>

                <p>
                  I regularly work with React, Next.js, TypeScript, Tailwind
                  CSS, and TanStack (Table & Query) to develop dashboards, CRUD
                  systems, and API-driven applications. On the backend side, I
                  have experience using Laravel, Express.js, Prisma, and
                  MySQL/MariaDB for data management and system integration.
                </p>

                <p>
                  I am comfortable handling projects end-to-end, from UI design
                  and frontend implementation to backend integration. I have
                  strong problem-solving skills, adapt quickly to new
                  technologies, and can work effectively both independently and
                  in a team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
