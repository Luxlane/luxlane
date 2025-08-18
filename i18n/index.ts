import es from "./es";
import en from "./en";

export type Lang = "es" | "en";

const dicts = {
  es,
  en,
};

export function getDict(lang: Lang) {
  return dicts[lang] || dicts.es; // fallback a español
}
