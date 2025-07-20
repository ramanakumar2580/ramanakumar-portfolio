"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import ScrollReveal from "@/app/components/ScrollReveal";
import { useRef } from "react";

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { stiffness: 200, damping: 30 };
  const magneticX = useSpring(
    useTransform(mouseX, [-width / 2, width / 2], [-15, 15]),
    springConfig
  );
  const magneticY = useSpring(
    useTransform(mouseY, [-height / 2, height / 2], [-15, 15]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: magneticX, y: magneticY }}
      className="relative group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg h-full overflow-hidden transition-all duration-300 group-hover:border-white/40 group-hover:dark:border-white/20 group-hover:shadow-2xl">
          <motion.div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) =>
                  `radial-gradient(300px at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
              ),
            }}
          />

          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex items-center text-sm font-semibold text-gray-600 dark:text-neutral-400 transition-all duration-300 group-hover:text-black dark:group-hover:text-white">
              View Project
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const width = 400;
const height = 400;

export default function ProjectsPage() {
  return (
    <div className="w-full pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            A selection of my work. Feel free to explore.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ScrollReveal key={project.title}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
