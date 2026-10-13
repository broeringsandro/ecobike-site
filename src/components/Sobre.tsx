import Image from "next/image";
import { Star, CircleCheck } from "lucide-react";
import { WA_LOJA } from "@/lib/constants";
import Button from "./Button";

const skills = ["Garantia oficial", "Assistência técnica", "Test ride", "Entrega", "Financiamento", "Peças originais"];

export default function Sobre() {
  return (
    <section id="sobre" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 py-24 md:-mt-16 md:rounded-t-[64px] md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Collage */}
        <div className="relative lg:col-span-7">
          <div data-reveal="clip" className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <div data-parallax="-14" className="absolute -inset-y-[10%] inset-x-0">
              <Image src="/loja2.jpg" alt="Fachada da loja EcoBike com scooters elétricas" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-top" />
            </div>
          </div>

          <div
            data-reveal="up"
            data-delay="0.2"
            className="absolute -bottom-10 right-4 w-[38%] overflow-hidden rounded-[22px] border-[6px] border-ink md:-bottom-14 md:right-8"
          >
            <div className="relative aspect-[3/4]">
              <Image src="/loja.jpg" alt="Interior da loja EcoBike" fill sizes="25vw" className="object-cover" />
            </div>
          </div>

          <div
            data-reveal="scale"
            data-delay="0.35"
            className="absolute -top-6 left-4 flex flex-col rounded-[22px] bg-yellow p-5 text-ink shadow-2xl md:left-8 md:p-6"
          >
            <span className="font-heading text-[clamp(40px,4vw,60px)] font-extrabold leading-none tracking-[-0.05em]">
              <span data-count="200" data-suffix="+">200+</span>
            </span>
            <span className="mt-1 font-body text-[12px] font-semibold text-ink/60">Clientes satisfeitos em SC</span>
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 lg:col-span-5 lg:mt-0">
          <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
            <span className="text-yellow">(05)</span> Sobre a EcoBike
          </p>
          <h2
            data-split
            className="font-heading font-extrabold leading-[0.95] tracking-[-0.05em] text-bone"
            style={{ fontSize: "clamp(38px, 4.2vw, 68px)" }}
          >
            Especialistas em mobilidade elétrica em Santa Catarina.
          </h2>
          <p data-reveal="up" className="mt-8 font-body text-[16px] leading-relaxed text-bone/60">
            A EcoBike nasceu para tornar a mobilidade urbana mais econômica, sustentável e prática. Com duas lojas em SC,
            oferece scooters e bicicletas elétricas com assistência técnica especializada e atendimento completo.
          </p>

          <div data-reveal="up" className="mt-8 flex items-center gap-4 border-y border-white/[0.07] py-6">
            <div className="flex gap-1 text-yellow">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-body text-[14px] text-bone/60">Avaliação 5 estrelas dos nossos clientes</p>
          </div>

          <ul data-reveal="up" className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
            {skills.map((s) => (
              <li key={s} className="flex items-center gap-2.5 font-body text-[14px] text-bone/80">
                <CircleCheck size={18} strokeWidth={1.75} className="shrink-0 text-yellow" />
                {s}
              </li>
            ))}
          </ul>

          <div data-reveal="up" className="mt-10">
            <Button href={WA_LOJA} external>
              Visitar a loja
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
