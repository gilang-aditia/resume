"use client";

import { useState } from "react";
import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Radio, 
  Layers, 
  Award, 
  MessageSquareCode, 
  Settings, 
  Wifi, 
  Link2, 
  ShoppingBag, 
  Database, 
  Briefcase 
} from "lucide-react";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jobsData = [
  {
    company: "PT. Varnion Technology Semesta",
    period: "Jun 2025 - Present",
    role: "Frontend Developer",
    logoColor: "text-emerald-500",
    projects: [
      {
        title: "Hi Varnion",
        description: "A comprehensive communication dashboard bridging clients and Varnion administrators to resolve technical issues and requests in real time. Features end-to-end communication powered by WebSocket connection for instant chat updates.",
        tags: ["Next.js", "TypeScript", "WebSocket", "Tailwind CSS", "Framer Motion"],
        icon: MessageSquareCode,
      },
      {
        title: "Nexus Reward",
        description: "An administrative and user reward system built to manage referral codes, trace and calculate loyalty points, coordinate point redemption rewards, and streamline withdrawal processing.",
        tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "State Management"],
        icon: Award,
      },
      {
        title: "Nexus Ads",
        description: "A centralized advertisement management platform designed to control, schedule, organize, and track advertisements served across client portals and company platforms.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Dashboard"],
        icon: Layers,
      },
      {
        title: "Nexus Tune",
        description: "A network management dashboard built to monitor and dynamically tune bandwidth configurations and allocations across diverse client network lines.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Network API Integration"],
        icon: Radio,
      },
      {
        title: "Megalos",
        description: "A template and configuration management tool allowing administrators to design and deploy real-time configuration templates dynamically upon modifications.",
        tags: ["Next.js", "React", "TypeScript", "Realtime Synced Config", "Tailwind CSS"],
        icon: Settings,
      },
      {
        title: "Fiberzone",
        description: "A streamlined client portal for browsing, purchasing, and managing internet subscription packages securely and efficiently.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Subscription Flows"],
        icon: Wifi,
      },
      {
        title: "Captive Hook",
        description: "A specialized portal system designed to fetch and display configured advertisements from Nexus Ads using UI themes defined dynamically by Megalos.",
        tags: ["React", "Vanilla JS", "Tailwind CSS", "Dynamic UI Rendering"],
        icon: Link2,
      },
    ],
  },
  {
    company: "PT. Aneka Dasuib Jaya",
    period: "Agu 2023 - Apr 2025",
    role: "Frontend Developer",
    logoColor: "text-amber-500",
    projects: [
      {
        title: "ssayomart",
        description: "A modern consumer-facing E-Commerce web application that enables online transactions, payment integration, and real-time delivery logistics utilizing Gojek courier API services.",
        tags: ["React.js", "Tailwind CSS", "Gojek API Integration", "Payment Gateway"],
        icon: ShoppingBag,
      },
      {
        title: "Supply Chain System",
        description: "An internal warehouse and inventory database system developed to manage raw material input/output data and execute complex ingredient formulation calculations.",
        tags: ["React.js", "Formulation Engine", "Tailwind CSS", "Data Analytics"],
        icon: Database,
      },
      {
        title: "Java Super Food Grosir",
        description: "A specialized B2B wholesale E-Commerce platform optimized to support high-volume bulk ordering workflows rather than individual retail items.",
        tags: ["React.js", "Wholesale Rules", "Tailwind CSS", "Cart Optimization"],
        icon: Briefcase,
      },
    ],
  },
];

export default function ExperienceJob() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience-job" className="min-h-screen overflow-hidden relative py-20">
      {/* Background grids */}
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

      <div className="mx-auto max-w-7xl relative z-20 px-6">
        {/* Header */}
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
              Professional Projects
            </span>
          </div>

          <h2
            className={cn(
              oswald.className,
              "text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white tracking-tight md:tracking-[-2px] xl:tracking-[-3px]"
            )}
          >
            EXPERIENCE JOB
          </h2>

          <p className="font-mono text-base md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl font-medium tracking-wide">
            Daftar proyek profesional yang pernah saya kembangkan di masing-masing perusahaan.
          </p>
        </motion.div>

        {/* Tabs and Projects */}
        <div className="relative">
          <div className="flex w-full flex-col items-end">
            <WavePath className="mb-10" />

            <div className="w-full">
              {/* Tab Navigation */}
              <div className="flex gap-4 border-b border-gray-200 dark:border-gray-800 mb-8 pb-px">
                {jobsData.map((job, idx) => (
                  <button
                    key={job.company}
                    onClick={() => setActiveTab(idx)}
                    className={cn(
                      "pb-4 text-sm md:text-base font-semibold transition-all relative font-serif",
                      activeTab === idx
                        ? "text-black dark:text-white"
                        : "text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className={cn("w-4 h-4", job.logoColor)} />
                      <span>{job.company}</span>
                    </div>
                    {activeTab === idx && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {jobsData[activeTab].projects.map((project, index) => {
                    const ProjectIcon = project.icon;
                    return (
                      <motion.div
                        key={project.title}
                        className="group bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-350">
                              <ProjectIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                              Project {index + 1}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold font-serif text-black dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-sm font-mono text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-900">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-[9px] font-mono rounded bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
