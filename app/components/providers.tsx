"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "./shared/Navbar"; // Adjust path if needed
import { Footer } from "./shared/Footer"; // Adjust path if needed
import { useThemeStore } from "../hooks/useThemeStore"; // Adjust path to your Zustand store

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // 1. Mark as mounted to safely interact with the DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Handle theme injection into the HTML tag
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === "system") {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.setAttribute("data-theme", systemTheme);

      // Listen for OS-level theme changes in real-time
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        root.setAttribute("data-theme", e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Apply custom selected theme (light, dark, midnight, paper)
      root.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-transparent">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
