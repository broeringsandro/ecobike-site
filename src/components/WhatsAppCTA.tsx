const WHATSAPP_URL =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Quero%20descobrir%20qual%20scooter%20%C3%A9%20ideal%20para%20mim.";

export default function WhatsAppCTA() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 300,
          background: "rgba(255,217,0,0.06)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
          <span
            className="text-[11px] font-semibold text-white/60 uppercase tracking-[1px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Inteligência Artificial
          </span>
        </div>

        <h2
          className="text-[clamp(32px,5vw,52px)] font-bold text-white tracking-[-0.04em] leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Qual scooter é perfeita para você<span className="text-[#ffd900]">?</span>
        </h2>

        <p
          className="text-[16px] text-white/50 leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Fale com nossos especialistas no WhatsApp e descubra o modelo ideal para sua rotina,
          seu bolso e seu estilo de vida.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#ffd900] text-[#0f0f0f] font-bold text-[15px] px-10 py-4 rounded-full hover:bg-yellow-300 transition-colors shadow-[0_0_30px_rgba(255,214,0,0.25)]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z"
              stroke="#0f0f0f"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 9.167s.417 1.666 2.5 2.5c2.083.832 3.333-.834 3.333-.834"
              stroke="#0f0f0f"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Falar com especialista
        </a>
      </div>
    </section>
  );
}
