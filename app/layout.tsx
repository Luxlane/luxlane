// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'LUX LANE — Transporte premium con tracking',
  description: 'Choferes verificados, seguimiento en vivo y soporte 24/7.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Topbar */}
        <header className="topbar">
          <div className="wrap">
            <div className="brand">
              {/* Logo claro (para modo claro) */}
              <img
                src="/logo/Luxlane-light.png.jpg"
                alt="LUX LANE"
                className="logo-light"
                height={28}
              />
              {/* Logo oscuro (para modo oscuro) */}
              <img
                src="/logo/luxlane-dark.png.jpg"
                alt="LUX LANE"
                className="logo-dark"
                height={28}
              />
            </div>

            <nav className="nav">
              <Link href="/book">Reservar</Link>
              <Link href="/track/demo-trip">Rastrear mi viaje</Link>
              <Link href="/dashboard">Dashboard</Link>
            </nav>
          </div>
        </header>

        {/* Contenido */}
        <main className="container">{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="wrap">© {new Date().getFullYear()} LUX LANE</div>
        </footer>
      </body>
    </html>
  );
}
