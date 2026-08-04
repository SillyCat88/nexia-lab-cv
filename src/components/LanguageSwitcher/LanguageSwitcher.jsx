import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  lang,
  setLang,
}) {
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
                EN
            </button>

            <span className={styles.barSymbol}>|</span>

            <button
                type="button"
                onClick={() => setLang("ua")}
                className={`${styles.switcherButton} ${
                lang === "ua" ? styles.active : ""
                }`}
            >
                UA
            </button>
        </div>
    </div>
  );
}
