// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO con formulario de reserva inline (tipo Blacklane) */}
      <section className="hero-full">
        <img
          className="hero-media"
          src="/images/hero.jpg"
          alt="Flota ejecutiva en ciudad"
        />
        <div className="hero-overlay" />

        <div className="wrap hero-content">
          <div className="hero-top">
            <span className="kicker">Transporte premium con tracking</span>
            <h1 className="hero-title">Viaja seguro, a tiempo y con estilo.</h1>
            <p className="hero-sub">
              Servicio ejecutivo — choferes verificados, seguimiento en vivo y soporte 24/7.
            </p>
          </div>

          {/* Booking Inline */}
          <form className="booking" action="/book" method="GET">
            {/* Tabs servicio */}
            <div className="booking-tabs" role="tablist" aria-label="Tipo de servicio">
              <label className="tab">
                <input type="radio" name="service" value="oneway" defaultChecked />
                <span>Solo ida</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="hourly" />
                <span>Por horas</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="airport" />
                <span>Aeropuerto</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="city2city" />
                <span>City‑to‑City</span>
              </label>
            </div>

            {/* Campos */}
            <div className="booking-grid">
              <div className="field">
                <label className="label">Desde</label>
                <input
                  className="input"
                  name="from"
                  placeholder="Dirección o punto de recogida"
                  required
                />
              </div>
              <div className="field">
                <label className="label">Hasta</label>
                <input
                  className="input"
                  name="to"
                  placeholder="Destino"
                  required
                />
              </div>
              <div className="field">
                <label className="label">Fecha</label>
                <input className="input" type="date" name="date" required />
              </div>
              <div className="field">
                <label className="label">Hora</label>
                <input className="input" type="time" name="time" required />
              </div>
              <div className="field">
                <label className="label">Pasajeros</label>
                <select className="input" name="pax" defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>

              <div className="actions">
                <button className="btn btn-primary btn-lg" type="submit">
                  Reservar ahora
                </button>
              </div>
            </div>
          </form>

          {/* CTA secundaria (opcional) */}
          <div className="hero-cta-row">
            <Link href="/track/demo-trip" className="btn btn-ghost">
              Ver tracking demo →
            </Link>
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

      {/* OUR SERVICES / NUESTROS SERVICIOS */}
<section className="section">
  <div className="wrap">
    <h2 className="section-title">Nuestros Servicios <span style={{opacity:.6}}> / Our Services</span></h2>

    <div className="services">
      {/* City to City */}
      <article className="service-card">
        <img
          src="/images/service-city.jpg"
          alt="City to City — Viajes entre ciudades"
        />
        <div className="service-content">
          <h3>City‑to‑City Travel</h3>
          <p className="muted">
            ES: Traslados puerta a puerta entre ciudades, sin esperas ni conexiones. <br/>
            EN: Door‑to‑door rides between cities with no waiting times or connections.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/book" className="btn btn-primary">Reservar / Book</a>
            <a href="#c2c" className="btn btn-ghost">Ver comparativa</a>
          </div>
        </div>
      </article>

      {/* Airport Transfers */}
      <article className="service-card">
        <img
          src="/images/service-airport.jpg"
          alt="Traslados al Aeropuerto — Airport Transfers"
        />
        <div className="service-content">
          <h3>Airport Transfers</h3>
          <p className="muted">
            ES: Recogida puntual; tracking de vuelos incluido para adaptarnos a retrasos. <br/>
            EN: Punctual pick‑ups; flight tracking included to adapt to delays.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/book" className="btn btn-primary">Reservar / Book</a>
            <a href="/#faq" className="btn btn-ghost">Más info</a>
          </div>
        </div>
      </article>

      {/* Business Travel */}
      <article className="service-card">
        <img
          src="/images/service-business.jpg"
          alt="Viajes Ejecutivos — Business Travel"
        />
        <div className="service-content">
          <h3>Business Travel</h3>
          <p className="muted">
            ES: Traslados ejecutivos con discreción; reservas para directivos y equipos. <br/>
            EN: Executive transfers with discretion; bookings for executives and teams.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/dashboard" className="btn btn-ghost">Hablar con ventas / Sales</a>
          </div>
        </div>
      </article>

      {/* Hourly Chauffeur */}
      <article className="service-card">
        <img
          src="/images/service-partners.jpg"
          alt="Servicio por Horas — Hourly Chauffeur"
        />
        <div className="service-content">
          <h3>Hourly Chauffeur Service</h3>
          <p className="muted">
            ES: Reserva por horas con total flexibilidad de rutas y paradas. <br/>
            EN: Book by the hour with full flexibility of routes and stops.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/book" className="btn btn-primary">Reservar / Book</a>
          </div>
        </div>
      </article>

      {/* Event & Group Transport */}
      <article className="service-card">
        <img
          src="/images/service-events.jpg"
          alt="Eventos y Grupos — Event & Group Transport"
        />
        <div className="service-content">
          <h3>Event & Group Transport</h3>
          <p className="muted">
            ES: Coordinación para bodas, congresos y eventos corporativos. <br/>
            EN: Coordinated service for weddings, conferences and corporate events.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/book" className="btn btn-primary">Cotizar / Get a quote</a>
          </div>
        </div>
      </article>

      {/* Premium Experience */}
      <article className="service-card">
        <img
          src="/images/service-premium.jpg"
          alt="Experiencia Premium — Premium Experience"
        />
        <div className="service-content">
          <h3>Premium Experience</h3>
          <p className="muted">
            ES: Agua de cortesía, Wi‑Fi en la mayoría de vehículos y atención personalizada. <br/>
            EN: Complimentary water, Wi‑Fi in most vehicles and personalized attention.
          </p>
          <div style={{marginTop:12, display:"flex", gap:10}}>
            <a href="/book" className="btn btn-primary">Reservar / Book</a>
          </div>
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
            <img src="/images/corporate.jpg" alt="Recepción corporativa" />
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
