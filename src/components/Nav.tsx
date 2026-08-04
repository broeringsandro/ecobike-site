"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Produtos",   href: "#produtos" },
  { label: "Vantagens",  href: "#beneficios" },
  { label: "Unidades",   href: "#unidades" },
  { label: "Sobre",      href: "#sobre" },
  { label: "FAQ",        href: "#faq" },
];

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20as%20scooters%20da%20EcoBike.";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setAtTop(y < 48);
      if (y > lastY.current && y > 80) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-light ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[64px] flex items-center justify-between gap-8">
        <a href="#" aria-label="EcoBike" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="EcoBike"
            width={110}
            height={34}
            priority
            className="h-6 w-auto invert"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#111]/55 hover:text-[#111] text-[13px] font-medium tracking-[-0.01em] transition-colors whitespace-nowrap font-body px-4 py-1.5 rounded-full hover:bg-[#111]/[0.05]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="hidden md:flex w-9 h-9 rounded-full bg-[#111] items-center justify-center hover:bg-[#333] transition-colors shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="white" aria-hidden="true">
            <path d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z" />
          </svg>
        </a>

        <button
          className="lg:hidden p-1.5 flex flex-col gap-[5px]"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-all ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-all ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(239,239,237,0.97)", backdropFilter: "blur(24px)" }}
      >
        <div className="px-6 py-5 flex flex-col gap-3 border-t border-[#111]/[0.07]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#111]/65 hover:text-[#111] text-[14px] font-medium py-1 font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#111] text-white text-[13px] font-semibold px-5 py-3.5 rounded-full text-center font-body"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
