import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { articleMap } from "./articleMap";
import styles from "./ArticleViewer.module.css";

export default function ArticleViewer() {
  
  const { articleId } = useParams();

  const article = articleMap[articleId];

  if (!article) {
    return <h1>Article not found</h1>;
  }
  
  const navigate = useNavigate();

  return (
    <main className={styles.viewer}>
      <header className={styles.header}>
        <h1>{article.title.en}</h1>
      </header>

      <section className={styles.pages}>
        {article.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${article.title.en} – page ${index + 1}`}
            className={styles.page}
          />
        ))}
      </section>

      <button className={styles.button} onClick={() => navigate(-1)}>
        Back
      </button>
    </main>
  );
}
