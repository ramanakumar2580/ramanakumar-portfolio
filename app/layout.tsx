import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manupati Ramana Kumar | 3D Full-Stack Portfolio",
  description:
    "An interactive 3D portfolio of Manupati Ramana Kumar, a Full Stack Developer skilled in JavaScript/TypeScript, React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-neutral-800 dark:text-neutral-200 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
