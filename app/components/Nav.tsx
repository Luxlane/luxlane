'use client';
import Link from 'next/link';

export default function Nav(){
  return (
    <nav style={{display:'flex', gap:16, padding:16, borderBottom:'1px solid #eee'}}>
      <Link href="/">LUX LANE</Link>
      <Link href="/book">Reservar</Link>
      <Link href="/track/demo-trip">Rastrear mi viaje</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
}
