import { Star, Quote } from "lucide-react";

const depoimentos = [
  { nome: "Carlos M.", local: "Palhoça, SC", texto: "Troquei o carro pela scooter EcoBike e nunca mais olhei pra trás. Economizo tempo e dinheiro todos os dias." },
  { nome: "Ana P.", local: "Florianópolis, SC", texto: "Atendimento impecável na loja. Fiz um test ride e já saí de scooter nova. Recomendo demais!" },
  { nome: "Ricardo F.", local: "São José, SC", texto: "A X12 é incrível no dia a dia! Já rodei bastante e zero problemas. Potência e versatilidade total." },
  { nome: "Juliana S.", local: "Palhoça, SC", texto: "Adorei a facilidade: sem habilitação, financiamento rápido e a assistência técnica é aqui mesmo." },
  { nome: "Pedro L.", local: "Biguaçu, SC", texto: "Bateria dura o dia inteiro para o meu trajeto. Faz 2 meses e zero problemas. Garante mesmo!" },
  { nome: "Mariana C.", local: "Florianópolis, SC", texto: "Parcelei em 24× sem burocracia. Time da EcoBike é super atencioso e transparente." },
];

type D = (typeof depoimentos)[number];

function Card({ d }: { d: D }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col justify-between gap-8 rounded-[24px] border border-white/[0.07] bg-surface p-7 transition-colors duration-500 hover:border-yellow/30 md:w-[400px]">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-0.5 text-yellow">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <Quote size={24} className="text-bone/15" />
        </div>
        <blockquote className="font-body text-[16px] leading-relaxed text-bone/80">&ldquo;{d.texto}&rdquo;</blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow font-heading text-[16px] font-extrabold text-ink">
          {d.nome[0]}
        </span>
        <span>
          <span className="block font-heading text-[15px] font-bold text-bone">{d.nome}</span>
          <span className="block font-body text-[12px] text-bone/40">{d.local}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse = false, dur }: { items: D[]; reverse?: boolean; dur: string }) {
  return (
    <div className="marquee-wrap flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max gap-4 pr-4" data-reverse={reverse} style={{ ["--dur" as string]: dur }}>
        {[...items, ...items].map((d, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            <Card d={d} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-ink py-24 md:py-40">
      <div className="mx-auto mb-14 flex max-w-[1440px] flex-col justify-between gap-8 px-5 md:mb-20 md:flex-row md:items-end md:px-10">
        <div>
          <p data-reveal="fade" className="mb-8 flex items-center gap-3 font-body text-[12px] font-semibold uppercase tracking-[0.25em] text-bone/40">
            <span className="text-yellow">(06)</span> Depoimentos
          </p>
          <h2
            data-split
            className="max-w-[820px] font-heading font-extrabold leading-[0.92] tracking-[-0.05em] text-bone"
            style={{ fontSize: "clamp(44px, 5.4vw, 88px)" }}
          >
            Quem anda de EcoBike, recomenda.
          </h2>
        </div>
        <div data-reveal="up" className="flex items-center gap-4">
          <span className="font-heading text-[64px] font-extrabold leading-none tracking-[-0.05em] text-yellow">200+</span>
          <span className="font-body text-[14px] leading-snug text-bone/50">
            Clientes
            <br />
            satisfeitos em SC
          </span>
        </div>
      </div>

      <div data-reveal="fade" className="flex flex-col gap-4">
        <Row items={depoimentos.slice(0, 3).concat(depoimentos.slice(0, 3))} dur="60s" />
        <Row items={depoimentos.slice(3).concat(depoimentos.slice(3))} dur="70s" reverse />
      </div>
    </section>
  );
}
