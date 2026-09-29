// Например, прямо в Header.jsx
import { useThemeStore } from "../../store/themestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MylifeCinema
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <Link
            to="/"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link
            to="/portfolio"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Портфолио
          </Link>
          <Link
            to="/services"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Услуги
          </Link>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            О себе
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </Link>
        </nav>

        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}
        >
          {isDark ? "☀️Свет" : "🌙Тьма"}
        </button>
      </div>
    </header>
  );
}
