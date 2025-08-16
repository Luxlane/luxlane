// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO con imagen full y overlay */}
      <section className="hero-full">
        <img
          className="hero-media"
          src="public/images/hero.jpg (1920×1080 o 2400×1350, ≤ 400 KB)"
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

      {/* SERVICIOS DESTACADOS (tipo Blacklane) */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">Servicios para cada ocasión</h2>

          <div className="services">
            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop"
                alt="Traslados aeropuerto"
              />
              <div className="service-content">
                <h3>Airport Transfers</h3>
                <p>Llega puntual y con estilo. Monitoreo de vuelos incluido.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
                alt="Viajes ejecutivos"
              />
              <div className="service-content">
                <h3>Business Trips & Meetings</h3>
                <p>Soluciones para ejecutivos y empresas. Facturación centralizada.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                alt="City to City"
              />
              <div className="service-content">
                <h3>City‑to‑City Travel</h3>
                <p>Traslados interurbanos con confort premium.</p>
              </div>
            </article>

            <article className="service-card">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
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
