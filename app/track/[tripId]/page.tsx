'use client';

import { useEffect, useRef } from 'react';

type Props = { params: { tripId: string } };

export default function Track({ params }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;

    (async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

      if (!containerRef.current) return;

      map = new mapboxgl.Map({
        container: containerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-70.6506, -33.4372], // Santiago, ejemplo
        zoom: 12,
      });
    })();

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <section>
      <h2 style={{ fontSize: 28, marginBottom: 12 }}>
        Seguimiento de viaje: {params.tripId}
      </h2>
      <div
        ref={containerRef}
        style={{
          height: 400,
          width: '100%',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      />
    </section>
  );
}
