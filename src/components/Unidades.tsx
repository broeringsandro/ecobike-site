import Reveal from "./Reveal";

const WA =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Quero%20visitar%20a%20loja%20EcoBike.";

const unidades = [
  {
    cidade: "Palhoça",
    rua: "Avenida Bom Jesus de Nazaré, 547",
    bairro: "Aririú",
    uf: "Palhoça · SC",
    maps: "https://maps.google.com/?q=Avenida+Bom+Jesus+de+Nazar%C3%A9+547+Ariri%C3%BA+Palho%C3%A7a+SC",
    embed: "https://maps.google.com/maps?q=Avenida+Bom+Jesus+de+Nazar%C3%A9%2C+547%2C+Ariri%C3%BA%2C+Palho%C3%A7a%2C+SC&output=embed&hl=pt-BR&z=16",
  },
  {
    cidade: "Santo Amaro da Imperatriz",
    rua: "Rua Pedro Mansur Elias, 45",
    bairro: "Centro",
    uf: "Santo Amaro da Imperatriz · SC",
    maps: "https://maps.google.com/?q=Rua+Pedro+Mansur+Elias+45+Centro+Santo+Amaro+da+Imperatriz+SC",
    embed: "https://maps.google.com/maps?q=Rua+Pedro+Mansur+Elias%2C+45%2C+Centro%2C+Santo+Amaro+da+Imperatriz%2C+SC&output=embed&hl=pt-BR&z=16",
  },
];

export default function Unidades() {
  return (
    <section id="unidades" className="py-24 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#efefed" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-14">
          <p className="text-[11px] font-semibold text-[#666] tracking-[3.5px] uppercase mb-4 font-body">
            Nossas lojas
          </p>
          <h2 className="text-[clamp(28px,4vw,50px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.08] font-heading">
            Visite uma EcoBike<span style={{ color: "#F9E924" }}>.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {unidades.map((u, i) => (
            <Reveal key={i} delay={i * 150} direction={i === 0 ? "left" : "right"}>
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300">

                {/* Map embed */}
                <div className="relative h-48 overflow-hidden">
                  <iframe
                    src={u.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${u.cidade}`}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-[20px] font-bold text-[#111] mb-2 font-heading tracking-[-0.025em]">
                        {u.cidade}
                      </h3>
                      <p className="text-[13px] text-[#666] leading-[1.7] font-body">
                        {u.rua}<br />
                        {u.bairro}<br />
                        <span className="text-[#aaa]">{u.uf}</span>
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F9E924] flex items-center justify-center shrink-0 mt-1">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M8 2.5C6 2.5 4.5 4 4.5 6C4.5 9 8 13.5 8 13.5S11.5 9 11.5 6C11.5 4 10 2.5 8 2.5z"
                          fill="#111"
                        />
                        <circle cx="8" cy="6" r="1.5" fill="white" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={u.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-[#111] text-white font-semibold text-[13px] py-3 rounded-xl hover:bg-[#333] transition-colors font-body"
                    >
                      Abrir no Maps
                    </a>
                    <a
                      href={WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-[#ddd] text-[#333] font-medium text-[13px] py-3 rounded-xl hover:bg-[#f5f5f3] transition-colors font-body"
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20" fill="#25D366" aria-hidden="true">
                        <path d="M10 1.667C5.398 1.667 1.667 5.398 1.667 10c0 1.497.41 2.9 1.126 4.1L1.667 18.333l4.386-1.092A8.282 8.282 0 0 0 10 18.333c4.602 0 8.333-3.731 8.333-8.333S14.602 1.667 10 1.667zm4.107 11.52c-.174.488-1.018.932-1.39.974-.374.043-.724.176-2.44-.508-2.063-.827-3.373-2.928-3.473-3.064-.1-.136-.817-1.087-.817-2.073 0-.987.517-1.472.7-1.674.183-.2.4-.25.533-.25l.383.007c.123.005.289-.047.452.345.167.4.567 1.383.617 1.483.05.1.083.217.017.35-.067.133-.1.217-.2.333-.1.117-.21.26-.3.35-.1.1-.204.208-.087.408.116.2.517.852 1.11 1.38.762.677 1.405.886 1.605.986.2.1.317.083.433-.05.117-.133.5-.583.633-.783.133-.2.267-.167.45-.1.183.067 1.167.55 1.367.65.2.1.333.15.383.233.05.083.05.483-.124.971z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
