import Image from "next/image";
import Reveal from "./Reveal";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20Test%20Ride%20na%20EcoBike.";

const tags = [
  "Sem CNH necessária",
  "Até 60 km por carga",
  "1 ano de garantia",
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="pt-12 pb-6 md:py-20 px-5 md:px-14 lg:px-20" style={{ backgroundColor: "#efefed" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — headline + text + dark card */}
          <div className="flex flex-col justify-between gap-10 h-full">
            <Reveal direction="left" className="flex flex-col gap-5">
              <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.08] font-heading">
                Mobilidade elétrica para o seu dia a dia.
              </h2>
              <p className="text-[15px] text-[#555] leading-[1.8] font-body max-w-sm">
                Nossas scooters e bikes elétricas combinam tecnologia, economia e praticidade. Sem CNH, sem combustível, sem complicação — é liberdade do jeito que deveria ser.
              </p>
            </Reveal>

            {/* Dark CTA card */}
            <Reveal>
              <div className="rounded-2xl p-6 md:p-7 flex items-end justify-between gap-4 w-full sm:max-w-[360px]" style={{ backgroundColor: "#111" }}>
                <div>
                  <p className="text-white font-extrabold text-[clamp(22px,2.5vw,32px)] font-heading leading-[1.1] tracking-[-0.03em]">
                    Faça seu<br />
                    <span style={{ color: "#F9E924" }}>Test Ride</span>
                  </p>
                  <p className="text-white/40 text-[13px] font-body mt-2">
                    Gratuito nas nossas lojas
                  </p>
                </div>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-white text-[#111] font-semibold text-[13px] px-5 py-3 rounded-full hover:bg-[#F9E924] transition-colors font-body whitespace-nowrap"
                >
                  Agendar →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — tags + image */}
          <Reveal direction="right" delay={120} className="flex flex-col gap-4">
            {/* Tags row */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center bg-[#111] text-white text-[12px] font-semibold font-body px-4 py-2 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden group" style={{ height: 380 }}>
              <Image
                src="/bikeguidon.png"
                alt="Scooter elétrica EcoBike"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                quality={85}
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
