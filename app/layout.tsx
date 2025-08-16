// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "LUX LANE — Premium Chauffeur Service",
  description: "Transporte corporativo y de lujo, con tracking en tiempo real y soporte 24/7.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Topbar */}
        <header className="topbar">
          <div className="wrap topbar-inner">
            <Link className="brand" href="/" aria-label="Ir al inicio">
              {/* Muestra el logo que subiste a /public/logo */}
              {/* Claro sobre fondo oscuro */}
              <Image
                src="/logo/Luxlane-light.png.jpg"
                alt="LuxLane"
                width={180}
                height={36}
                className="logo light"
                priority
              />
              {/* Oscuro para futuros fondos claros */}
              <Image
                src="/logo/luxlane-dark.png.jpg"
                alt="LuxLane"
                width={180}
                height={36}
                className="logo dark"
                priority
              />
            </Link>

            <nav className="nav">
              <Link href="/book">Servicios</Link>
              <Link href="/dashboard">Empresas</Link>
              <Link href="/track/demo-trip">Tracking</Link>
              <Link href="/book" className="btn btn-primary">Reservar ahora</Link>
            </nav>
          </div>
        </header>

        {/* Contenido */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="wrap footer-inner">
            <div className="footer-left">
              <small>© {new Date().getFullYear()} LUX LANE</small>
            </div>
            <div className="footer-right">
              <a href="mailto:contacto@luxlane.com" className="footer-link">Contacto</a>
              <a href="#" className="footer-link">Términos</a>
              <a href="#" className="footer-link">Privacidad</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
