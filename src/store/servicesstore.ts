//servicesstore.ts
import { create } from "zustand";

export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  duration: string;
  features: string[];
}

const initialServices: Service[] = [
  {
    id: 1,
    name: "Wedding Package",
    price: 50000,
    description: "Полный день съемки, 4K видео, 2-3 часа видеомонтажа",
    duration: "8 часов",
    features: ["4K видео", "Монтаж", "Музыка", "Эффекты"],
  },
  {
    id: 2,
    name: "Corporate Package",
    price: 30000,
    description: "Съемка корпоративного события или промо",
    duration: "4 часа",
    features: ["FullHD видео", "Базовый монтаж", "Логотип"],
  },
  {
    id: 3,
    name: "Social Media Package",
    price: 15000,
    description: "Короткие видео для соцсетей",
    duration: "2 часа",
    features: ["FullHD видео", "Быстрый монтаж", "Соцсети"],
  },
];

// Простой генератор ID, чтобы не было дублей
let nextId = Math.max(...initialServices.map((s) => s.id), 0) + 1;

export const useServicesStore = create<{
  services: Service[];
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: number, updatedService: Partial<Service>) => void;
  deleteService: (id: number) => void;
}>((set) => ({
  services: initialServices,

  addService: (service) => {
    set((state) => ({
      services: [...state.services, { ...service, id: nextId++ }],
    }));
  },

  updateService: (id, updatedService) => {
    set((state) => ({
      services: state.services.map((s) =>
        s.id === id ? { ...s, ...updatedService } : s,
      ),
    }));
  },

  deleteService: (id) => {
    set((state) => ({
      services: state.services.filter((s) => s.id !== id),
    }));
  },
}));
