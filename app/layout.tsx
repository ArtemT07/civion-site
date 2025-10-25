<div className="container py-3 flex items-center gap-4">
  {/* ЛОГОТИП (лежит в /public) */}
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
    <a href="/materiales" className="text-sm text-brand-accent hover:text-black">Materiales</a>
    <a href="/sobre" className="text-sm text-brand-accent hover:text-black">Sobre</a>
    <a href="/contacto" className="text-sm text-brand-accent hover:text-black">Contacto</a>
  </nav>
</div>
