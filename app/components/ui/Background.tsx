// app/components/ui/Background.tsx
"use client";

import { useThemeStore } from "@/app/hooks/useThemeStore";

export function Background() {
  const { theme } = useThemeStore();

  return (
    <div className="fixed inset-0 z-[-1] w-full h-full bg-background transition-colors duration-500 overflow-hidden pointer-events-none">
      {/* 1. Subtle Engineering Grid */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          // Opacity lowers automatically in light mode to keep it premium and faint
          opacity: theme === "light" || theme === "paper" ? 0.2 : 0.0,
          // Fades out the grid at the edges of the screen so it doesn't look like a cage
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* 2. Soft Ambient Glow (Matches your primary theme color) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[100%] bg-primary opacity-[0.08] blur-[120px] transition-all duration-700 pointer-events-none" />
    </div>
  );
}
