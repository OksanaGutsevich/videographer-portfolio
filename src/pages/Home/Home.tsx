import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>CINEMATIC STORYTELLING</p>
          <h1>Снимаю моменты, которые хочется пересматривать снова и снова.</h1>
          <p className={styles.subtitle}>
            Я — видеограф, который помогает людям сохранить эмоции, атмосферу и
            важные события в красивом cinematic стиле.
          </p>

          <div className={styles.actions}>
            <Link to="/portfolio" className={styles.primaryButton}>
              Посмотреть работы
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Заказать съемку
            </Link>
          </div>

          <div className={styles.stats}>
            <div>
              <strong>8+</strong>
              <span>лет опыта</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>проектов</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>отзывы</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageCard}>
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
              alt="Videographer"
            />
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Почему выбирают меня</p>
          <h2>Стиль, эмоции, качество.</h2>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span>🎬</span>
            <h3>Киношный стиль</h3>
            <p>
              Съемка в эстетике, которая превращает повседневные моменты в
              историю.
            </p>
          </div>

          <div className={styles.featureCard}>
            <span>✨</span>
            <h3>Свет и атмосфера</h3>
            <p>Внимание к свету, кадру, музыке и настроению каждого ролика.</p>
          </div>

          <div className={styles.featureCard}>
            <span>📷</span>
            <h3>Полный цикл</h3>
            <p>
              От идеи и съемки до монтажа, цветокоррекции и финальной подачи.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.preview}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Портфолио</p>
          <h2>Некоторые из последних работ</h2>
        </div>

        <div className={styles.previewGrid}>
          <article className={styles.previewCard}>
            <img
              src="https://kinescope.io/rZsiJpQZZZ8VkgBdZbcaVU"
              alt="Wedding shoot"
            />
            <div className={styles.previewInfo}>
              <h3>Wedding Story</h3>
              <p>Свадебная съемка в cinematic стиле</p>
            </div>
          </article>

          <article className={styles.previewCard}>
            <img
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=900&q=80"
              alt="Corporate shoot"
            />
            <div className={styles.previewInfo}>
              <h3>Corporate Film</h3>
              <p>Коммерческая видеопродукция</p>
            </div>
          </article>

          <article className={styles.previewCard}>
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
              alt="Travel film"
            />
            <div className={styles.previewInfo}>
              <h3>Travel Reel</h3>
              <p>Путешествие и эмоции в кадре</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Отзывы</p>
          <h2>Что говорят клиенты</h2>
        </div>

        <div className={styles.testimonialGrid}>
          <blockquote className={styles.quote}>
            “Невероятная работа, все эмоции переданы так красиво, что хочется
            смотреть снова и снова.”
            <footer>— Анна & Игорь</footer>
          </blockquote>

          <blockquote className={styles.quote}>
            “Команда очень профессиональна, чувствуется любовь к делу. Видео
            получилось атмосферным и живым.”
            <footer>— Мария</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
