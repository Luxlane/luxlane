// app/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Link from "next/link";
import { cookies } from "next/headers";
import { getDict } from "../i18n";

export default async function Home() {
  const lang = (cookies().get("lang")?.value || "es") as "es" | "en";
  const t = getDict(lang);

  return (
    <>
      {/* === HERO (REEMPLAZAR TODO ESTE BLOQUE) === */}
<section className="hero-full">
  <img className="hero-media" src="/images/hero.jpg" alt="Fleet" />
  <div className="hero-overlay" />

  <div className="wrap hero-content">
    <div className="hero-top">
      <span className="kicker">{t.hero.kicker}</span>
      <h1 className="hero-title">{t.hero.title}</h1>
      <p className="hero-sub">{t.hero.sub}</p>
    </div>

    {/* Booking Inline */}
    <form className="booking" action="/book" method="GET">
      {/* Tabs servicio */}
      <div className="booking-tabs" role="tablist" aria-label="Service type">
        <label className="tab">
          <input type="radio" name="service" value="oneway" defaultChecked />
          <span>{t.bookingTabs.oneway}</span>
        </label>
        <label className="tab">
          <input type="radio" name="service" value="hourly" />
          <span>{t.bookingTabs.hourly}</span>
        </label>
        <label className="tab">
          <input type="radio" name="service" value="airport" />
          <span>{t.bookingTabs.airport}</span>
        </label>
        <label className="tab">
          <input type="radio" name="service" value="city2city" />
          <span>{t.bookingTabs.city2city}</span>
        </label>
      </div>

      {/* Campos */}
      <div className="booking-grid">
        <div className="field">
          <label className="label">{t.bookingFields.from}</label>
          <input
            className="input"
            name="from"
            placeholder="Address / pickup"
            required
          />
        </div>

        <div className="field">
          <label className="label">{t.bookingFields.to}</label>
          <input
            className="input"
            name="to"
            placeholder="Destination"
            required
          />
        </div>

        <div className="field">
          <label className="label">{t.bookingFields.date}</label>
          <input className="input" type="date" name="date" required />
        </div>

        <div className="field">
          <label className="label">{t.bookingFields.time}</label>
          <input className="input" type="time" name="time" required />
        </div>

        <div className="field">
          <label className="label">{t.bookingFields.pax}</label>
          <select className="input" name="pax" defaultValue="1">
            <option value="1">1</option><option value="2">2</option>
            <option value="3">3</option><option value="4">4</option>
            <option value="5">5</option><option value="6">6</option>
          </select>
        </div>

        <div className="actions">
          <button className="btn btn-primary btn-lg" type="submit">
            {t.bookingFields.submit}
          </button>
        </div>
      </div>
    </form>

    <div className="hero-cta-row">
      <Link href="/track/demo-trip" className="btn btn-ghost">
        {t.hero.ctaSecondary}
      </Link>
    </div>
  </div>
</section>
{/* === /HERO === */}
          {/* Booking Inline (lecturas desde el diccionario) */}
          <form className="booking" action="/book" method="GET">
            <div className="booking-tabs" role="tablist" aria-label="Service type">
              <label className="tab">
                <input type="radio" name="service" value="oneway" defaultChecked />
                <span>{t.bookingTabs.oneway}</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="hourly" />
                <span>{t.bookingTabs.hourly}</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="airport" />
                <span>{t.bookingTabs.airport}</span>
              </label>
              <label className="tab">
                <input type="radio" name="service" value="city2city" />
                <span>{t.bookingTabs.city2city}</span>
              </label>
            </div>

            <div className="booking-grid">
              <div className="field">
                <label className="label">{t.bookingFields.from}</label>
                <input className="input" name="from" placeholder="Address / pickup" required />
              </div>
              <div className="field">
                <label className="label">{t.bookingFields.to}</label>
                <input className="input" name="to" placeholder="Destination" required />
              </div>
              <div className="field">
                <label className="label">{t.bookingFields.date}</label>
                <input className="input" type="date" name="date" required />
              </div>
              <div className="field">
                <label className="label">{t.bookingFields.time}</label>
                <input className="input" type="time" name="time" required />
              </div>
              <div className="field">
                <label className="label">{t.bookingFields.pax}</label>
                <select className="input" name="pax" defaultValue="1">
                  <option value="1">1</option><option value="2">2</option>
                  <option value="3">3</option><option value="4">4</option>
                  <option value="5">5</option><option value="6">6</option>
                </select>
              </div>

              <div className="actions">
                <button className="btn btn-primary btn-lg" type="submit">
                  {t.bookingFields.submit}
                </button>
              </div>
            </div>
          </form>

          <div className="hero-cta-row" style={{ marginTop: 10 }}>
            <Link href="/track/demo-trip" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">{t.benefits.title}</h2>
          <div className="features">
            <article className="feature-card">
              <div className="badge">🔒</div>
              <h3>{t.benefits.security.title}</h3>
              <p>{t.benefits.security.desc}</p>
            </article>
            <article className="feature-card">
              <div className="badge">📍</div>
              <h3>{t.benefits.live.title}</h3>
              <p>{t.benefits.live.desc}</p>
            </article>
            <article className="feature-card">
              <div className="badge">👨‍💻</div>
              <h3>{t.benefits.support.title}</h3>
              <p>{t.benefits.support.desc}</p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR SERVICES / NUESTROS SERVICIOS */}
      <section className="section">
        <div className="wrap">
          <h2 className="section-title">{t.services.title}</h2>

          <div className="services">
            <article className="service-card">
              <img src="/images/service-city.jpg" alt="City to City" />
              <div className="service-content">
                <h3>{t.services.cards.city.title}</h3>
                <p className="muted">{t.services.cards.city.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/book" className="btn btn-primary">{t.services.cards.city.book}</a>
                  <a href="#c2c" className="btn btn-ghost">{t.services.cards.city.compare}</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <img src="/images/service-airport.jpg" alt="Airport" />
              <div className="service-content">
                <h3>{t.services.cards.airport.title}</h3>
                <p className="muted">{t.services.cards.airport.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/book" className="btn btn-primary">{t.services.cards.airport.book}</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <img src="/images/service-business.jpg" alt="Business" />
              <div className="service-content">
                <h3>{t.services.cards.business.title}</h3>
                <p className="muted">{t.services.cards.business.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/dashboard" className="btn btn-ghost">{t.services.cards.business.sales}</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <img src="/images/service-partners.jpg" alt="Hourly" />
              <div className="service-content">
                <h3>{t.services.cards.hourly.title}</h3>
                <p className="muted">{t.services.cards.hourly.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/book" className="btn btn-primary">{t.services.cards.hourly.book}</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <img src="/images/service-events.jpg" alt="Events" />
              <div className="service-content">
                <h3>{t.services.cards.events.title}</h3>
                <p className="muted">{t.services.cards.events.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/book" className="btn btn-primary">{t.services.cards.events.quote}</a>
                </div>
              </div>
            </article>

            <article className="service-card">
              <img src="/images/service-premium.jpg" alt="Premium" />
              <div className="service-content">
                <h3>{t.services.cards.premium.title}</h3>
                <p className="muted">{t.services.cards.premium.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <a href="/book" className="btn btn-primary">{t.services.cards.premium.book}</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
