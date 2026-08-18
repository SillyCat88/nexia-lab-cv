import styles from "./Documents.module.css";
import { content } from "./data/contentDocs";


export default function Documents ({ lang }) {
  
  const t = content[lang];

  return (
    <div className={styles.mainLayout}>
      <div className={styles.mainContainer}>
        <header className={styles.headerLayout}>
            <h1 className={styles.headerTitle}>
                {t.pageTitle}
            </h1>
            <p className={styles.headerText}>
                {t.pageDescription}
            </p>
        </header>

        <ul className={styles.listContainer}>
          {t.documents.map((document) => (
            <li 
              key={document.file}
              className={styles.listItem}
            >
              <a
                href={document.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                {document.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

