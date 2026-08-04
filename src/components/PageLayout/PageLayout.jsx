import Footer from "../Footer/Footer";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children, lang, setLang }) {
  return (
    <div className={styles.pageContainer}>

      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />

      <main className={styles.pageLayout}>
        {children}
      </main>

      <Footer lang={lang} />

    </div>
  );
}
