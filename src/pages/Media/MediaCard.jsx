import { Link } from "react-router-dom";
import styles from "./MediaCard.module.css";

export default function MediaCard({
  item,
  onPreview,
  onPrevious,
  onNext,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <img
          src={item.preview}
          alt={`Preview of "${item.title.en}"`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {item.title.en}
        </h2>

        <div className={styles.links}>
          <Link
            to={`/media/${item.id}`}
            className={styles.link}
          >
            Open
          </Link>

          <button
            type="button"
            className={styles.open}
            onClick={onPreview}
          >
            Preview
          </button>
        </div>
      </div>

      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.arrow}
          onClick={onPrevious}
          aria-label="Previous article"
        >
          &#8249;
        </button>

        <button
          type="button"
          className={styles.arrow}
          onClick={onNext}
          aria-label="Next article"
        >
          &#8250;
        </button>
      </div>
    </article>
  );
}
