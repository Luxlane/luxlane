import es from "./es";
import en from "./en";

export type Lang = "es" | "en";

export function getDict(lang: Lang) {
  return lang === "en" ? en : es;
}
