import { Link } from "react-router-dom";
import { mediaItems } from "./data/contentMedia";
import styles from "./MediaCard.module.css";

export default function MediaCard({
  item,
  onPreview,
  onPrevious,
  onNext,
  t
}) {
  return (
    <article className={styles.card}>
      <div className={styles.preview}>
        <img
          src={item.preview}
          alt={`${t.previewAlt} ${item.title}`}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {item.title}
        </h2>

        <div className={styles.links}>
          <Link
            to={`/media/${item.id}`}
            className={styles.link}
          >
            {t.buttonOpen}
          </Link>

          <button
            type="button"
            className={styles.open}
            onClick={onPreview}
          >
            {t.buttonPreview}
          </button>
        </div>
      </div>

      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.arrow}
          onClick={onPrevious}
          aria-label={t.previousArticle}
        >
          &#8249;
        </button>

        <button
          type="button"
          className={styles.arrow}
          onClick={onNext}
          aria-label={t.nextArticle}
        >
          &#8250;
        </button>
      </div>
    </article>
  );
}
