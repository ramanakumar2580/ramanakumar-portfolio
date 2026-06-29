"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
      if (window.scrollY > 20) {
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  const contactItem = { name: "Contact", href: "/contact" };

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
      } ${isScrolling ? "pointer-events-none" : ""}`}
    >
      <nav
        className={`w-full max-w-7xl mx-auto flex items-center justify-between rounded-2xl h-16 px-6 transition-all duration-300 ${
          !hasScrolled
            ? "bg-transparent border-transparent"
            : isScrolling
              ? "bg-transparent border-transparent opacity-30 backdrop-blur-none shadow-none"
              : "bg-background/80 backdrop-blur-lg border border-border shadow-md opacity-100"
        }`}
      >
        <Link
          href="/"
          aria-label="Homepage"
          className="flex pointer-events-auto"
        >
          <img
            src="/images/Logo.png"
            alt="Ramana Kumar"
            width={50}
            height={50}
            style={{ filter: "var(--logo-filter)" }}
          />
        </Link>
        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
          <Link
            href={contactItem.href}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 ${
              isActive(contactItem.href)
                ? "bg-primary text-primary-foreground"
                : "bg-transparent border-border text-foreground hover:bg-muted"
            }`}
          >
            {contactItem.name}
          </Link>

          {/* Desktop Theme Switcher */}
          <div className="ml-1 pl-3 border-l border-border flex items-center">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex items-center md:hidden pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-full text-muted-foreground hover:bg-muted focus:outline-none transition-colors"
            aria-controls="mobile-menu"
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
        <div className="md:hidden mt-2 max-w-7xl mx-auto pointer-events-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl rounded-2xl border border-border shadow-lg">
            {[...navItems, contactItem].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-4 py-3 mt-2 border-t border-border flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Theme
              </span>
              <div className="transform scale-90 origin-right">
                {/* 🚨 UPDATE: Added onThemeSelect prop to tell Navbar to close */}
                <ThemeSwitcher onThemeSelect={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
