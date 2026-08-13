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
    <article className={styles.cardContainer}>
      <div className={styles.cardLayout}>
        <div className={styles.previewContainer}>
          <img
            src={item.preview}
            alt={`${t.previewAlt} ${item.title}`}
            width={768}
            height={512}
            className={styles.previewImage}
            decoding="async"
            onLoad={(event) => {
              event.currentTarget.classList.add(styles.loaded);
            }}            
          />
        </div>

        <div className={styles.contentLayout}>
          <h2 className={styles.cardTitle}>
            {item.title}
          </h2>

          <div className={styles.linksLayout}>
            <Link
              to={`/media/${item.id}`}
              className={styles.actionLink}
            >
              {t.buttonOpen}
            </Link>

            <button
              type="button"
              className={styles.previewButton}
              onClick={onPreview}
            >
              {t.buttonPreview}
            </button>
          </div>
        </div>

        <div className={styles.navigationLayout}>
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
      </div>
    </article>
  );
}
