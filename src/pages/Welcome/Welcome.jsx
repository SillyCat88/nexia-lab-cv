import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.panel}>
          <h1 className={styles.title}>Welcome</h1>

          <Link to="/home" className={styles.link}>
            Explore →
          </Link>
        </section>
      </div>
    </main>
  );
}