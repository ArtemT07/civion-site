// app/layout.tsx
import "./globals.css";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "CIVION — Construimos la civilización",
  description: "Civilización en construcción. Ingeniería viva.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-brand-bg text-brand-text">
        <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 z-50">
          <div className="container py-3 flex items-center gap-4">
            {/* ЛОГОТИП (файл лежит в /public) */}
            <img 
  src="/civion-logo.svg" 
  alt="CIVION" 
  width="40" 
  height="40" 
  className="logo-animated"
/>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-wide text-brand-accent">CIVION</span>
              <span className="text-sm text-brand-mute">Construimos la civilización</span>
            </div>

            <nav className="ml-auto flex gap-6">
              <a href="/calculadora" className="text-sm text-brand-accent hover:text-black">Calculadora</a>
              <a href="/materiales"  className="text-sm text-brand-accent hover:text-black">Materiales</a>
              <a href="/sobre"       className="text-sm text-brand-accent hover:text-black">Sobre</a>
              <a href="/contacto"    className="text-sm text-brand-accent hover:text-black">Contacto</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-gray-100">
          <div className="container py-10 text-sm text-brand-mute flex flex-col md:flex-row gap-3 md:gap-6">
            <span>© {new Date().getFullYear()} CIVION</span>
            <a href="/legal" className="hover:text-brand-accent">Privacidad</a>
            <a href="/legal" className="hover:text-brand-accent">Términos</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
