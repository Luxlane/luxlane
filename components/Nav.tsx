import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{display:"flex", alignItems:"center", gap:16, padding:16, borderBottom:"1px solid #eee"}}>
      <Link href="/" style={{display:"inline-flex", alignItems:"center", gap:8}}>
        <Image src="/logo.svg" alt="LUX LANE" width={28} height={28} />
        <span style={{fontWeight:600, letterSpacing:0.5}}>LUX LANE</span>
      </Link>

      <div style={{marginLeft:"auto", display:"flex", gap:16}}>
        <Link href="/book">Reservar</Link>
        <Link href="/track/[tripId]" as="/track/demo-trip">Rastrear mi viaje</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
