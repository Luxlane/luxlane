// app/track/[tripId]/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

type TripStatus = "scheduled" | "en_route" | "arrived" | "completed";

export default function TrackTripPage({ params }: { params: { tripId: string } }) {
  const tripId = params.tripId;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [status, setStatus] = useState<TripStatus>("scheduled");
  const [coords, setCoords] = useState<[number, number]>([-73.985664, 40.748514]); // NYC
  const [eta, setEta] = useState<string>("—");

  useEffect(() => {
    if (!mapboxgl.accessToken) return;
    if (!mapRef.current) return;

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: coords,
        zoom: 12,
      });
      marker.current = new mapboxgl.Marker().setLngLat(coords).addTo(map.current);
    }
  }, []);

  useEffect(() => {
    if (marker.current) marker.current.setLngLat(coords);
    if (map.current) map.current.setCenter(coords);
  }, [coords]);

  useEffect(() => {
    if (status !== "en_route") return;
    const id = setInterval(() => {
      setCoords(([lng, lat]) => [lng + 0.002, lat + 0.002]);
      setEta(new Date(Date.now() + 15 * 60 * 1000).toLocaleTimeString());
    }, 3000);
    return () => clearInterval(id);
  }, [status]);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/track/${tripId}`;
  }, [tripId]);

  return (
    <div className="wrap" style={{ paddingTop: 24 }}>
      <h1 className="hero-title" style={{ marginBottom: 8 }}>Tracking #{tripId}</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Estado: <strong>{status}</strong> · ETA: <strong>{eta}</strong> ·{" "}
        Link: <a href={shareUrl} className="footer-link">{shareUrl}</a>
      </p>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "2fr 1fr" }}>
        <div style={{ height: 420, borderRadius: 16, overflow: "hidden", border: "1px solid var(--line)" }}>
          <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="card" style={{ height: 420 }}>
          <h3 style={{ marginTop: 0 }}>Simular</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button className="btn btn-ghost" onClick={() => setStatus("scheduled")}>scheduled</button>
            <button className="btn btn-primary" onClick={() => setStatus("en_route")}>en_route</button>
            <button className="btn btn-ghost" onClick={() => setStatus("arrived")}>arrived</button>
            <button className="btn btn-ghost" onClick={() => setStatus("completed")}>completed</button>
          </div>

          <div style={{ marginTop: 16 }}>
            <p className="muted">Mover:</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button className="btn btn-ghost" onClick={() => setCoords(([lng, lat]) => [lng + 0.01, lat])}>→</button>
              <button className="btn btn-ghost" onClick={() => setCoords(([lng, lat]) => [lng - 0.01, lat])}>←</button>
              <button className="btn btn-ghost" onClick={() => setCoords(([lng, lat]) => [lng, lat + 0.01])}>↑</button>
              <button className="btn btn-ghost" onClick={() => setCoords(([lng, lat]) => [lng, lat - 0.01])}>↓</button>
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <p className="muted">ETA:</p>
            <button className="btn btn-ghost" onClick={() => setEta(new Date(Date.now() + 10*60*1000).toLocaleTimeString())}>+10 min</button>
            <button className="btn btn-ghost" onClick={() => setEta(new Date(Date.now() + 25*60*1000).toLocaleTimeString())}>+25 min</button>
            <button className="btn btn-ghost" onClick={() => setEta("—")}>limpiar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
