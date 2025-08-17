// app/book/page.tsx
"use client";
import { useEffect, useState } from "react";

type Booking = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  notes: string;
  date: string; // ISO: "YYYY-MM-DDTHH:mm"
};

const empty: Booking = {
  name: "",
  email: "",
  phone: "",
  pickup: "",
  dropoff: "",
  notes: "",
  date: "",
};

export default function BookPage() {
  const [form, setForm] = useState<Booking>(empty);
  const [loading, setLoading] = useState(false);
  const [okId, setOkId] = useState<string | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  // 1) Precarga desde la portada (hero) si viene con ?service,from,to,date,time,pax
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const from = q.get("from") || "";
    const to = q.get("to") || "";
    const date = q.get("date") || "";
    const time = q.get("time") || "";
    // si vienen separados, únelos a "YYYY-MM-DDTHH:mm"
    const dateIso = date && time ? `${date}T${time}` : (date || "");
    setForm((f) => ({
      ...f,
      pickup: from,
      dropoff: to,
      date: dateIso,
    }));
  }, []);

  function set<K extends keyof Booking>(key: K, value: Booking[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  // Helpers para mostrar y recoger date/time separados en la UI
  const datePart = form.date ? form.date.slice(0, 10) : "";
  const timePart = form.date && form.date.includes("T") ? form.date.slice(11, 16) : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOkId(null);
    setErrMsg(null);

    try {
      // Reunimos fecha+hora a ISO si el usuario los editó
      const fd = new FormData(e.currentTarget);
      const d = String(fd.get("date") || "");
      const t = String(fd.get("time") || "");
      const iso = d && t ? `${d}T${t}` : form.date;

      const payload = { ...form, date: iso };

      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar la reserva");
      }

      setOkId(data.id || "OK");
      setForm(empty);
    } catch (err: any) {
      setErrMsg(err?.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Reservar</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Completa los datos y confirma. Te enviaremos un correo con el número de referencia.
      </p>

      {okId && (
        <div style={{ background: "#11351f", border: "1px solid #1f7a47", padding: 12, borderRadius: 10, marginBottom: 16 }}>
          ✅ Reserva recibida. Número de referencia: <strong>{okId}</strong>
        </div>
      )}
      {errMsg && (
        <div style={{ background: "#3a1313", border: "1px solid #7a1f1f", padding: 12, borderRadius: 10, marginBottom: 16 }}>
          ⚠️ {errMsg}
        </div>
      )}

      <form onSubmit={onSubmit} className="form" style={{ display: "grid", gap: 16 }}>
        <div className="row-2" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label className="label">Nombre completo</label>
            <input
              className="input"
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div>
            <label className="label">Correo electrónico</label>
            <input
              type="email"
              className="input"
              required
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label className="label">Teléfono</label>
          <input
            className="input"
            required
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div className="row-2" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label className="label">Origen</label>
            <input
              className="input"
              required
              value={form.pickup}
              onChange={(e) => set("pickup", e.target.value)}
              placeholder="Dirección de recogida"
              name="from"
            />
          </div>
          <div>
            <label className="label">Destino</label>
            <input
              className="input"
              required
              value={form.dropoff}
              onChange={(e) => set("dropoff", e.target.value)}
              placeholder="Dirección de destino"
              name="to"
            />
          </div>
        </div>

        {/* Fecha y hora (se envían separados en el form y luego se unen a ISO en onSubmit) */}
        <div className="row-2" style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label className="label">Fecha</label>
            <input
              className="input"
              type="date"
              name="date"
              required
              defaultValue={datePart}
              onChange={(e) => {
                const d = e.target.value;
                const iso = d && timePart ? `${d}T${timePart}` : d;
                set("date", iso);
              }}
            />
          </div>
          <div>
            <label className="label">Hora</label>
            <input
              className="input"
              type="time"
              name="time"
              required
              defaultValue={timePart}
              onChange={(e) => {
                const t = e.target.value;
                const iso = datePart ? `${datePart}T${t}` : `T${t}`;
                set("date", iso);
              }}
            />
          </div>
        </div>

        <div>
          <label className="label">Notas (opcional)</label>
          <textarea
            className="textarea"
            rows={4}
            value={form.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Detalles adicionales para el conductor"
          />
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Enviando…" : "Confirmar reserva"}
          </button>
        </div>
      </form>
    </main>
  );
}
