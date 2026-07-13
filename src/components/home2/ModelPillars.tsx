import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "./reveal";

const pillars = [
  {
    title: "One brand per vertical.",
    body: "A named company with local language and a single workflow obsession — not a consultancy stretched across industries. Enterprise buyers meet a specialist, backed by a group.",
  },
  {
    title: "One shared engineering core.",
    body: "Every deployment strengthens the same platform: classification engines, integration patterns, governance. Brand two ships faster than brand one did. Brand nine will ship fastest.",
  },
  {
    title: "One repeatable playbook.",
    body: "Discovery to production in four weeks, fixed scope, client owns the system. No vendor lock-in, no open-ended retainers, no pilot purgatory.",
  },
];

// 03 — Atomic-style model explanation: why the holding structure wins.
export function ModelPillars() {
  const gridRef = useReveal(0.1);

  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          label="The Model"
          title={
            <>
              Why a holding company{" "}
              <em className="font-['Playfair_Display'] italic font-normal text-white/80">
                beats a vendor.
              </em>
            </>
          }
        />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-white/10 pt-6">
              <span className="font-['JetBrains_Mono'] text-xs text-[#7ec8e3] tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg sm:text-xl font-medium text-white tracking-[-0.01em]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-white/45 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/model"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            How Norfront operates
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
