import { useState } from "react";
import { content } from "./data";
import "./App.css";
import "./responsive.css";
import Projects from "./Projects.jsx";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="container">
      {/* HERO */}
      <header className="hero">
        <h1>{t.name}</h1>
        <h2>
          <span className="accent">Localization Specialist</span> • EN↔UA Translator
        </h2>
        <p className="hero-subtitle">
          MTPE • UX/UI Localization • Technical Translation • Content Writing
        </p>
        <div className="buttons">
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ua")}>UA</button>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <section>
            <h3>Languages</h3>
            <p>{t.languages}</p>
          </section>

          <section>
            <h3>Tools & Technologies</h3>
            <div className="tools-list">
              {t.tools.map((tool, i) => (
                <span key={i}>{tool}</span>
              ))}
            </div>
          </section>
        </aside>  

        <main className="main-content">
          <section className="card">
            <h3>About</h3>
            <p>{t.about}</p>
          </section>

          <section>
            <h3>Services</h3>
            <ul className="tags">
              {t.services.map((s, i) => (
                <li key={i}>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Experience</h3>
            {t.experience.map((e, i) => (
              <div key={i} className="card">
                <h4>{e.title}</h4>
                <span className="highlight">{e.period}</span>
                <p>{e.text}</p>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <Projects />

        </main>
      </div>

      {/* FOOTER */}
      <footer>
        <p>
          <span className="accent">OLENA KULIKOVA</span>
          {" • "}Translator & Localization Specialist
        </p>
      </footer>
    </div>
  );
}