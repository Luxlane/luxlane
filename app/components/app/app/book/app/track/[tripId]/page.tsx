'use client';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const MapboxGL = dynamic(() => import('mapbox-gl'), { ssr: false });

export default function Track({ params }: { params: { tripId: string }}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    // @ts-ignore
    const mapboxgl = require('mapbox-gl');
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if(!token){
      if(containerRef.current){
        containerRef.current.innerHTML = "<p>Agrega NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN en Vercel → Settings → Environment Variables.</p>";
      }
      return;
    }
    // @ts-ignore
    mapboxgl.accessToken = token;
    // @ts-ignore
    const map = new mapboxgl.Map({
      container: containerRef.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-70.6506, -33.4372],
      zoom: 12
    });
    mapRef.current = map;
    // @ts-ignore
    const marker = new mapboxgl.Marker().setLngLat([-70.6506, -33.4372]).addTo(map);
    markerRef.current = marker;

    // Simulación: mueve el marcador un poco cada 2s
    const interval = setInterval(() => {
      const m = markerRef.current;
      if(!m) return;
      const { lng, lat } = m.getLngLat();
      const next = [lng + 0.001, lat + 0.0005];
      m.setLngLat(next);
      mapRef.current?.panTo(next, { duration: 500 });
    }, 2000);

    return () => { clearInterval(interval); map.remove(); };
  }, [params.tripId]);

  return (
    <section>
      <h2 style={{fontSize:28, marginBottom:12}}>Rastrear mi viaje: {params.tripId}</h2>
      <div ref={containerRef} style={{height:'60vh', border:'1px solid #ddd', borderRadius:8}} />
      <p style={{marginTop:12}}>Ahora estás viendo una simulación. Luego conectaremos el tiempo real.</p>
    </section>
  );
}
