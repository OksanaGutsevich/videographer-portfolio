// src/pages/Portfolio/Portfolio.tsx

import { useState } from "react";
import { usePortfolioStore, PortfolioItem } from "../../store/portfoliostore";
import styles from "./Portfolio.module.css";

type Category = "all" | PortfolioItem["category"];

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "Все", value: "all" },
  { label: "Свадьбы", value: "wedding" },
  { label: "Корпоратив", value: "corporate" },
  { label: "Мероприятия", value: "event" },
  { label: "Музыка", value: "music" },
];

// Переименовываем функцию в Portfolio (чтобы совпадало с именем страницы)
export default function Portfolio() {
  const portfolio = usePortfolioStore((state) => state.portfolio);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.gallery}>
      <div className={styles.filters}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`${styles.filterBtn} ${activeCategory === cat.value ? styles.active : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={item.image} alt={item.title} loading="lazy" />
              {item.featured && <span className={styles.badge}>Избранное</span>}
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Смотреть ролик
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>Пока нет проектов в этой категории</p>
      )}
    </section>
  );
}
