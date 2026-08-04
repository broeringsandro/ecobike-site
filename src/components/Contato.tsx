const WHATSAPP_URL =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Quero%20visitar%20a%20loja%20e%20conhecer%20as%20scooters.";

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-24 px-6"
      style={{ backgroundColor: "#f5f4f1" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-0.5 w-10 bg-[#ffd900]" />
              <span
                className="text-[11px] font-bold text-[#999] tracking-[2.2px] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Contato
              </span>
            </div>

            <h2
              className="text-[clamp(32px,4vw,48px)] font-bold text-[#0f0f0f] tracking-[-0.04em] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Visite nossa loja<span className="text-[#ffd900]">.</span>
            </h2>

            <p
              className="text-[15px] text-[#555] leading-[1.8] mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Venha fazer um test ride e conhecer a maior loja de scooters da região. Estamos prontos
              para te atender com as melhores condições de pagamento.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0f0f0f] text-white font-bold text-[14px] px-8 py-4 rounded-full hover:bg-[#222] transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 9.167s.417 1.666 2.5 2.5c2.083.832 3.333-.834 3.333-.834"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Right: contact info */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2a5.5 5.5 0 0 1 5.5 5.5c0 3.5-5.5 10.5-5.5 10.5S4.5 11 4.5 7.5A5.5 5.5 0 0 1 10 2z"
                      stroke="#ffd900"
                      strokeWidth="1.5"
                    />
                    <circle cx="10" cy="7.5" r="1.5" stroke="#ffd900" strokeWidth="1.5" />
                  </svg>
                ),
                label: "Endereço",
                value: "Av. Bom Jesus de Nazaré, 547 - Aririú, Palhoça/SC",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z"
                      stroke="#ffd900"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                label: "WhatsApp",
                value: "(48) 98455-8493",
                href: WHATSAPP_URL,
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="14" height="14" rx="4" stroke="#ffd900" strokeWidth="1.5" />
                    <circle cx="10" cy="10" r="3" stroke="#ffd900" strokeWidth="1.5" />
                    <circle cx="14" cy="6" r="0.75" fill="#ffd900" />
                  </svg>
                ),
                label: "Instagram",
                value: "@ecobikeeletricscooters",
                href: "https://instagram.com/ecobikeeletricscooters",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[rgba(232,230,227,0.6)] rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[rgba(255,217,0,0.1)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-[11px] font-bold text-[#999] uppercase tracking-[0.5px] mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-[#0f0f0f] hover:text-[#ffd900] transition-colors"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-[14px] font-medium text-[#0f0f0f]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
