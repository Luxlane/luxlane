// app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'LUX LANE – Transporte premium con tracking',
  description: 'Choferes verificados, seguimiento en vivo y soporte 24/7.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="topbar">
          <div className="wrap">
            {/* Logo con enlace al home */}
            <div className="brand">
              <Link href="/" aria-label="LUX LANE Home">
                {/* Logo claro */}
                <img
                  src="/logo/Luxlane-light.png.jpg"
                  alt="LUX LANE Logo claro"
                  className="logo-light"
                  width={180}
                  height={32}
                />
                {/* Logo oscuro */}
                <img
                  src="/logo/luxlane-dark.png.jpg"
                  alt="LUX LANE Logo oscuro"
                  className="logo-dark"
                  width={180}
                  height={32}
                />
              </Link>
            </div>

            {/* Navegación */}
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
            <small>© {new Date().getFullYear()} LUX LANE</small>
            <a href="mailto:contacto@luxlane.com">Contacto</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
