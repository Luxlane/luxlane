// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      {/* HERO */}
      <section className="hero">
        <span className="kicker">Transporte premium con tracking</span>
        <h1>Viaja seguro, a tiempo y con estilo.</h1>
        <p className="muted">
          Reserva en minutos, sigue tu chofer en el mapa y recibe confirmación. 
          Servicio ejecutivo — conductores verificados, seguimiento en vivo y soporte 24/7.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
          <Link href="/book" className="btn">Reservar ahora</Link>
          <Link href="/track/demo-trip" className="btn btn-outline">Ver tracking demo →</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid">
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
    </div>
  );
}
