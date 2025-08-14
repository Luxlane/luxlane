"use client";
import { useState } from "react";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);

  const setField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("✅ Reserva confirmada. Recibirás un correo con los detalles.");
        setForm({ name: "", email: "", phone: "", pickup: "", dropoff: "", notes: "" });
      } else {
        alert("❌ Hubo un problema al enviar la reserva.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error de conexión.");
    }

    setLoading(false);
  };

  return (
    <>
      <h1 className="h1">Reservar</h1>
      <p className="muted">
        Completa los datos y confirma. Te daremos un número de referencia por pantalla y por correo.
      </p>

      <form onSubmit={onSubmit} className="form">
        <div className="row-2">
          <div>
            <label className="label">Nombre completo</label>
            <input
              className="input"
              required
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
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
              onChange={(e) => setField("email", e.target.value)}
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
            onChange={(e) => setField("phone", e.target.value)}
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div className="row-2">
          <div>
            <label className="label">Origen</label>
            <input
              className="input"
              required
              value={form.pickup}
              onChange={(e) => setField("pickup", e.target.value)}
              placeholder="Dirección de recogida"
            />
          </div>

          <div>
            <label className="label">Destino</label>
            <input
              className="input"
              required
              value={form.dropoff}
              onChange={(e) => setField("dropoff", e.target.value)}
              placeholder="Dirección de destino"
            />
          </div>
        </div>

        <div>
          <label className="label">Notas (opcional)</label>
          <textarea
            className="textarea"
            rows={4}
            value={form.notes}
            onChange={(e) => setField("notes", e.target.value)}
            placeholder="Detalles adicionales para el conductor"
          />
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Enviando…" : "Confirmar reserva"}
          </button>
        </div>
      </form>
    </>
  );
}
