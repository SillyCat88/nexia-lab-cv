import { useState, useEffect } from "react";
import { mediaItems } from "./data/contentMedia";
import MediaCard from "./MediaCard";
import MediaExplorer from "./MediaExplorer";
import styles from "./Media.module.css";


export default function Media() {

  const STORAGE_KEY = "media-state";  

  const [lang, setLang] = useState(() => {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return saved?.lang ?? "en";
  });
  
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
    <section className={styles.media}>
      <header className={styles.header}>
        <h1>{t.headerTitle}</h1>
        <p>
          {t.headerDescription}
        </p>
      </header>

      <div className={styles.buttons}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ua")}>UA</button>
      </div>

      <div className={styles.mediaGrid}>
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
    </section>
  );
}