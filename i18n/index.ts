import es from "./es";
import en from "./en";

export function getDict(lang: "es" | "en") {
  return lang === "en" ? en : es;
}
