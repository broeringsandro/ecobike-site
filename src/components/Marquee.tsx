const items = [
  "Assistência técnica própria",
  "Sem habilitação necessária",
  "Financiamento em 24×",
  "Atendimento presencial",
  "1 ano de garantia",
  "Entrega em casa",
  "Test ride gratuito",
  "Peças originais",
];

function Dot() {
  return <span className="mx-5 text-[#111]/20 text-xs" aria-hidden="true">·</span>;
}

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3.5 border-t border-b border-[#111]/[0.07]"
      style={{ backgroundColor: "#efefed" }}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className="text-[12px] font-semibold text-[#111]/45 uppercase tracking-[0.8px] font-body">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
