import Image from "next/image";
import Reveal from "./Reveal";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Quero%20visitar%20uma%20loja%20EcoBike.";

const skills = [
  "Garantia Oficial",
  "Assistência Técnica",
  "Test Ride",
  "Entrega",
  "Financiamento",
  "Peças Originais",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-8 md:px-14 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — photos */}
        <Reveal direction="scale">
          <div className="flex flex-col gap-3" style={{ height: 460 }}>
            {/* Top: tall store photo */}
            <div className="relative rounded-2xl overflow-hidden flex-1 group">
              <Image
                src="/loja2.jpg"
                alt="Loja EcoBike"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                quality={85}
              />
            </div>

            {/* Bottom row: stat card + bike photo */}
            <div className="flex gap-3 shrink-0" style={{ height: 170 }}>
              <div
                className="rounded-2xl flex flex-col justify-center p-6 shrink-0 w-[42%]"
                style={{ backgroundColor: "#F9E924" }}
              >
                <div className="text-[40px] font-black text-[#111] leading-none font-heading tracking-[-0.04em]">
                  200+
                </div>
                <div className="text-[12px] font-semibold text-[#111]/55 mt-1.5 font-body leading-snug">
                  Clientes satisfeitos em SC
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1 group">
                <Image
                  src="/sobre-moto.png"
                  alt="Scooter EcoBike"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — content */}
        <Reveal direction="right" delay={150}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F9E924" }} aria-hidden="true" />
            <p className="text-[11px] font-semibold text-[#666] tracking-[3px] uppercase font-body">
              Sobre a EcoBike
            </p>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(26px,3.2vw,44px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.1] mb-5 font-heading">
            Especialistas em mobilidade elétrica em Santa Catarina.
          </h2>

          {/* Description */}
          <p className="text-[15px] text-[#555] leading-[1.8] mb-8 font-body">
            A EcoBike nasceu para tornar a mobilidade urbana mais econômica, sustentável e prática.
            Com duas unidades em SC, oferece scooters e bicicletas elétricas com assistência técnica
            especializada e atendimento completo.
          </p>

          {/* CTA + team */}
          <div className="flex items-center gap-5 mb-10">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111] text-white font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#333] transition-colors font-body"
            >
              Visitar a loja
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#F9E924] flex items-center justify-center text-[#111] font-bold text-sm font-body shrink-0">
                E
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#111] font-body leading-tight">Equipe EcoBike</div>
                <div className="text-[11px] text-[#888] font-body">Palhoça & Santo Amaro · SC</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#f0f0ee] pt-8 grid grid-cols-2 gap-8">
            {/* Rating */}
            <div>
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F9E924" aria-hidden="true">
                    <path d="M7 1l1.545 4.146H13L9.637 7.854l1.545 4.146L7 9.5 2.818 12l1.545-4.146L1 5.146h4.455z"/>
                  </svg>
                ))}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[32px] font-black text-[#111] font-heading leading-none tracking-[-0.04em]">4.9</span>
                <span className="text-[14px] text-[#aaa] font-body">/5.0</span>
              </div>
              <div className="text-[11px] text-[#888] font-body mt-1">Avaliação dos clientes</div>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-[#888] uppercase tracking-[1.5px] font-body">Nossos serviços</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="text-[11px] font-medium text-[#555] bg-[#f5f5f3] px-2.5 py-1 rounded-full font-body">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
