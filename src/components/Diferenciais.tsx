"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { ShieldCheck, Wrench, Truck, PackageCheck, HandCoins, KeyRound } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Garantia oficial", body: "1 ano de garantia em todos os modelos, com suporte completo do início ao fim." },
  { icon: Wrench, title: "Assistência técnica própria", body: "Técnicos da casa para manutenção e reparos. Nada de mandar pra terceiros." },
  { icon: Truck, title: "Entrega em casa", body: "Receba sua scooter no endereço que preferir, com segurança e pronta pra rodar." },
  { icon: PackageCheck, title: "Peças originais", body: "Estoque próprio para reposição rápida, com qualidade garantida." },
  { icon: HandCoins, title: "Parcele em até 24×", body: "Condições flexíveis pra caber no seu orçamento, sem burocracia." },
  { icon: KeyRound, title: "Test ride gratuito", body: "Experimente antes de comprar. Agende em qualquer uma das duas lojas." },
];

function onMove(e: MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Diferenciais() {
  const root = useRef<HTMLElement>(null);

  return (
    <section ref={root} id="diferenciais" className="relative bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky left */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
              <span className="text-yellow">(03)</span> Nossos diferenciais
            </p>
            <h2
              data-split
              className="font-heading font-extrabold leading-[0.92] tracking-[-0.05em] text-bone"
              style={{ fontSize: "clamp(44px, 5.4vw, 88px)" }}
            >
              Muito mais do que vender <span className="text-yellow">scooters.</span>
            </h2>

            <div data-reveal="clip" className="relative mt-10 hidden aspect-[4/5] max-h-[460px] w-full overflow-hidden rounded-[28px] lg:block">
              <div data-parallax="-18" className="absolute -inset-y-[12%] inset-x-0">
                <Image src="/diferenciais-bg.jpg" alt="Detalhe de scooter elétrica em estúdio escuro" fill sizes="40vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-body text-[14px] leading-relaxed text-bone/75">
                Da escolha do modelo à manutenção, você é atendido pelo mesmo time.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:pb-12 lg:col-span-7">
          {items.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-reveal="up"
              data-delay={String((i % 2) * 0.1)}
              onMouseMove={onMove}
              className={`spotlight group flex min-h-[260px] flex-col justify-between gap-10 rounded-[28px] border border-white/[0.07] bg-surface p-7 transition-colors duration-500 hover:border-yellow/30 md:p-8 ${
                i % 2 === 1 ? "sm:relative sm:top-12" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow text-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-12 group-hover:scale-110">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <span className="font-heading text-[14px] font-bold text-bone/20 tabular-nums">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-heading text-[22px] font-bold leading-tight tracking-[-0.03em] text-bone">{title}</h3>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-bone/50">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
