"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

const classMap: Record<Direction, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${classMap[direction]} ${className}`}>
      {children}
    </div>
  );
}
