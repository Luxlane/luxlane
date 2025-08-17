"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export default function LangSwitcher({ current }: { current: "es" | "en" }) {
  const router = useRouter();
  const [pending, start] = useTransition();

  function setLang(lang: "es" | "en") {
    start(async () => {
      await fetch("/api/lang", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang }),
      });
      router.refresh(); // recarga el layout/página con el nuevo idioma
    });
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button
        className="btn btn-ghost"
        onClick={() => setLang("es")}
        disabled={pending || current === "es"}
        aria-pressed={current === "es"}
      >
        ES
      </button>
      <button
        className="btn btn-ghost"
        onClick={() => setLang("en")}
        disabled={pending || current === "en"}
        aria-pressed={current === "en"}
      >
        EN
      </button>
    </div>
  );
}
