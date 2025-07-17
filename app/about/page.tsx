"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export default function AboutPage() {
  return (
    // The root div no longer has 'min-h-screen'.
    <div className="w-full flex items-start justify-center py-12">
      <motion.div
        className="max-w-4xl w-full mx-auto pt-16 pb-8 px-6 space-y-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="text-left">
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
                Manupati Ramana Kumar
              </h1>
              <p className="mt-2 text-base sm:text-lg text-blue-400">
                Full Stack Developer
              </p>
              <hr className="my-6 border-gray-700" />
              <p className="text-sm sm:text-base text-neutral-400 max-w-4xl leading-relaxed">
                As a Full-Stack Developer, I specialize in transforming ideas
                into high-performance web applications. I can architect and
                build entire systems from the ground up—from creating responsive
                user interfaces with React and Next.js to engineering robust
                backends with Node.js and PostgreSQL. My expertise includes
                streamlining DevOps pipelines with Docker and CI/CD, and
                integrating cutting-edge AI like the GPT-4 API to build
                intelligent, modern solutions. I am passionate about writing
                clean code and creating user-friendly experiences.
              </p>
              <div className="mt-8">
                <a
                  href="/RamanaKumar-fullstack.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Experience
          </h2>
          <div className="p-6 sm:p-8 bg-gray-900 rounded-lg border border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                Full Stack Developer Intern
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 sm:mt-0 flex-shrink-0">
                Sep 2024 - Dec 2024
              </p>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 mb-4">
              YEBSYS - Coimbatore, Tamil Nadu
            </p>
            <ul className="list-disc list-outside space-y-2 text-sm text-neutral-400 pl-5">
              <li>
                Built a UPI/card-integrated payment platform using TypeScript +
                Next.js, increasing transaction by 20%.
              </li>
              <li>
                Reduced UI load time by 35% through responsive optimization with
                Tailwind CSS and lazy loading.
              </li>
              <li>
                Implemented Dockerized webhooks and established CI/CD pipelines
                via GitHub Actions.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">
            Tech Stack
          </h2>
          <div className="p-6 sm:p-8 bg-gray-900 rounded-lg border border-gray-800">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-start gap-2 text-center"
                  title={tech.name}
                >
                  <div className="text-4xl">{tech.icon}</div>
                  <span className="text-xs text-neutral-400 h-8">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
