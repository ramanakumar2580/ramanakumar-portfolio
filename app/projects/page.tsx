"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        // Updated card styles for light/dark mode
        className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden h-full group transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-500 hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-neutral-400 text-sm">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    // Updated container to use padding and remove redundant styles
    <div className="w-full pt-24 pb-12 px-4 sm:px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            A selection of my work. Feel free to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
