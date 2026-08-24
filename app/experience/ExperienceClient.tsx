"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Oswald } from "next/font/google";

const myFont = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Experience() {
  const experiences = [
    {
      year: "Jun 2025 - Present",
      duration: "Currently Working",
      title: "Frontend Developer",
      company: "PT. Varnion Technology Semesta",
      location: "South Jakarta, Jakarta, Indonesia",
      description:
        "Develop and maintain frontend web applications using modern technologies such as React, Next.js, and TypeScript. Responsible for UI/UX design implementation, performance optimization, and collaboration with backend teams for API integration.",
      type: "Professional",
      isActive: true,
    },
    {
      year: "Apr 2026 - Present",
      duration: "Currently Working",
      title: "Freelance Frontend Developer",
      company: "PT. Laksono Inovasi Teknologi",
      location: "Remote, Indonesia",
      description:
        "Develop and maintain frontend web applications as a freelancer.",
      type: "Professional",
      isActive: true,
    },
    {
      year: "Aug 2023 - Apr 2025",
      duration: "1 year 9 months",
      title: "Frontend Developer",
      company: "PT. Aneka Dasuib Jaya",
      location: "Tangerang City, Banten, Indonesia",
      description:
        "Build and develop responsive web applications for various corporate clients. Implement reusable components, state management, and apply best practices in frontend development.",
      //   tags: ["Frontend", "Responsive", "Components"],
      type: "Professional",
      isActive: false,
    },
    {
      year: "Feb 2022 - Jul 2022",
      duration: "6 months",
      title: "UI/UX Research and Design Intern",
      company: "Binar Academy",
      location: "South Jakarta, Jakarta, Indonesia",
      description:
        "Conduct user research, create wireframes, mockups, and prototypes for mobile and web applications. Collaborate with the development team to ensure accurate design implementation.",
      // tags: ["UI/UX", "Figma", "Research"],
      type: "Internship",
      isActive: false,
    },
    {
      year: "Oct 2021 - Feb 2022",
      duration: "5 months",
      title: "Full-stack Web Developer Intern",
      company: "Telkom Indonesia",
      location: "Yogyakarta, Special Region of Yogyakarta, Indonesia",
      description:
        "Develop full-stack web applications from concept to deployment. Responsible for frontend (React) and backend (Node.js) development, as well as database integration.",
      //   tags: ["Full-stack", "Node.js", "Database"],
      type: "Internship",
      isActive: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="experience"
      className="min-h-screen overflow-hidden relative py-20"
    >
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
              Professional Journey
            </span>
          </div>

          <h2
            className={`${myFont.className} text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white tracking-tight md:tracking-[-2px] xl:tracking-[-3px]`}
          >
            EXPERIENCE
          </h2>

          <p className="font-mono text-base md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl font-medium tracking-wide">
            Professional journey in web development, from internship to
            professional roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          <motion.div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-black dark:bg-white"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Experience cards */}
          <motion.div
            className="space-y-8 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative pl-20 md:pl-24"
                variants={itemVariants}
              >
                <motion.div
                  className={`absolute left-0 md:left-1 top-1 w-5 h-5 rounded-full border-4 border-white dark:border-black transition-all duration-300 ${
                    exp.isActive
                      ? "bg-black dark:bg-white"
                      : "bg-gray-400 dark:bg-gray-600 group-hover:bg-black dark:group-hover:bg-white"
                  }`}
                  variants={dotVariants}
                />

                <motion.div
                  className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-2xl p-6 md:p-8 hover:border-black dark:hover:border-white transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <motion.div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-full text-xs font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.year}
                      </motion.div>
                      <motion.div
                        className="inline-flex items-center px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full text-xs font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.duration}
                      </motion.div>
                    </div>

                    {exp.isActive && (
                      <motion.div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white dark:bg-black animate-pulse" />
                        Current
                      </motion.div>
                    )}
                  </div>

                  {/* Title and company */}
                  <div className="mb-3">
                    <h3 className="text-lg md:text-lg lg:text-2xl font-bold text-black dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                      {exp.company}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-black dark:text-white shrink-0" />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm lg:w-3xl leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-lg text-xs font-semibold"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div> */}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
