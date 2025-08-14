export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <div className="brand">
              <a href="/">
                <span className="logo" />
                LUX LANE
              </a>
            </div>
            <nav className="menu">
              <a href="/book">Reservar</a>
              <a href="/track/demo-trip">Rastrear mi viaje</a>
              <a href="/dashboard">Dashboard</a>
            </nav>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
