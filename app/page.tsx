import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 980, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Bienvenido a LUX LANE</h1>
      <p style={{ marginBottom: 24 }}>
        Demo del sitio actualizado. Usa el menú o estos accesos rápidos:
      </p>
      <ul style={{ lineHeight: 1.9 }}>
        <li>
          <Link href="/book">Reservar</Link>
        </li>
        <li>
          <Link href="/track/demo-trip">Rastrear mi viaje (demo)</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </main>
  );
}
