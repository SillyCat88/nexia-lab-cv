import { useParams, useNavigate } from "react-router-dom";
import { mediaItems } from "./data/contentMedia";
import { articleMap } from "./articleMap";

import styles from "./ArticleViewer.module.css";

export default function ArticleViewer({ lang }) {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const t = mediaItems[lang];
  const article = articleMap[lang][articleId];

  if (!article) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.mainLayout}>
          <h1 className={styles.mainHeaderTitle}>
            {t.articleNotFound}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainLayout}>

        <header className={styles.mainHeader}>
          <h1 className={styles.mainHeaderTitle}>{article.title}</h1>
        </header>

        <section className={styles.pagesLayout}>
          {article.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${article.title} – ${t.pageAlt} ${index + 1}`}
              className={styles.pageImage}
            />
          ))}
        </section>

        <button className={styles.backButton} onClick={() => navigate(-1)}>
          {t.buttonBack}
        </button>
      </div>
    </div>
  );
}
