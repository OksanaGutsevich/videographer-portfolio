import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Контакты</p>
        <h1>Всегда открыт к новым проектам и сотрудничеству. Напишите мне</h1>
      </div>

      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" placeholder="Ваше имя" />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Расскажите о вашей задаче"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.card}>
            <h3>Контакты</h3>
            <p>📧 hello@mylifecinema.ru</p>
            <p>📱 +7 (900) 000-00-00</p>
            <p>📍 Москва, Россия</p>
          </div>

          <div className={styles.card}>
            <h3>Instagram</h3>
            <p>@mylifecinema</p>
          </div>
        </div>
      </div>
    </div>
  );
}
