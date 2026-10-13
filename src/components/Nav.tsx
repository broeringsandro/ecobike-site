"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { navLinks, WA_GERAL, INSTAGRAM, unidades } from "@/lib/constants";
import { WhatsappIcon, InstagramIcon } from "./icons";
import Magnetic from "./Magnetic";

function go(href: string) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.start();
    lenis.scrollTo(href, { offset: -20, duration: 1.6 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
}

/** Text that rolls up on hover */
function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden leading-[1.2]">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className="absolute left-0 top-full block text-yellow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY.current && y > 200) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Entrance after hero intro
  useGSAP(
    () => {
      gsap.from(headerRef.current, { yPercent: -100, opacity: 0, duration: 1.2, ease: "expo.out", delay: 1.9 });
    },
    { scope: headerRef }
  );

  // Fullscreen menu timeline
  useGSAP(
    () => {
      const m = menuRef.current;
      if (!m) return;
      tl.current = gsap
        .timeline({ paused: true })
        .set(m, { display: "flex" })
        .fromTo(m, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.inOut" })
        .from(m.querySelectorAll("[data-menu-item]"), { yPercent: 110, duration: 0.8, stagger: 0.05, ease: "expo.out" }, "-=0.35")
        .from(m.querySelectorAll("[data-menu-foot]"), { opacity: 0, y: 20, duration: 0.6, stagger: 0.05 }, "-=0.6");
    },
    { scope: menuRef }
  );

  useEffect(() => {
    if (!tl.current) return;
    if (open) {
      window.__lenis?.stop();
      tl.current.timeScale(1).play();
    } else {
      window.__lenis?.start();
      tl.current.timeScale(1.6).reverse();
    }
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${solid ? "bg-ink/70 backdrop-blur-xl border-b border-white/[0.06]" : "border-b border-transparent"}`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-8 px-5 md:px-10">
          <a
            href="#top"
            aria-label="EcoBike, voltar ao topo"
            className="shrink-0"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              go("#top");
            }}
          >
            <Image src="/logo.svg" alt="EcoBike" width={120} height={37} className="h-7 w-auto" preload />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex" aria-label="Principal">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="group text-[13px] font-medium text-bone/70 hover:text-bone font-body">
                <RollText>{l.label}</RollText>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden md:inline-block">
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-yellow py-2.5 pl-4 pr-5 text-[13px] font-semibold text-ink font-body transition-[filter] hover:brightness-95"
              >
                <WhatsappIcon size={18} />
                Falar no WhatsApp
              </a>
            </Magnetic>

            <button
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span
                className={`absolute h-[1.5px] w-5 bg-bone transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-[1.5px] w-5 bg-bone transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col justify-between bg-ink px-5 pb-8 pt-28 md:px-10 lg:!hidden"
        aria-hidden={!open}
        data-lenis-prevent
      >
        <nav className="flex flex-col gap-1" aria-label="Menu">
          {navLinks.map((l, i) => (
            <div key={l.href} className="overflow-hidden">
              <a
                data-menu-item
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  setTimeout(() => go(l.href), 450);
                }}
                className="flex items-baseline gap-4 py-1 font-heading text-[clamp(40px,11vw,72px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-bone active:text-yellow"
              >
                <span className="font-body text-[12px] font-medium tracking-normal text-bone/30">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-6">
          <a
            data-menu-foot
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-between rounded-2xl bg-yellow px-6 py-5 text-[15px] font-semibold text-ink font-body"
          >
            <span className="flex items-center gap-3">
              <WhatsappIcon size={20} />
              Falar no WhatsApp
            </span>
            <ArrowUpRight size={20} />
          </a>
          <div data-menu-foot className="flex items-end justify-between gap-6 text-[12px] leading-relaxed text-bone/45 font-body">
            <div>
              {unidades.map((u) => (
                <p key={u.cidade}>{u.cidade}</p>
              ))}
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              aria-label="Instagram da EcoBike"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
