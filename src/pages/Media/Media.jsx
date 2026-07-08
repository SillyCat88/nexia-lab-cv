import { useState } from "react";

import { mediaItems } from "./data/mediaData";

import MediaCard from "./MediaCard";
import MediaExplorer from "./MediaExplorer";

import styles from "./Media.module.css";

export default function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);

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

  return (
    <section className={styles.media}>
      <header className={styles.header}>
        <h1>Media archive</h1>

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