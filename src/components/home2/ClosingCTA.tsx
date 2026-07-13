import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "./reveal";

// The close: one question, one action. Mercury's honesty, Anduril's brevity.
export function ClosingCTA() {
  const ref = useReveal();

  return (
    <section className="relative bg-black py-28 sm:py-40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(126, 200, 227, 0.08), transparent 65%)",
        }}
      />

      <div ref={ref} className="container relative mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <p className="font-['JetBrains_Mono'] text-[11px] sm:text-xs uppercase tracking-[0.24em] text-white/40 mb-8">
          Start Here
        </p>
        <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.12] text-white">
          Tell us which workflow{" "}
          <em className="font-['Playfair_Display'] italic font-normal text-[#7ec8e3]">
            is breaking.
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm sm:text-base text-white/45 leading-relaxed">
          One conversation. We'll tell you if it's a fit, what it costs, and
          what four weeks buys — or we'll tell you it isn't, and save you the
          quarter.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 text-sm font-medium bg-white text-black transition-all duration-300 hover:bg-[#e9f5fa] hover:shadow-[0_0_40px_-8px_rgba(126,200,227,0.6)]"
          >
            Book a Call
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/25">
          Response within 1–2 business days · tomas.madero@norfront.group
        </p>
      </div>
    </section>
  );
}
