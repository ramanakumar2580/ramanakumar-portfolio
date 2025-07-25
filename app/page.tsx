"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const headlineText = "Hello there! I'm Ramana Kumar";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4">
      <motion.div
        className="max-w-5xl text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] dark:[text-shadow:0_0_8px_rgba(255,255,255,0.2)]"
          aria-label={headlineText}
        >
          {headlineText.split(" ").map((word, index) => (
            <div key={index} className="inline-block overflow-hidden py-1">
              <motion.span variants={wordVariants} className="inline-block">
                {word}&nbsp;
              </motion.span>
            </div>
          ))}
        </motion.h1>

        <motion.div variants={itemVariants}>
          <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
            I&apos;m a{" "}
            <span className="text-black dark:text-white font-medium bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md">
              Full-Stack Developer
            </span>{" "}
            with a passion for building scalable, cloud-native web applications
            that can impact millions of lives.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
            I specialize in delivering production-grade systems, optimizing
            UI/UX, and streamlining DevOps pipelines for{" "}
            <span className="text-black dark:text-white font-medium bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md">
              high-performance delivery
            </span>
            .
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="mt-10 inline-block"
          >
            <Link
              href="/projects"
              className="group relative block px-8 py-4 font-semibold text-white rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
