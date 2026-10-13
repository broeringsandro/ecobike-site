"use client";

import { useRef } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Zap, BatteryCharging, Disc, Battery, Weight, Footprints, Nfc, ArrowUpRight, MoveRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { wa, WA_GERAL } from "@/lib/constants";
import { WhatsappIcon } from "./icons";
import Button from "./Button";

type Spec = { icon: LucideIcon; label: string };

const produtos: {
  nome: string;
  img: string;
  tag: string;
  specs: Spec[];
  parcela: string;
  avista: string;
}[] = [
  {
    nome: "Scooter X12",
    img: "/produtos/x12.png",
    tag: "Top de linha",
    specs: [
      { icon: Zap, label: "Motor 1000W" },
      { icon: BatteryCharging, label: "60 km" },
      { icon: Disc, label: "Freio a disco" },
      { icon: Battery, label: "Bateria removível" },
    ],
    parcela: "24× de R$ 458",
    avista: "R$ 8.990",
  },
  {
    nome: "Scooter XB3",
    img: "/produtos/xb3.png",
    tag: "Melhor custo",
    specs: [
      { icon: Zap, label: "Motor 600W" },
      { icon: BatteryCharging, label: "40 km" },
      { icon: Weight, label: "Até 140 kg" },
    ],
    parcela: "24× de R$ 229",
    avista: "R$ 4.490",
  },
  {
    nome: "Bike Free Life",
    img: "/produtos/free-life.png",
    tag: "Inovação",
    specs: [
      { icon: Zap, label: "Motor 800W" },
      { icon: BatteryCharging, label: "30 km" },
      { icon: Footprints, label: "Pedal assistido" },
      { icon: Nfc, label: "Partida NFC" },
    ],
    parcela: "24× de R$ 300",
    avista: "R$ 5.890",
  },
  {
    nome: "Scooter Eagle",
    img: "/produtos/eagle.png",
    tag: "Performance",
    specs: [
      { icon: Zap, label: "Motor 1000W" },
      { icon: BatteryCharging, label: "50 km" },
      { icon: Battery, label: "Bateria 60V 20Ah" },
    ],
    parcela: "24× de R$ 356",
    avista: "R$ 6.990",
  },
];

function Card({ p, i }: { p: (typeof produtos)[number]; i: number }) {
  return (
    <article
      data-card
      className="group relative flex w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-surface transition-colors duration-500 hover:border-yellow/40 sm:w-[420px] lg:w-[min(30vw,460px)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <div data-card-img className="absolute inset-y-0 -inset-x-[12%]">
          <Image
            src={p.img}
            alt={p.nome}
            fill
            sizes="(max-width: 640px) 82vw, 460px"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-yellow">
          {p.tag}
        </span>
        <span className="absolute right-4 top-4 font-heading text-[13px] font-bold text-ink/40 tabular-nums">
          0{i + 1}/0{produtos.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-heading text-[clamp(26px,2.4vw,34px)] font-extrabold leading-none tracking-[-0.045em] text-bone">
          {p.nome}
        </h3>

        <ul className="mb-8 mt-5 flex flex-wrap gap-2">
          {p.specs.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1.5 font-body text-[12px] text-bone/70">
              <Icon size={14} strokeWidth={2} className="text-yellow" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.07] pt-6">
          <div>
            <p className="font-body text-[12px] text-bone/40">À vista</p>
            <p className="font-heading text-[30px] font-extrabold leading-none tracking-[-0.05em] text-bone">{p.avista}</p>
            <p className="mt-1.5 font-body text-[12px] text-yellow">{p.parcela}</p>
          </div>
          <a
            href={wa(`Olá! Tenho interesse na ${p.nome}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${p.nome} pelo WhatsApp`}
            className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-yellow text-ink transition-all duration-500 group-hover:w-[132px]"
          >
            <span className="absolute left-5 whitespace-nowrap font-body text-[14px] font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-200">
              Comprar
            </span>
            <span className="absolute right-[17px] flex transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Produtos() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        // Inner image parallax while sliding horizontally
        gsap.utils.toArray<HTMLElement>("[data-card-img]").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: 8 },
            {
              xPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("[data-card]"),
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        });

        gsap.from("[data-card]", {
          y: 80,
          opacity: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 70%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="produtos" className="relative overflow-hidden bg-ink py-24 lg:flex lg:h-screen lg:items-center lg:py-0">
      <div
        ref={track}
        className="flex w-full snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10 lg:w-max lg:snap-none lg:overflow-visible lg:pb-0 lg:pr-[10vw] [&::-webkit-scrollbar]:hidden"
        data-lenis-prevent-touch
      >
        {/* Intro panel */}
        <div className="flex w-[82vw] shrink-0 snap-start flex-col justify-between gap-10 sm:w-[420px] lg:w-[34vw] lg:pr-12">
          <div>
            <p className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
              <span className="text-yellow">(02)</span> Catálogo 2026
            </p>
            <h2
              className="font-heading font-extrabold leading-[0.92] tracking-[-0.05em] text-bone"
              style={{ fontSize: "clamp(48px, 6vw, 104px)" }}
            >
              Encontre
              <br />
              seu modelo<span className="text-yellow">.</span>
            </h2>
            <p className="mt-6 max-w-[360px] font-body text-[15px] leading-relaxed text-bone/55">
              4 modelos com garantia de 1 ano, assistência técnica própria e parcelamento em até 24×.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="mb-4 flex items-center gap-3 font-body text-[12px] uppercase tracking-[0.2em] text-bone/40">
              Role para explorar <MoveRight size={16} />
            </div>
            <div className="h-[2px] w-full max-w-[360px] overflow-hidden rounded-full bg-white/10">
              <div data-progress className="h-full w-full origin-left scale-x-0 bg-yellow" />
            </div>
          </div>
          <p className="flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] text-bone/40 lg:hidden">
            Arraste para o lado <MoveRight size={16} />
          </p>
        </div>

        {produtos.map((p, i) => (
          <Card key={p.nome} p={p} i={i} />
        ))}

        {/* Closing card */}
        <div
          data-card
          className="flex w-[82vw] shrink-0 snap-center flex-col justify-between gap-10 rounded-[28px] bg-yellow p-7 text-ink sm:w-[420px] lg:w-[min(30vw,460px)] md:p-9"
        >
          <WhatsappIcon size={40} />
          <div>
            <p className="font-heading text-[clamp(32px,3vw,48px)] font-extrabold leading-[0.95] tracking-[-0.05em]">
              Não sabe qual escolher?
            </p>
            <p className="mt-4 max-w-[300px] font-body text-[15px] leading-relaxed text-ink/65">
              Conte seu trajeto e a gente indica o modelo ideal pra você.
            </p>
            <div className="mt-8">
              <Button href={WA_GERAL} external variant="dark">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
