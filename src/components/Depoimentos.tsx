import Reveal from "./Reveal";

const depoimentos = [
  {
    nome: "Carlos M.",
    local: "Palhoça, SC",
    rating: 5,
    texto:
      "Troquei o carro pela scooter EcoBike e nunca mais olhei pra trás. Economizo tempo e dinheiro todos os dias.",
  },
  {
    nome: "Ana P.",
    local: "Florianópolis, SC",
    rating: 5,
    texto:
      "Atendimento impecável na loja. Fiz um test ride e já saí de scooter nova. Recomendo demais!",
  },
  {
    nome: "Ricardo F.",
    local: "São José, SC",
    rating: 5,
    texto:
      "A X12 é incrível no dia a dia! Já rodei bastante e zero problemas. Potência e versatilidade total.",
  },
  {
    nome: "Juliana S.",
    local: "Palhoça, SC",
    rating: 5,
    texto:
      "Adorei a facilidade — sem habilitação, financiamento rápido e a assistência técnica é aqui mesmo.",
  },
  {
    nome: "Pedro L.",
    local: "Biguaçu, SC",
    rating: 5,
    texto:
      "Bateria dura o dia inteiro para o meu trajeto. Faz 2 meses e zero problemas. Garante mesmo!",
  },
  {
    nome: "Mariana C.",
    local: "Florianópolis, SC",
    rating: 5,
    texto:
      "Parcelei em 24× sem burocracia. Time da EcoBike é super atencioso e transparente.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 14 14" fill="#F9E924" aria-hidden="true">
          <path d="M7 1l1.545 4.146H13L9.637 7.854l1.545 4.146L7 9.5 2.818 12l1.545-4.146L1 5.146h4.455z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-20 px-8 md:px-14 lg:px-20"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-6xl mx-auto">

        <Reveal className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold text-white/40 tracking-[3px] uppercase mb-4 font-body">
                Depoimentos
              </p>
              <h2 className="text-[clamp(26px,3.5vw,46px)] font-extrabold text-white tracking-[-0.04em] leading-[1.1] font-heading max-w-md">
                Clientes que amam suas scooters<span style={{ color: "#F9E924" }}>.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Stars count={5} />
              <span className="text-[13px] text-white/50 font-body">4.9 · mais de 200 avaliações</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {depoimentos.map((d, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border-t border-white/[0.08] pt-6 pb-10 flex flex-col gap-4">
                <Stars count={d.rating} />
                <p className="text-[14px] text-white/65 leading-[1.8] flex-1 font-body">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-[#F9E924]/15 flex items-center justify-center text-[#F9E924] font-bold text-sm font-body shrink-0">
                    {d.nome[0]}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white font-body">{d.nome}</div>
                    <div className="text-[11px] text-white/45 font-body">{d.local}</div>
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
