"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { Plus } from "lucide-react";
import { WA_DUVIDA } from "@/lib/constants";
import { WhatsappIcon } from "./icons";
import Button from "./Button";

const items = [
  { q: "Precisa de CNH para dirigir as scooters?", a: "Não! Nossos modelos são 100% autopropelidos e não exigem CNH ou habilitação de nenhum tipo. Qualquer pessoa pode utilizar." },
  { q: "Precisa emplacar o veículo?", a: "Não é necessário emplacamento. As scooters autopropelidas são isentas de registro e emplacamento." },
  { q: "Quanto tempo dura a bateria?", a: "Dependendo do modelo, a autonomia varia entre 30 km e 60 km por carga. O tempo de recarga é de 4 a 6 horas em qualquer tomada." },
  { q: "Posso carregar em casa na tomada comum?", a: "Sim! Basta conectar em qualquer tomada 110V ou 220V. A bateria é removível, então você pode carregar em casa, no trabalho ou onde preferir." },
  { q: "Tem garantia? Quanto tempo?", a: "Todos os modelos têm garantia oficial de 1 ano. Você também conta com nossa assistência técnica própria para qualquer problema." },
  { q: "Vocês fazem manutenção e reparos?", a: "Sim! Temos assistência técnica própria com técnicos especializados. Não precisamos enviar para terceiros, você resolve tudo na nossa loja." },
  { q: "Posso testar antes de comprar?", a: "Com certeza! Oferecemos test ride gratuito nas nossas duas lojas. Agende pelo WhatsApp e venha experimentar." },
  { q: "Vocês entregam em casa?", a: "Sim! Entregamos na sua casa com segurança. Você também pode retirar na loja mais próxima." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const first = useRef(true);

  // Content height changed: recalculate scroll-based animations below
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <section id="faq" className="relative bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
              <span className="text-yellow">(08)</span> Dúvidas frequentes
            </p>
            <h2
              data-split
              className="font-heading font-extrabold leading-[0.92] tracking-[-0.05em] text-bone"
              style={{ fontSize: "clamp(44px, 5.4vw, 88px)" }}
            >
              Perguntas frequentes<span className="text-yellow">.</span>
            </h2>

            <div data-reveal="up" className="mt-10 rounded-[28px] border border-white/[0.07] bg-surface p-7 md:p-8">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-yellow/10 text-yellow">
                <WhatsappIcon size={22} />
              </span>
              <h3 className="font-heading text-[24px] font-bold tracking-[-0.03em] text-bone">Ainda tem dúvidas?</h3>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-bone/55">
                Fale direto com nossa equipe. Respondemos rápido e ajudamos você a escolher o modelo ideal.
              </p>
              <div className="mt-6">
                <Button href={WA_DUVIDA} external>
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-7">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} data-reveal="up" data-delay={String(i * 0.04)} className="border-b border-white/[0.08]">
                <button
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-body text-[12px] font-medium text-bone/30 tabular-nums">0{i + 1}</span>
                    <span
                      className={`font-heading text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-[-0.025em] transition-colors duration-300 ${
                        isOpen ? "text-yellow" : "text-bone group-hover:text-yellow"
                      }`}
                    >
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen ? "rotate-45 border-yellow bg-yellow text-ink" : "border-white/15 text-bone"
                    }`}
                  >
                    <Plus size={18} strokeWidth={2} />
                  </span>
                </button>
                <div id={`faq-${i}`} className="accordion-body" data-open={isOpen}>
                  <div>
                    <p className="max-w-[620px] pb-7 pl-9 font-body text-[15px] leading-relaxed text-bone/60">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
