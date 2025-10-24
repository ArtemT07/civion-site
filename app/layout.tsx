import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CIVION — Civilización en construcción",
  description: "Constructora y desarrolladora. Fuerza · Precisión · Propósito.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-[#242931]">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-black tracking-widest text-xl">CIVION</Link>
            <nav className="flex gap-5 text-sm">
              <Link href="/calculadora">Calculadora</Link>
              <Link href="/materiales">Materiales</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="max-w-6xl mx-auto p-6 text-sm text-metal">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#242931] pt-4">
            <span>© {new Date().getFullYear()} CIVION</span>
            <div className="flex gap-4">
              <Link href="/legal">Privacidad</Link>
              <Link href="/legal#tos">Términos</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
