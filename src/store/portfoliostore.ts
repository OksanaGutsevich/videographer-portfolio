// src/store/portfoliostore.ts
import { create } from "zustand";

export interface PortfolioItem {
  id: number;
  title: string;
  category: "wedding" | "corporate" | "event" | "music";
  description: string | null;
  image: string | null;
  videoUrl: string | null;
  featured: boolean;
}

interface PortfolioState {
  portfolio: PortfolioItem[];
  loading: boolean;
  error: string | null;
  fetchPortfolio: () => Promise<void>;
  addPortfolioItem: (item: Omit<PortfolioItem, "id">) => void;
  updatePortfolioItem: (
    id: number,
    updatedItem: Partial<PortfolioItem>,
  ) => void;
  deletePortfolioItem: (id: number) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolio: [],
  loading: false,
  error: null,

  fetchPortfolio: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/v1/portfolio");
      if (!res.ok) throw new Error(`Ошибка сети: ${res.status}`);
      const data = await res.json();

      // Твой бэкенд возвращает сразу массив, поэтому берём его как есть
      let portfolioData: PortfolioItem[] = [];
      if (Array.isArray(data)) {
        portfolioData = data;
      } else if (data && Array.isArray(data.data)) {
        // запасной вариант, если формат когда-то изменится
        portfolioData = data.data;
      }

      set({ portfolio: portfolioData, loading: false });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Не удалось загрузить портфолио";
      console.error(message);
      set({ error: message, loading: false });
    }
  },

  addPortfolioItem: (item) => {
    set((state) => ({
      portfolio: [...state.portfolio, { ...item, id: Date.now() }],
    }));
  },

  updatePortfolioItem: (id, updatedItem) => {
    set((state) => ({
      portfolio: state.portfolio.map((p) =>
        p.id === id ? { ...p, ...updatedItem } : p,
      ),
    }));
  },

  deletePortfolioItem: (id) => {
    set((state) => ({
      portfolio: state.portfolio.filter((p) => p.id !== id),
    }));
  },
}));
