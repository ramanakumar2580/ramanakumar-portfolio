"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Activity,
  Code,
  Zap,
  Atom,
  Database,
  Bot,
  Server,
  Triangle,
  Box,
  Sparkles,
  Cloud,
  Hexagon,
  Layers,
  Terminal,
  Cpu,
  Globe,
  ExternalLink,
  Trophy,
  Award,
  FileText,
  ArrowRight,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";

// Importing official brand logos for the Tech Stack grid
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaEthereum,
  FaDatabase,
  FaHardHat,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNestjs,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiNginx,
  SiGithubactions,
  SiJavascript,
  SiSolidity,
  SiOpenai,
} from "react-icons/si";

const ROLES = ["ENGINEER", "DEVELOPER"];

// Custom Tech Stack Component with dynamic hover transitions
const TechIcon = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => (
  <div
    className="relative group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110"
    title={name}
  >
    {/* Corner Brackets that expand dynamically on hover */}
    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-foreground group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></span>
    <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></span>
    <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-foreground group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-300"></span>
    <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-foreground group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"></span>

    {/* Icon Wrapper */}
    <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
      {children}
    </div>
  </div>
);

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  // 1. Define strict types to fix ts(7034)
  interface ContributionDay {
    level: number;
    count: number;
    date: string;
  }

  const [mounted, setMounted] = useState(false);
  const [isLoadingGraph, setIsLoadingGraph] = useState(true);

  const [githubStats, setGithubStats] = useState<{
    repos: number;
    contributions: number;
    graph: ContributionDay[][];
  }>({
    repos: 0,
    contributions: 0,
    graph: [],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setMounted(true);

    async function loadGitHub() {
      try {
        const res = await fetch("/api/github");

        const data = await res.json();

        const weeks =
          data.contributionsCollection.contributionCalendar.weeks.map(
            (week: any) =>
              week.contributionDays.map((day: any) => ({
                count: day.contributionCount,
                date: day.date,
                level:
                  day.contributionLevel === "NONE"
                    ? 0
                    : day.contributionLevel === "FIRST_QUARTILE"
                      ? 1
                      : day.contributionLevel === "SECOND_QUARTILE"
                        ? 2
                        : day.contributionLevel === "THIRD_QUARTILE"
                          ? 3
                          : 4,
              })),
          );

        setGithubStats({
          repos: data.repositories.totalCount,
          contributions:
            data.contributionsCollection.contributionCalendar
              .totalContributions,
          graph: weeks,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoadingGraph(false);
      }
    }

    loadGitHub();
  }, []);
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden font-sans transition-colors duration-300">
      {/* Injecting CSS for scrollbars */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* === ORBITING RINGS & RAW ICONS === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-50">
          {/* --- INNER RING (600px) --- */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] rounded-full border border-border"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Atom className="w-8 h-8 text-muted-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Triangle
                className="w-8 h-8 text-foreground"
                fill="currentColor"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <span className="font-black text-2xl text-muted-foreground/60">
                TS
              </span>
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <span className="font-black text-2xl text-foreground">JS</span>
            </motion.div>
          </motion.div>

          {/* --- MIDDLE RING (1000px) --- */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1000px] h-[1000px] rounded-full border border-border"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Server className="w-10 h-10 text-muted-foreground/60" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Database className="w-10 h-10 text-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <BsGithub className="w-10 h-10 text-muted-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Layers className="w-10 h-10 text-muted-foreground/60" />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Terminal className="w-10 h-10 text-muted-foreground" />
            </motion.div>
          </motion.div>

          {/* --- OUTER RING (1400px) --- */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1400px] h-[1400px] rounded-full border border-border/60"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Cloud className="w-14 h-14 text-muted-foreground/60" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Box className="w-14 h-14 text-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Bot className="w-14 h-14 text-muted-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Hexagon className="w-14 h-14 text-muted-foreground/60" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Sparkles className="w-14 h-14 text-muted-foreground" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <Activity className="w-14 h-14 text-muted-foreground/60" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            >
              <Code className="w-14 h-14 text-muted-foreground/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* === HERO CONTENT === */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-border bg-card mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-mono font-semibold tracking-wide text-muted-foreground uppercase">
              Available For Work
            </span>
          </div>

          <h2 className="text-xl md:text-3xl font-light text-muted-foreground mb-2">
            Hello! I&apos;m Ramana Kumar. A Creative{" "}
            <span className="text-foreground">Software</span>
          </h2>

          <div className="h-[80px] sm:h-[100px] md:h-[160px] flex items-center justify-center overflow-visible w-full my-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[3rem] sm:text-6xl md:text-[9rem] font-black tracking-tighter uppercase text-foreground leading-none origin-center transform scale-x-110"
              >
                {ROLES[roleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-muted-foreground max-w-2xl text-sm md:text-lg leading-relaxed text-center mx-auto">
            I build production-ready software that scales with confidence,
            performs under real-world demands and transforms complex engineering
            challenges into elegant and reliable solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-3.5 bg-foreground text-background rounded-sm font-medium hover:opacity-90 transition-opacity"
            >
              Let&apos;s Talk
            </Link>
            <a
              href="/Ramanakumar_SDE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-background border border-border text-foreground rounded-sm font-medium hover:bg-muted transition-colors"
            >
              Download Resume <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT ME SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-20">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-foreground"></span> About Me
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              I write code that
              <br />
              solves real problems
              <br />
              <span className="text-muted-foreground">for real people.</span>
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-xl">
            <p>
              I am a Full Stack Engineer passionate about building scalable web
              applications and backend systems that are fast, reliable and built
              to last. I enjoy solving complex engineering challenges through
              clean architecture, efficient APIs and thoughtful system design.
              Whether it's designing offline-first applications, real-time
              systems or AI-powered solutions, I focus on building software
              that's simple, dependable and easy to maintain as it grows. I
              believe great engineering is about creating solutions that solve
              real problems while remaining reliable in the long run. Outside of
              development, I enjoy exploring AI, Blockchain and emerging
              technologies, continuously learning and experimenting to become a
              better engineer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col">
            <Cpu className="w-6 h-6 text-foreground mb-4 md:mb-6" />
            <h3 className="font-bold text-foreground mb-2 md:mb-3 text-base md:text-lg">
              Scalable System Design
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build reliable backend systems with a focus on scalability,
              performance, data consistency and fault tolerance for real-world
              applications.
            </p>
          </div>
          <div className="flex flex-col">
            <Code className="w-6 h-6 text-foreground mb-4 md:mb-6" />
            <h3 className="font-bold text-foreground mb-2 md:mb-3 text-base md:text-lg">
              End-to-End Engineer
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comfortable owning the entire development lifecycle from intuitive
              user experiences to scalable backend systems, databases and APIs
            </p>
          </div>
          <div className="flex flex-col">
            <Zap className="w-6 h-6 text-foreground mb-4 md:mb-6" />
            <h3 className="font-bold text-foreground mb-2 md:mb-3 text-base md:text-lg">
              Performance First
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Optimize applications through efficient database design,
              intelligent caching and asynchronous processing to deliver fast,
              reliable user experiences.
            </p>
          </div>
          <div className="flex flex-col">
            <Globe className="w-6 h-6 text-foreground mb-4 md:mb-6" />
            <h3 className="font-bold text-foreground mb-2 md:mb-3 text-base md:text-lg">
              Continuous Learning
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Always exploring new technologies, from AI and Web3 to modern
              backend architectures and applying them where they solve real
              problems.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3. EXPERIENCE ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-20">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-foreground"></span> Experience
          </h3>
        </div>

        <div className="max-w-4xl mx-auto pl-4 md:pl-8">
          {/* SLOOZE */}
          <div className="relative pl-8 md:pl-10 pb-16 md:pb-20 border-l border-border last:pb-0 last:border-transparent group">
            <div className="absolute w-4 h-4 bg-background border-2 border-foreground rounded-full -left-[8.5px] top-1 group-hover:bg-foreground transition-colors" />
            <span className="text-sm font-mono text-muted-foreground block mb-2">
              May 2026 — Jun 2026
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              SDE Intern
            </h3>
            <h4 className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">
              SLOOZE
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground list-disc list-outside ml-4 marker:text-border">
              <li>
                {" "}
                Developed backend workflows using NestJS, GraphQL and Prisma to
                manage Goods Receipt Notes (GRNs), claims, and dispute
                resolution processes.{" "}
              </li>

              <li>
                {" "}
                Designed relational database schemas and implemented business
                logic for complex supply chain operations while maintaining data
                integrity.{" "}
              </li>

              <li>
                {" "}
                Built an in-app semantic search system using vector embeddings
                and a locally hosted LLM (Ollama), enabling intelligent document
                retrieval without exposing sensitive business data.{" "}
              </li>

              <li>
                {" "}
                Developed a Python-based web crawler with HTTPX, BeautifulSoup,
                and Playwright to extract structured supplier information from
                dynamic websites.{" "}
              </li>

              <li>
                {" "}
                Collaborated on production-oriented backend features with a
                focus on clean architecture, maintainability and scalable system
                design.{" "}
              </li>
            </ul>
          </div>

          {/* YEBSYS */}
          <div className="relative pl-8 md:pl-10 pb-4 border-l border-border last:pb-0 last:border-transparent group">
            <div className="absolute w-4 h-4 bg-background border-2 border-muted-foreground rounded-full -left-[8.5px] top-1 group-hover:border-foreground transition-colors" />
            <span className="text-sm font-mono text-muted-foreground block mb-2">
              Aug 2024 — Dec 2024
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Full Stack Developer Intern
            </h3>
            <h4 className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6">
              YEBSYS
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground list-disc list-outside ml-4 marker:text-border">
              <li>
                {" "}
                Built secure payment workflows supporting UPI and card
                transactions with backend webhook verification for reliable
                payment processing.{" "}
              </li>

              <li>
                {" "}
                Implemented idempotency mechanisms to prevent duplicate
                transactions during retries and unstable network
                conditions.{" "}
              </li>

              <li>
                {" "}
                Improved API performance by integrating Redis caching,
                significantly reducing database load and response times.{" "}
              </li>

              <li>
                {" "}
                Automated application deployments using Docker and GitHub
                Actions, streamlining release workflows and reducing manual
                effort.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 4. TECH STACK (Grid Layout) ================= */}
      <section className="py-20 md:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Area exactly mimicking the reference screenshot */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-24 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-foreground"></span> My Tech
                Stack
              </h3>
              <h2 className="text-4xl md:text-7xl font-black uppercase text-foreground leading-none tracking-tighter">
                What I<br />
                Use
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-md">
              I utilize a comprehensive suite of modern technologies to build
              robust, scalable and high-performance digital solutions.
            </p>
          </div>

          {/* Clean, wrapped grid of icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            <TechIcon name="Next.js">
              <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="React">
              <FaReact className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="TypeScript">
              <SiTypescript className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="JavaScript">
              <SiJavascript className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Tailwind CSS">
              <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="HTML5">
              <FaHtml5 className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="CSS3">
              <FaCss3Alt className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Node.js">
              <FaNodeJs className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="NestJS">
              <SiNestjs className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Python">
              <FaPython className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="PostgreSQL">
              <SiPostgresql className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="MongoDB">
              <SiMongodb className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="SQL">
              <FaDatabase className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="GraphQL">
              <SiGraphql className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Redis">
              <SiRedis className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Docker">
              <FaDocker className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="AWS">
              <FaAws className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Nginx">
              <SiNginx className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="GitHub">
              <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="GitHub Actions">
              <SiGithubactions className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Solidity">
              <SiSolidity className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Ethereum">
              <FaEthereum className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Hardhat">
              <FaHardHat className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="WebSockets">
              <Activity className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="ChatGPT">
              <SiOpenai className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Ollama">
              <Bot className="w-6 h-6 md:w-8 md:h-8" />
            </TechIcon>
            <TechIcon name="Zustand">
              <span className="text-xl md:text-2xl font-black">Z</span>
            </TechIcon>
          </div>
        </div>
      </section>

      {/* ================= 5. FEATURED PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-20">
        <div className="flex justify-between items-end mb-12 md:mb-20">
          <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-foreground"></span> Featured
            Projects
          </h3>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            View All Projects{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Project 1 */}
          <Link
            href="/projects/taskglyph"
            className="group flex flex-col gap-4 md:gap-6"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/project-TaskGlyph.png"
                alt="TaskGlyph"
                fill
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-lg md:text-xl font-bold text-white/80 z-20">
                01
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-3 md:mb-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Next.js • IndexedDB
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3">
                TaskGlyph
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Next-gen offline-first workspace. Custom sync engine handles
                out-of-order updates and conflict resolution using
                Last-Write-Wins logic, achieving 96% reliable synchronization.
              </p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/triagen"
            className="group flex flex-col gap-4 md:gap-6"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-muted">
              <Image
                src="/images/project-TriaGen.png"
                alt="TriaGen"
                fill
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-lg md:text-xl font-bold text-white/80 z-20">
                02
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-3 md:mb-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  NestJS • Redis
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3">
                TriaGen
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Event-driven incident management platform utilizing real-time
                WebSockets, automated SLA tracking via background queues, and
                AWS S3 for streamlined asset management.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= 6. LIVE GITHUB CONTRIBUTION GRAPH ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-20">
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-foreground"></span> GitHub Activity
          </h3>
          <a
            href="https://github.com/ramanakumar2580"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            View Profile <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          {/* Dynamic Contribution Graph Container */}
          <div className="flex-1 w-full overflow-x-auto pb-4 hide-scrollbar">
            {mounted && !isLoadingGraph && githubStats.graph.length > 0 ? (
              <div className="flex gap-1.5 min-w-max">
                {/* Render exact live data mapped from API */}
                {githubStats.graph.map((week, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-1.5">
                    {week.map((day: ContributionDay, rowIndex) => {
                      // Map GitHub levels (0-4) to Tailwind theme colors
                      const intensity =
                        day.level === 0
                          ? "bg-muted"
                          : day.level === 1
                            ? "bg-foreground/20"
                            : day.level === 2
                              ? "bg-foreground/50"
                              : day.level === 3
                                ? "bg-foreground/80"
                                : "bg-foreground";

                      return (
                        <div
                          key={rowIndex}
                          title={
                            day.date
                              ? `${day.count || 0} contributions on ${day.date}`
                              : undefined
                          }
                          className={`w-3.5 h-3.5 rounded-[2px] ${intensity} hover:bg-primary transition-colors cursor-help`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              // Loading Skeleton Block
              <div className="flex gap-1.5 min-w-max animate-pulse">
                {Array.from({ length: 35 }).map((_, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="w-3.5 h-3.5 rounded-[2px] bg-muted/50"
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accurate Live Stats */}
          <div className="flex flex-row lg:flex-col gap-8 md:gap-12 lg:min-w-[200px]">
            <div>
              <span className="text-4xl md:text-5xl font-black text-foreground block mb-1 md:mb-2 tracking-tighter">
                {isLoadingGraph ? "..." : githubStats.contributions}
              </span>
              <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest">
                Contributions (1Y)
              </span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-black text-foreground block mb-1 md:mb-2 tracking-tighter">
                {githubStats.repos > 0 ? githubStats.repos : "..."}
              </span>
              <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest">
                Repositories
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. ACHIEVEMENTS & LATEST BLOG ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-20">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8 md:mb-12">
          <h3 className="text-sm font-bold tracking-widest uppercase text-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-foreground"></span> Achievements
          </h3>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
          {/* ROW 1, LEFT: Achievement 1 */}
          <div className="flex items-start gap-4 md:gap-6 group">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground shrink-0 mt-1 group-hover:text-foreground transition-colors" />
            <div>
              <h4 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                Published Research Paper
              </h4>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Authored "Quantum-Inspired Deep Learning for Financial Data"
                published in IJARIIT (Vol. 11, Issue 3).
              </p>
              <a
                href="/RamanaKumar_Paper.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                View Paper <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ROW 1, RIGHT: Achievement 2 */}
          <div className="flex items-start gap-4 md:gap-6 group">
            <Trophy className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground shrink-0 mt-1 group-hover:text-foreground transition-colors" />
            <div>
              <h4 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                DSU Hack-O-Verse Winner
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Outperformed 70+ teams to secure $800 in seed funding for an
                original project concept.
              </p>
            </div>
          </div>
          {/* ROW 2, LEFT: Achievement 3 */}
          <div className="flex items-start gap-4 md:gap-6 group">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground shrink-0 mt-1 group-hover:text-foreground transition-colors" />
            <div>
              <h4 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                AlgoBharat Hackathon Runner-Up
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Secured Runner-Up position and was invited to attend the
                Algorand Greenhouse Hack in Singapore.
              </p>
            </div>
          </div>

          {/* ROW 2, RIGHT: Open To Work Banner */}
          <div className="flex flex-col justify-center">
            <div className="rounded-sm border border-border bg-background p-5 md:p-6 transition-colors hover:bg-muted/30">
              <h3 className="flex items-center gap-2 text-base md:text-lg font-bold uppercase text-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Open To Work
              </h3>

              <p className="mt-2 md:mt-3 text-xs md:text-sm leading-6 text-muted-foreground">
                Looking for Full Stack / Backend Engineering opportunities.
                Passionate about building scalable, performant and
                production-ready systems.
              </p>

              <Link
                href="/contact"
                className="mt-4 md:mt-5 inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground hover:gap-3 transition-all"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
