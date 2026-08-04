import Reveal from "./Reveal";

const passos = [
  {
    num: "01",
    title: "Escolha seu modelo.",
    body: "Explore nosso catálogo e encontre a scooter ideal para o seu estilo de vida e orçamento.",
  },
  {
    num: "02",
    title: "Agende um Test Ride.",
    body: "Venha até uma de nossas lojas e experimente gratuitamente antes de decidir.",
  },
  {
    num: "03",
    title: "Receba orientação.",
    body: "Nossos especialistas explicam tudo: uso, carga, manutenção e cuidados.",
  },
  {
    num: "04",
    title: "Leve para casa.",
    body: "Retire na loja ou receba em casa. Pronto para rodar desde o primeiro dia.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 px-8 md:px-14 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-16">
          <p className="text-[11px] font-semibold text-[#666] tracking-[3.5px] uppercase mb-4 font-body">
            Como funciona
          </p>
          <h2 className="text-[clamp(28px,4vw,50px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.1] font-heading max-w-xl">
            Começar nunca foi tão fácil<span style={{ color: "#F9E924" }}>.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {passos.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="py-10 border-b border-[#f0f0ee] flex items-start gap-6">
                <div
                  className="font-heading font-black leading-none shrink-0 select-none"
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    color: "#F9E924",
                    letterSpacing: "-0.06em",
                  }}
                  aria-hidden="true"
                >
                  {p.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-[17px] font-bold text-[#111] mb-2.5 tracking-[-0.03em] font-heading">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-[#777] leading-[1.75] font-body">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
