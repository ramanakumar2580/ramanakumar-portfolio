"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
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
        {/* Updated for Light/Dark Mode */}
        <motion.h1
          className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white leading-tight whitespace-nowrap"
          variants={itemVariants}
        >
          Hello there! I&apos;m Ramana Kumar.
        </motion.h1>

        {/* Updated for Light/Dark Mode */}
        <motion.p
          className="mt-6 text-sm md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed"
          variants={itemVariants}
        >
          I&apos;m a{" "}
          <span className="text-black dark:text-white font-medium bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md">
            Full-Stack Developer
          </span>{" "}
          with a passion for building scalable, cloud-native web applications
          that can impact millions of lives.
        </motion.p>

        {/* Updated for Light/Dark Mode */}
        <motion.p
          className="mt-4 text-sm md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed"
          variants={itemVariants}
        >
          I specialize in delivering production-grade systems, optimizing UI/UX,
          and streamlining DevOps pipelines for{" "}
          <span className="text-black dark:text-white font-medium bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md">
            high-performance delivery
          </span>
          .
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <Link
            href="/projects"
            className="px-8 py-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
