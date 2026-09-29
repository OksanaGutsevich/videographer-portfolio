// src/pages/Services/Services.tsx
import { useServicesStore } from "../../store/servicesstore"; // путь проверь под свою структуру
import styles from "./Services.module.css";

export default function Services() {
  const services = useServicesStore((state) => state.services);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Услуги</p>
        <h1>Готовлю видео под ваш формат и задачу</h1>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.name} className={styles.card}>
            <span className={styles.tag}>{service.price}</span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
