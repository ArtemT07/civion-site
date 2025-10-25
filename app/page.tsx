// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <section className="container pt-16 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Construimos <span className="text-brand-primary">la civilización.</span>
          </h1>
          <p className="mt-4 text-lg text-brand-mute">
            Estructuras con propósito. Ingeniería viva. Precisión y fuerza en cada proyecto.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/calculadora" className="btn btn-primary">Calcular costo</a>
            <a href="/contacto" className="btn btn-ghost">Hablar con CIVION</a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-brand-mute">
            <div className="mt-8 flex items-center gap-3 text-sm text-brand-mute">
  <img src="/civion-logo.svg" alt="CIVION" width={20} height={20} />
  <span>Civilización en construcción</span>
</div>
        </div>

        <div className="card p-6">
          {/* визуальный плейсхолдер — позже заменим на проект/рендер */}
          <div className="h-64 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100" />
        </div>
      </div>
    </section>
  );
}
