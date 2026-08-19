import { useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./Contact.module.css";
import { contentContact } from "./data/contentContact";


export default function Contact({ lang }) {
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

      setTimeout(() => {
        setStatus(null);
      }, 3000);

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
    <div className={styles.mainContainer}>

      <header className={styles.headerLayout}>
        <h1 className={styles.headerTitle}>{t.title}</h1>
        <p className={styles.headerText}>{t.description}</p>
      </header>

      <section className={styles.contactSection}>
        <form
          className={styles.formLayout}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className={styles.labelLayout}>
            <span className={styles.labelField}>{t.nameLabel}</span>

            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              className={styles.inputField}
            />
          </label>

          <label htmlFor="whatsapp" className={styles.labelLayout}>
            <span className={styles.labelField}>{t.whatsappLabel}</span>

            <input
              id="whatsapp"
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder={t.whatsappPlaceholder}
              className={styles.inputField}
            />
          </label>

          <label htmlFor="email" className={styles.labelLayout}>
            <span className={styles.labelField}>
              {t.emailLabel}
              <sup>*</sup>
            </span>

            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              className={styles.inputField}
            />
          </label>

          <label htmlFor="message" className={styles.labelLayout}>
            <span className={styles.labelField}>{t.messageLabel}</span>

            <textarea
              id="message"
              name="message"
              required
              rows={8}
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
              className={styles.textareaField}
            />
          </label>

          <button 
            type="submit" 
            disabled={isSending}
            className={styles.submitButton}
          >
            {isSending ? t.sendingButton : t.submitButton}
          </button>

          {status === "success" && (
            <p className={styles.successMessage}>
              {t.successMessage}
            </p>
          )}

          {status === "error" && (
            <p className={styles.errorMessage}>
              {t.errorMessage}
            </p>
          )}

        </form>
      </section>
    </div>

  );
}
