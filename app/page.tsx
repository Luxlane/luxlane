import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">Transporte premium con tracking en tiempo real</h1>
        <p className="lead">
          Viaja seguro, puntual y con estilo. Reserva en minutos, sigue a tu chofer en el mapa y recibe confirmación por email.
        </p>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <Link href="/book" className="btn btn-primary">Reservar ahora →</Link>
          <Link href="/track/demo-trip" className="btn btn-ghost">Ver tracking demo →</Link>
        </div>
      </section>

      <section className="section">
        <div className="grid-3">
          <article className="card">
            <h3>Choferes verificados</h3>
            <p>Conductores seleccionados con protocolos de seguridad y atención premium.</p>
          </article>
          <article className="card">
            <h3>Seguimiento en vivo</h3>
            <p>Comparte tu ruta y hora estimada de llegada con un clic.</p>
          </article>
          <article className="card">
            <h3>Soporte 24/7</h3>
            <p>Estamos contigo antes, durante y después de tu viaje.</p>
          </article>
        </div>
      </section>
    </>
  );
}
