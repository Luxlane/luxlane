import { NextResponse } from "next/server";

function asString(v: any, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

export async function POST(req: Request) {
  try {
    // 1) Acepta JSON o form-data
    let payload: any = {};
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      payload = await req.json();
    } else {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries());
    }

    // 2) Normaliza nombres (tu UI usa phone/pickup/dropoff)
    const name = asString(payload.name);
    const email = asString(payload.email);
    const phone = asString(payload.phone);
    const date = asString(payload.date);
    const from = asString(payload.from) || asString(payload.pickup);
    const to = asString(payload.to) || asString(payload.dropoff);
    const notes = asString(payload.notes);

    // 3) Validación mínima
    if (!name || !email || !date || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // ID simple para mostrar al usuario
    const id = Math.random().toString(36).slice(2, 8).toUpperCase();

    // 4) (Opcional) Enviar email con Resend si configuraste variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.BOOKING_TO_EMAIL || email; // si no configuras, se lo mandamos al cliente
    const FROM =
      process.env.BOOKING_FROM_EMAIL || "reservas@luxlane.example.com";

    if (RESEND_API_KEY && FROM && TO) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          subject: `Nueva reserva ${id} - ${name}`,
          text:
            `Nueva reserva\n\n` +
            `Nombre: ${name}\n` +
            `Email: ${email}\n` +
            `Tel: ${phone || "-"}\n` +
            `Fecha: ${date}\n` +
            `Desde: ${from}\n` +
            `Hasta: ${to}\n` +
            `Notas: ${notes || "-"}`,
        }),
      });
    }

    // 5) Log para verlo en Vercel → Logs
    console.log("Nueva reserva", { id, name, email, phone, date, from, to, notes });

    return NextResponse.json({ ok: true, id }, { status: 200 });
  } catch (err) {
    console.error("Error en /api/book", err);
    return NextResponse.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
