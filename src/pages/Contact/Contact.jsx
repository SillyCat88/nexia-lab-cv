import { useState } from "react";
import emailjs from "@emailjs/browser";

import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import Footer from "../../components/Footer/Footer";

import styles from "./Contact.module.css";
import { contentContact } from "./contentContact";


export default function Contact({ lang, setLang }) {
  const t = contentContact[lang];

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
    time: "",
  });

  const [status, setStatus] = useState(null);

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus(null);
    setIsSending(true);

    const now = new Date().toLocaleString("uk-UA", {
      dateStyle: "full",
      timeStyle: "medium",
    });

    const payload = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      message: formData.message,
      time: now,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setIsSending(false);

      setFormData({
        name: "",
        whatsapp: "",
        email: "",
        message: "",
        time: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("error");
      setIsSending(false);
    }
  };

  return (
    <section className={styles.contact}>
      
      <LanguageSwitcher
        lang={lang}
        setLang={setLang}
      />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </header>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <label>
            <span>{t.nameLabel}</span>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
            />
          </label>

          <label>
            <span>{t.whatsappLabel}</span>

            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder={t.whatsappPlaceholder}
            />
          </label>

          <label>
            <span>
              {t.emailLabel}
              <sup>*</sup>
            </span>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
            />
          </label>

          <label>
            <span>{t.messageLabel}</span>

            <textarea
              name="message"
              required
              rows={8}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
            />
          </label>

          <button 
            type="submit" 
            disabled={isSending}
          >
            {isSending ? t.sendingButton : t.submitButton}
          </button>

          {status === "success" && (
            <p className={styles.success}>
              {t.successMessage}
            </p>
          )}

          {status === "error" && (
            <p className={styles.error}>
              {t.errorMessage}
            </p>
          )}

        </form>
      </div>

      <Footer 
        lang={lang}
      />
    </section>
  );
}
