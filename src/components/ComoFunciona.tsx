"use client";

import { useRef } from "react";
import Image from "next/image";
import { Bike, CalendarCheck, Headset, Truck } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { WA_RIDE } from "@/lib/constants";
import Button from "./Button";

const passos = [
  { icon: Bike, title: "Escolha seu modelo", body: "Explore o catálogo e encontre a scooter ideal para o seu estilo de vida e orçamento." },
  { icon: CalendarCheck, title: "Agende um test ride", body: "Venha até uma das lojas e experimente de graça antes de decidir." },
  { icon: Headset, title: "Receba orientação", body: "Nossos especialistas explicam tudo: uso, carga, manutenção e cuidados." },
  { icon: Truck, title: "Leve pra casa", body: "Retire na loja ou receba em casa. Pronta pra rodar desde o primeiro dia." },
];

export default function ComoFunciona() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => el.classList.add("is-active"));
        return;
      }
      gsap.fromTo(
        "[data-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-steps]", start: "top 60%", end: "bottom 60%", scrub: true },
        }
      );
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 62%",
          onEnter: () => el.classList.add("is-active"),
          onLeaveBack: () => el.classList.remove("is-active"),
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="como-funciona" className="relative rounded-t-[40px] bg-bone px-5 py-24 text-ink md:rounded-t-[64px] md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-ink/40">
            <span className="rounded-full bg-ink px-2 py-0.5 text-yellow">(04)</span> Como funciona
          </p>
          <h2
            data-split
            className="font-heading font-extrabold leading-[0.92] tracking-[-0.05em]"
            style={{ fontSize: "clamp(44px, 5.4vw, 88px)" }}
          >
            Começar nunca foi tão fácil.
          </h2>

          <ol data-steps className="relative mt-16 flex flex-col gap-14 pl-16 md:pl-20">
            <span className="absolute bottom-2 left-[23px] top-2 w-[2px] bg-ink/10 md:left-[27px]" aria-hidden="true" />
            <span data-line className="absolute bottom-2 left-[23px] top-2 w-[2px] origin-top bg-ink md:left-[27px]" aria-hidden="true" />
            {passos.map(({ icon: Icon, title, body }, i) => (
              <li key={title} data-step className="group/step relative">
                <span className="absolute -left-16 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink/15 bg-bone text-ink/30 transition-all duration-700 group-[.is-active]/step:border-ink group-[.is-active]/step:bg-yellow group-[.is-active]/step:text-ink md:-left-20 md:h-14 md:w-14">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <p className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-ink/35">Passo 0{i + 1}</p>
                <h3 className="mt-2 font-heading text-[clamp(26px,2.6vw,38px)] font-extrabold leading-none tracking-[-0.04em] text-ink/30 transition-colors duration-700 group-[.is-active]/step:text-ink">
                  {title}
                </h3>
                <p className="mt-3 max-w-[440px] font-body text-[15px] leading-relaxed text-ink/55">{body}</p>
              </li>
            ))}
          </ol>

          <div data-reveal="up" className="mt-16">
            <Button href={WA_RIDE} external variant="dark">
              Agendar meu test ride
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-28">
            <div data-reveal="clip" className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <div data-parallax="-16" className="absolute -inset-y-[10%] inset-x-0">
                <Image src="/sobre-moto.png" alt="Scooter EcoBike com a cidade ao fundo" fill sizes="45vw" className="object-cover" style={{ objectPosition: "55% center" }} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-ink/70 p-5 text-bone backdrop-blur-xl">
                <div>
                  <p className="font-heading text-[20px] font-bold tracking-[-0.03em]">4 passos simples</p>
                  <p className="font-body text-[13px] text-bone/55">Do catálogo até sair rodando.</p>
                </div>
                <span className="font-heading text-[44px] font-extrabold leading-none tracking-[-0.05em] text-yellow">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
