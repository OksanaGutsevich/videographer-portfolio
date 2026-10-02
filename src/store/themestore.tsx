// src/store/themestore.tsx
import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  initTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  // Начальное значение — false. Настоящую тему подтянем в initTheme
  isDark: false,

  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.isDark;
      // Храним только факт тёмной темы
      localStorage.setItem("theme", newTheme ? "dark" : "");
      document.documentElement.setAttribute(
        "data-theme",
        newTheme ? "dark" : "",
      );
      return { isDark: newTheme };
    });
  },

  initTheme: () => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "");
    set({ isDark });
  },
}));
