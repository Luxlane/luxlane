"use client";

import { useTransition } from "react";

export default function LangSwitcher({ current }: { current: "es" | "en" }) {
  const [isPending, startTransition] = useTransition();

  const switchLang = (code: "es" | "en") => {
    if (isPending || code === current) return;
    startTransition(() => {
      window.location.href = `/lang/${code}`;
    });
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => switchLang("es")}
        disabled={isPending || current === "es"}
        aria-pressed={current === "es"}
        className="btn btn-ghost"
      >
        🇪🇸 Español
      </button>
      <button
        onClick={() => switchLang("en")}
        disabled={isPending || current === "en"}
        aria-pressed={current === "en"}
        className="btn btn-ghost"
      >
        🇬🇧 English
      </button>
    </div>
  );
}
