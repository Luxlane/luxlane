import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'LUX LANE — Transporte premium con tracking',
  description: 'Viajes con chofer verificado, seguimiento en vivo y soporte 24/7.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="wrap">
            <div className="brand">LUX LANE</div>
            <nav className="nav">
              <Link href="/book">Reservar</Link>
              <Link href="/track/demo-trip">Rastrear mi viaje</Link>
              <Link href="/dashboard">Dashboard</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
