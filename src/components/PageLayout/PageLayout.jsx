import Footer from "../Footer/Footer";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children, lang }) {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.pageLayout}>
        {children}
      </main>

      <Footer lang={lang} />
    </div>
  );
}
