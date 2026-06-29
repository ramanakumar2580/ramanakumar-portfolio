"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="w-full pt-28 pb-32 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6">
            Featured <span className="text-muted-foreground">Works.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A curated selection of production-grade software. Built with a
            strict focus on robust architectures, performance, and seamless user
            experiences.
          </p>
        </motion.div>

        {/* Projects List - Alternating Layout */}
        <div className="flex flex-col gap-32 md:gap-40">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* 50% - Image Side */}
                <div className="w-full lg:w-1/2 group">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block outline-none"
                  >
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-card transition-all duration-500 group-hover:shadow-2xl group-hover:border-foreground/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 600px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      {/* Subtle overlay to make it look embedded */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:ring-foreground/10" />
                    </div>
                  </Link>
                </div>

                {/* 50% - Text/Details Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  {/* Hackathon Badge (if exists) */}
                  {project.achievement && (
                    <div className="mb-5 inline-flex items-center px-3.5 py-1.5 rounded-full bg-foreground text-background text-xs font-bold tracking-wide uppercase shadow-sm">
                      {project.achievement}
                    </div>
                  )}

                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-md bg-muted/50 text-foreground text-sm font-medium border border-border/50 transition-colors hover:bg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Premium Inverted Explore Button with sleek animation */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-background text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground dark:focus:ring-offset-background"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Project
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
