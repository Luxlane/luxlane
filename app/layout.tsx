import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "LUX LANE — Transporte premium con tracking",
  description: "Choferes verificados, seguimiento en vivo y soporte 24/7.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="wrap">
            <div className="brand">
              <span className="logo" />
              LUX LANE
            </div>
            <nav className="nav">
              <Link href="/book">Reservar</Link>
              <Link href="/track/demo-trip">Rastrear mi viaje</Link>
              <Link href="/dashboard">Dashboard</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="wrap">
            <div style={{marginRight:"auto"}}>© {new Date().getFullYear()} LUX LANE</div>
            <Link href="/book">Reservar</Link>
            <Link href="/track/demo-trip" style={{marginLeft:12}}>Tracking</Link>
            <Link href="/dashboard" style={{marginLeft:12}}>Dashboard</Link>
            <a href="mailto:contacto@luxlane.com" style={{marginLeft:12}}>Contacto</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
