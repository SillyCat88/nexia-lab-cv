import { useEffect, useState } from "react";

export default function useLang() {
  const [lang, setLang] = useState(() => {
    return sessionStorage.getItem("app-lang") || "en";
  });

  useEffect(() => {
    sessionStorage.setItem("app-lang", lang);
  }, [lang]);

  return [lang, setLang];
}