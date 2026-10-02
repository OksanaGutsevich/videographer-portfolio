//videographer-portfolio\vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Всё, что начинается с /api, отправляем на бэкенд
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite НЕ нужен! Путь пойдёт как есть: /api/v1/... → http://localhost:3000/api/v1/...
      },
    },
  },
});
