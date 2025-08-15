// app/layout.tsx
import './globals.css'
import type { ReactNode } from 'react'
import Image from 'next/image'
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
            <div className="brand">
              <Link href="/" className="brandLink" aria-label="LUX LANE Home">
                {/* Logo versión clara */}
                <Image
                  src="/logo/luxlane-light.png"
                  alt="LUX LANE"
                  width={220}
                  height={60}
                  priority
                  className="logo-light"
                />
                {/* Logo versión oscura */}
                <Image
                  src="/logo/luxlane-dark.png"
                  alt="LUX LANE"
                  width={220}
                  height={60}
                  priority
                  className="logo-dark"
                />
              </Link>
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
            <small>© {new Date().getFullYear()} LUX LANE</small>
            <a href="mailto:contacto@luxlane.com">Contacto</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
