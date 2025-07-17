"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton"; // Import the new button

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];
  const contactItem = { name: "Contact", href: "/contact" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-6 sm:px-8 lg:px-16">
      <nav className="w-full max-w-7xl">
        {/* Updated styles for light/dark mode */}
        <div className="flex items-center justify-between bg-white/70 dark:bg-black/50 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full px-6 h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-black dark:text-white font-bold text-base sm:text-lg md:text-xl"
            >
              RamanaKumar
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              {navItems.map((item, index) => (
                <Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600">/</span>
                  )}
                </Fragment>
              ))}
            </div>
            <Link
              href={contactItem.href}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              {contactItem.name}
            </Link>
            {/* Added the theme toggle button */}
            <ThemeToggleButton />
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl border border-gray-200 dark:border-gray-800">
              {[...navItems, contactItem].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
