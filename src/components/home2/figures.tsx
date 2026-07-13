// Isometric line-art figures, drawn like engineering schematics.
// Stroke-only, one accent edge each — the drafting-document signature.

const stroke = "rgba(255,255,255,0.16)";
const accent = "#7ec8e3";

export function FigVertical() {
  // Stacked slabs: one brand, one vertical, layered ownership
  return (
    <svg viewBox="0 0 220 170" fill="none" className="w-full h-auto" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => {
        const y = 118 - i * 26;
        const isTop = i === 3;
        return (
          <g key={i}>
            <path
              d={`M110 ${y - 26} L178 ${y - 6} L110 ${y + 14} L42 ${y - 6} Z`}
              stroke={isTop ? accent : stroke}
              strokeWidth="1"
            />
            {i === 0 && (
              <>
                <path d={`M42 ${y - 6} L42 ${y + 10} L110 ${y + 30} L110 ${y + 14}`} stroke={stroke} strokeWidth="1" />
                <path d={`M178 ${y - 6} L178 ${y + 10} L110 ${y + 30}`} stroke={stroke} strokeWidth="1" />
              </>
            )}
          </g>
        );
      })}
      <circle cx="110" cy="66" r="2.5" fill={accent} />
      <path d="M110 66 L110 30 L146 30" stroke={accent} strokeWidth="0.75" strokeDasharray="2 3" />
    </svg>
  );
}

export function FigCore() {
  // Central core cube feeding satellite brands
  return (
    <svg viewBox="0 0 220 170" fill="none" className="w-full h-auto" aria-hidden="true">
      {/* Core */}
      <path d="M110 52 L142 62 L110 72 L78 62 Z" stroke={accent} strokeWidth="1" />
      <path d="M78 62 L78 92 L110 102 L110 72" stroke={stroke} strokeWidth="1" />
      <path d="M142 62 L142 92 L110 102" stroke={stroke} strokeWidth="1" />
      {/* Satellites */}
      {[
        { x: 30, y: 34 }, { x: 178, y: 30 }, { x: 26, y: 122 }, { x: 182, y: 126 },
      ].map((p, i) => (
        <g key={i}>
          <path
            d={`M${p.x} ${p.y - 8} L${p.x + 16} ${p.y - 3} L${p.x} ${p.y + 2} L${p.x - 16} ${p.y - 3} Z`}
            stroke={stroke}
            strokeWidth="1"
          />
          <path d={`M${p.x - 16} ${p.y - 3} L${p.x - 16} ${p.y + 7} L${p.x} ${p.y + 12} L${p.x} ${p.y + 2}`} stroke={stroke} strokeWidth="1" />
          <path d={`M${p.x + 16} ${p.y - 3} L${p.x + 16} ${p.y + 7} L${p.x} ${p.y + 12}`} stroke={stroke} strokeWidth="1" />
          <line x1={p.x} y1={p.y + 6} x2="110" y2="80" stroke={stroke} strokeWidth="0.75" strokeDasharray="2 3" />
        </g>
      ))}
      <circle cx="110" cy="80" r="2.5" fill={accent} />
    </svg>
  );
}

export function FigPlaybook() {
  // Ascending steps: the four-week ramp, repeated per brand
  return (
    <svg viewBox="0 0 220 170" fill="none" className="w-full h-auto" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => {
        const x = 36 + i * 40;
        const h = 26 + i * 22;
        const y = 138 - h;
        const isLast = i === 3;
        return (
          <g key={i}>
            <path d={`M${x} ${y} L${x + 26} ${y - 8} L${x + 26} ${138 - 8} L${x} 138 Z`} stroke={isLast ? accent : stroke} strokeWidth="1" />
            <path d={`M${x} ${y} L${x - 10} ${y - 3} L${x - 10} ${138 - 3} L${x} 138`} stroke={stroke} strokeWidth="1" />
            <path d={`M${x - 10} ${y - 3} L${x + 16} ${y - 11} L${x + 26} ${y - 8}`} stroke={stroke} strokeWidth="1" />
          </g>
        );
      })}
      <path d="M30 128 L196 44" stroke={accent} strokeWidth="0.75" strokeDasharray="2 3" />
      <circle cx="196" cy="44" r="2.5" fill={accent} />
    </svg>
  );
}
