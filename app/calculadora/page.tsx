'use client';

import { useState } from "react";
import Link from "next/link";

type Tier = 'basic' | 'plus' | 'premium';

const MATERIALS = {
  piso: [
    { tier:'basic', title:'Cerámica básica', priceDeltaPerM2: 0, desc:'Durable y económica' },
    { tier:'plus', title:'Porcelanato', priceDeltaPerM2: 12, desc:'Mayor resistencia' },
    { tier:'premium', title:'Piedra natural', priceDeltaPerM2: 35, desc:'Acabado de lujo' },
  ],
  pared: [
    { tier:'basic', title:'Pintura estándar', priceDeltaPerM2: 0, desc:'Acabado mate' },
    { tier:'plus', title:'Pintura lavable', priceDeltaPerM2: 6, desc:'Mejor mantenimiento' },
    { tier:'premium', title:'Microcemento', priceDeltaPerM2: 22, desc:'Look contemporáneo' },
  ]
} as const;

export default function Calculadora() {
  const [floors, setFloors] = useState(1);
  const [area, setArea] = useState(120);
  const [piso, setPiso] = useState<Tier>('basic');
  const [pared, setPared] = useState<Tier>('basic');

  const basePricePerM2 = floors === 1 ? 520 : 560; // USD orientativo
  const base = area * basePricePerM2;

  const pisoDelta = MATERIALS.piso.find(m => m.tier === piso)!.priceDeltaPerM2 * area;
  const paredDelta = MATERIALS.pared.find(m => m.tier === pared)!.priceDeltaPerM2 * area;

  const total = base + pisoDelta + paredDelta;

  return (
    <section className="space-y-8 py-8">
      <h1 className="text-3xl font-extrabold">Calculadora (estimativa)</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card md:col-span-2 space-y-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <label className="block">
              <span className="text-sm text-metal">Pisos</span>
              <select className="w-full mt-1 bg-[#0c0f13] border border-[#242931] p-2 rounded"
                value={floors} onChange={e => setFloors(parseInt(e.target.value))}>
                <option value={1}>1 piso</option>
                <option value={2}>2 pisos</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm text-metal">Área (m²)</span>
              <input className="w-full mt-1 bg-[#0c0f13] border border-[#242931] p-2 rounded"
                type="number" value={area} onChange={e => setArea(parseFloat(e.target.value || '0'))} />
            </label>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Piso</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {MATERIALS.piso.map(m => (
                <button key={m.tier} onClick={() => setPiso(m.tier)}
                  className={`card text-left ${piso===m.tier?'ring-2 ring-civionBlue':''}`}>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-metal">{m.desc}</div>
                  <div className="mt-1 text-sm">{m.priceDeltaPerM2 ? `+${m.priceDeltaPerM2}$/m²` : 'incluido'}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Pared</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {MATERIALS.pared.map(m => (
                <button key={m.tier} onClick={() => setPared(m.tier)}
                  className={`card text-left ${pared===m.tier?'ring-2 ring-civionBlue':''}`}>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-metal">{m.desc}</div>
                  <div className="mt-1 text-sm">{m.priceDeltaPerM2 ? `+${m.priceDeltaPerM2}$/m²` : 'incluido'}</div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-metal">
            Aviso: cálculo estimativo. No constituye oferta. Precios finales tras inspección y contrato.
          </p>
        </div>

        <aside className="card space-y-3">
          <div className="text-sm text-metal">Resumen</div>
          <div className="flex justify-between"><span>Base</span><span>${base.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Acabados piso</span><span>${pisoDelta.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Acabados pared</span><span>${paredDelta.toLocaleString()}</span></div>
          <hr className="border-[#242931]" />
          <div className="flex justify-between font-bold text-lg"><span>Total estimado</span><span>${total.toLocaleString()}</span></div>
          <Link href="/contacto" className="button-primary w-full text-center">Contactar a CIVION</Link>
        </aside>
      </div>
    </section>
  );
}
