import { useState, useEffect } from "react";
import { mediaItems } from "./data/contentMedia";
import MediaCard from "./MediaCard";
import MediaExplorer from "./MediaExplorer";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import Footer from "../../components/Footer/Footer";
import styles from "./Media.module.css";


export default function Media({ lang, setLang }) {
  const STORAGE_KEY = "media-state";  
  const t = mediaItems[lang];
  
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY)
    );
    return saved?.currentIndex ?? 0;
  });

  const [selectedId, setSelectedId] = useState(() => {
    const saved = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY)
    );
    return saved?.selectedId ?? null;
  });

  const selected = t.items.find(item => item.id === selectedId) ?? null;
  const currentItem = t.items[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const next =
        prev === 0 ? t.items.length - 1 : prev - 1;
      setSelectedId((id) =>
        id !== null ? t.items[next].id : null
      );
      return next;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next =
        prev === t.items.length - 1 ? 0 : prev + 1;
      setSelectedId((id) =>
        id !== null ? t.items[next].id : null
      );
      return next;
    });
  };

  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentIndex,
        selectedId,
        lang,
      })
    );
  }, [currentIndex, selectedId, lang]);  

  
  return (
    <section className={styles.mainContainer}>
      <div className={styles.mainLayout}>
        <LanguageSwitcher
          lang={lang}
          setLang={setLang}
        />

        <header className={styles.mainHeader}>
          <h1 className={styles.mainHeaderTitle}>{t.headerTitle}</h1>
          <p className={styles.mainHeaderText}>
            {t.headerDescription}
          </p>
        </header>

        <div className={styles.mainGrid}>
          <MediaCard
            item={currentItem}
            onPreview={() => setSelectedId(currentItem.id)}
            onPrevious={handlePrevious}
            onNext={handleNext}
            t={t}
          />

          <MediaExplorer
            selected={selected}
            setSelected={setSelectedId}
            t={t}
          />
        </div>

        {/* SPACE */}
        <div className={styles.spacer} />

        <Footer 
          lang={lang}
        />
      </div>
    </section>
  );
}