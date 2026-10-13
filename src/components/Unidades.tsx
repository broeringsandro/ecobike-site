import { MapPin, Navigation } from "lucide-react";
import { unidades, WA_LOJA } from "@/lib/constants";
import { WhatsappIcon } from "./icons";

export default function Unidades() {
  return (
    <section id="unidades" className="relative bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
              <span className="text-yellow">(07)</span> Nossas lojas
            </p>
            <h2
              data-split
              className="font-heading font-extrabold leading-[0.92] tracking-[-0.05em] text-bone"
              style={{ fontSize: "clamp(44px, 5.4vw, 88px)" }}
            >
              Visite uma EcoBike<span className="text-yellow">.</span>
            </h2>
          </div>
          <p data-reveal="up" className="max-w-[340px] font-body text-[15px] leading-relaxed text-bone/55">
            Duas lojas na Grande Florianópolis, com showroom, test ride e assistência técnica no mesmo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {unidades.map((u, i) => (
            <article
              key={u.cidade}
              data-reveal="up"
              data-delay={String(i * 0.12)}
              className="group overflow-hidden rounded-[28px] border border-white/[0.07] bg-surface transition-colors duration-500 hover:border-yellow/30"
            >
              <div className="relative h-[280px] overflow-hidden md:h-[340px]">
                <iframe
                  src={u.embed}
                  className="map-dark absolute inset-0 h-full w-full scale-110 border-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa da loja EcoBike em ${u.cidade}`}
                />
                <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-yellow px-3.5 py-1.5 font-body text-[12px] font-semibold text-ink">
                  <MapPin size={14} strokeWidth={2} />
                  Loja 0{i + 1}
                </span>
              </div>
              <div className="flex flex-col justify-between gap-6 p-7 md:flex-row md:items-end md:p-8">
                <div>
                  <h3 className="font-heading text-[clamp(26px,2.4vw,34px)] font-extrabold leading-none tracking-[-0.04em] text-bone">{u.cidade}</h3>
                  <p className="mt-3 font-body text-[14px] leading-relaxed text-bone/55">
                    {u.rua}
                    <br />
                    {u.bairro}, {u.uf}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <a
                    href={u.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-body text-[13px] font-semibold text-bone transition-colors hover:bg-bone hover:text-ink"
                  >
                    <Navigation size={16} strokeWidth={2} />
                    Como chegar
                  </a>
                  <a
                    href={WA_LOJA}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp da loja de ${u.cidade}`}
                    className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full bg-yellow text-ink transition-transform hover:scale-110"
                  >
                    <WhatsappIcon size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
