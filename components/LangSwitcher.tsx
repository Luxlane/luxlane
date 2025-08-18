"use client";

export default function LangSwitcher({ current }: { current: "es" | "en" }) {
  const setLang = (code: "es" | "en") => {
    document.cookie = `lang=${code}; path=/; max-age=${60 * 60 * 24 * 365}`;
    window.location.reload();
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => setLang("es")}
        disabled={current === "es"}
        aria-pressed={current === "es"}
        className="btn btn-ghost"
      >
        🇪🇸 Español
      </button>
      <button
        onClick={() => setLang("en")}
        disabled={current === "en"}
        aria-pressed={current === "en"}
        className="btn btn-ghost"
      >
        🇬🇧 English
      </button>
    </div>
  );
}
