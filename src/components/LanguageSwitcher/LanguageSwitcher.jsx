import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  lang,
  setLang,
}) {
  return (
    <div className={styles.switcherLayout}>
        <div className={styles.switcherContainer}>
        <button
            type="button"
            onClick={() => setLang("en")}
            className={`${styles.button} ${
            lang === "en" ? styles.active : ""
            }`}
        >
            EN
        </button>

        <span className={styles.bar}>|</span>

        <button
            type="button"
            onClick={() => setLang("ua")}
            className={`${styles.button} ${
            lang === "ua" ? styles.active : ""
            }`}
        >
            UA
        </button>
        </div>
    </div>
  );
}
