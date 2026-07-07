import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <Link
          to="/home"
          className={styles.link}
        >
          Explore →
        </Link>
      </section>
    </main>
  );
}
