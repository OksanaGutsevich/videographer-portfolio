//videographer-portfolio\src\pages\Admin\Admin.tsx
import styles from "./Admin.module.css";

export default function Admin() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Админ-панель</p>
        <h1>Управление контентом</h1>
      </div>

      <div className={styles.grid}>
        <section className={styles.panel}>
          <h3>Добавить проект</h3>
          <form className={styles.form}>
            <div className={styles.field}>
              <label>Название</label>
              <input type="text" placeholder="Название проекта" />
            </div>

            <div className={styles.field}>
              <label>Категория</label>
              <input type="text" placeholder="Например: свадьба" />
            </div>

            <div className={styles.field}>
              <label>Ссылка на изображение</label>
              <input type="text" placeholder="URL изображения" />
            </div>

            <button type="button" className={styles.button}>
              Добавить
            </button>
          </form>
        </section>

        <section className={styles.panel}>
          <h3>Список проектов</h3>
          <ul className={styles.list}>
            <li>
              Wedding Story
              <button>Редактировать</button>
            </li>
            <li>
              Corporate Film
              <button>Редактировать</button>
            </li>
            <li>
              Travel Reel
              <button>Редактировать</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
