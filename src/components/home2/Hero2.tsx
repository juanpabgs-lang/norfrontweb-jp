import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const facts = [
  { value: "09", label: "Vertical brands" },
  { value: "02", label: "Live in production" },
  { value: "01", label: "In development" },
  { value: "4 wks", label: "Discovery to production" },
];

// Editorial, left-aligned hero. No WebGL — one faint focal glow and a
// baseline of verifiable numbers. The page opens like an operating report.
export function Hero2() {
  return (
    <section className="relative bg-black">
      {/* Single quiet light source — atmosphere without decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 30% 0%, rgba(126, 200, 227, 0.07), transparent 65%)",
        }}
      />

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
        <div className="min-h-[88vh] flex flex-col justify-end pb-16 sm:pb-20 pt-40">
          <p className="font-['JetBrains_Mono'] text-[11px] sm:text-xs uppercase tracking-[0.24em] text-white/40 mb-8 animate-fade-in-delay-1">
            Norfront Group — AI Venture Holdings
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-medium tracking-[-0.025em] leading-[1.06] text-white max-w-4xl mb-8 animate-fade-in-delay-1">
            We build AI companies that run{" "}
            <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">
              enterprise operations.
            </em>
          </h1>

          <p className="text-base sm:text-lg text-white/50 leading-[1.65] max-w-xl mb-12 animate-fade-in-delay-2">
            A holding company with nine brands. Each one targets a specific
            enterprise workflow — customer ops, finance, legal, logistics — and
            deploys a production system in four weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-white text-black hover:bg-[#e8f4f9] transition-colors"
            >
              Talk to Us
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/20 hover:border-white/50 transition-colors"
            >
              See the Proof
            </Link>
          </div>

          {/* Fact strip — the report's opening balance */}
          <div className="mt-20 sm:mt-24 border-t border-white/10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 animate-fade-in-delay-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <div className="font-['JetBrains_Mono'] text-xl sm:text-2xl text-white tracking-tight">
                  {fact.value}
                </div>
                <div className="mt-1.5 text-xs text-white/40 leading-snug">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
