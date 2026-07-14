import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, AlertTriangle, Truck } from "lucide-react";

/* ─── Tradara accent colour ─── */
const ACCENT = "#D97706";
const ACCENT_DIM = "rgba(217, 119, 6, 0.10)";

/* ─── Ambient aurora background (reused) ─── */
function AmbientAurora({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      t += 0.004;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(5, 5, 10, 1)";
      ctx.fillRect(0, 0, w, h);

      const glow = (
        cx: number,
        cy: number,
        r: number,
        col: string,
        alpha: number
      ) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(
          0,
          col.replace(")", `, ${alpha})`).replace("rgb", "rgba")
        );
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      };

      const cx1 = w * (0.3 + Math.sin(t * 0.3) * 0.15);
      const cy1 = h * (0.4 + Math.cos(t * 0.25) * 0.12);
      glow(cx1, cy1, w * 0.7, "rgb(40, 42, 60)", 0.18);

      const cx2 = w * (0.7 + Math.cos(t * 0.25) * 0.12);
      const cy2 = h * (0.6 + Math.sin(t * 0.3) * 0.1);
      glow(cx2, cy2, w * 0.6, "rgb(30, 35, 55)", 0.14);

      const cx3 = w * 0.5;
      const cy3 = h * (0.35 + Math.sin(t * 0.2) * 0.08);
      glow(cx3, cy3, w * 0.5, "rgb(50, 48, 65)", 0.1);

      const drawBand = (
        by: number,
        amp: number,
        col: string,
        alpha: number
      ) => {
        ctx.beginPath();
        for (let x = -10; x <= w + 10; x += 2) {
          const nx = x / w;
          let y = by;
          for (let wv = 0; wv < 3; wv++) {
            y +=
              Math.sin(
                nx * (1.5 + wv * 0.7) * Math.PI * 2 +
                  t * (0.5 + wv * 0.12)
              ) *
              amp *
              (1 - wv * 0.2);
          }
          if (x === -10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const grad = ctx.createLinearGradient(
          0,
          by - amp * 2,
          0,
          by + amp * 2
        );
        grad.addColorStop(0, "transparent");
        grad.addColorStop(
          0.5,
          col.replace(")", `, ${alpha})`).replace("rgb", "rgba")
        );
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 40;
        ctx.lineCap = "round";
        ctx.stroke();
      };

      drawBand(h * 0.4, 30, "rgb(45, 48, 65)", 0.12);
      drawBand(h * 0.55, 25, "rgb(35, 40, 60)", 0.09);
      drawBand(h * 0.65, 20, "rgb(55, 52, 70)", 0.07);

      const orbX = w * (0.2 + Math.sin(t * 0.15) * 0.08);
      const orbY = h * (0.6 + Math.cos(t * 0.2) * 0.1);
      glow(orbX, orbY, w * 0.3, "rgb(60, 58, 80)", 0.08);

      const orb2X = w * (0.8 + Math.cos(t * 0.18) * 0.06);
      const orb2Y = h * (0.3 + Math.sin(t * 0.22) * 0.08);
      glow(orb2X, orb2Y, w * 0.25, "rgb(40, 45, 65)", 0.07);

      const vig = ctx.createRadialGradient(
        w * 0.5,
        h * 0.5,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.75
      );
      vig.addColorStop(0, "transparent");
      vig.addColorStop(1, "rgba(0, 0, 0, 0.55)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}

/* ─── All 9 portfolio brands (Tradara included) ─── */
/* ─── Status chip + dot styling shared by deck and selector ─── */
function statusChipClass(status: string) {
  if (status.includes("Live"))
    return "text-[#7ec8e3] border-[#7ec8e3]/25 bg-[#7ec8e3]/[0.07]";
  if (status === "In Development")
    return "text-[#D97706] border-[#D97706]/30 bg-[#D97706]/[0.08]";
  return "text-white/40 border-white/10 bg-white/[0.03]";
}

function statusDotClass(status: string) {
  if (status.includes("Live")) return "bg-[#7ec8e3] animate-pulse";
  if (status === "In Development") return "bg-[#D97706]";
  return "bg-white/25";
}

const companies = [
  {
    name: "Pulsara",
    vertical: "Customer Operations",
    status: "EN Live",
    description:
      "Complaint intelligence, ticket triage, and automated routing. Deployed for Vision Group (600+ stores). 94.2% classification accuracy, 87% less manual triage.",
  },
  {
    name: "Audera",
    vertical: "Finance & Accounting",
    status: "Designed",
    description:
      "AP/AR automation, payment processing, and reconciliation. ACH payment automation proven with Carriage Services ($21K/year labor savings, 50 hrs/month recovered).",
  },
  {
    name: "Propera",
    vertical: "Professional Services",
    status: "EN + DE Live",
    description:
      "Workflow automation for consulting, legal, and accounting firms. Contractor tracking, timesheet management, and proposal generation. Live in English and German.",
  },
  {
    name: "Covera",
    vertical: "Insurance",
    status: "Designed",
    description:
      "Claims triage, fraud detection, and underwriting automation. Policy management and compliance workflows.",
  },
  {
    name: "Legara",
    vertical: "Legal",
    status: "Designed",
    description:
      "Contract analysis, clause extraction, and document review. Regulatory monitoring and KYC/AML compliance automation.",
  },
  {
    name: "Tradara",
    vertical: "Logistics & Supply Chain",
    status: "In Development",
    description:
      "Demand sensing, inventory optimization, supplier performance monitoring, and shipment exception management. Built for teams managing 50+ suppliers and multi-warehouse operations.",
  },
  {
    name: "Onvara",
    vertical: "HR / People Operations",
    status: "Designed",
    description:
      "Hiring automation, employee lifecycle management, and workforce planning.",
  },
  {
    name: "Medivex",
    vertical: "Healthcare",
    status: "Designed",
    description:
      "Clinical workflow automation, patient intake, medical coding, and billing dispute resolution.",
  },
  {
    name: "Leasara",
    vertical: "Real Estate",
    status: "Designed",
    description:
      "Property management automation, lease analysis, and tenant operations.",
  },
];

/* ─── Tradara exception data for ticker ─── */
const exceptions = [
  { id: "SHP-29847", type: "Customs Hold", dest: "Frankfurt", status: "At Risk", eta: "+48h" },
  { id: "SHP-44102", type: "Driver No-Show", dest: "Rotterdam", status: "Breached", eta: "+72h" },
  { id: "SHP-51830", type: "Port Congestion", dest: "Hamburg", status: "At Risk", eta: "+24h" },
  { id: "SHP-38219", type: "Carrier Delay", dest: "Milan", status: "Within Window", eta: "+12h" },
  { id: "SHP-62044", type: "Documentation", dest: "Antwerp", status: "At Risk", eta: "+36h" },
  { id: "SHP-17593", type: "Weather Hold", dest: "Le Havre", status: "Breached", eta: "+96h" },
];

function ExceptionTicker() {
  const statusColor = (s: string) => {
    if (s === "Breached") return "text-red-400 bg-red-500/10 border-red-500/20";
    if (s === "At Risk") return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  };

  const doubled = [...exceptions, ...exceptions];

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.06]">
        <AlertTriangle size={12} style={{ color: ACCENT }} />
        <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: ACCENT }}>
          Live Exception Feed
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[10px] text-white/30">{exceptions.length} active</span>
        </span>
      </div>
      <div className="h-[180px] overflow-hidden">
        <div
          className="flex flex-col"
          style={{ animation: "ticker-scroll 24s linear infinite" }}
        >
          {doubled.map((ex, i) => (
            <div
              key={`${ex.id}-${i}`}
              className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04] shrink-0"
            >
              <span className="font-mono text-[11px] text-white/60 w-[85px]">{ex.id}</span>
              <span className="text-[11px] text-white/40 w-[100px] truncate">{ex.type}</span>
              <span className="text-[11px] text-white/30 w-[70px] truncate">{ex.dest}</span>
              <span className={`text-[10px] font-mono tracking-wide px-2 py-0.5 rounded-full border ${statusColor(ex.status)}`}>
                {ex.status}
              </span>
              <span className="ml-auto font-mono text-[11px] text-white/30">{ex.eta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Interactive brand deck: you pick, the stack answers ─── */
function BrandDeckSection() {
  const [selected, setSelected] = useState(0);
  const [userDrove, setUserDrove] = useState(false);
  const N = companies.length;

  // Gentle autoplay until the user takes the wheel
  useEffect(() => {
    if (userDrove) return;
    const id = window.setInterval(() => setSelected((s) => (s + 1) % N), 5500);
    return () => window.clearInterval(id);
  }, [userDrove, N]);

  const pick = (i: number) => {
    setUserDrove(true);
    setSelected(i);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-20">
      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        {/* Light seam */}
        <div className="relative mb-5 h-px w-full bg-gradient-to-r from-[#7ec8e3]/50 via-white/10 to-transparent">
          <span className="absolute -top-[1.5px] left-0 h-1 w-1 rounded-full bg-[#7ec8e3] shadow-[0_0_12px_2px_rgba(126,200,227,0.5)]" />
        </div>
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-['JetBrains_Mono'] text-xs tracking-[0.2em] text-[#7ec8e3]">03</span>
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-white/40">
            The Portfolio
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left — copy + selector */}
          <div className="lg:col-span-5">
            <h1 className="mb-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Nine brands.{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                Pick one.
              </em>
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              Each brand owns a single enterprise workflow. Shared engineering
              underneath means every launch ships faster than the one before.
              Select a company to bring it forward.
            </p>

            {/* Brand selector */}
            <div className="border-t border-white/10">
              {companies.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => pick(i)}
                  className={`group relative grid w-full grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-white/[0.07] px-2 py-2.5 text-left transition-all duration-300 ${
                    i === selected ? "bg-white/[0.05] pl-3.5" : "hover:bg-white/[0.025]"
                  } before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:transition-colors before:duration-300 ${
                    i === selected ? "before:bg-[#7ec8e3]" : "before:bg-transparent"
                  }`}
                >
                  <span className="font-['JetBrains_Mono'] text-[10px] text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-medium transition-colors ${i === selected ? "text-white" : "text-white/55 group-hover:text-white/80"}`}>
                    {c.name}
                    <span className="ml-2 hidden text-xs font-normal text-white/30 sm:inline">{c.vertical}</span>
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${statusDotClass(c.status)}`} />
                </button>
              ))}
            </div>

            <p className="mt-5 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-white/25">
              {userDrove ? "Manual control" : "Auto-cycling — click any brand to take over"}
            </p>
          </div>

          {/* Right — the deck */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto h-[480px] max-w-[560px] sm:h-[520px] lg:mt-6">
              {companies.map((c, i) => {
                const d = (i - selected + N) % N; // depth behind the front card
                const isFront = d === 0;
                return (
                  <div
                    key={c.name}
                    onClick={() => !isFront && pick(i)}
                    onKeyDown={(e) => { if (!isFront && (e.key === "Enter" || e.key === " ")) pick(i); }}
                    role={isFront ? undefined : "button"}
                    tabIndex={isFront ? undefined : 0}
                    aria-label={isFront ? undefined : `Bring ${c.name} forward`}
                    className={`absolute bottom-0 left-0 w-full rounded-xl border text-left backdrop-blur-sm transition-all duration-500 [transition-timing-function:cubic-bezier(0.3,0.7,0,1)] ${
                      isFront
                        ? "cursor-default border-[#7ec8e3]/30 bg-gradient-to-b from-[#121216] to-[#0a0a0c] shadow-[0_32px_90px_-20px_rgba(126,200,227,0.25)]"
                        : "cursor-pointer border-white/10 bg-gradient-to-b from-[#101014] to-[#0a0a0c] hover:border-white/25"
                    }`}
                    style={{
                      transform: `translate(${d * 24}px, ${-d * 30}px) scale(${1 - d * 0.035})`,
                      zIndex: 40 - d,
                      opacity: d > 6 ? 0 : 1 - d * 0.11,
                      pointerEvents: d > 6 ? "none" : "auto",
                    }}
                  >
                    <div className="flex h-full flex-col justify-between gap-4 p-7 sm:p-8">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-semibold text-white">{c.name}</h3>
                          <span className={`border px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.12em] ${statusChipClass(c.status)}`}>
                            {c.status}
                          </span>
                        </div>
                        <span className="mb-3 block font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] text-white/40">
                          {c.vertical}
                        </span>
                        <p className={`text-sm leading-relaxed text-white/65 transition-opacity duration-500 sm:text-base ${isFront ? "opacity-100" : "opacity-0"}`}>
                          {c.description}
                        </p>
                      </div>
                      <div className={`flex items-center justify-between border-t border-white/10 pt-4 transition-opacity duration-500 ${isFront ? "opacity-100" : "opacity-0"}`}>
                        <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white/40">
                          Norfront Group
                        </span>
                        <Link
                          to="/contact"
                          className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#7ec8e3]/80 transition-colors hover:text-[#7ec8e3]"
                        >
                          Talk about {c.name}
                          <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Figure caption */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                Fig. 03
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                The nine-brand deck — 2 live · 1 in development · 6 designed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Partners() {
  return (
    <Layout>
      {/* ════════════════════════════════════════════════════════
          UPDATE — Tradara Logistics (compact highlight)
         ════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <AmbientAurora />

        <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px" style={{ background: ACCENT }} />
            <span
              className="text-[11px] font-mono font-semibold tracking-[0.18em] uppercase"
              style={{ color: ACCENT }}
            >
              Latest Update
            </span>
          </div>

          {/* Compact Tradara highlight card */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — copy */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Truck size={18} style={{ color: ACCENT }} />
                  <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: ACCENT }}>
                    Tradara — Logistics &amp; Supply Chain
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-foreground">
                  Your supply chain outgrew its spreadsheets.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Tradara automates demand sensing, inventory optimization, supplier performance tracking, and shipment exception management. One workflow live in 4 weeks. Works inside SAP, Oracle, and NetSuite.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded-md transition-colors w-fit"
                  style={{ background: ACCENT }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#C06A05")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = ACCENT)
                  }
                >
                  Learn more about Tradara
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right — exception ticker */}
              <div className="p-8 lg:p-10 flex items-center">
                <div className="w-full">
                  <ExceptionTicker />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PORTFOLIO — All 9 Subsidiaries (interactive deck)
         ════════════════════════════════════════════════════════ */}
      <BrandDeckSection />

      {/* Keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-14px) rotate(1deg); }
          66% { transform: translateY(-7px) rotate(-0.5deg); }
        }
        @keyframes ticker-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </Layout>
  );
}
