import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { OpsConsole } from "./OpsConsole";

const facts = [
  { value: "09", label: "Vertical brands" },
  { value: "02", label: "Live in production" },
  { value: "01", label: "In development" },
  { value: "4 wks", label: "Discovery to production" },
];

// Editorial split hero: the claim on the left, the product running on the
// right. Depth from layered light + grain, not WebGL.
export function Hero2() {
  return (
    <section className="relative overflow-hidden bg-black noise-overlay">
      {/* Layered atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 22% 8%, rgba(126, 200, 227, 0.10), transparent 60%), radial-gradient(ellipse 45% 38% at 85% 68%, rgba(82, 39, 255, 0.07), transparent 65%)",
        }}
      />
      {/* Fine baseline grid, fading out */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 20%, black 30%, transparent 75%)",
        }}
      />

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-14 lg:gap-10 pt-36 sm:pt-44 pb-14">
          {/* Claim */}
          <div className="lg:col-span-7">
            <p className="mb-7 flex items-center gap-3 animate-fade-in-delay-1">
              <span className="h-px w-8 bg-[#7ec8e3]/60" />
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.24em] text-white/45">
                AI Venture Holdings
              </span>
            </p>

            <h1 className="mb-7 max-w-2xl text-[2.6rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-medium tracking-[-0.028em] leading-[1.04] animate-fade-in-delay-1">
              <span className="headline-sheen">We build AI companies that run</span>{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">
                enterprise operations.
              </em>
            </h1>

            <p className="mb-10 max-w-lg text-base sm:text-lg text-white/50 leading-[1.65] animate-fade-in-delay-2">
              Nine brands under one holding company. Each owns a single
              enterprise workflow — and ships a production system in four
              weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_32px_-6px_rgba(126,200,227,0.55)]"
              >
                Talk to Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center border border-white/15 px-8 py-3.5 text-sm font-medium text-white/90 transition-all duration-300 hover:border-[#7ec8e3]/40 hover:text-white hover:bg-white/[0.03]"
              >
                See the Proof
              </Link>
            </div>
          </div>

          {/* The product, live */}
          <div className="lg:col-span-5 animate-fade-in-delay-3">
            <OpsConsole />
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-[#7ec8e3]/70">
                Fig. 01
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] text-white/30">
                Live production telemetry — Pulsara, Vision Group
              </span>
            </div>
          </div>
        </div>

        {/* Operating balance */}
        <div className="relative border-t border-white/10 pt-7 animate-fade-in-delay-3">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 items-start">
            {facts.map((fact) => (
              <div key={fact.label}>
                <div className="font-['JetBrains_Mono'] text-xl sm:text-2xl tracking-tight text-white">
                  {fact.value}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-white/40">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack strip: models we orchestrate, systems we integrate */}
        <div className="relative flex flex-col gap-4 border-t border-white/[0.07] py-6 mt-10 pb-12 sm:flex-row sm:items-center sm:gap-10 animate-fade-in-delay-3">
          <div className="flex items-baseline gap-4">
            <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.2em] text-white/25 shrink-0">
              Models
            </span>
            <span className="text-[13px] font-medium tracking-wide text-white/40">
              Claude&ensp;·&ensp;Gemini&ensp;·&ensp;GPT
            </span>
          </div>
          <span className="hidden sm:block h-4 w-px bg-white/10" />
          <div className="flex items-baseline gap-4">
            <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.2em] text-white/25 shrink-0">
              Systems
            </span>
            <span className="text-[13px] font-medium tracking-wide text-white/40">
              Oracle&ensp;·&ensp;Salesforce&ensp;·&ensp;ServiceNow&ensp;·&ensp;SAP&ensp;·&ensp;Slack
            </span>
          </div>
          <span className="sm:ml-auto font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.16em] text-white/20">
            Model-agnostic by design
          </span>
        </div>
      </div>
    </section>
  );
}
