// app/hooks/useThemeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "system" | "light" | "dark" | "midnight" | "paper";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system", // default to system
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "portfolio-theme", // Key used in localStorage
    },
  ),
);
