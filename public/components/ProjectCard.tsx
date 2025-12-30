"use client";

import type * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags?: string[];
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  tags = [],
  className,
}: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full h-80 rounded-xl bg-cover bg-center",
        "shadow-lg transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${imageUrl})`,
        }}
        className="absolute inset-4 grid h-[calc(100%-2rem)] w-[calc(100%-2rem)] place-content-end rounded-xl bg-contain bg-center shadow-lg"
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="p-6 text-white flex flex-col justify-between w-full h-full"
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-end gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mt-2">{title}</h3>
              <p className="text-xs text-white/80 line-clamp-2">
                {description}
              </p>
            </div>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                size="sm"
                className="flex gap-2 items-center"
                aria-label={`View ${title} project`}
              >
                <span>View</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
