import { useState, useEffect } from "react";
import { mediaItems } from "./data/mediaData";
import MediaCard from "./MediaCard";
import MediaExplorer from "./MediaExplorer";
import styles from "./Media.module.css";


export default function Media() {
  const STORAGE_KEY = "media-state";
  
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY)
    );
    return saved?.currentIndex ?? 0;
  });

  const [selected, setSelected] = useState(() => {
    const saved = JSON.parse(
      sessionStorage.getItem(STORAGE_KEY)
    );
    if (!saved?.explorerOpened) return null;
    return mediaItems[saved.currentIndex];
  });

  const currentItem = mediaItems[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };


  useEffect(() => {
    if (!selected) return;
    setSelected(mediaItems[currentIndex]);
  }, [currentIndex]);

  
  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentIndex,
        explorerOpened: selected !== null,
      })
    );
  }, [currentIndex, selected]);

  
  return (
    <section className={styles.media}>
      <header className={styles.header}>
        <h1>Media Archive</h1>

        <p>
          Collection of authored materials for a Ukrainian newspaper.
        </p>
      </header>

      <div className={styles.mediaGrid}>
        <MediaCard
          item={currentItem}
          onPreview={() => setSelected(currentItem)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        <MediaExplorer
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </section>
  );
}