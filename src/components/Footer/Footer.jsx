import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>MylifeCinema</h3>
            <p>Профессиональная видеография для ваших важных моментов</p>
          </div>

          <div className={styles.section}>
            <h4>Навигация</h4>
            <nav className={styles.links}>
              <Link to="/portfolio">Портфолио</Link>
              <Link to="/services">Услуги</Link>
              <Link to="/contact">Контакты</Link>
              <Link to="/admin">Админка</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4>Контакты</h4>
            <p>
              📧 <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              📱 <a href="tel:+7900000000">+7 (900) 000-00-00</a>
            </p>
          </div>

          <div className={styles.section}>
            <h4>Соцсети</h4>
            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} MylifeCinema. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
