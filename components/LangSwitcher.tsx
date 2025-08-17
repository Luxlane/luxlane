"use client";

import { useTransition } from "react";

export default function LangSwitcher() {
  const [isPending, startTransition] = useTransition();

  const switchLang = async (lang: "es" | "en") => {
    startTransition(async () => {
      await fetch(`/lang/${lang}`);
      window.location.reload();
    });
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        onClick={() => switchLang("es")}
        disabled={isPending}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        🇪🇸 Español
      </button>
      <button
        onClick={() => switchLang("en")}
        disabled={isPending}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        🇬🇧 English
      </button>
    </div>
  );
}
