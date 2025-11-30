"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data"; // Make sure your data is saved here
import { useRef } from "react";

// --- FIX: Defined constants at the top to avoid ReferenceError ---
const CARD_WIDTH = 400;
const CARD_HEIGHT = 400;

const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // Calculate mouse position relative to center of card
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { stiffness: 200, damping: 30 };

  // Magnetic effect logic
  const magneticX = useSpring(
    useTransform(mouseX, [-CARD_WIDTH / 2, CARD_WIDTH / 2], [-15, 15]),
    springConfig
  );
  const magneticY = useSpring(
    useTransform(mouseY, [-CARD_HEIGHT / 2, CARD_HEIGHT / 2], [-15, 15]),
    springConfig
  );

  // Dynamic gradient background
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(300px at ${x + CARD_WIDTH / 2}px ${y + CARD_HEIGHT / 2}px, rgba(255, 255, 255, 0.1), transparent 80%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: magneticX, y: magneticY }}
      className="relative group h-full" // Added h-full to ensure equal heights in grid
      variants={itemVariants}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg h-full overflow-hidden transition-all duration-300 group-hover:border-white/40 group-hover:dark:border-white/20 group-hover:shadow-2xl flex flex-col">
          {/* Spotlight Gradient Overlay */}
          <motion.div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{ background }}
          />

          <div className="relative w-full h-48 shrink-0 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-black dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="mt-auto flex items-center text-sm font-semibold text-gray-600 dark:text-neutral-400 transition-all duration-300 group-hover:text-black dark:group-hover:text-white">
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

export default function ProjectsPage() {
  return (
    <div className="w-full pt-24 pb-16 min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-neutral-400">
            A selection of my work. Feel free to explore.
          </p>
        </motion.div>

        <motion.div
          variants={pageContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
