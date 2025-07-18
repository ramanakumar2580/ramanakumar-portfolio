"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  const contactItem = { name: "Contact", href: "/contact" };

  // This function now handles the active link logic correctly
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "p-4" : "p-6"
      }`}
    >
      <nav
        className={`w-full max-w-7xl mx-auto flex items-center justify-between rounded-2xl h-16 px-6 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 dark:bg-neutral-900/60 backdrop-blur-lg border border-gray-200 dark:border-neutral-800 shadow-md"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="text-black dark:text-white font-bold text-lg">
          RamanaKumar
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-black dark:text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
          <Link
            href={contactItem.href}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
              isActive(contactItem.href)
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-transparent border-black/20 text-black dark:border-white/20 dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {contactItem.name}
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-black/20 focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-lg">
            {[...navItems, contactItem].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-black dark:text-white bg-gray-200 dark:bg-neutral-800"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
