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
    return <h1>{t.articleNotFound}</h1>;
  }

  return (
    <main className={styles.viewer}>
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />

      <header className={styles.header}>
        <h1>{article.title}</h1>
      </header>

      <section className={styles.pages}>
        {article.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${article.title} – ${t.pageAlt} ${index + 1}`}
            className={styles.page}
          />
        ))}
      </section>

      <button className={styles.button} onClick={() => navigate(-1)}>
        {t.buttonBack}
      </button>
    </main>
  );
}
