import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <p className="muted">Demo del sitio</p>
      <h1 className="h1">Bienvenido a <strong>LUX LANE</strong></h1>
      <p className="muted" style={{marginBottom: 18}}>
        Transporte premium con tracking en tiempo real. Comienza aquí:
      </p>

      <div className="card" style={{display:"grid", gap:16}}>
        <div>
          <h2 className="h2">Reservar</h2>
          <p className="muted" style={{margin:"6px 0 10px"}}>Agenda tu viaje en minutos.</p>
          <Link href="/book">Ir a Reservar →</Link>
        </div>

        <div>
          <h2 className="h2">Rastrear mi viaje (demo)</h2>
          <p className="muted" style={{margin:"6px 0 10px"}}>Visualiza el estado de un viaje de ejemplo.</p>
          <Link href="/track/demo-trip">Abrir mapa de tracking →</Link>
        </div>

        <div>
          <h2 className="h2">Dashboard</h2>
          <p className="muted" style={{margin:"6px 0 10px"}}>Panel para ver reservas y conductores.</p>
          <Link href="/dashboard">Ir al Dashboard →</Link>
        </div>
      </div>
    </main>
  );
}
