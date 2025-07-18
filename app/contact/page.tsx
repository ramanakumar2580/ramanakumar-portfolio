"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem: Variants = {
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

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitButton = event.currentTarget.querySelector(
      'button[type="submit"]'
    );
    if (submitButton) {
      submitButton.setAttribute("disabled", "true");
    }
    setStatus("Sending...");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        setStatus(
          `Error: ${errorData.error?.message || "Something went wrong."}`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus("An unknown error occurred while sending the message.");
      }
    } finally {
      if (submitButton) {
        submitButton.removeAttribute("disabled");
      }
      setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
    }
  }

  return (
    <div className="w-full flex items-start justify-center pt-24 pb-16">
      <div className="max-w-4xl w-full mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg p-8 md:p-12"
        >
          <motion.div variants={staggerItem} className="text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-800 dark:text-white mb-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Contact Me
            </h1>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Have a question or want to work together? Fill out the form below
              and I will get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={staggerItem}>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-neutral-700 text-black dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:border-black/50 dark:focus:border-white/50 outline-none transition-all"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label htmlFor="email" className="sr-only">
                  Your email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-neutral-700 text-black dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:border-black/50 dark:focus:border-white/50 outline-none transition-all"
                />
              </motion.div>
            </div>
            <motion.div variants={staggerItem}>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-neutral-700 text-black dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-black/50 dark:focus:ring-white/50 focus:border-black/50 dark:focus:border-white/50 outline-none transition-all"
              ></textarea>
            </motion.div>
            <motion.div variants={staggerItem}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative w-full px-6 py-3 font-semibold text-white bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700" />
                Submit
              </motion.button>
            </motion.div>
            {status && (
              <p className="text-center text-sm text-gray-500 dark:text-neutral-400 mt-4">
                {status}
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
