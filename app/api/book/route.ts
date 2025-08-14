// app/api/book/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const date = String(form.get("date") || "");
    const from = String(form.get("from") || "");
    const to = String(form.get("to") || "");
    const notes = String(form.get("notes") || "");

    // Validación mínima
    if (!name || !email || !date || !from || !to) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // 🔵 (Opcional) Enviar email con Resend si configuras la API key.
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.BOOKING_TO_EMAIL || email; // destinatario por defecto: el propio cliente
    const FROM =
      process.env.BOOKING_FROM_EMAIL || "reservas@luxlane.example.com";

    if (RESEND_API_KEY && TO && FROM) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          to: TO,
          from: FROM,
          subject: `Nueva reserva de ${name}`,
          html: `
            <h2>Nueva reserva</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fecha:</strong> ${date}</p>
            <p><strong>Desde:</strong> ${from}</p>
            <p><strong>Hasta:</strong> ${to}</p>
            <p><strong>Notas:</strong> ${notes || "(sin notas)"}</p>
          `,
        }),
      });
    }

    // Deja un registro en los logs de Vercel (para que lo veas enseguida)
    console.log("Nueva reserva:", { name, email, date, from, to, notes });

    return NextResponse.redirect(new URL("/book?ok=1", req.url)); // vuelve a /book con ?ok=1
  } catch (err) {
    console.error("Error en /api/book:", err);
    return NextResponse.json(
      { ok: false, error: "Error procesando la reserva." },
      { status: 500 }
    );
  }
}
