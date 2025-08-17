// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero-full">
  <img
    className="hero-media"
    src="/images/hero.jpg"
    alt="Flota ejecutiva en ciudad"
  />
  <div className="hero-overlay" />
  <div className="wrap hero-content">
    <span className="kicker">Transporte premium con tracking</span>
    <h1 className="hero-title">Viaja seguro, a tiempo y con estilo.</h1>
    <p className="hero-sub">
      Servicio ejecutivo — choferes verificados, seguimiento en vivo y soporte 24/7.
    </p>
    <div className="hero-actions">
      <Link href="/book" className="btn btn-primary">Reservar ahora</Link>
      <Link href="/track/demo-trip" className="btn btn-ghost">Ver tracking demo →</Link>
    </div>
  </div>
</section>
      
      {/* BENEFICIOS */}
      <section className="section">
        <div className="wrap">
          <div className="features">
            <article className="feature-card">
              <div className="badge">🔒 Seguridad</div>
              <h3>Choferes verificados</h3>
              <p>Selección rigurosa, experiencia premium y protocolos de seguridad.</p>
            </article>

            <article className="feature-card">
              <div className="badge">📍 En vivo</div>
              <h3>Seguimiento en tiempo real</h3>
              <p>Comparte tu ruta y ETA con un clic. Transparencia total del viaje.</p>
            </article>

            <article className="feature-card">
              <div className="badge">👨‍💻 24/7</div>
              <h3>Soporte humano</h3>
              <p>Estamos contigo antes, durante y después del viaje.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">Servicios para cada ocasión</h2>

          <div className="services">
            <article className="service-card">
              <img
                src="/images/service-airport.jpg"
                alt="Traslados aeropuerto"
              />
              <div className="service-content">
                <h3>Airport Transfers</h3>
                <p>Llega puntual y con estilo. Monitoreo de vuelos incluido.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="/images/service-business.jpg"
                alt="Viajes ejecutivos"
              />
              <div className="service-content">
                <h3>Business Trips & Meetings</h3>
                <p>Soluciones para ejecutivos y empresas. Facturación centralizada.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="/images/service-city.jpg"
                alt="City to City"
              />
              <div className="service-content">
                <h3>City‑to‑City Travel</h3>
                <p>Traslados interurbanos con confort premium.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="/images/service-partners.jpg"
                alt="Clientes y socios"
              />
              <div className="service-content">
                <h3>Client & Partner Travel</h3>
                <p>Impresiona a tus socios con un servicio excepcional.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
{/* CITY‑TO‑CITY / COMPARATIVA */}
<section className="section c2c">
  <div className="wrap">
    <div className="c2c-head">
      <h2 className="section-title">City‑to‑City Premium Service, la mejor forma de viajar entre ciudades</h2>
      <p className="muted">
        Despídete del estrés de vuelos cortos, estaciones y alquileres. Con <strong>LuxLine Transport</strong>
        viajas puerta a puerta en confort premium, con chofer profesional y total flexibilidad.
      </p>
    </div>

    <div className="compare">
      {/* Avión */}
      <article className="compare-card">
        <div className="compare-top">
          <span className="compare-emoji">✈️</span>
          <h3>Avión</h3>
          <span className="badge time">Tiempo total: 5h+</span>
        </div>
        <ul className="compare-list">
          <li>Traslado al aeropuerto · 45 min</li>
          <li>Check‑in & seguridad · 2 h</li>
          <li>Vuelo · 1 h</li>
          <li>Equipaje & salida · 45 min</li>
          <li>Traslado al destino · 45 min</li>
        </ul>
      </article>

      {/* Tren */}
      <article className="compare-card">
        <div className="compare-top">
          <span className="compare-emoji">🚆</span>
          <h3>Tren</h3>
          <span className="badge time">Tiempo total: hasta 5h</span>
        </div>
        <ul className="compare-list">
          <li>Traslado a estación · 45 min</li>
          <li>Embarque · 30 min</li>
          <li>Viaje · 3 h</li>
          <li>Desembarque · 30 min</li>
          <li>Traslado al destino · 45 min</li>
        </ul>
      </article>

      {/* LuxLine */}
      <article className="compare-card compare-brand">
        <div className="compare-top">
          <span className="compare-emoji">🚘</span>
          <h3>LuxLine Transport</h3>
          <span className="badge time brand">Tiempo total: ~4h</span>
        </div>
        <ul className="compare-list">
          <li>Puerta a puerta, sin filas ni transbordos</li>
          <li>Eliges hora y cambios hasta 1 h antes</li>
          <li>Confort premium con chofer profesional</li>
          <li>Tarifas claras (peajes/impuestos incluidos)</li>
          <li>Wi‑Fi disponible en la mayoría de vehículos</li>
        </ul>

        <div className="compare-cta">
          <a href="/book" className="btn btn-primary">Reservar City‑to‑City</a>
          <a href="/dashboard" className="btn btn-ghost">Hablar con ventas</a>
        </div>
      </article>
    </div>
  </div>
</section>
      
      {/* CORPORATIVO */}
      <section className="section corporate">
        <div className="wrap corporate-inner">
          <div className="corporate-copy">
            <h2>Soluciones corporativas</h2>
            <p>
              Más que transporte. Una experiencia diseñada para ejecutivos que valoran
              la puntualidad, la seguridad y el lujo. Contratos, cuentas multiusuario y
              reportes mensuales.
            </p>
            <div className="hero-actions">
              <Link href="/dashboard" className="btn btn-primary">Hablar con ventas</Link>
              <Link href="/book" className="btn btn-ghost">Probar ahora</Link>
            </div>
          </div>
          <div className="corporate-media">
            <img
              src="/images/corporate.jpg"
              alt="Recepción corporativa"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="section">
        <div className="wrap">
          <div className="testimonial">
            <p className="quote">
              “LuxLane transformó la manera en que recibimos a nuestros clientes internacionales.
              Puntualidad, discreción y una experiencia cinco estrellas.”
            </p>
            <p className="author">— Carla M., Gerente de Operaciones</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta-final">
        <div className="wrap cta-inner">
          <div>
            <h2>Reserva tu próximo viaje en segundos</h2>
            <p>Confianza, estilo y soporte humano 24/7.</p>
          </div>
          <Link href="/book" className="btn btn-primary btn-lg">Reservar ahora</Link>
        </div>
      </section>
    </>
  );
}
