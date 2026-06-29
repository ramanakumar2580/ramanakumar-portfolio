"use client";

import { useEffect, useState, useRef } from "react";
import { useThemeStore } from "../../hooks/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { name: "System", value: "system" },
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Midnight", value: "midnight" },
  { name: "Paper", value: "paper" },
];

// 🚨 UPDATE: Added interface for props
interface ThemeSwitcherProps {
  onThemeSelect?: () => void;
}

export default function ThemeSwitcher({
  onThemeSelect,
}: ThemeSwitcherProps = {}) {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolling(true);
        setIsOpen(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 bg-muted rounded-full animate-pulse"></div>;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center h-9 w-9 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
          isScrolling
            ? "bg-transparent border-transparent text-muted-foreground/30 pointer-events-none"
            : "bg-transparent border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
        }`}
        aria-label="Toggle theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-36 bg-background/80 backdrop-blur-lg border border-border rounded-xl shadow-lg overflow-hidden z-50"
          >
            <div className="py-1 flex flex-col">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value as any);
                    setIsOpen(false);
                    // 🚨 UPDATE: Tell the main Navbar to close
                    if (onThemeSelect) onThemeSelect();
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    theme === t.value
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
