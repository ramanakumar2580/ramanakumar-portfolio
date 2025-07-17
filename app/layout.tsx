// app/layout.tsx (Corrected to use Navbar)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manupati Ramana Kumar | Full-Stack Developer",
  description:
    "Portfolio of Manupati Ramana Kumar, a Full Stack Developer skilled in JavaScript/TypeScript, React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-black text-neutral-200 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
