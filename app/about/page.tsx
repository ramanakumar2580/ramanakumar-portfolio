"use client";

import { motion, Variants } from "framer-motion";
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

const experience = {
  title: "Full Stack Developer Intern",
  company: "YEBSYS",
  location: "Coimbatore, Tamil Nadu",
  date: "Sep 2024 - Dec 2024",
  points: [
    "Built a UPI/card-integrated payment platform using TypeScript + Next.js, increasing transaction by 20%.",
    "Reduced UI load time by 35% through responsive optimization with Tailwind CSS and lazy loading.",
    "Implemented Dockerized webhooks and established CI/CD pipelines via GitHub Actions.",
  ],
};

const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <div className="w-full flex items-start justify-center pt-24 pb-16">
      <motion.div
        className="max-w-4xl w-full mx-auto px-4 space-y-20"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={itemVariants}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg p-8"
        >
          <div className="text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
              Manupati Ramana Kumar
            </h1>
            <p className="mt-2 text-lg text-blue-600 dark:text-blue-400 font-semibold">
              Full Stack Developer
            </p>
            <hr className="my-6 border-gray-300 dark:border-neutral-800" />
            <p className="text-base text-gray-700 dark:text-neutral-300 max-w-4xl leading-relaxed">
              As a Full-Stack Developer, I specialize in transforming ideas into
              high-performance web applications. I can architect and build
              entire systems from the ground up—from creating responsive user
              interfaces with React and Next.js to engineering robust backends
              with Node.js and PostgreSQL. My expertise includes streamlining
              DevOps pipelines with Docker and CI/CD, and integrating
              cutting-edge AI like the GPT-4 API to build intelligent, modern
              solutions. I am passionate about writing clean code and creating
              user-friendly experiences.
            </p>
            <div className="mt-8">
              <motion.a
                href="/RamanaKumar-fullstack.pdf"
                download
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
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
              </motion.a>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
            Experience
          </h2>
          <div className="p-8 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1 sm:mt-0 flex-shrink-0">
                {experience.date}
              </p>
            </div>
            <p className="text-base text-gray-700 dark:text-neutral-300 mb-4">
              {experience.company} - {experience.location}
            </p>
            <ul className="list-disc list-outside space-y-3 text-sm text-gray-600 dark:text-neutral-400 pl-5">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
            Tech Stack
          </h2>
          <div className="p-8 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-start gap-2 text-center"
                  title={tech.name}
                >
                  <div className="text-4xl text-gray-800 dark:text-neutral-300">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-neutral-400 h-8">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
