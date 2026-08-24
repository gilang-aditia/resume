"use client";

import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const contactInfo = [
  {
    name: "Email",
    value: "gaditia744@gmail.com",
    href: "mailto:gaditia744@gmail.com",
    icon: Mail,
    label: "Send Email",
    color: "group-hover:text-red-500",
  },
  {
    name: "WhatsApp / Phone",
    value: "087732886254",
    href: "https://wa.me/6287732886254",
    icon: Phone,
    label: "Contact via WhatsApp",
    color: "group-hover:text-green-500",
  },
  {
    name: "LinkedIn",
    value: "gilang-aditia",
    href: "https://www.linkedin.com/in/gilang-aditia/",
    icon: Linkedin,
    label: "View Profile",
    color: "group-hover:text-blue-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen overflow-hidden relative py-20">
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
              Get In Touch
            </span>
          </div>

          <h2
            className={cn(
              oswald.className,
              "text-5xl md:text-7xl xl:text-8xl font-bold mb-6 text-black dark:text-white tracking-tight md:tracking-[-2px] xl:tracking-[-3px]"
            )}
          >
            CONTACT ME
          </h2>

          <p className="font-mono text-base md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl font-medium tracking-wide">
            Please feel free to contact me for collaboration opportunities, job openings, or just to say hi.
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative">
          <div className="flex w-full flex-col items-end">
            <WavePath className="mb-10" />

            <div className="w-full">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.name}
                      href={info.href}
                      target={info.name === "LinkedIn" ? "_blank" : undefined}
                      rel={info.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="group block bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={cn("p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300", info.color)}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                      </div>

                      <span className="block font-serif text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {info.name}
                      </span>
                      
                      <h3 className="text-lg font-mono font-bold text-black dark:text-white mb-4 truncate">
                        {info.value}
                      </h3>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white uppercase tracking-wider border-b border-black dark:border-white pb-0.5 group-hover:opacity-80 transition-opacity">
                        {info.label}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
