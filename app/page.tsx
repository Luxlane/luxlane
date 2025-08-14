import Link from "next/link";

export default function Home(){
  return (
    <>
      <section className="hero">
        <span className="badge">
          <span className="logo" /> Transporte premium con tracking en tiempo real
        </span>
        <h1 className="h1">LUX LANE</h1>
        <p className="muted" style={{marginBottom:18}}>
          Viaja seguro, a tiempo y con estilo. Reserva en minutos, sigue tu chofer en el mapa y recibe confirmación.
        </p>
        <div style={{display:"flex",gap:12}}>
          <Link className="btn" href="/book">Reservar →</Link>
          <Link className="btn" href="/track/demo-trip">Ver tracking demo →</Link>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Choferes verificados</h3>
            <p className="muted">Conductores seleccionados, experiencia premium y protocolos de seguridad.</p>
          </div>
          <div className="card">
            <h3>Seguimiento en vivo</h3>
            <p className="muted">Comparte tu ruta y hora estimada de llegada con un clic.</p>
          </div>
          <div className="card">
            <h3>Soporte humano 24/7</h3>
            <p className="muted">Estamos contigo antes, durante y después del viaje.</p>
          </div>
        </div>
      </section>
    </>
  );
}
