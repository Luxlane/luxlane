// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pro">
        <div className="hero-glow" />
        <div className="hero-content">
          <span className="kicker">Transporte ejecutivo</span>
          <h1>Viaja seguro, a tiempo y con estilo.</h1>
          <p className="lead">
            Choferes verificados, seguimiento en vivo y soporte 24/7. Reserva en minutos y recibe confirmación por correo.
          </p>
          <div className="hero-actions">
            <Link href="/book" className="btn btn-primary">Reservar ahora</Link>
            <Link href="/track/demo-trip" className="btn btn-ghost">Ver tracking demo →</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <article className="card">
          <span className="badge">✔ Seguridad</span>
          <h3>Choferes verificados</h3>
          <p>Selección rigurosa, experiencia premium y protocolos de seguridad.</p>
        </article>

        <article className="card">
          <span className="badge">🛰 En vivo</span>
          <h3>Seguimiento en tiempo real</h3>
          <p>Comparte tu ruta y ETA con un clic. Transparencia total del viaje.</p>
        </article>

        <article className="card">
          <span className="badge">💬 24/7</span>
          <h3>Soporte humano</h3>
          <p>Estamos contigo antes, durante y después del viaje.</p>
        </article>
      </section>
    </>
  );
}
