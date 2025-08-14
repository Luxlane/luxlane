"use client";

import { useState } from "react";

type Booking = {
  name: string;
  email: string;
  phone: string;
  date: string;
  pickup: string;
  dropoff: string;
  notes?: string;
};

const initial: Booking = {
  name: "",
  email: "",
  phone: "",
  date: "",
  pickup: "",
  dropoff: "",
  notes: "",
};

export default function BookPage() {
  const [form, setForm] = useState<Booking>(initial);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; id?: string; error?: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "No se pudo enviar la reserva");

      setResult({ ok: true, id: data.id });
      setForm(initial);
    } catch (err: any) {
      setResult({ ok: false, error: err.message || "Error desconocido" });
    } finally {
      setLoading(false);
    }
  }

  function set<K extends keyof Booking>(key: K, value: Booking[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const field = { padding: "10px", borderRadius: 8, border: "1px solid #e5e7eb", width: "100%" };
  const label = { display: "block", fontSize: 14, color: "#374151", marginBottom: 6 };
  const row = { display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" as const };

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Reservar</h1>
      <p style={{ color: "#6b7280", marginBottom: 20 }}>
        Completa los datos y confirma. Te daremos un número de referencia.
      </p>

      {result?.ok && (
        <div style={{ background: "#e8f7ee", border: "1px solid #a7f3d0", padding: 12, borderRadius: 8, marginBottom: 16 }}>
          ✅ Reserva recibida. Número de referencia: <strong>{result.id}</strong>
        </div>
      )}
      {result && !result.ok && (
        <div style={{ background: "#fee2e2", border: "1px solid #fecaca", padding: 12, borderRadius: 8, marginBottom: 16 }}>
          ⚠️ {result.error}
        </div>
      )}

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
        <div style={row}>
          <div>
            <label style={label}>Nombre completo</label>
            <input
              required
              style={field}
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label style={label}>Email</label>
            <input
              required
              type="email"
              style={field}
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
        </div>

        <div style={row}>
          <div>
            <label style={label}>Teléfono</label>
            <input
              required
              style={field}
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+1 555 123 4567"
            />
          </div>
          <div>
            <label style={label}>Fecha y hora</label>
            <input
              required
              type="datetime-local"
              style={field}
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
            />
          </div>
        </div>

        <div style={row}>
          <div>
            <label style={label}>Recogida</label>
            <input
              required
              style={field}
              value={form.pickup}
              onChange={(e) => set("pickup", e.target.value)}
              placeholder="Dirección o lugar"
            />
          </div>
          <div>
            <label style={label}>Destino</label>
            <input
              required
              style={field}
              value={form.dropoff}
              onChange={(e) => set("dropoff", e.target.value)}
              placeholder="Dirección o lugar"
            />
          </div>
        </div>

        <div>
          <label style={label}>Notas (opcional)</label>
          <textarea
            rows={4}
            style={{ ...field, resize: "vertical" }}
            value={form.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Instrucciones especiales, número de vuelo, etc."
          />
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #111827",
              background: "#111827",
              color: "white",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Enviando..." : "Confirmar reserva"}
          </button>
        </div>
      </form>
    </main>
  );
}
