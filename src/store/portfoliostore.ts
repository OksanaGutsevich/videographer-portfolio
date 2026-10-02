// src/store/portfoliostore.ts
import { create } from "zustand";

export interface PortfolioItem {
  id: number;
  title: string;
  category: "wedding" | "corporate" | "event" | "music";
  description: string;
  image: string;
  videoUrl: string;
  featured: boolean;
}

interface PortfolioState {
  portfolio: PortfolioItem[];
  addPortfolioItem: (item: Omit<PortfolioItem, "id">) => void;
  updatePortfolioItem: (
    id: number,
    updatedItem: Partial<PortfolioItem>,
  ) => void;
  deletePortfolioItem: (id: number) => void;
}

const initialPortfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "Wedding Cinematic",
    category: "wedding",
    description: "Красивая свадебная съемка в синематическом стиле",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
    videoUrl: "https://kinescope.io/rZsiJpQZZZ8VkgBdZbcaVU",
    featured: true,
  },
  {
    id: 2,
    title: "Corporate Video",
    category: "corporate",
    description: "Видео для корпоративного клиента",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: false,
  },
];

export const usePortfolioStore = create<PortfolioState>((set) => ({
  portfolio: initialPortfolio,

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
