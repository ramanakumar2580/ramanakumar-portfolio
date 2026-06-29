"use client";

import { useParams } from "next/navigation";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Import your custom components
import { TechStackBadge } from "@/app/components/projects/TechStackBadge";
import { ArchitectureDiagram } from "@/app/components/projects/ArchitectureDiagram";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

  // State to handle the full-screen image lightbox
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Ramana Kumar`;
    }
  }, [project]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isZoomed]);

  if (!project) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen bg-background">
        <h1 className="text-2xl font-bold text-muted-foreground">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-transparent pb-32">
        {/* Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed top-24 left-4 sm:left-8 z-40 hidden sm:block"
        >
          <Link
            href="/projects"
            aria-label="Back to projects"
            className="flex items-center justify-center w-12 h-12 bg-card/60 backdrop-blur-md border border-border/50 rounded-full shadow-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:scale-105 transition-all duration-300"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>
        </motion.div>

        <div className="w-full flex items-start justify-center pt-28">
          <div className="max-w-5xl mx-auto px-6 w-full space-y-12 md:space-y-16">
            {/* Cinematic Hero Image (Uncropped) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onClick={() => setIsZoomed(true)}
              className="relative w-full rounded-3xl border border-border/50 overflow-hidden shadow-2xl bg-card group cursor-zoom-in"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-3xl pointer-events-none transition-colors duration-500 group-hover:ring-foreground/20" />

              {/* Subtle hover overlay hint */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/80 backdrop-blur-md text-foreground px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to Expand
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto"
            >
              {/* Header */}
              <div className="flex flex-col gap-6 mb-10 text-left">
                <motion.h1
                  variants={staggerItem}
                  className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  variants={staggerItem}
                  className="text-xl text-muted-foreground font-medium"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {project.tags.map((tag) => (
                    <motion.div key={tag} variants={staggerItem}>
                      <TechStackBadge name={tag} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.hr
                variants={staggerItem}
                className="my-10 border-border"
              />

              {/* Story Sections */}
              {project.story && (
                <div className="space-y-12">
                  {/* Problem */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      The Problem
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.problem}
                    </p>
                  </motion.div>

                  {/* Challenges */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Engineering Challenges
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.challenges}
                    </p>
                  </motion.div>

                  {/* Step-by-Step Workflow (Architecture) */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                      Step-by-Step Workflow
                    </h2>
                    <ArchitectureDiagram
                      nodes={project.story.architectureNodes}
                    />
                  </motion.div>

                  {/* Why This Architecture */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Why This Architecture?
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.whyArchitecture}
                    </p>
                  </motion.div>

                  {/* Key Features (Premium Minimalist List) */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Key Features
                    </h2>
                    <ul className="space-y-4 text-lg text-muted-foreground mt-2">
                      {project.story.keyFeatures.map(
                        (feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </motion.div>

                  {/* Performance */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Performance
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.performance}
                    </p>
                  </motion.div>

                  {/* Trade-offs */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Trade-offs
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.tradeOffs}
                    </p>
                  </motion.div>

                  {/* Lessons Learned */}
                  <motion.div variants={staggerItem}>
                    <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      Lessons Learned
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.story.lessonsLearned}
                    </p>
                  </motion.div>
                </div>
              )}

              {/* Action Buttons with Framer Motion hover/tap scales */}
              <motion.div
                variants={staggerItem}
                className="mt-14 flex flex-wrap gap-5 pt-8 border-t border-border/50"
              >
                {project.liveLink && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-bold rounded-full shadow-lg hover:shadow-foreground/20 transition-shadow"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>View Live Site</span>
                    </Link>
                  </motion.div>
                )}

                {project.githubLink && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-8 py-4 bg-card border border-border text-foreground text-sm font-bold rounded-full shadow-sm hover:bg-muted transition-colors"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:-translate-y-0.5"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span>View Source Code</span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Framer Motion) */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-auto max-h-[90vh] w-full custom-scrollbar">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground p-2 rounded-full shadow-lg border border-border/50 hover:scale-110 transition-transform focus:outline-none"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
