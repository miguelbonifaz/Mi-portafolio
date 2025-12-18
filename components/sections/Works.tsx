"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Works() {
  const featuredProjects = projects.filter((p) => p.featured);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="works" className="w-full thin-border-top bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Label Column */}
          <div
            className={`md:col-span-3 text-gray-400 text-xs tracking-widest uppercase transition-all duration-600 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            (02) &mdash; Trabajos
          </div>

          {/* Projects Grid */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-600 ${
                    isVisible
                      ? `animate-fade-in-up delay-${Math.min(
                          (index + 1) * 100,
                          400
                        )}`
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div
              className={`mt-20 flex justify-center transition-all duration-600 ${
                isVisible
                  ? "animate-fade-in-up delay-500"
                  : "opacity-0 translate-y-5"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
