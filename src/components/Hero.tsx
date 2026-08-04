import Image from "next/image";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20Test%20Ride%20na%20EcoBike.";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col px-4 pb-4"
      style={{ backgroundColor: "#efefed", paddingTop: 68 }}
    >
      <div
        className="flex-1 rounded-[28px] overflow-hidden relative"
        style={{ minHeight: "calc(100vh - 84px)" }}
      >
        {/* Floating product card — top left, hidden on mobile */}
        <div
          className="hidden md:block absolute top-8 left-8 md:top-12 md:left-12 z-10 rounded-2xl p-4 max-w-[240px] animate-hero-card"
          style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-[11px] font-semibold font-body uppercase tracking-widest">
              Destaque
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-white font-heading font-bold text-[15px] leading-tight mb-1">
            Scooter S5 Pro
          </p>
          <p className="text-white/60 text-[12px] font-body leading-relaxed">
            Até 80 km de autonomia, carregamento rápido e sem necessidade de CNH.
          </p>
        </div>
        {/* Background image */}
        <Image
          src="/hero03.jpg"
          alt="Scooter elétrica EcoBike"
          fill
          priority
          className="object-cover animate-hero-scale hero-img"
          quality={90}
        />

        {/* Bottom gradient for text legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 70%)",
          }}
        />

        {/* Bottom content */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between p-8 md:p-12 gap-8"
        >
          {/* Left — badge + headline + CTA */}
          <div className="flex flex-col gap-5">
            <span
              className="inline-flex items-center gap-2 text-white/80 text-[12px] font-semibold font-body animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <span
                className="inline-block w-[6px] h-[6px] rounded-full"
                style={{ backgroundColor: "#F9E924" }}
              />
              Mobilidade Elétrica Urbana
            </span>

            <h1
              className="font-heading font-black text-white leading-[0.9] tracking-[-0.04em] animate-fade-up"
              style={{ fontSize: "clamp(48px, 7.5vw, 110px)", animationDelay: "380ms" }}
            >
              <span className="block">Liberdade</span>
              <span className="block">sem CNH.</span>
            </h1>

            <a
              href="#produtos"
              className="inline-flex items-center gap-2.5 self-start bg-white text-[#111] font-semibold text-[13px] px-7 py-3.5 rounded-full hover:bg-[#F9E924] transition-colors font-body animate-fade-up"
              style={{ animationDelay: "560ms" }}
            >
              Ver modelos
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path
                  d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9"
                  stroke="#111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right — description + test ride */}
          <div
            className="hidden md:flex flex-col gap-4 items-end max-w-[280px] pb-1 animate-fade-up"
            style={{ animationDelay: "680ms" }}
          >
            <div className="flex items-start gap-2">
              <p className="text-white/70 text-[14px] font-body leading-relaxed text-right">
                Scooters e bikes elétricas com garantia oficial, assistência própria e test ride gratuito.
              </p>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F9E924] text-[#111] font-semibold text-[13px] px-5 py-2.5 rounded-full hover:brightness-95 transition-all font-body"
            >
              Agendar Test Ride grátis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
