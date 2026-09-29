import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.imageBlock}>
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
          alt="Videographer portrait"
        />
      </div>

      <div className={styles.textBlock}>
        <p className={styles.eyebrow}>Обо мне/Лучше Блог</p>
        <h1>Я снимаю истории, которые хочется хранить.</h1>
        <p>
          Я — видеограф с опытом съемки свадеб, событий, коммерческих проектов и
          личных историй. Для меня важны не только кадры, но и настроение,
          атмосфера, человеческие эмоции и ощущение момента.
        </p>
        <p>
          Моя работа — это сочетание художественного взгляда, технического
          мастерства и внимательного подхода к каждому клиенту. Я люблю
          создавать ролики, которые не просто показывают событие, а передают
          характер, тепло и память.
        </p>

        <ul className={styles.list}>
          <li>Съемка событий и свадеб</li>
          <li>Монтаж и цветокоррекция</li>
          <li>Подбор музыки и атмосферы</li>
          <li>Креатив под вашу задачу</li>
        </ul>
      </div>
    </div>
  );
}
