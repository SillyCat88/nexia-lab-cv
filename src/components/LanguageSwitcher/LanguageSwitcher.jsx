import { content } from "./data/contentSwitcher";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  lang,
  setLang,
}) {
  const t = content[lang];
  
  return (
    <div className={styles.switcherContainer}>
        <div className={styles.switcherLayout}>
            <button
                type="button"
                onClick={() => setLang("en")}
                className={`${styles.switcherButton} ${
                lang === "en" ? styles.active : ""
                }`}
            >
                {t.en}
            </button>

            <button
                type="button"
                onClick={() => setLang("ua")}
                className={`${styles.switcherButton} ${
                lang === "ua" ? styles.active : ""
                }`}
            >
                {t.ua}
            </button>
        </div>
    </div>
  );
}
