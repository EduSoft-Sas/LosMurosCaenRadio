const FRASES = [
  "Pide tu canción",
  "Comparte tu testimonio",
  "Oramos por ti",
  "Escúchanos donde estés",
];

export function Ticker() {
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-linea bg-card2 py-[18px]"
    >
      <div className="lmc-ticker flex w-max text-[22px] font-semibold whitespace-nowrap text-texto3">
        {[...FRASES, ...FRASES].map((frase, i) => (
          <span key={i} className="flex">
            <span className="pr-9">{frase}</span>
            <span className="pr-9 text-azul">●</span>
          </span>
        ))}
      </div>
    </section>
  );
}
