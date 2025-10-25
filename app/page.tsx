// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto py-16 px-6 text-center">
      <div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Construimos <span className="text-blue-600">la civilización.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estructuras con propósito. Ingeniería viva. Precisión y fuerza en cada proyecto.
        </p>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/calculadora"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Calcular costo
        </a>
        <a
          href="/contacto"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          Hablar con CIVION
        </a>
      </div>

      {/* Нижний блок с логотипом и слоганом */}
      <div className="mt-16 flex flex-col items-center gap-3 text-gray-500">
        <img src="/civion-logo.svg" alt="CIVION" width={40} height={40} />
        <span className="text-sm">Civilización en construcción</span>
      </div>
    </section>
  );
}
