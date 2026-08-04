"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 60, suffix: " km", label: "Autonomia máxima" },
  { value: 4,  suffix: "",    label: "Modelos disponíveis" },
  { value: 24, suffix: "×",   label: "Parcelas disponíveis" },
  { value: 1,  suffix: " ano", label: "De garantia oficial" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((end * frame) / total));
      if (frame >= total) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return <div ref={ref}>{`${count}${suffix}`}</div>;
}

export default function Numeros() {
  return (
    <section className="py-16 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#efefed" }}>
      <div className="max-w-6xl mx-auto border-t border-[#111]/[0.08] pt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="font-heading font-black text-[#111] leading-none mb-2"
                style={{ fontSize: "clamp(38px, 5vw, 60px)", letterSpacing: "-0.04em" }}
              >
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[11px] font-semibold text-[#111]/40 uppercase tracking-[1.2px] font-body leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
