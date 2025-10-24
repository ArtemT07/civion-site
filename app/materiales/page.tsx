export default function Materiales() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-extrabold mb-4">Materiales (demo)</h1>
      <p className="text-metal">Catálogo demostrativo. En el panel Admin se podrá gestionar las opciones, fotos y precios.</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({length:6}).map((_,i)=>(
          <div key={i} className="card h-36"/>
        ))}
      </div>
    </section>
  )
}
