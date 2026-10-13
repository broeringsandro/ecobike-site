"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Smooth scroll (Lenis) + declarative scroll animations:
 *  data-reveal="up|fade|scale|left|right|clip"  data-delay="0.1"
 *  data-split                                  (headline line-by-line)
 *  data-parallax="-15"                         (yPercent while scrolling)
 *  data-count="200"  data-suffix="+"           (number counter)
 */
export default function MotionProvider() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.remove("anim");
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -20 }, autoRaf: false });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const splits: SplitText[] = [];
    let ctx: gsap.Context | undefined;

    const init = () => {
      ctx = gsap.context(() => {
        const from: Record<string, gsap.TweenVars> = {
          up: { y: 60, opacity: 0 },
          fade: { opacity: 0 },
          scale: { scale: 0.9, opacity: 0, y: 30 },
          left: { x: -60, opacity: 0 },
          right: { x: 60, opacity: 0 },
          clip: { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
        };

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const kind = el.dataset.reveal || "up";
          const delay = parseFloat(el.dataset.delay || "0");
          gsap.fromTo(
            el,
            { ...from[kind] },
            {
              y: 0,
              x: 0,
              scale: 1,
              opacity: 1,
              clipPath: kind === "clip" ? "inset(0% 0% 0% 0%)" : undefined,
              duration: kind === "clip" ? 1.4 : 1.1,
              delay,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            linesClass: "split-line-inner",
            mask: "lines",
          });
          splits.push(split);
          gsap.set(el, { visibility: "visible" });
          gsap.from(split.lines, {
            yPercent: 110,
            duration: 1.2,
            stagger: 0.09,
            ease: "expo.out",
            delay: parseFloat(el.dataset.delay || "0"),
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = parseFloat(el.dataset.parallax || "-15");
          gsap.fromTo(
            el,
            { yPercent: -amount / 2 },
            {
              yPercent: amount / 2,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 2.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(obj.v).toLocaleString("pt-BR") + suffix;
            },
          });
        });
      });
      ScrollTrigger.refresh();
    };

    // Wait for webfonts so line splits are measured correctly
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) init();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      ctx?.revert();
      splits.forEach((s) => s.revert());
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
