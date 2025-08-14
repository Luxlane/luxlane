"use client";
import Link from "next/link";

export default function Nav(){
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand">LUX LANE</Link>
        <nav className="nav">
          <Link href="/book">Reservar</Link>
          <Link href="/track/demo-trip">Rastrear mi viaje</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
