import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/components/providers";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manupati Ramana Kumar | Full-Stack Portfolio",
  description:
    "An interactive portfolio of Manupati Ramana Kumar, a Full Stack Developer & Blockchain Developer skilled in JavaScript/TypeScript, React, Next.js,Node.js, building smart contracts and Dapps",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
