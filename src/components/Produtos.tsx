import Image from "next/image";
import Reveal from "./Reveal";

const WA_BASE =
  "https://wa.me/5548984558493?text=Ol%C3%A1!%20Tenho%20interesse%20na%20";

const produtos = [
  {
    nome: "Scooter X12",
    img: "/produtos/x12.png",
    tag: "Top de Linha",
    specs: ["Motor 1000W", "60 km autonomia", "Freios a disco", "Bateria removível"],
    parcela24: "24× de R$ 458",
    avista: "R$ 8.990",
  },
  {
    nome: "Scooter XB3",
    img: "/produtos/xb3.png",
    tag: "Melhor Custo",
    specs: ["Motor 600W", "40 km autonomia", "Até 140 kg"],
    parcela24: "24× de R$ 229",
    avista: "R$ 4.490",
  },
  {
    nome: "Bike Elétrica Free Life",
    img: "/produtos/free-life.png",
    tag: "Inovação",
    specs: ["Motor 800W", "30 km autonomia", "Pedal assistido", "Partida NFC"],
    parcela24: "24× de R$ 300",
    avista: "R$ 5.890",
  },
  {
    nome: "Scooter Eagle",
    img: "/produtos/eagle.png",
    tag: "Performance",
    specs: ["Motor 1000W", "50 km autonomia", "Bateria 60V 20Ah"],
    parcela24: "24× de R$ 356",
    avista: "R$ 6.990",
  },
];

type Produto = (typeof produtos)[number];

function ProdutoCard({ p, large = false, cover = false }: { p: Produto; large?: boolean; cover?: boolean }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-500">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: large ? "16/9" : "4/3", backgroundColor: "#f5f5f3" }}
      >
        <Image
          src={p.img}
          alt={p.nome}
          fill
          className={`group-hover:scale-[1.04] transition-transform duration-700 ${cover ? "object-cover" : "object-contain p-6"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 40vw"
          style={cover ? undefined : { mixBlendMode: "multiply" }}
        />
        <span className="absolute top-3.5 left-3.5 bg-[#111] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.6px] font-body">
          {p.tag}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3
          className={`font-bold text-[#111] tracking-[-0.03em] font-heading mb-3 ${
            large ? "text-[20px]" : "text-[17px]"
          }`}
        >
          {p.nome}
        </h3>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-auto">
          {p.specs.map((s) => (
            <span key={s} className="text-[12px] text-[#999] font-body">
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between gap-3 mt-5 pt-5 border-t border-[#f0f0ee]">
          <div>
            <div className="text-[22px] font-extrabold text-[#111] tracking-[-0.04em] leading-none font-heading">
              {p.avista}
            </div>
            <div className="text-[11px] text-[#bbb] mt-1.5 font-body">{p.parcela24}</div>
          </div>
          <a
            href={`${WA_BASE}${encodeURIComponent(p.nome)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#F9E924] text-[#111] font-semibold text-[12px] px-5 py-2.5 rounded-xl hover:brightness-110 transition-all font-body"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Produtos() {
  return (
    <section id="produtos" className="py-24 px-8 md:px-14 lg:px-20" style={{ backgroundColor: "#efefed" }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-semibold text-[#111]/40 tracking-[3.5px] uppercase mb-4 font-body">
              Catálogo 2026
            </p>
            <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold text-[#111] tracking-[-0.04em] leading-[1.08] font-heading">
              Encontre seu modelo<span style={{ color: "#F9E924" }}>.</span>
            </h2>
          </div>
          <p className="text-[14px] text-[#111]/45 font-body max-w-xs leading-[1.7]">
            4 modelos com garantia de 1 ano e assistência técnica própria.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {produtos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 60} className="h-full">
              <ProdutoCard p={p} cover />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
