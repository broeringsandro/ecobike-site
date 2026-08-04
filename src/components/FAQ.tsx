import Reveal from "./Reveal";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20scooters%20EcoBike.";

const items = [
  {
    q: "Precisa de CNH para dirigir as scooters?",
    a: "Não! Nossos modelos são 100% autopropelidos e não exigem CNH ou habilitação de nenhum tipo. Qualquer pessoa pode utilizar.",
  },
  {
    q: "Precisa emplacar o veículo?",
    a: "Não é necessário emplacamento. As scooters autopropelidas são isentas de registro e emplacamento no Denatran.",
  },
  {
    q: "Quanto tempo dura a bateria?",
    a: "Dependendo do modelo, a autonomia varia entre 30 km e 60 km por carga. O tempo de recarga é de 4 a 6 horas em qualquer tomada.",
  },
  {
    q: "Posso carregar em casa na tomada comum?",
    a: "Sim! Basta conectar em qualquer tomada 110V ou 220V. A bateria é removível, então você pode carregar em casa, no trabalho ou em qualquer lugar.",
  },
  {
    q: "Tem garantia? Quanto tempo?",
    a: "Todos os modelos têm garantia oficial de 1 ano. Você também conta com nossa assistência técnica própria para qualquer problema.",
  },
  {
    q: "Vocês fazem manutenção e reparos?",
    a: "Sim! Temos assistência técnica própria com técnicos especializados. Não precisamos enviar para terceiros — você resolve tudo na nossa loja.",
  },
  {
    q: "Posso testar antes de comprar?",
    a: "Com certeza! Oferecemos Test Ride gratuito em nossas duas lojas. Agende pelo WhatsApp e venha experimentar.",
  },
  {
    q: "Vocês entregam em casa?",
    a: "Sim! Entregamos na sua casa com segurança. Você também pode retirar na loja mais próxima de você.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-24 px-5 md:px-14 lg:px-20" style={{ backgroundColor: "#efefed" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">

          {/* Left column — plain div so flex+sticky work correctly */}
          <div className="flex flex-col justify-between gap-8 lg:sticky lg:top-24 lg:min-h-[520px]">

            {/* Top: tag + headline + description */}
            <Reveal direction="left" className="flex flex-col gap-5">
              <span className="inline-flex items-center self-start bg-white border border-[#e5e5e2] text-[#666] text-[11px] font-semibold font-body px-3 py-1.5 rounded-full tracking-wide">
                Dúvidas frequentes
              </span>
              <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.05] font-heading">
                Perguntas<br />frequentes
                <span style={{ color: "#F9E924" }}>.</span>
              </h2>
              <p className="text-[14px] text-[#666] leading-[1.75] font-body max-w-xs">
                Reunimos as principais dúvidas dos nossos clientes. Se não encontrar o que procura, fale com a gente.
              </p>
            </Reveal>

            {/* Bottom: still have questions card */}
            <Reveal className="bg-white rounded-2xl p-7 flex flex-col gap-4">
              <h3 className="text-[18px] font-bold text-[#111] font-heading tracking-[-0.02em]">
                Ainda tem dúvidas?
              </h3>
              <p className="text-[13px] text-[#666] leading-[1.75] font-body">
                Fale diretamente com nossa equipe. Respondemos rápido e ajudamos você a escolher o modelo ideal.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#111] text-white font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#333] transition-colors font-body self-start"
              >
                Falar no WhatsApp
              </a>
            </Reveal>

          </div>

          {/* Right column — FAQ cards, all expanded */}
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-[15px] font-semibold text-[#111] font-heading tracking-[-0.01em] leading-snug">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-[#ddd] flex items-center justify-center">
                      <svg width="9" height="9" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 5L5 1l4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <p className="text-[13px] text-[#666] leading-[1.75] font-body">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
