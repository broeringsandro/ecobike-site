import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

type Variant = "yellow" | "light" | "ghost" | "dark";

const styles: Record<Variant, { btn: string; fill: string; hoverText: string }> = {
  yellow: {
    btn: "bg-yellow text-ink",
    fill: "bg-bone",
    hoverText: "group-hover:text-ink",
  },
  light: {
    btn: "bg-bone text-ink",
    fill: "bg-yellow",
    hoverText: "group-hover:text-ink",
  },
  dark: {
    btn: "bg-ink text-bone",
    fill: "bg-bone",
    hoverText: "group-hover:text-ink",
  },
  ghost: {
    btn: "bg-transparent text-bone border border-white/20",
    fill: "bg-bone",
    hoverText: "group-hover:text-ink",
  },
};

/** Pill button with a fill sweep + rotating arrow + magnetic hover */
export default function Button({
  href,
  children,
  variant = "yellow",
  external = false,
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  const s = styles[variant];
  return (
    <Magnetic strength={0.25}>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 py-2 text-[14px] font-semibold font-body transition-colors duration-500 ${s.btn} ${className}`}
      >
        <span
          className={`absolute inset-0 translate-y-[101%] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 ${s.fill}`}
          aria-hidden="true"
        />
        <span className={`relative z-10 transition-colors duration-500 ${s.hoverText}`}>{children}</span>
        <span
          className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-500 ${
            variant === "yellow" ? "bg-ink text-yellow" : variant === "light" ? "bg-ink text-bone" : variant === "dark" ? "bg-yellow text-ink" : "bg-white/10 text-bone group-hover:bg-ink"
          }`}
        >
          <span className={`flex transition-transform duration-500 ${icon ? "group-hover:scale-110" : "group-hover:rotate-45"}`}>
            {icon ?? <ArrowUpRight size={18} strokeWidth={2} />}
          </span>
        </span>
      </a>
    </Magnetic>
  );
}
