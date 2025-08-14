import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Tu formulario envía JSON, así que leemos JSON
    const body = await req.json();

    const {
      name = "",
      email = "",
      phone = "",
      date = "",
      pickup = "",   // antes llamabas "from"
      dropoff = "",  // antes llamabas "to"
      notes = "",
    } = body || {};

    // Validación mínima
    if (!name || !email || !date || !pickup || !dropoff) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // ID de referencia simple
    const id = "LL-" + Math.random().toString(36).slice(2, 8).toUpperCase();

    // ENV de Vercel (asegúrate que están creadas)
    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    const TO = process.env.BOOKING_TO_EMAIL || "";
    // Mientras no verifiques tu dominio en Resend, usa el remitente sandbox:
    const FROM =
      process.env.BOOKING_FROM_EMAIL || "Lux Lane <onboarding@resend.dev>";

    // Enviar email (si hay API key y destinatario configurados)
    if (RESEND_API_KEY && TO) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO, email], // copia al cliente
          subject: `Nueva reserva #${id} — ${name}`,
          text: [
            `Reserva #${id}`,
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Teléfono: ${phone}`,
            `Fecha/Hora: ${date}`,
            `Recogida: ${pickup}`,
            `Destino: ${dropoff}`,
            `Notas: ${notes || "-"}`,
          ].join("\n"),
        }),
      });

      if (!r.ok) {
        const info = await r.text();
        console.error("Resend error:", info);
        return NextResponse.json(
          { ok: false, error: "No se pudo enviar el correo." },
          { status: 500 }
        );
      }
    }

    // Respuesta al frontend
    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Error del servidor." },
      { status: 500 }
    );
  }
}
