// app/services/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      {/* HERO SERVICES */}
      <section className="section" style={{ paddingTop: 24, paddingBottom: 12 }}>
        <div className="wrap">
          <span className="kicker">Nuestros servicios</span>
          <h1 className="section-title" style={{ marginTop: 8 }}>
            Transporte premium para cada ocasión
          </h1>
          <p className="muted" style={{ maxWidth: 800 }}>
            Puerta a puerta, puntualidad y estilo. Seguimiento en vivo, choferes verificados y soporte 24/7 para ejecutivos, empresas y eventos.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="section" style={{ paddingTop: 12 }}>
        <div className="wrap">
          <div className="services">
            {/* City-to-City */}
            <article className="service-card">
              <img src="/images/service-city.jpg" alt="City to City" />
              <div className="service-content">
                <h3>City‑to‑City Travel</h3>
                <p className="muted">
                  Traslados interurbanos puerta a puerta, sin esperas ni conexiones. Flexibilidad total y confort premium.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/book" className="btn btn-primary">Reservar</Link>
                  <a href="#faq" className="btn btn-ghost">Dudas frecuentes</a>
                </div>
              </div>
            </article>

            {/* Airport */}
            <article className="service-card">
              <img src="/images/service-airport.jpg" alt="Traslados de aeropuerto" />
              <div className="service-content">
                <h3>Airport Transfers</h3>
                <p className="muted">
                  Monitoreo de vuelos para ajustarnos a retrasos. Recogidas puntuales y asistencia con equipaje.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/book" className="btn btn-primary">Reservar</Link>
                </div>
              </div>
            </article>

            {/* Hourly */}
            <article className="service-card">
              <img src="/images/service-partners.jpg" alt="Servicio por horas" />
              <div className="service-content">
                <h3>Hourly Chauffeur</h3>
                <p className="muted">
                  Reserva por horas con itinerario flexible, paradas múltiples y atención personalizada.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/book" className="btn btn-primary">Reservar</Link>
                </div>
              </div>
            </article>

            {/* Business */}
            <article className="service-card">
              <img src="/images/service-business.jpg" alt="Business travel" />
              <div className="service-content">
                <h3>Business Travel</h3>
                <p className="muted">
                  Traslados ejecutivos con discreción. Cuentas para empresas, facturación centralizada y reportes.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/dashboard" className="btn btn-ghost">Hablar con ventas</Link>
                </div>
              </div>
            </article>

            {/* Eventos */}
            <article className="service-card">
              <img src="/images/service-events.jpg" alt="Eventos y grupos" />
              <div className="service-content">
                <h3>Eventos & Grupos</h3>
                <p className="muted">
                  Coordinación para bodas, congresos y producciones. Logística de flotas y staff en terreno.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/book" className="btn btn-primary">Cotizar</Link>
                </div>
              </div>
            </article>

            {/* Premium */}
            <article className="service-card">
              <img src="/images/service-premium.jpg" alt="Experiencia premium" />
              <div className="service-content">
                <h3>Premium Experience</h3>
                <p className="muted">
                  Agua de cortesía, Wi‑Fi en la mayoría de vehículos y atención dedicada para cada pasajero.
                </p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <Link href="/book" className="btn btn-primary">Reservar</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BLOQUE CORPORATIVO */}
      <section className="section corporate">
        <div className="wrap corporate-inner">
          <div className="corporate-copy">
            <h2>Soluciones corporativas</h2>
            <p className="muted">
              Contratos, cuentas multiusuario y reportes mensuales. SLA de puntualidad y soporte dedicado 24/7.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <Link href="/dashboard" className="btn btn-primary">Hablar con ventas</Link>
              <Link href="/book" className="btn btn-ghost">Probar ahora</Link>
            </div>
          </div>
          <div className="corporate-media">
            <img src="/images/corporate.jpg" alt="Soluciones corporativas" />
          </div>
        </div>
      </section>

      {/* FAQ SIMPLE */}
      <section id="faq" className="section">
        <div className="wrap">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <details className="faq">
              <summary>¿Cómo funciona el seguimiento en vivo?</summary>
              <p className="muted">
                Compartimos un enlace seguro con el estado del viaje (posición, ETA y datos del chofer). Puedes compartirlo con familiares o tu equipo.
              </p>
            </details>
            <details className="faq">
              <summary>¿Qué pasa si mi vuelo se retrasa?</summary>
              <p className="muted">
                Monitoreamos tu vuelo y ajustamos la recogida sin costo extra por retrasos razonables. Si el cambio es mayor, coordinamos contigo.
              </p>
            </details>
            <details className="faq">
              <summary>¿Cómo cotizo un viaje interurbano (City‑to‑City)?</summary>
              <p className="muted">
                Puedes reservar directo en la web o escribirnos. Indicando ciudad de origen, destino, fecha/hora y cantidad de pasajeros te enviamos tarifa fija.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-final">
        <div className="wrap cta-inner">
          <div>
            <h2>Lista tu próximo traslado en minutos</h2>
            <p className="muted">Confianza, estilo y soporte humano 24/7.</p>
          </div>
          <Link href="/book" className="btn btn-primary btn-lg">Reservar ahora</Link>
        </div>
      </section>
    </>
  );
}
