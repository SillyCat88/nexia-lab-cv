import { useParams, useNavigate } from "react-router-dom";
import { mediaItems } from "./data/contentMedia";
import { articleMap } from "./articleMap";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import styles from "./ArticleViewer.module.css";

export default function ArticleViewer({ lang, setLang }) {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const t = mediaItems[lang];
  const article = articleMap[lang][articleId];

  if (!article) {
    return (
      <main className={styles.mainContainer}>
        <div className={styles.mainLayout}>
          <h1 className={styles.mainHeaderTitle}>
            {t.articleNotFound}
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.mainLayout}>
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
        />

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
    </main>
  );
}
