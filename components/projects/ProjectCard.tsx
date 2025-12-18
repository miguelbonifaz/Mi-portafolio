import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group cursor-pointer block hover-lift ${className}`}
    >
      <div className="bg-gray-100 overflow-hidden mb-4 rounded-sm">
        <Image
          src={project.images.thumbnail}
          alt={project.title}
          width={600}
          height={450}
          className="w-full h-auto grayscale-img group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
      <div>
        <h3 className="serif-font text-xl text-gray-900 mb-1 smooth-color group-hover:text-black relative inline-block link-underline">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 smooth-color group-hover:text-gray-700">{project.shortDescription}</p>
      </div>
    </Link>
  );
}
