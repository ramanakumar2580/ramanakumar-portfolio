"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error?.message || "Failed to send message.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Network error occurred.",
      );
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <div className="min-h-screen w-full bg-transparent text-foreground flex items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24 selection:bg-primary/20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Personal Brand & Intent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <div className="inline-flex items-center space-x-2 bg-muted/50 border border-border/50 px-3.5 py-1.5 rounded-full text-xs font-bold text-foreground mb-8 tracking-wide uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Let's engineer <br />
              <span className="text-muted-foreground">something great.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md"></p>
            I'm looking for opportunities where I can build products that solve
            real problems, work with strong engineering teams, and continue
            growing as a software engineer. If you're hiring someone who enjoys
            building scalable full-stack applications and learning quickly, I'd
            love to connect.
          </div>

          <div className="pt-4 flex flex-col space-y-4">
            <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">
              Direct Contact
            </p>
            <a
              href="mailto:manupatiramanakumar106@gmail.com"
              className="group flex items-center space-x-4 text-left w-max outline-none"
            >
              <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Send an Email
              </span>
              <span className="p-3 bg-muted/50 rounded-xl border border-border/50 group-hover:bg-muted transition-colors shadow-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: The Engineered Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-8 bg-card/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl"
          >
            <div className="group relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-border/60 text-foreground text-lg py-4 focus:outline-none focus:border-primary transition-colors"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-foreground cursor-text"
              >
                What's your name?
              </label>
            </div>

            <div className="group relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-border/60 text-foreground text-lg py-4 focus:outline-none focus:border-primary transition-colors"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-foreground cursor-text"
              >
                Your email address
              </label>
            </div>

            <div className="group relative">
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-border/60 text-foreground text-lg py-4 focus:outline-none focus:border-primary transition-colors resize-none custom-scrollbar"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-muted-foreground text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-foreground cursor-text"
              >
                Tell me about the opportunity or anything you'd like to
                discuss...
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full md:w-auto px-10 py-4 bg-foreground text-background font-bold text-sm rounded-full hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center min-w-[180px] outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground dark:focus:ring-offset-background"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    Send Message
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-2"
                  >
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-emerald-500 dark:text-emerald-400 flex items-center gap-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sent Successfully
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 font-medium text-sm mt-4"
              >
                {errorMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
