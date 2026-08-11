import { useEffect, useState } from "react";

export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = sessionStorage.getItem(key);

    if (!saved) {
      return initialValue;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}