import { useEffect, useRef } from "react";
import { Inbox, ListFilter, AlertTriangle, BarChart3, Settings2, Plug, Search } from "lucide-react";
import heroBgTall from "@/assets/hero-bg-tall.png";

type Row = {
  id: string;
  text: string;
  cat: string;
  catColor: string;
  conf: string;
  route: string;
  status: "Routed" | "Processing" | "Escalated";
};

const rows: Row[] = [
  { id: "CMP-4821", text: "Lens coating peeling after 3 weeks — store #214", cat: "Product Quality", catColor: "#7ec8e3", conf: "97.1%", route: "Quality Ops", status: "Routed" },
  { id: "CMP-4820", text: "Progressive lens prescription mismatch", cat: "Clinical", catColor: "#a78bfa", conf: "98.0%", route: "Clinical Review", status: "Routed" },
  { id: "CMP-4819", text: "Refund unresolved for 7 days, customer recontact", cat: "Escalation", catColor: "#f87171", conf: "94.6%", route: "Store Manager", status: "Escalated" },
  { id: "CMP-4818", text: "Delivery window missed on reorder IT-88412", cat: "Fulfillment", catColor: "#fbbf24", conf: "95.8%", route: "Logistics", status: "Routed" },
  { id: "CMP-4817", text: "Frame adjustment complaint, second visit", cat: "Service", catColor: "#34d399", conf: "91.9%", route: "Store Ops", status: "Processing" },
  { id: "CMP-4816", text: "Billing mismatch between invoice and receipt", cat: "Billing", catColor: "#fb923c", conf: "96.2%", route: "Finance", status: "Routed" },
];

const nav = [
  { icon: Inbox, label: "Inbox", count: "128" },
  { icon: ListFilter, label: "Queue", count: "41", active: true },
  { icon: AlertTriangle, label: "Escalations", count: "7" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings2, label: "Rules" },
  { icon: Plug, label: "Integrations" },
];

const statusStyle: Record<Row["status"], string> = {
  Routed: "text-[#7ec8e3] border-[#7ec8e3]/25 bg-[#7ec8e3]/[0.06]",
  Processing: "text-[#fbbf24] border-[#fbbf24]/25 bg-[#fbbf24]/[0.06]",
  Escalated: "text-[#f87171] border-[#f87171]/25 bg-[#f87171]/[0.06]",
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// 02 — The Mercury transition, Norfront edition: scroll pushes the camera
// through the doorway of light; the operations console rises to meet you.
export function ProductShowcase() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // No pin theatrics: show the console plainly.
      if (captionRef.current) captionRef.current.style.opacity = "1";
      if (consoleRef.current) {
        consoleRef.current.style.opacity = "1";
        consoleRef.current.style.transform = "none";
      }
      if (dimRef.current) dimRef.current.style.opacity = "0.85";
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = clamp(-rect.top / total, 0, 1);

      // Camera pushes into the doorway
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${1.08 + p * 0.55})`;
        bgRef.current.style.opacity = String(clamp(1 - (p - 0.55) / 0.35, 0.12, 1));
      }
      // Darkness rises as we pass through
      if (dimRef.current) {
        dimRef.current.style.opacity = String(0.25 + p * 0.75);
      }
      // Opening caption drifts up and out
      if (captionRef.current) {
        const c = clamp(1 - p / 0.32, 0, 1);
        captionRef.current.style.opacity = String(c);
        captionRef.current.style.transform = `translateY(${-p * 90}px)`;
      }
      // The console arrives on the other side
      if (consoleRef.current) {
        const q = clamp((p - 0.34) / 0.58, 0, 1);
        const e = 1 - Math.pow(1 - q, 3); // easeOutCubic
        consoleRef.current.style.opacity = String(e);
        consoleRef.current.style.transform = `translateY(${(1 - e) * 11}vh) scale(${0.78 + e * 0.22})`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrapRef} className="relative h-[280vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* The doorway, up close */}
        <img
          ref={bgRef}
          src={heroBgTall}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[60%_22%] will-change-transform"
          style={{ transform: "scale(1.08)" }}
        />
        <div ref={dimRef} className="absolute inset-0 bg-black" style={{ opacity: 0.25 }} />

        {/* Opening caption */}
        <div
          ref={captionRef}
          className="absolute inset-x-0 top-[30vh] px-6 text-center will-change-transform"
        >
          <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-[#7ec8e3] mb-6">
            02 — Inside the Product
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.12] text-white">
            This is what the client's team{" "}
            <em className="font-['Playfair_Display'] italic font-normal">opens every morning.</em>
          </h2>
        </div>

        {/* The console, on the other side of the light */}
        <div
          ref={consoleRef}
          className="absolute inset-x-4 sm:inset-x-8 lg:inset-x-16 top-1/2 -translate-y-1/2 will-change-transform"
          style={{ opacity: 0 }}
        >
          <div className="mx-auto max-w-6xl -translate-y-[8vh] sm:-translate-y-[6vh]">
            <div className="border border-white/10 bg-[#09090b] shadow-[0_60px_160px_-32px_rgba(126,200,227,0.22)]">
              {/* Window chrome */}
              <div className="flex items-center gap-4 border-b border-white/[0.07] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                  pulsara.norfront.group / queue
                </span>
                <span className="ml-auto hidden sm:flex items-center gap-2 border border-white/[0.08] px-2.5 py-1">
                  <Search size={10} className="text-white/25" />
                  <span className="font-['JetBrains_Mono'] text-[9px] text-white/25">search complaints…</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[10.5rem_1fr] lg:grid-cols-[10.5rem_1fr_17rem]">
                {/* Sidebar */}
                <aside className="hidden md:block border-r border-white/[0.07] p-3">
                  <div className="flex items-center gap-2 px-2 pb-3 pt-1">
                    <span className="h-2 w-2 rounded-full bg-[#7ec8e3]" />
                    <span className="text-xs font-semibold text-white">Pulsara</span>
                    <span className="ml-auto font-['JetBrains_Mono'] text-[8px] uppercase tracking-[0.14em] text-white/25">
                      Vision Group
                    </span>
                  </div>
                  {nav.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-2 py-1.5 text-xs ${
                        item.active ? "bg-white/[0.05] text-white" : "text-white/40"
                      }`}
                    >
                      <item.icon size={12} className={item.active ? "text-[#7ec8e3]" : ""} />
                      {item.label}
                      {item.count && (
                        <span className="ml-auto font-['JetBrains_Mono'] text-[9px] text-white/30">{item.count}</span>
                      )}
                    </div>
                  ))}
                </aside>

                {/* Queue table */}
                <div className="min-w-0">
                  <div className="hidden sm:grid grid-cols-[5rem_1fr_7.5rem_3.5rem_6rem] gap-3 border-b border-white/[0.07] px-4 py-2">
                    {["ID", "Complaint", "Category", "Conf.", "Status"].map((h) => (
                      <span key={h} className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-white/25">
                        {h}
                      </span>
                    ))}
                  </div>
                  {rows.map((row, i) => (
                    <div
                      key={row.id}
                      className={`grid grid-cols-[1fr_auto] sm:grid-cols-[5rem_1fr_7.5rem_3.5rem_6rem] items-center gap-3 border-b border-white/[0.05] px-4 py-2.5 ${
                        i === 0 ? "relative bg-white/[0.035] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#7ec8e3]" : ""
                      }`}
                    >
                      <span className="hidden sm:block font-['JetBrains_Mono'] text-[10px] text-white/30">{row.id}</span>
                      <span className="truncate text-xs text-white/65">{row.text}</span>
                      <span className="hidden sm:flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: row.catColor }} />
                        <span className="text-[10px] text-white/45">{row.cat}</span>
                      </span>
                      <span className="hidden sm:block font-['JetBrains_Mono'] text-[10px] text-[#7ec8e3]">{row.conf}</span>
                      <span className={`justify-self-start border px-1.5 py-0.5 font-['JetBrains_Mono'] text-[8.5px] uppercase tracking-[0.1em] ${statusStyle[row.status]} ${row.status === "Processing" ? "animate-pulse" : ""}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                  <div className="px-4 py-2.5">
                    <span className="font-['JetBrains_Mono'] text-[9px] text-white/25">
                      41 in queue · avg handle 3.2s · 0 unclassified
                    </span>
                  </div>
                </div>

                {/* Detail panel */}
                <aside className="hidden lg:block border-l border-white/[0.07] p-4">
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-white/40">CMP-4821</span>
                    <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.12em] text-[#7ec8e3]">97.1% conf.</span>
                  </div>
                  <div className="space-y-2 border-b border-white/[0.07] pb-4">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-white/35">Category</span>
                      <span className="text-white/70">Product Quality</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-white/35">Store</span>
                      <span className="text-white/70">#214 · Milano</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-white/35">Product</span>
                      <span className="text-white/70">AR coating, batch B-1123</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-white/35">Routed to</span>
                      <span className="text-[#7ec8e3]">Quality Ops — Milano</span>
                    </div>
                  </div>
                  <div className="mt-4 border border-white/[0.08] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-1.5 pb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7ec8e3] animate-pulse" />
                      <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.14em] text-white/50">
                        Pulsara Agent
                      </span>
                    </div>
                    <p className="text-[10px] leading-relaxed text-white/45">
                      Matched 3 similar cases this week, all batch B-1123. Trend flagged
                      to supplier QA. Suggested response drafted in Italian.
                    </p>
                    <div className="mt-3 flex gap-1.5">
                      <span className="border border-[#7ec8e3]/30 bg-[#7ec8e3]/[0.08] px-2 py-1 font-['JetBrains_Mono'] text-[8.5px] uppercase tracking-[0.1em] text-[#7ec8e3]">
                        Approve route
                      </span>
                      <span className="border border-white/[0.1] px-2 py-1 font-['JetBrains_Mono'] text-[8.5px] uppercase tracking-[0.1em] text-white/40">
                        Escalate
                      </span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {/* Figure caption */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                Fig. 02
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                Pulsara complaint-intelligence console — live across 600+ Vision Group stores
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
