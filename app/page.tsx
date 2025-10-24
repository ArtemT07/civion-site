import Link from "next/link";

export default function Page() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Civilización en <span className="text-civionBlue">construcción</span>.
          </h1>
          <p className="mt-5 text-lg text-metal">
            Estructuras con propósito. Ingeniería viva. Construimos con precisión y fuerza.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/calculadora" className="button-primary">Calcular costo</Link>
            <Link href="/inversionistas" className="px-4 py-2 rounded-md border border-[#242931]">Inversionistas</Link>
          </div>
        </div>
        <div className="card">
          <h3 className="font-semibold text-xl mb-3">CIVION Grid</h3>
          <p className="text-sm text-metal">
            Geometría y orden. Este componente es un placeholder para futuras visualizaciones.
          </p>
          <div className="mt-5 h-48 rounded-lg bg-gradient-to-br from-[#0b1c33] to-[#0b2e5f]" />
        </div>
      </div>
    </section>
  );
}
