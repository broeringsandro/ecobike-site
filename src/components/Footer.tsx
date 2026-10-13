"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { navLinks, unidades, WA_GERAL, INSTAGRAM } from "@/lib/constants";
import { WhatsappIcon, InstagramIcon } from "./icons";
import Magnetic from "./Magnetic";

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const fn = () => setShowFab(window.scrollY > window.innerHeight * 0.8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-wordmark]", {
          yPercent: 60,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: "[data-wordmark]", start: "top bottom", end: "bottom bottom", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer ref={root} className="relative overflow-hidden border-t border-white/[0.06] bg-ink px-5 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="max-w-[420px] font-heading text-[clamp(28px,2.6vw,40px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-bone">
                Especialistas em mobilidade elétrica em Santa Catarina<span className="text-yellow">.</span>
              </p>
              <div className="mt-8 flex gap-3">
                {[
                  { href: WA_GERAL, label: "WhatsApp", Icon: WhatsappIcon },
                  { href: INSTAGRAM, label: "Instagram", Icon: InstagramIcon },
                ].map(({ href, label, Icon }) => (
                  <Magnetic key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-yellow hover:bg-yellow hover:text-ink"
                    >
                      <Icon size={20} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <nav className="lg:col-span-2" aria-label="Rodapé">
              <p className="mb-5 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-bone/35">Navegação</p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="font-body text-[15px] text-bone/70 transition-colors hover:text-yellow">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-3">
              <p className="mb-5 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-bone/35">Lojas</p>
              <ul className="flex flex-col gap-5">
                {unidades.map((u) => (
                  <li key={u.cidade}>
                    <a href={u.maps} target="_blank" rel="noopener noreferrer" className="group flex gap-3">
                      <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-yellow" />
                      <span>
                        <span className="block font-heading text-[15px] font-bold text-bone transition-colors group-hover:text-yellow">{u.cidade}</span>
                        <span className="block font-body text-[13px] leading-relaxed text-bone/50">
                          {u.rua}, {u.bairro}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="mb-5 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-bone/35">Contato</p>
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-body text-[15px] text-bone/70 transition-colors hover:text-yellow">
                <Phone size={18} strokeWidth={1.75} className="text-yellow" />
                (48) 98455-8493
              </a>
              <button
                onClick={toTop}
                className="group mt-8 inline-flex items-center gap-3 font-body text-[13px] font-semibold text-bone/70 transition-colors hover:text-bone"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all group-hover:-translate-y-1 group-hover:border-yellow group-hover:bg-yellow group-hover:text-ink">
                  <ArrowUp size={18} />
                </span>
                Voltar ao topo
              </button>
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/[0.06] py-6 font-body text-[12px] text-bone/35 md:flex-row">
            <span>© {new Date().getFullYear()} EcoBike Electric Scooters. Todos os direitos reservados.</span>
            <span>Santa Catarina, Brasil</span>
          </div>
        </div>

        {/* Giant wordmark */}
        <div data-wordmark className="relative mx-auto -mb-[2vw] w-full max-w-[1440px] select-none opacity-[0.07]" aria-hidden="true">
          <Image src="/logo.svg" alt="" width={1340} height={418} className="h-auto w-full" />
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_GERAL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`pulse-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-ink shadow-[0_10px_40px_rgba(249,233,36,0.35)] transition-all duration-500 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16 ${
          showFab ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <WhatsappIcon size={26} />
      </a>
    </>
  );
}
