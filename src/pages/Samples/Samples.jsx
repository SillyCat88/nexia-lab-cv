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
				{t.samples.map((sample, index) => (
					<article
						key={sample.number}
						className={`${styles.sample} ${
							index % 2 !== 0 ? styles.reverse : ""
						}`}
					>
						<div className={styles.content}>
							<span className={styles.number}>{sample.number}</span>

							<h2>{sample.title}</h2>

							<p className={styles.description}>
								{sample.description}
							</p>

							<a href={sample.path} className={styles.link}>
								{sample.link}
							</a>
						</div>

                        <div className={styles.visual} />
					
                    </article>
				))}
			</section>

			<section className={styles.quoteSection}>
				<blockquote className={styles.quote}>
					“{t.quote.text}”
				</blockquote>

				<cite className={styles.author}>— {t.quote.author}</cite>
			</section>
		</main>
	);
}