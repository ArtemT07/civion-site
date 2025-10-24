export default function Contacto() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-extrabold mb-4">Contacto</h1>
      <form className="space-y-3">
        <input className="w-full p-2 rounded bg-[#0c0f13] border border-[#242931]" placeholder="Nombre" />
        <input className="w-full p-2 rounded bg-[#0c0f13] border border-[#242931]" placeholder="Email" />
        <input className="w-full p-2 rounded bg-[#0c0f13] border border-[#242931]" placeholder="Teléfono" />
        <textarea className="w-full p-2 rounded bg-[#0c0f13] border border-[#242931]" rows={5} placeholder="Mensaje" />
        <button className="button-primary">Enviar</button>
      </form>
      <div className="mt-4 text-sm text-metal">Al enviar, acepta la Política de Privacidad.</div>
    </section>
  )
}
