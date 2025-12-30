import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with cart, checkout, and payment integration",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with dark mode and smooth animations",
      tags: ["React", "Framer Motion", "CSS Modules"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of my recent work and case studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline">
              <Link href="/experience">View Experience</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
