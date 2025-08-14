'use client';
import { useState } from 'react';

export default function Book(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  function submit(e: React.FormEvent){
    e.preventDefault();
    alert('Reserva enviada (demo). Luego conectamos el backend.');
  }

  return (
    <section>
      <h2 style={{fontSize:28, marginBottom:12}}>Reservar</h2>
      <form onSubmit={submit} style={{display:'grid', gap:12, maxWidth:520}}>
        <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Recojo (dirección)" value={pickup} onChange={e=>setPickup(e.target.value)} />
        <input placeholder="Destino (dirección)" value={dropoff} onChange={e=>setDropoff(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
