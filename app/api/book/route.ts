// app/api/book/route.ts
import { NextResponse } from "next/server";

type Booking = {
  name: string;
  email: string;
  phone?: string;
  date: string;
  from: string;
  to: string;
  notes?: string;
};

async function readBody(req: Request): Promise<Booking> {
  // Intento 1: JSON
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      const j = await req.json();
      return {
        name: String(j.name || ""),
        email: String(j.email || ""),
        phone: String(j.phone || ""),
        date: String(j.date || ""),
        from: String(j.pickup || j.from || ""),
        to: String(j.dropoff || j.to || ""),
        notes: String(j.notes || ""),
      };
    }
  } catch {}

  // Intento 2: form-data
  try {
    const form = await req.formData();
    return {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      date: String(form.get("date") || ""),
      from: String(form.get("pickup") || form.get("from") || ""),
      to: String(form.get("dropoff") || form.get("to") || ""),
      notes: String(form.get("notes") || ""),
    };
  } catch {}

  return {
    name: "", email: "", phone: "", date: "", from: "", to: "", notes: "",
  };
}

export async function POST(req: Request) {
  try {
    const data = await readBody(req);

    // Validación mínima
    if (!data.name || !data.email || !data.date || !data.from || !data.to) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // (Opcional) Email vía Resend si configuras las variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.BOOKING_TO_EMAIL || data.email; // por defecto avisamos al cliente
    const FROM = process.env.BOOKING_FROM_EMAIL || "reservas@luxlane.example.com";

    if (RESEND_API_KEY && TO && FROM) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: TO,
          subject: `Nueva reserva - ${data.name}`,
          text:
            `Gracias por tu reserva.\n\n` +
            `Nombre: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Teléfono: ${data.phone || "-"}\n` +
            `Fecha/Hora: ${data.date}\n` +
            `Desde: ${data.from}\n` +
            `Hasta: ${data.to}\n` +
            `Notas: ${data.notes || "-"}\n`,
        }),
      }).catch(() => {});
    }

    const id = Math.random().toString(36).slice(2, 8).toUpperCase();

    console.log("Nueva reserva", { id, ...data }); // ← esto lo verás en Vercel Logs

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error del servidor." },
      { status: 500 }
    );
  }
}
