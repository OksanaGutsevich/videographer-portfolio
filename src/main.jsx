/*main.tsx*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { useThemeStore } from "./store/themestore";

// ВАЖНО: инициализируем тему ДО рендера.
// Это гарантирует, что data-theme появится на <html> ещё до первого кадра React.
useThemeStore.getState().initTheme();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Элемент #root не найден в public/index.html. Проверь, есть ли <div id="root"></div>',
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
