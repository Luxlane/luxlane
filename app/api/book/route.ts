export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validación simple (lado servidor)
    const required = ["name", "email", "phone", "date", "pickup", "dropoff"];
    for (const k of required) {
      if (!data?.[k]) {
        return Response.json({ ok: false, error: `Falta el campo: ${k}` }, { status: 400 });
      }
    }

    // Genera un ID de referencia sencillo (ej: LUX-839201)
    const id = `LUX-${Math.floor(100000 + Math.random() * 900000)}`;

    // Aquí podríamos: guardar en DB, enviar email, Slack, etc.
    // Por ahora, lo dejamos logueado (verás esto en Vercel → Functions logs)
    console.log("Nueva reserva:", { id, ...data });

    return Response.json({ ok: true, id });
  } catch (err: any) {
    return Response.json({ ok: false, error: err.message || "Error" }, { status: 500 });
  }
}
