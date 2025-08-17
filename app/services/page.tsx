// app/services/page.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { getDict } from "@/i18n";

export default function ServicesPage() {
  const lang = (cookies().get("lang")?.value || "es") as "es" | "en";
  const t = getDict(lang);

  const cards = [
    {
      key: "city",
      img: "/images/service-city.jpg",
      actions: [
        { href: "/book", label: t.services.cards.city.book, primary: true },
        { href: "/#c2c", label: t.services.cards.city.compare, primary: false },
      ],
    },
    {
      key: "airport",
      img: "/images/service-airport.jpg",
      actions: [{ href: "/book", label: t.services.cards.airport.book, primary: true }],
    },
    {
      key: "hourly",
      img: "/images/service-partners.jpg",
      actions: [{ href: "/book", label: t.services.cards.hourly.book, primary: true }],
    },
    {
      key: "business",
      img: "/images/service-business.jpg",
      actions: [{ href: "/dashboard", label: t.services.cards.business.sales, primary: false }],
    },
    {
      key: "events",
      img: "/images/service-events.jpg",
      actions: [{ href: "/book", label: t.services.cards.events.quote, primary: true }],
    },
    {
      key: "premium",
      img: "/images/service-premium.jpg",
      actions: [{ href: "/book", label: t.services.cards.premium.book, primary: true }],
    },
  ] as const;

  return (
    <section className="section">
      <div className="wrap">
        <h1 className="hero-title" style={{ marginBottom: 8 }}>
          {t.services.title}
        </h1>
        <p className="hero-sub" style={{ marginBottom: 24 }}>
          {lang === "es"
            ? "Aeropuerto, City‑to‑City, por horas, eventos y soluciones corporativas."
            : "Airport, City‑to‑City, hourly, events and corporate solutions."}
        </p>

        <div className="services">
          {cards.map((c) => {
            const info = t.services.cards[c.key as keyof typeof t.services.cards];
            return (
              <article className="service-card" key={c.key}>
                <Image
                  src={c.img}
                  alt={info.title}
                  width={1200}
                  height={600}
                />
                <div className="service-content">
                  <h3>{info.title}</h3>
                  <p className="muted">{info.desc}</p>
                  <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {c.actions.map((a, i) =>
                      a.primary ? (
                        <Link key={i} href={a.href} className="btn btn-primary">{a.label}</Link>
                      ) : (
                        <Link key={i} href={a.href} className="btn btn-ghost">{a.label}</Link>
                      )
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
