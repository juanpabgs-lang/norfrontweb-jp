const feed = [
  { t: "14:02:11", text: "Lens coating defect — store #214, Milano", cat: "Product Quality", conf: "97.1%" },
  { t: "14:02:09", text: "Delivery window missed, reorder requested", cat: "Fulfillment", conf: "95.8%" },
  { t: "14:01:54", text: "Warranty claim, progressive lenses", cat: "Warranty", conf: "93.4%" },
  { t: "14:01:47", text: "Billing mismatch on invoice IT-88412", cat: "Billing", conf: "96.2%" },
  { t: "14:01:31", text: "Frame adjustment complaint — store #078", cat: "Service", conf: "91.9%" },
  { t: "14:01:22", text: "Prescription transcription error flagged", cat: "Clinical", conf: "98.0%" },
  { t: "14:01:05", text: "Refund escalation, unresolved 7 days", cat: "Escalation", conf: "94.6%" },
  { t: "14:00:58", text: "Duplicate order detected at checkout", cat: "Orders", conf: "96.9%" },
];

// The product, shown not told: a Pulsara classification feed rendered as a
// quiet terminal. Pure CSS animation — no WebGL, no JS timers.
export function OpsConsole() {
  return (
    <div className="relative border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_24px_80px_-24px_rgba(126,200,227,0.18)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-white/40">
          Pulsara · Classification
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7ec8e3] animate-pulse" />
          <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-[#7ec8e3]">
            Live
          </span>
        </span>
      </div>

      {/* Feed — duplicated list cycling upward */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="animate-console-cycle">
          {[...feed, ...feed].map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-white/[0.05] px-5 py-3"
            >
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/25 shrink-0">
                {row.t}
              </span>
              <span className="flex-1 truncate text-xs text-white/60">{row.text}</span>
              <span className="hidden sm:inline-block shrink-0 border border-white/10 bg-white/[0.04] px-2 py-0.5 font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.12em] text-white/50">
                {row.cat}
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#7ec8e3] shrink-0">
                {row.conf}
              </span>
            </div>
          ))}
        </div>
        {/* Fade edges so the loop reads as a living feed */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Status footer */}
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
        <span className="font-['JetBrains_Mono'] text-[10px] text-white/35">
          26 categories · 600+ stores
        </span>
        <span className="font-['JetBrains_Mono'] text-[10px] text-white/60">
          avg accuracy <span className="text-[#7ec8e3]">94.2%</span> · &lt;200ms
        </span>
      </div>
    </div>
  );
}
