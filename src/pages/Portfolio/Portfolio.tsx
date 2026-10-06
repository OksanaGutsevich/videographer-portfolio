// src/pages/Portfolio/Portfolio.tsx

import { useEffect, useState } from "react";
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

export default function Portfolio() {
  const { portfolio, loading, error, fetchPortfolio } = usePortfolioStore();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // Загружаем портфолио при монтировании
  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const filtered =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  if (loading) {
    return (
      <section className={styles.gallery}>
        <p className={styles.empty}>Загрузка портфолио…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.gallery}>
        <p className={styles.error}>Ошибка загрузки: {error}</p>
        <button onClick={() => fetchPortfolio()} className={styles.retryBtn}>
          Попробовать снова
        </button>
      </section>
    );
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.filters}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`${styles.filterBtn} ${activeCategory === cat.value ? styles.active : ""}`}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.cardImage}>
              {/* Проверка, чтобы не было битой картинки */}
              {item.image ? (
                <img src={item.image} alt={item.title} loading="lazy" />
              ) : (
                <div className={styles.placeholder}>Нет фото</div>
              )}
              {item.featured && <span className={styles.badge}>Избранное</span>}
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              {item.videoUrl && (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  Смотреть ролик
                </a>
              )}
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
