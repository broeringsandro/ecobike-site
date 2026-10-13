"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Gauge, IdCard, CreditCard, ShieldCheck, ArrowUpRight } from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { WA_RIDE } from "@/lib/constants";
import Button from "./Button";

const specs = [
  { icon: IdCard, label: "Sem CNH", sub: "100% autopropelido" },
  { icon: Gauge, label: "Até 60 km", sub: "por carga" },
  { icon: CreditCard, label: "Até 24×", sub: "sem burocracia" },
  { icon: ShieldCheck, label: "1 ano", sub: "de garantia oficial" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const q = gsap.utils.selector(root);

      if (reduce) {
        gsap.set(q("[data-curtain]"), { display: "none" });
        gsap.set(q("[data-hero-title]"), { visibility: "visible" });
        return;
      }

      const split = SplitText.create(q("[data-hero-title]"), { type: "chars,lines", mask: "lines" });
      gsap.set(q("[data-hero-title]"), { visibility: "visible" });

      const counter = { v: 0 };
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(q("[data-curtain-logo]"), { yPercent: 120, duration: 0.9 })
        .to(
          counter,
          {
            v: 100,
            duration: 0.9,
            ease: "power2.inOut",
            onUpdate: () => {
              const el = q("[data-curtain-count]")[0];
              if (el) el.textContent = String(Math.round(counter.v)).padStart(3, "0");
            },
          },
          0
        )
        .to(q("[data-curtain-bar]"), { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0)
        .to(q("[data-curtain]"), { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, 1.05)
        .from(q("[data-hero-img]"), { scale: 1.35, duration: 2.2, ease: "expo.out" }, 1.3)
        .from(split.chars, { yPercent: 115, duration: 1.2, stagger: 0.025 }, 1.55)
        .from(q("[data-hero-fade]"), { y: 30, opacity: 0, duration: 1, stagger: 0.08 }, 1.85)
        .from(q("[data-hero-spec]"), { y: 40, opacity: 0, duration: 1, stagger: 0.07 }, 2.0)
        .from(q("[data-hero-card]"), { x: 60, opacity: 0, rotate: 6, duration: 1.3 }, 2.1)
        .set(q("[data-curtain]"), { display: "none" });

      // Floating highlight card
      gsap.to(q("[data-hero-card-inner]"), { y: -12, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });

      // Scroll: frame shrinks into a rounded card, image zooms, content lifts away
      const st = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(q("[data-hero-frame]"), { clipPath: "inset(6% 3% 0% 3% round 32px)", ease: "none", scrollTrigger: st });
      gsap.to(q("[data-hero-img-wrap]"), { scale: 1.18, yPercent: 12, ease: "none", scrollTrigger: st });
      gsap.to(q("[data-hero-content]"), { yPercent: -35, opacity: 0, ease: "none", scrollTrigger: { ...st, end: "70% top" } });

      return () => split.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Intro curtain */}
      <div data-curtain className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-yellow text-ink">
        <div className="overflow-hidden">
          <div data-curtain-logo className="flex items-center gap-4">
            <Image src="/logo.svg" alt="" width={220} height={69} className="h-12 w-auto invert md:h-16" preload />
          </div>
        </div>
        <div className="absolute bottom-8 left-5 right-5 flex items-end justify-between md:left-10 md:right-10">
          <span className="font-body text-[12px] font-semibold uppercase tracking-[0.25em]">Mobilidade elétrica</span>
          <span data-curtain-count className="font-heading text-[56px] font-extrabold leading-none tracking-[-0.05em] tabular-nums md:text-[88px]">
            000
          </span>
        </div>
        <div data-curtain-bar className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-ink" />
      </div>

      {/* Image frame */}
      <div data-hero-frame className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}>
        <div data-hero-img-wrap className="absolute inset-0 origin-bottom">
          <div data-hero-img className="absolute inset-0">
            <Image
              src="/hero03.jpg"
              alt="Scooter elétrica EcoBike em estúdio"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              quality={85}
              className="hidden object-cover md:block"
              style={{ objectPosition: "20% center" }}
            />
            <Image
              src="/hero-mobile.jpg"
              alt="Scooter elétrica EcoBike em estúdio"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              quality={85}
              className="object-cover md:hidden"
              style={{ objectPosition: "28% center" }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.35)_45%,rgba(10,10,10,0.1)_70%,rgba(10,10,10,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(249,233,36,0.10),transparent_55%)]" />
      </div>

      {/* Content */}
      <div data-hero-content className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-28 md:px-10 md:pb-10">
        {/* Floating highlight card */}
        <a
          href="#produtos"
          data-hero-card
          className="absolute right-10 top-[22%] hidden w-[250px] lg:block"
          aria-label="Ver Scooter X12"
        >
          <div data-hero-card-inner className="group rounded-3xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl transition-colors hover:border-yellow/40">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
              <Image src="/produtos/x12.png" alt="Scooter X12" fill sizes="250px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <span className="absolute left-2.5 top-2.5 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-yellow font-body">
                Destaque
              </span>
            </div>
            <div className="flex items-center justify-between px-1.5 pb-1 pt-3">
              <div>
                <p className="font-heading text-[15px] font-bold tracking-[-0.02em] text-bone">Scooter X12</p>
                <p className="font-body text-[12px] text-bone/50">24× de R$ 458</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow text-ink transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </a>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[900px]">
            <p data-hero-fade className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-bone/80 backdrop-blur font-body">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
              </span>
              Palhoça &amp; Santo Amaro, SC
            </p>
            <h1
              data-hero-title
              className="invisible font-heading font-extrabold leading-[0.88] tracking-[-0.055em] text-bone"
              style={{ fontSize: "clamp(56px, 11vw, 176px)" }}
            >
              Liberdade
              <br />
              sem CNH<span className="text-yellow">.</span>
            </h1>
          </div>

          <div className="flex max-w-[360px] flex-col gap-6 lg:items-end lg:pb-3 lg:text-right">
            <p data-hero-fade className="font-body text-[15px] leading-relaxed text-bone/70 md:text-[16px]">
              Scooters e bikes elétricas com garantia oficial, assistência técnica própria e test ride gratuito.
            </p>
            <div data-hero-fade className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="#produtos" variant="light" icon={<ArrowDown size={18} />}>
                Ver modelos
              </Button>
              <Button href={WA_RIDE} external>
                Test ride grátis
              </Button>
            </div>
          </div>
        </div>

        {/* Spec strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {specs.map(({ icon: Icon, label, sub }) => (
            <div key={label} data-hero-spec className="flex items-center gap-3 bg-ink/70 px-4 py-4 backdrop-blur-md md:px-6 md:py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow/10 text-yellow">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-[15px] font-bold leading-tight tracking-[-0.02em] text-bone md:text-[17px]">{label}</p>
                <p className="truncate font-body text-[12px] text-bone/45">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
