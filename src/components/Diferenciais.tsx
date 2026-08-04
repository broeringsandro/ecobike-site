"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const items = [
  {
    title: "Garantia Oficial",
    body: "1 ano de garantia em todos os modelos com suporte completo.",
  },
  {
    title: "Assistência Técnica",
    body: "Técnicos próprios para manutenção e reparos. Você nunca fica na mão.",
  },
  {
    title: "Entrega em Casa",
    body: "Receba sua scooter direto no endereço preferido com segurança.",
  },
  {
    title: "Peças Originais",
    body: "Estoque próprio para reposição rápida com qualidade garantida.",
  },
  {
    title: "Parcele em até 24×",
    body: "Condições flexíveis para caber no seu orçamento sem burocracia.",
  },
  {
    title: "Test Ride Gratuito",
    body: "Experimente antes de comprar. Agendamento nas nossas duas lojas.",
  },
];

const VISIBLE = 3;

export default function Diferenciais() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((i) => Math.max(0, i - 1));
  const next = () => setStart((i) => Math.min(items.length - VISIBLE, i + 1));

  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <Image
        src="/diferenciais-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={85}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.15) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 md:px-14 lg:px-20 pt-20 pb-14" style={{ minHeight: "100vh" }}>

        {/* Top-left headline */}
        <Reveal direction="left">
          <p className="text-[11px] font-semibold text-white/40 tracking-[3.5px] uppercase mb-5 font-body">
            Nossos diferenciais
          </p>
          <h2
            className="font-heading font-black text-white leading-[0.92] tracking-[-0.05em] max-w-lg"
            style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
          >
            Muito mais do<br />que vender<br />
            <span style={{ color: "#F9E924" }}>scooters.</span>
          </h2>
        </Reveal>

        {/* Bottom row: cards + arrows */}
        <div>
          {/* Cards */}
          <div className="overflow-hidden mb-6">
            <div
              className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(calc(-${start} * (100% / ${VISIBLE} + 16px / ${VISIBLE})))` }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-white/25 transition-all duration-300"
                  style={{
                    width: `calc(${100 / VISIBLE}% - ${(VISIBLE - 1) * 16 / VISIBLE}px)`,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="text-[10px] text-white/30 font-body tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[16px] font-bold text-white tracking-[-0.02em] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-[1.65] font-body">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + counter */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                disabled={start === 0}
                aria-label="Anterior"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                disabled={start >= items.length - VISIBLE}
                aria-label="Próximo"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <span className="text-[28px] font-black text-white/20 font-heading tracking-[-0.05em] tabular-nums">
              {String(start + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
