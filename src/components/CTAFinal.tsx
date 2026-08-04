import Image from "next/image";
import Reveal from "./Reveal";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Quero%20transformar%20minha%20mobilidade%20com%20uma%20scooter%20el%C3%A9trica.";
const WA_RIDE =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20Test%20Ride%20na%20EcoBike.";

export default function CTAFinal() {
  return (
    <section id="contato" className="bg-[#111111] overflow-hidden relative">
      {/* Background image */}
      <Image
        src="/cta-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={85}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 px-5 md:px-14 lg:px-20 pt-14 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Large heading */}
          <div className="mb-16">
            <Reveal direction="fade">
              <p className="text-[11px] font-semibold text-white/50 tracking-[3.5px] uppercase mb-8 font-body">
                Dê o primeiro passo.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="font-heading font-black text-white leading-[0.9] tracking-[-0.055em]"
                style={{ fontSize: "clamp(52px, 8.5vw, 120px)" }}
              >
                <span className="block">Transforme</span>
                <span className="block" style={{ color: "#F9E924" }}>
                  sua mobilidade.
                </span>
              </h2>
            </Reveal>
          </div>

          {/* Bottom row */}
          <Reveal direction="fade" delay={200} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/[0.09] pt-10">
            <p className="text-[14px] text-white/[0.55] leading-[1.75] max-w-sm font-body">
              Fale agora com um especialista da EcoBike e descubra qual modelo combina com você.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:ml-auto shrink-0">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#F9E924] text-[#111] font-semibold text-[14px] px-8 py-4 rounded-full hover:brightness-110 transition-all font-body"
              >
                <svg width="17" height="17" viewBox="0 0 20 20" fill="#111" aria-hidden="true">
                  <path d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z" />
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href={WA_RIDE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/45 hover:text-white font-medium transition-colors font-body"
              >
                Agendar Test Ride →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

  );
}
