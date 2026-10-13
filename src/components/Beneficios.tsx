"use client";

import { useRef } from "react";
import Image from "next/image";
import { Users, Store, CreditCard, BatteryCharging } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { WA_RIDE } from "@/lib/constants";
import Button from "./Button";

const manifesto: { t: string; hl?: boolean }[] = [
  { t: "Mobilidade elétrica para o seu dia a dia." },
  { t: "Sem CNH,", hl: true },
  { t: "sem combustível e sem complicação." },
  { t: "É" },
  { t: "liberdade", hl: true },
  { t: "do jeito que deveria ser." },
];

const stats = [
  { icon: Users, n: 200, suffix: "+", label: "Clientes satisfeitos em SC" },
  { icon: Store, n: 2, suffix: "", label: "Lojas com assistência própria" },
  { icon: CreditCard, n: 24, suffix: "×", label: "Parcelas sem burocracia" },
  { icon: BatteryCharging, n: 60, suffix: " km", label: "De autonomia por carga" },
];

export default function Beneficios() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        "[data-word]",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: "[data-manifesto]", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
      gsap.to("[data-ring]", { rotate: 360, duration: 30, ease: "none", repeat: -1 });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="beneficios" className="relative bg-ink px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p data-reveal="fade" className="mb-10 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
          <span className="text-yellow">(01)</span> Por que elétrico
        </p>

        <p
          data-manifesto
          className="max-w-[1250px] font-heading font-extrabold leading-[1.02] tracking-[-0.045em]"
          style={{ fontSize: "clamp(34px, 6.2vw, 96px)" }}
        >
          {manifesto.map((chunk, ci) =>
            chunk.t.split(" ").map((w, wi) => (
              <span key={`${ci}-${wi}`} data-word className={`inline-block ${chunk.hl ? "text-yellow" : "text-bone"}`}>
                {w}&nbsp;
              </span>
            ))
          )}
        </p>

        <div className="mt-20 grid grid-cols-1 gap-4 md:mt-28 lg:grid-cols-12">
          {/* Image card */}
          <div data-reveal="clip" className="relative overflow-hidden rounded-[28px] bg-surface lg:col-span-7" style={{ minHeight: 420 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(249,233,36,0.22),transparent_60%)]" />
            <div
              data-ring
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow/20 md:h-[640px] md:w-[640px]"
            />
            {/* Photo is cropped at the bottom, so it sits flush with the card edge */}
            <div className="absolute inset-x-0 bottom-0 top-20 md:top-16">
              <div data-reveal="up" className="relative h-full w-full">
                <Image
                  src="/bikeguidon-cut.png"
                  alt="Detalhe do guidão de uma scooter elétrica EcoBike"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-bottom [mask-image:linear-gradient(to_top,transparent_0%,black_14%)]"
                />
              </div>
            </div>
            <div className="absolute left-6 top-6 flex flex-wrap gap-2 md:left-8 md:top-8">
              {["Freios a disco", "Bateria removível", "Farol LED"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-ink/60 px-3.5 py-1.5 font-body text-[12px] font-medium text-bone/80 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats + CTA */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {stats.map(({ icon: Icon, n, suffix, label }, i) => (
              <div
                key={label}
                data-reveal="up"
                data-delay={String(i * 0.08)}
                className="flex flex-col justify-between gap-8 rounded-[28px] border border-white/[0.07] bg-surface p-6 md:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow/10 text-yellow">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-heading text-[clamp(40px,4.5vw,64px)] font-extrabold leading-none tracking-[-0.05em] text-bone tabular-nums">
                    <span data-count={n} data-suffix={suffix}>
                      {n}
                      {suffix}
                    </span>
                  </p>
                  <p className="mt-2 font-body text-[13px] leading-snug text-bone/50">{label}</p>
                </div>
              </div>
            ))}

            <div data-reveal="up" data-delay="0.3" className="col-span-2 flex flex-col items-start justify-between gap-6 rounded-[28px] bg-yellow p-6 text-ink sm:flex-row sm:items-end md:p-7">
              <div>
                <p className="font-heading text-[clamp(26px,2.6vw,36px)] font-extrabold leading-[1] tracking-[-0.04em]">
                  Experimente antes
                  <br />
                  de decidir.
                </p>
                <p className="mt-2 font-body text-[13px] text-ink/60">Test ride gratuito nas duas lojas.</p>
              </div>
              <Button href={WA_RIDE} external variant="dark">
                Agendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
