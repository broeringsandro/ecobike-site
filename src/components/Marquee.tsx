"use client";

import { useRef } from "react";
import { Zap } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const rowA = ["Sem CNH", "Sem combustível", "Sem complicação", "Sem emplacamento"];
const rowB = ["Assistência própria", "Test ride grátis", "Entrega em casa", "Parcele em 24×"];

function Row({ items, outline = false }: { items: string[]; outline?: boolean }) {
  const content = (
    <>
      {items.map((t) => (
        <span key={t} className="flex shrink-0 items-center">
          <span
            className={`font-heading font-extrabold uppercase leading-none tracking-[-0.04em] ${
              outline ? "text-outline" : "text-bone"
            }`}
            style={{ fontSize: "clamp(44px, 8vw, 128px)" }}
          >
            {t}
          </span>
          <Zap className="mx-6 shrink-0 text-yellow md:mx-10" size={40} strokeWidth={1.75} fill="currentColor" />
        </span>
      ))}
    </>
  );
  return (
    <div data-row className="flex w-max will-change-transform">
      <div className="flex">{content}</div>
      <div className="flex" aria-hidden="true">
        {content}
      </div>
    </div>
  );
}

export default function Marquee() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]");
      const tweens = rows.map((row, i) =>
        gsap.fromTo(
          row,
          { xPercent: i % 2 ? -50 : 0 },
          { xPercent: i % 2 ? 0 : -50, duration: 38, ease: "none", repeat: -1 }
        )
      );
      // Start deep into the loop so reversing direction never hits time 0
      tweens.forEach((t) => t.totalTime(t.duration() * 200));
      const skewTo = gsap.quickTo(rows, "skewX", { duration: 0.6, ease: "power3" });

      let dir = 1;
      let boost = 0;
      let skewed = false;
      const tick = () => {
        boost *= 0.93;
        if (skewed && boost < 0.15) {
          skewed = false;
          skewTo(0);
        }
        const ts = dir * (1 + boost);
        tweens.forEach((t) => t.timeScale(ts));
      };
      gsap.ticker.add(tick);

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = self.getVelocity();
          dir = self.direction;
          boost = Math.max(boost, Math.min(Math.abs(v) / 300, 6));
          skewTo(gsap.utils.clamp(-8, 8, v / -300));
          skewed = true;
        },
        onLeave: () => skewTo(0),
        onLeaveBack: () => skewTo(0),
      });
      return () => gsap.ticker.remove(tick);
    },
    { scope: root }
  );

  return (
    <section ref={root} aria-label="Vantagens EcoBike" className="relative overflow-hidden border-y border-white/[0.06] bg-ink py-10 md:py-16">
      <div className="flex flex-col gap-3 md:gap-5">
        <Row items={rowA} />
        <Row items={rowB} outline />
      </div>
    </section>
  );
}
