import es from "./es";
import en from "./en";

export type Lang = "es" | "en";
const dict = { es, en } as const;

export function getDict(lang: Lang) {
  return dict[lang] ?? dict.es;
}
