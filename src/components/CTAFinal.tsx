"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { WA_GERAL, WA_RIDE } from "@/lib/constants";
import { WhatsappIcon } from "./icons";
import Button from "./Button";

export default function CTAFinal() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
        });
        tl.fromTo(
          "[data-cta-frame]",
          { clipPath: "inset(22% 18% 22% 18% round 40px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "power2.inOut", duration: 1 }
        )
          .fromTo("[data-cta-img]", { scale: 1.4 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
          .fromTo("[data-cta-line='a']", { xPercent: -30 }, { xPercent: 0, ease: "power2.out", duration: 1 }, 0)
          .fromTo("[data-cta-line='b']", { xPercent: 30 }, { xPercent: 0, ease: "power2.out", duration: 1 }, 0)
          .fromTo("[data-cta-bottom]", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.7);
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="contato" className="relative h-[220vh] bg-ink motion-reduce:h-auto">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden motion-reduce:relative">
        <div data-cta-frame className="absolute inset-0 overflow-hidden">
          <div data-cta-img className="absolute inset-0">
            <Image src="/cta-bg.jpg" alt="Homem pilotando scooter EcoBike ao pôr do sol" fill sizes="100vw" className="object-cover" style={{ objectPosition: "center 40%" }} />
          </div>
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
        </div>

        <div className="relative z-10 flex h-full w-full max-w-[1440px] flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pb-12">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/60">
            <span className="text-yellow">(09)</span> Dê o primeiro passo
          </p>

          <h2
            className="font-heading font-extrabold leading-[0.86] tracking-[-0.06em] text-bone"
            style={{ fontSize: "clamp(56px, 12vw, 200px)" }}
          >
            <span data-cta-line="a" className="block">
              Transforme
            </span>
            <span data-cta-line="b" className="block text-right">
              sua mobilidade<span className="text-yellow">.</span>
            </span>
          </h2>

          <div data-cta-bottom className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-[380px] font-body text-[16px] leading-relaxed text-bone/75">
              Fale agora com um especialista da EcoBike e descubra qual modelo combina com você.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={WA_GERAL} external icon={<WhatsappIcon size={18} />}>
                Falar no WhatsApp
              </Button>
              <Button href={WA_RIDE} external variant="ghost" className="backdrop-blur">
                Agendar test ride
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
