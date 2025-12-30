"use client";

import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import { ProjectCard } from "@/public/components/ProjectCard";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const projects = [
  {
    title: "Varnion Bali - Company Website",
    description:
      "Modern and responsive company website for Varnion Bali, built with Next.js and Tailwind CSS.",
    imageUrl: "/assets/image/varnionbali.png",
    projectUrl: "https://bali.varnion.net.id/",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        id="projects"
        className="min-h-screen overflow-hidden relative py-20"
      >
        {/* Background grids - sama dengan About section */}
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

        {/* Container dengan padding sama seperti About */}
        <div className="mx-auto max-w-7xl relative z-20 px-6">
          {/* Header dengan styling sama seperti About */}
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
                Portfolio
              </span>
            </div>

            <h2
              className={cn(
                oswald.className,
                "text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white tracking-tight md:tracking-[-2px] xl:tracking-[-3px]"
              )}
            >
              MY PROJECTS
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="relative">
            <div className="flex w-full flex-col items-end">
              <WavePath className="mb-10" />

              <div className="w-full">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        tags={project.tags}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
