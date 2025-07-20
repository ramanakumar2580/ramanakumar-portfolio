"use client";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex flex-col min-h-screen bg-transparent">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
