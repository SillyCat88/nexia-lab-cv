import styles from "./ArticleViewer.module.css";

export default function ArticleViewer({ images, title }) {
  return (
    <main className={styles.viewer}>
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>

      <section className={styles.pages}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} – page ${index + 1}`}
            className={styles.page}
          />
        ))}
      </section>
    </main>
  );
}
