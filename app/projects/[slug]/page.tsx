"use client";

import { useParams } from "next/navigation";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Ramana Kumar`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <h1 className="text-2xl text-black dark:text-white">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-24 left-4 sm:left-6 z-40 hidden sm:block"
      >
        <Link
          href="/projects"
          aria-label="Back to projects"
          className="flex items-center justify-center w-12 h-12 bg-white/50 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black dark:text-white"
          >
            <path d="M19 12H5" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </Link>
      </motion.div>

      <div className="w-full flex items-start justify-center pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          <div className="relative w-full aspect-video rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 text-left">
              <motion.h1
                variants={staggerItem}
                className="text-3xl sm:text-3xl font-bold text-black dark:text-white leading-tight flex-shrink-0"
              >
                {project.title}
              </motion.h1>
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-2 justify-start md:justify-end"
              >
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={staggerItem}
                    className="bg-blue-100/70 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <hr className="my-8 border-gray-300 dark:border-neutral-800" />
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-neutral-300 prose-p:leading-relaxed prose-headings:text-black dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400">
              <p>{project.longDescription}</p>
            </div>
            <div className="mt-12 flex justify-start flex-wrap gap-4">
              {project.liveLink && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Live Site
                  </Link>
                </motion.div>
              )}
              {project.githubLink && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View on GitHub
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
