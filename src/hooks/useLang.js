import useSessionStorage from "./useSessionStorage";

export default function useLang() {
  return useSessionStorage("app-lang", "en");
}
