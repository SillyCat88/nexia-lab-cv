import { useEffect } from "react";
import { mediaItems } from "./data/contentMedia";
import MediaCard from "./MediaCard";
import MediaExplorer from "./MediaExplorer";
import useSessionStorage from "../../hooks/useSessionStorage";
import styles from "./Media.module.css";


export default function Media({ lang }) {
  const t = mediaItems[lang];

  const [mediaState, setMediaState] = useSessionStorage(
    "media-state",
    {
      currentIndex: 0,
      selectedId: null
    }
  );
  
  const { currentIndex, selectedId } = mediaState;

  const selected = t.items.find(item => item.id === selectedId) ?? null;
  const currentItem = t.items[currentIndex];

  const handlePrevious = () => {
    setMediaState((prev) => {
      const next =
        prev.currentIndex === 0
          ? t.items.length - 1
          : prev.currentIndex - 1;

      return {
        ...prev,
        currentIndex: next,
        selectedId:
          prev.selectedId !== null
            ? t.items[next].id
            : null,
      };
    });
  };

  const handleNext = () => {
    setMediaState((prev) => {
      const next =
        prev.currentIndex === t.items.length - 1
          ? 0
          : prev.currentIndex + 1;

      return {
        ...prev,
        currentIndex: next,
        selectedId:
          prev.selectedId !== null
            ? t.items[next].id
            : null,
      };
    });
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setMediaState((prev) => ({
          ...prev,
          selectedId: null,
        }));
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);
  
  return (
    <div className={styles.mainContainer}>
      <header className={styles.headerLayout}>
        <h1 className={styles.headerTitle}>{t.headerTitle}</h1>
        <p className={styles.headerText}>
          {t.headerDescription}
        </p>
      </header>

      <section className={styles.mainGrid}>
        <MediaCard
          item={currentItem}
          onPreview={() =>
            setMediaState((prev) => ({
              ...prev,
              selectedId: currentItem.id,
            }))
          }
          onPrevious={handlePrevious}
          onNext={handleNext}
          t={t}
        />

        <MediaExplorer
          selected={selected}
          setSelected={(id) =>
            setMediaState((prev) => ({
              ...prev,
              selectedId: id,
            }))
          }
          t={t}
        />
      </section>
    </div>
  );
}