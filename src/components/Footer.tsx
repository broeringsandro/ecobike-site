import Image from "next/image";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Tenho%20interesse%20nas%20scooters%20da%20EcoBike.";

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Vantagens", href: "#beneficios" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

const unidades = [
  { nome: "Palhoça", end: "Av. Bom Jesus de Nazaré, 547 — Aririú" },
  { nome: "Santo Amaro da Imperatriz", end: "Rua Pedro Mansur Elias, 45 — Centro" },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0a0a0a] border-t border-white/[0.06] pt-12 md:pt-16 pb-8 md:pb-10 px-5 md:px-14 lg:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

            {/* Brand col */}
            <div className="md:col-span-3">
              <Image
                src="/logo.svg"
                alt="EcoBike"
                width={100}
                height={31}
                className="h-7 w-auto mb-5"
              />
              <p className="text-[13px] text-white/[0.38] leading-[1.7] font-body mb-6">
                Especialistas em mobilidade elétrica em Santa Catarina.
              </p>
              <div className="flex gap-2.5">
                {[
                  {
                    href: WA,
                    label: "WhatsApp",
                    icon: (
                      <path
                        d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z"
                        fill="currentColor"
                      />
                    ),
                  },
                  {
                    href: "https://instagram.com/ecobikeeletricscooters",
                    label: "Instagram",
                    icon: (
                      <>
                        <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="14" cy="6" r="0.75" fill="currentColor" />
                      </>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-2 md:col-start-5">
              <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[2.5px] mb-5 font-body">
                Navegação
              </p>
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-[13px] text-white/[0.38] hover:text-white transition-colors font-body"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Lojas */}
            <div className="md:col-span-4 md:col-start-8">
              <p className="text-[10px] font-semibold text-white/25 uppercase tracking-[2.5px] mb-5 font-body">
                Nossas lojas
              </p>
              <div className="flex flex-col gap-5">
                {unidades.map((u) => (
                  <div key={u.nome}>
                    <p className="text-[13px] font-semibold text-white/55 mb-1 font-body">{u.nome}</p>
                    <p className="text-[12px] text-white/[0.28] font-body">{u.end}</p>
                  </div>
                ))}
                <p className="text-[12px] text-white/[0.28] font-body">
                  WhatsApp: (48) 98455-8493
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.06] pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-white/[0.25] font-body">
              © 2026 EcoBike — Electric Scooters. Todos os direitos reservados.
            </span>
            <span className="text-[11px] text-white/[0.18] font-body">
              Santa Catarina, Brasil
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        style={{ boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
      >
        <svg width="26" height="26" viewBox="0 0 20 20" fill="white" aria-hidden="true">
          <path d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667z" />
        </svg>
      </a>
    </>
  );
}
