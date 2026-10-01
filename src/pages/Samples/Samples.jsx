import { Link } from "react-router-dom";
import { contentSamples } from "./data/contentSamples";
import styles from "./Samples.module.css";

export default function Samples({ lang }) {
	const t = contentSamples[lang];

	return (
		<main className={styles.mainContainer}>
			<header className={styles.header}>
				<p className={styles.pageTitle}>{t.pageTitle}</p>

				<h1>{t.leadTitle}</h1>

				<p className={styles.lead}>{t.lead}</p>

			</header>

			<section className={styles.samples}>
				{t.samples.map((sample) => (
					<article key={sample.number} className={styles.sample}>
						<div className={styles.content}>
							<span className={styles.number}>{sample.number}</span>

							<h2>{sample.title}</h2>

							<p className={styles.description}>
								{sample.description}
							</p>

							<Link to={sample.path} className={styles.link}>
								{sample.link}
							</Link>
						</div>

						<div className={styles.visual} />
					</article>
				))}
			</section>
		</main>
	);
}

