return (
  <>
    <h1 className="h1" style={{marginTop:24}}>Reservar</h1>
    <p className="muted" style={{marginBottom:18}}>
      Completa los datos y confirma. Te daremos un número de referencia por pantalla y por correo.
    </p>

    {result?.ok && (
      <div className="badge success" style={{marginBottom:16}}>
        ✅ Reserva recibida — Número: <strong>{result.id}</strong>
      </div>
    )}
    {result && !result.ok && (
      <div className="badge error" style={{marginBottom:16}}>
        ⚠️ {result.error}
      </div>
    )}

    <form onSubmit={onSubmit} className="form">
      <div className="row">
        <div>
          <label className="label">Nombre completo</label>
          <input className="input" required value={form.name} onChange={e=>set("name", e.target.value)} />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" type="email" required value={form.email} onChange={e=>set("email", e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div>
          <label className="label">Teléfono</label>
          <input className="input" required value={form.phone} onChange={e=>set("phone", e.target.value)} />
        </div>
        <div>
          <label className="label">Fecha y hora</label>
          <input className="input" type="datetime-local" required value={form.date} onChange={e=>set("date", e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div>
          <label className="label">Recogida</label>
          <input className="input" required value={form.pickup} onChange={e=>set("pickup", e.target.value)} placeholder="Dirección o lugar" />
        </div>
        <div>
          <label className="label">Destino</label>
          <input className="input" required value={form.dropoff} onChange={e=>set("dropoff", e.target.value)} placeholder="Dirección o lugar" />
        </div>
      </div>

      <div>
        <label className="label">Notas (opcional)</label>
        <textarea className="textarea" rows={4} value={form.notes} onChange={e=>set("notes", e.target.value)} />
      </div>

      <div style={{display:"flex",gap:12}}>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Enviando…" : "Confirmar reserva"}
        </button>
      </div>
    </form>
  </>
);
